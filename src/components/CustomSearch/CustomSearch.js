import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from '@docusaurus/router'; // 新增 useLocation 用于识别当前路径
import { useHotkeys } from 'react-hotkeys-hook';
import './CustomSearch.css';

// 搜索逻辑：匹配标题和内容 + 可选的当前顶级菜单过滤
const searchDocuments = (query, index, currentCategory, searchScope) => {
    if (!query || query.trim().length < 1 || !index) return [];
    const lowerQuery = query.trim().toLowerCase();

    // 1. 基础搜索（标题/内容匹配）
    let matchedResults = index.filter(item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.content.toLowerCase().includes(lowerQuery)
    );

    // 2. 仅当前顶级菜单过滤（如果启用了当前菜单搜索）
    if (searchScope === 'current' && currentCategory) {
        // 优化：适应实际URL格式，如 "/docs/cpp-api/xxx"，检查URL是否包含当前菜单名称
        matchedResults = matchedResults.filter(item => {
            // 简单检查URL是否包含当前菜单名称，这样更灵活地匹配各种URL结构
            return item.url.includes(`/docs/${currentCategory}`);
        });
    }

    // 3. 排序（标题匹配优先）
    return matchedResults.sort((a, b) => {
        const aTitleMatch = a.title.toLowerCase().includes(lowerQuery) ? 1 : 0;
        const bTitleMatch = b.title.toLowerCase().includes(lowerQuery) ? 1 : 0;
        return bTitleMatch - aTitleMatch;
    });
};

// 关键词高亮（保留原有逻辑）
const highlightText = (text, query) => {
    if (!query || !text) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return <div dangerouslySetInnerHTML={{ __html: text.replace(regex, '<span class="search-highlight">$1</span>') }} />;
};

const CustomSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [indexLoaded, setIndexLoaded] = useState(false);
    const [loadingError, setLoadingError] = useState('');
    const [currentCategory, setCurrentCategory] = useState(''); // 存储当前顶级菜单（如 "cpp"）
    const [searchScope, setSearchScope] = useState('all'); // 搜索范围：'all' 全部文档，'current' 当前菜单

    const searchIndex = useRef([]);
    const history = useHistory();
    const location = useLocation(); // 新增：获取当前 URL 信息
    const inputRef = useRef(null); // 修复：ref 绑定到输入框本身
    const resultsRef = useRef(null);

    // 1. 从 URL 识别当前顶级菜单（如 /docs/cpp/xxx → "cpp"）
    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(Boolean); // 分割 URL 路径
        // 文档路径格式：/docs/[category]/... → 提取第 1 个片段（索引 1）作为顶级菜单
        if (pathSegments[0] === 'docs' && pathSegments[1]) {
            setCurrentCategory(pathSegments[1]);
            console.log(`📍 当前顶级菜单: ${pathSegments[1]}`);
        } else {
            setCurrentCategory(''); // 非文档页（如首页）不限制搜索范围
            console.log(`📍 当前非文档页，搜索范围：全部文档`);
        }
    }, [location.pathname]); // URL 变化时重新识别

    // 2. 加载搜索索引（保留原有日志，优化路径提示）
    useEffect(() => {
        const loadSearchIndex = async () => {
            try {
                setLoadingError('');
                const baseUrl = window.location.origin;
                const indexUrl = `${baseUrl}/search-index.json`;

                console.log(`🔍 尝试加载索引: ${indexUrl}`);
                const response = await fetch(indexUrl);

                if (!response.ok) {
                    const errorText = await response.text();
                    console.error(`❌ 服务器返回错误: ${errorText.substring(0, 200)}`);
                    throw new Error(`请求失败 (${response.status}) - 请确认 search-index.json 已放在 static 目录`);
                }

                const contentType = response.headers.get('content-type');
                if (!contentType?.includes('application/json')) {
                    const invalidContent = await response.text();
                    console.error(`❌ 非JSON响应: ${invalidContent.substring(0, 200)}`);
                    throw new Error(`返回内容不是JSON - 检查索引生成逻辑`);
                }

                const indexData = await response.json();
                if (!Array.isArray(indexData)) {
                    throw new Error('索引格式错误 - 应为数组类型');
                }

                // 验证索引中是否包含必要的 url 字段（用于跳转和过滤）
                const hasValidUrl = indexData.every(item => item.url && typeof item.url === 'string');
                if (!hasValidUrl) {
                    console.warn(`⚠️ 部分文档缺少有效 url，可能导致跳转失败`);
                }

                searchIndex.current = indexData;
                setIndexLoaded(true);
                console.log(`✅ 索引加载成功（共 ${indexData.length} 个文档）`);
                window.searchIndex = indexData; // 方便调试

            } catch (error) {
                console.error('❌ 索引加载失败:', error.message);
                setLoadingError(error.message);
            }
        };

        loadSearchIndex();
    }, []);

    // 3. 实时搜索（防抖 + 可选的当前菜单过滤）
    useEffect(() => {
        // 索引未加载或输入为空 → 清空结果
        if (!indexLoaded || query.trim().length < 1) {
            setResults([]);
            return;
        }

        // 防抖：150ms 延迟，避免输入过快频繁触发
        const timeout = setTimeout(() => {
            const matched = searchDocuments(query, searchIndex.current, currentCategory, searchScope);
            setResults(matched);
            console.log(`🔍 搜索「${query}」（范围：${searchScope === 'current' ? currentCategory || '当前菜单' : '全部文档'}）匹配到 ${matched.length} 个结果`);
        }, 150);

        // 清理定时器（组件卸载或依赖变化时）
        return () => clearTimeout(timeout);
    }, [query, indexLoaded, currentCategory]); // 依赖 currentCategory，切换菜单时重新搜索

    // 4. 处理输入（保留原有逻辑）
    const handleInput = (e) => {
        const value = e.target.value;
        setQuery(value);
        setShowResults(value.trim().length > 0); // 输入有内容时显示结果面板
        console.log(`📝 输入变化: ${value}`); // 调试用：确认输入事件触发
    };

    // 点击结果跳转（优化：确保URL格式与网站路由正确匹配）
    const handleResultClick = (url) => {
        if (url && typeof url === 'string') {
            console.log(`🚀 原始跳转URL: ${url}`); // 调试用：记录原始URL
            
            // 确保URL以斜杠开头，避免相对路径问题
            let normalizedUrl = url.startsWith('/') ? url : `/${url}`;
            
            // 根据网站实际路由格式优化URL
            // 网站实际格式: /docs/cpp/category_4
            // 索引URL格式: /docs/cpp/function_2
            // 这里保持现有格式，确保与网站路由匹配
            
            console.log(`🚀 标准化后URL: ${normalizedUrl}`); // 调试用：记录标准化后的URL
            
            // 尝试进行跳转
            try {
                history.push(normalizedUrl);
                setQuery('');
                setResults([]);
                setShowResults(false);
                console.log(`✅ 跳转成功: ${normalizedUrl}`);
            } catch (error) {
                console.error(`❌ 跳转执行失败:`, error);
                // 作为备选方案，尝试使用window.location.href进行跳转
                try {
                    console.log(`🔄 尝试使用window.location.href跳转`);
                    window.location.href = normalizedUrl;
                } catch (fallbackError) {
                    console.error(`❌ 备选跳转方案也失败:`, fallbackError);
                }
            }
        } else {
            console.error(`❌ 无效的跳转URL: ${url}`);
        }
    };

    // 6. 点击空白关闭结果（保留原有逻辑）
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                inputRef.current && !inputRef.current.contains(e.target) &&
                resultsRef.current && !resultsRef.current.contains(e.target)
            ) {
                setShowResults(false);
                console.log(`❌ 点击空白，关闭结果面板`);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 7. 快捷键（可选：如需启用，取消注释并确保依赖正确）
    // useEffect(() => {
    //   const cleanup = useHotkeys('ctrl+k', () => {
    //     if (inputRef.current) {
    //       inputRef.current.focus();
    //       setShowResults(query.trim().length > 0);
    //       console.log(`⌨️ 快捷键 Ctrl+K 触发，聚焦搜索框`);
    //     }
    //   }, { enabled: true });
    //   return cleanup;
    // }, [query]);

    return (
        <div className="custom-search-container">
            {/* 搜索图标（保留原有） */}
            <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>

            {/* 搜索输入框（修复：ref 绑定到 input 标签） */}
            <div className="search-input-wrapper">
                <input
                    ref={inputRef} // 关键修复：ref 绑定到输入框本身
                    type="text"
                    value={query}
                    onChange={handleInput}
                    onFocus={() => query.trim().length > 0 && setShowResults(true)}
                    placeholder={searchScope === 'current' && currentCategory
                ? `搜索 ${currentCategory} 文档...`
                : "搜索全部文档..."}
                    className="search-input"
                    aria-label="搜索文档"
                />

                {/* 搜索范围切换按钮 */}
                <button
                    className={`search-scope-toggle ${searchScope === 'current' ? 'active' : ''}`}
                    onClick={() => {
                        setSearchScope(searchScope === 'current' ? 'all' : 'current');
                        console.log(`🔄 切换搜索范围: ${searchScope === 'current' ? '全部文档' : '当前菜单'}`);
                    }}
                    aria-label={searchScope === 'current' ? '切换到全部文档搜索' : '切换到当前菜单搜索'}
                >
                    {searchScope === 'current' ? '当前菜单' : '全部文档'}
                </button>

                {/* 清空按钮（保留原有） */}
                {query.trim().length > 0 && (
                    <button
                        className="search-clear"
                        onClick={() => {
                            setQuery('');
                            setResults([]);
                            setShowResults(false);
                            console.log(`🗑️ 清空搜索输入`);
                        }}
                        aria-label="清除搜索"
                    >
                        ×
                    </button>
                )}
            </div>


            {/* 搜索结果面板（保留原有，优化提示文本） */}
            {showResults && (
                <div className="search-results" ref={resultsRef}>
                    {loadingError ? (
                        <div className="search-error">
                            搜索加载失败: {loadingError}
                        </div>
                    ) : !indexLoaded ? (
                        <div className="search-loading">加载中...</div>
                    ) : results.length > 0 ? (
                        <ul className="result-list">
                            {results.slice(0, 15).map((item, index) => (
                                <li
                                    key={index} // 建议后续在索引中添加唯一 id，替换 index 作为 key
                                    className="result-item"
                                    onClick={() => handleResultClick(item.url)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div className="result-title">{highlightText(item.title, query)}</div>
                                    <div className="result-excerpt">
                                        {highlightText(
                                            item.content.length > 180 ? `${item.content.slice(0, 180)}...` : item.content,
                                            query
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="no-results">
                            {currentCategory
                                ? `未找到「${currentCategory}」菜单下匹配“${query}”的文档`
                                : `未找到匹配“${query}”的文档`}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CustomSearch;