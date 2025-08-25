const fs = require('fs');
const path = require('path');

const ensureDir = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

// 打印JSON结构（辅助验证）
const logJsonTopStructure = (jsonData, fileName) => {
    console.log(`\n[JSON结构定位] ${fileName} 顶层信息：`);
    console.log(`- 顶层数据类型：${typeof jsonData}（数组？${Array.isArray(jsonData)}）`);
    if (Array.isArray(jsonData)) {
        console.log(`- 顶层数组长度：${jsonData.length}`);
        if (jsonData.length > 0) {
            console.log(`- 数组第1项类型：${typeof jsonData[0]}`);
            if (typeof jsonData[0] === 'object' && jsonData[0] !== null) {
                console.log(`- 数组第1项包含字段：${Object.keys(jsonData[0]).join(', ')}`);
            }
        }
    }
    console.log('----------------------------------------');
};

// 提取文档：顶层数组（分类）→ 分类.functions（实际文档）
const extractDocs = (jsonData, fileName) => {
    const docs = [];
    if (!Array.isArray(jsonData)) {
        console.warn(`⚠️ ${fileName} 顶层不是数组`);
        return docs;
    }

    jsonData.forEach((category, catIdx) => {
        if (typeof category !== 'object' || category === null || !category.name || !Array.isArray(category.functions)) {
            console.warn(`⚠️ ${fileName} 中分类[${catIdx}] 无效（缺少 name/functions）`);
            return;
        }

        const categoryName = category.name;
        category.functions.forEach((funcDoc, funcIdx) => {
            if (typeof funcDoc !== 'object' || funcDoc === null || !funcDoc.name) {
                console.warn(`⚠️ ${fileName} 中 ${categoryName} 的函数[${funcIdx}] 缺少 name`);
                return;
            }

            // 合并内容（确保长度充足）
            const contentParts = [];
            if (funcDoc.description) contentParts.push(`【功能描述】\n${funcDoc.description}`);
            if (Array.isArray(funcDoc.notes) && funcDoc.notes.length > 0) contentParts.push(`【备注】\n${funcDoc.notes.join('\n')}`);
            if (funcDoc.codeExamples && typeof funcDoc.codeExamples === 'object') {
                const codeStr = Object.entries(funcDoc.codeExamples)
                    .filter(([_, code]) => code && typeof code === 'string' && code.trim())
                    .map(([lang, code]) => `【${lang} 代码】\n${code}`)
                    .join('\n\n');
                if (codeStr) contentParts.push(codeStr);
            }

            const fullContent = contentParts.join('\n\n').replace(/\s+/g, ' ').trim();
            if (!fullContent) {
                console.warn(`⚠️ ${fileName} 中 ${categoryName} - ${funcDoc.name} 无有效内容`);
                return;
            }

            // 修正URL生成逻辑，使其指向正确的category_数字路径
            // 从新的文件名格式(api_data_xxx.json)中提取基础目录名称
            const baseDir = fileName.replace('api_data_', '').replace('.json', '').replace('pc', '');
            
            // 根据项目实际结构，搜索结果应先跳转到对应文件(category_数字)，再跳转到具体内容部分
            // 使用category_${catIdx + 1}作为文件路径，以匹配实际的文档文件名
            const categoryPath = `category_${catIdx + 1}`;
            
            docs.push({
                id: funcDoc.id || `${fileName}_${catIdx}_${funcIdx}`,
                title: `${categoryName} - ${funcDoc.name}`,
                content: fullContent,
                url: `/docs/${baseDir}/${categoryPath}`,
                source: fileName,
                type: funcDoc.type || '函数'
            });

            console.log(`✅ ${fileName} 提取成功：${categoryName} - ${funcDoc.name}（长度：${fullContent.length}）`);
        });
    });

    return docs;
};

const readDocsFromJson = (jsonDir) => {
    const docs = [];
    if (!fs.existsSync(jsonDir)) {
        console.error(`❌ JSON 目录不存在: ${jsonDir}`);
        return docs;
    }

    const jsonFiles = [
        'api_data_cpp.json', 'api_data_csharp.json', 'api_data_huoshanpc.json',
        'api_data_python.json', 'api_data_xuanlanguage.json', 'api_data_yiyuyan.json'
    ];

    jsonFiles.forEach(fileName => {
        const filePath = path.join(jsonDir, fileName);
        if (!fs.existsSync(filePath)) {
            console.warn(`⚠️ 未找到文件: ${fileName}`);
            return;
        }

        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const jsonData = JSON.parse(content);
            logJsonTopStructure(jsonData, fileName);
            const fileDocs = extractDocs(jsonData, fileName);
            docs.push(...fileDocs);
        } catch (err) {
            console.error(`❌ 解析 ${fileName} 失败:`, err.message);
        }
    });

    return docs;
};

module.exports = function (context, options) {
    return {
        name: 'doc-search-index-plugin',
        async contentLoaded({ actions }) {
            try {
                const { siteDir, outDir } = context;
                const jsonDir = path.join(siteDir, 'json-sources');
                const docs = readDocsFromJson(jsonDir);

                if (docs.length === 0) {
                    console.warn('\n⚠️ 未提取到可搜索文档');
                    return;
                }

                // 关键1：开发模式 - 生成到 public 目录（静态资源可直接访问）
                const devIndexPath = path.join(siteDir, 'public', 'search-index.json');
                ensureDir(path.dirname(devIndexPath));
                fs.writeFileSync(devIndexPath, JSON.stringify(docs, null, 2));
                console.log(`🎉 开发模式索引生成：${devIndexPath}`);

                // 关键2：生产模式 - 生成到 build 目录（原路径，不改动）
                const prodIndexPath = path.join(outDir, 'search-index.json');
                ensureDir(path.dirname(prodIndexPath));
                fs.writeFileSync(prodIndexPath, JSON.stringify(docs, null, 2));
                console.log(`🎉 生产模式索引生成：${prodIndexPath}`);

            } catch (err) {
                console.error('❌ 搜索插件错误:', err.message);
            }
        },
    };
};