module.exports = function() {
  return {
    name: 'prism-custom-languages-plugin',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              type: 'text/javascript'
            },
            innerHTML: `
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof Prism !== 'undefined') {
                  // 炫语言语法定义
                  Prism.languages.xuan = {
                    'keyword': /\\b(如果|否则|否则如果|循环|直到|当|跳出|继续|函数|返回|全局|局部|常量|类型|结构|枚举|导入|导出|命名空间|接口|实现|类|继承|虚函数|实函数|构造函数|析构函数|静态|抽象|重载|运算符|公开|私有|保护|友元|模板)\\b/g,
                    'builtin': /\\b(整数|长整数|短整数|字节|字符|字符串|浮点数|双精度|布尔值|空|指针|数组|列表|字典|集合|映射|迭代器|引用|智能指针)\\b/g,
                    'constant': /\\b(真|假|空值|无穷大|NaN)\\b/g,
                    'comment': [
                      { pattern: /\\/\\*[\\s\\S]*?\\*\\//, greedy: true },
                      { pattern: /\\/\\/.*$/, greedy: true }
                    ],
                    'string': [
                      { pattern: /"(?:\\\\.|[^"\\\\])*"/, greedy: true },
                      { pattern: /'(?:\\\\.|[^'\\\\])*'/, greedy: true }
                    ],
                    'number': /\\b\\d+\\.?\\d*\\b/g
                  };

                  // 易语言语法定义 - 添加e-lang别名以匹配文档中的标识
                  Prism.languages.yiyuyan = Prism.languages['e-lang'] = {
                    'comment': [
                      { pattern: /'[^\\n]*$/, greedy: true }
                    ],
                    'keyword': /\\b(如果|如果真|否则|否则如果|循环|变量循环首|计次循环首|判断循环首|到循环尾|跳出循环|继续循环|返回|结束|结束程序|销毁|关闭|子程序|函数|全局变量|局部变量|静态变量|常量|类型定义|结构|枚举|导入|导出|模块|类|继承|接口|实现|公开|私有|保护|属性|方法|事件|构造器|析构器|组件|资源|图片资源|声音资源|图标资源|光标资源|字体资源)\\b/g,
                    'builtin': /\\b(整数型|长整数型|短整数型|字节型|字符型|文本型|小数型|双精度小数型|逻辑型|空型|指针型|字节集|数组|集合|表|节点|对象|窗口|对话框|按钮|编辑框|标签|图片框|列表框|组合框|进度条|滑块条|选择框|单选框|复选框)\\b/g,
                    'constant': /\\b(真|假|空|零|无穷大|无效句柄|全部|默认)\\b/g,
                    'string': [
                      { pattern: /"(?:\\\\.|[^"\\\\])*"/, greedy: true },
                      { pattern: /'(?:\\\\.|[^'\\\\])*'/, greedy: true }
                    ],
                    'number': /\\b\\d+\\.?\\d*\\b/g
                  };

                  // 火山语法定义
                  Prism.languages.huoshan = {
                    'keyword': /\\b(如果|否则|否则如果|循环|直到|当|跳出|继续|函数|返回|全局|局部|常量|类型|结构|枚举|导入|导出|命名空间|接口|实现|类|继承|虚函数|实函数|构造函数|析构函数|静态|抽象|重载|运算符|公开|私有|保护|友元|模板|泛型|委托|事件|属性|索引器|异常|捕获|抛出|尝试|终于|断言)\\b/g,
                    'builtin': /\\b(整数|长整数|短整数型|字节|字符|字符串|浮点数|双精度|布尔值|空|指针|数组|列表|字典|集合|映射|迭代器|引用|智能指针|对象|动态|可空|变体)\\b/g,
                    'constant': /\\b(真|假|空值|无穷大|NaN|零|一|最大整数|最小整数)\\b/g,
                    'comment': [
                      { pattern: /\\/\\*[\\s\\S]*?\\*\\//, greedy: true },
                      { pattern: /\\/\\/.*$/, greedy: true }
                    ],
                    'string': [
                      { pattern: /"(?:\\\\.|[^"\\\\])*"/, greedy: true },
                      { pattern: /'(?:\\\\.|[^'\\\\])*'/, greedy: true }
                    ],
                    'number': /\\b\\d+\\.?\\d*\\b/g
                  };

                  // 对页面上的代码块应用语法高亮
                  var codeBlocks = document.querySelectorAll('pre code');
                  for (var i = 0; i < codeBlocks.length; i++) {
                    var codeBlock = codeBlocks[i];
                    Prism.highlightElement(codeBlock);
                  }
                }
              });
            `
          }
        ]
      };
    }
  };
};