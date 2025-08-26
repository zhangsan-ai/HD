export default function prismIncludeLanguages(PrismObject) {
  // Extend C# highlighting for more keywords and constructs
  (function (Prism) {
    Prism.languages.csharp = Prism.languages.extend('clike', {
      'keyword': /\b(?:abstract|add|alias|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|nameof|namespace|new|null|object|on|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unmanaged|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
      'string': [
        {pattern: /@"(?:""|[^"])*"/, greedy: true},
        {pattern: /"(?:\\.|[^\\"\n])*"/, greedy: true}
      ],
      'preprocessor': {
        pattern: /(^[\t ]*)#.*/m,
        lookbehind: true,
        alias: 'property'
      },
      'attribute': {
        pattern: /\[[\s\S]+?\]/,
        greedy: true,
        alias: 'class-name'
      }
    });
    Prism.languages.dotnet = Prism.languages.csharp;
  }(PrismObject));

  // Yiyuyan Language Definition (Based on user-provided CSS)
  PrismObject.languages.yiyuyan = {
    'comment': { pattern: /'.*$/, greedy: true },
    'string': { pattern: /"([^"\\]|\\.)*"/, greedy: true },
    'function': { pattern: /(?:(?<=.子程序 |.函数 )|(?<=^))[_a-zA-Z\u4e00-\u9fa5][_a-zA-Z0-9\u4e00-\u9fa5]*/, lookbehind: true },
    'structure': {
        pattern: /\.(?:程序集|子程序|函数|方法|事件|模块|类|接口|数据类型|枚举|常量|宏|资源|菜单|对话框|版本|支持库|扩展库|导入|导出|继承|实现)/,
        alias: 'keyword'
    },
    'variable': {
        pattern: /\.(?:局部变量|全局变量|静态变量|参数|数组|成员|公开|私有|保护|共享|静态)/,
        alias: 'keyword'
    },
    'control': {
        pattern: /\b(?:如果|如果真|否则|否则如果|判断|判断开始|判断结束|循环|计次循环首|计次循环尾|变量循环首|变量循环尾|循环判断首|循环判断尾|跳出循环|继续循环|返回|结束|销毁|关闭|暂停|延时)\b/,
        alias: 'keyword'
    },
    'type': /\b(?:整数型|短整数型|长整数型|小数型|双精度小数型|文本型|字节型|字节集|逻辑型|日期时间型|子程序指针|布尔型|字符型|浮点型|无符号整数型|指针型|对象型|变体型|自定义型)\b/,
    'builtin': /\b(?:信息框|输入框|调试输出|输出调试文本|到文本|到整数|到小数|到字节集|到时间|取时间|取日期|增减时间|取随机数|取系统时间|取当前目录|改变目录|创建目录|删除目录|复制文件|删除文件|重命名文件|文件是否存在|读入文件|写出文件|打开文件|关闭文件|读一行|写一行|取数组成员数|重定义数组|加入成员|删除成员|插入成员|排序数组|取文本长度|取子文本|替换子文本|寻找文本|分割文本|连接文本|转换编码|取ASCII码|字符|到大写|到小写|取运行目录|运行|终止进程|注册热键|卸载热键|发送消息|投递消息|取窗口句柄|取窗口标题|移动窗口|改变窗口大小|显示窗口|隐藏窗口)\b/,
    'number': /\b(?:0x[\da-f]+|0b[01]+|-?\d+(?:\.\d+)?)\b/i,
    'operator': /[+\-*\/×=<>]=?|并且|或者|非|模|整除/,
    'punctuation': /[\(\)\[\]\{\},.]/
  };
  PrismObject.languages['e-lang'] = PrismObject.languages.yiyuyan;

  // Xuan Language Definition (Based on user-provided CSS)
  PrismObject.languages.xuan = {
    'comment': [
        { pattern: /\/\*[\s\S]*?\*\//, greedy: true, alias: 'block' },
        { pattern: /\/\/.*$/, greedy: true }
    ],
    'string': { pattern: /"([^"\\]|\\.)*"/, greedy: true },
    'function': { pattern: /(?<=函数 |方法 )[_a-zA-Z\u4e00-\u9fa5][_a-zA-Z0-9\u4e00-\u9fa5]*/, lookbehind: true },
    'structure': {
        pattern: /\b(?:程序|类型|接口|方法|函数|结束程序|结束类型|结束接口|结束方法|结束函数|实现|继承|重载|重写|默认|抽象|虚拟)\b/,
        alias: 'keyword'
    },
    'variable': {
        pattern: /\b(?:变量|常量|数组|参数|静态|全局|局部|字段)\b/,
        alias: 'keyword'
    },
    'control': {
        pattern: /\b(?:如果|否则|如果真|否则如果|循环|计次循环|变量循环|循环判断|跳出|继续|返回|终止|暂停|延时)\b/,
        alias: 'keyword'
    },
    'type': /\b(?:整数|小数|文本|字符|字节|逻辑|日期|时间|指针|对象|变体型|数组型|自定义型|布尔型|浮点型)\b/,
    'builtin': /\b(?:输出|输出行|输入|到整数|到小数|到文本|取长度|截取文本|替换文本|查找文本|连接文本|拆分文本|取时间|取日期|计算日期|随机数|打开文件|读取文件|写入文件|关闭文件|文件是否存在|创建目录|删除目录|复制文件|删除文件|取当前目录|运行程序|终止程序|注册热键|卸载热键)\b/,
    'number': /\b(?:0x[\da-f]+|0b[01]+|-?\d+(?:\.\d+)?)\b/i,
    'operator': /[+\-*\/%=]=?|==|!=|<=?|>=?|&&|\|\||!|与|或|非/,
    'symbol': /[.\[\]]/,
    'punctuation': /[(){},;:]/
  };

  // Huoshan Language Definition (Based on user-provided CSS)
  PrismObject.languages.huoshan = {
    'comment': { pattern: /\/\/.*$/, greedy: true },
    'string': { pattern: /"([^"\\]|\\.)*"/, greedy: true },
    'function': { pattern: /(?<=函数 |子程序 )[_a-zA-Z\u4e00-\u9fa5][_a-zA-Z0-9\u4e00-\u9fa5]*/, lookbehind: true },
    'structure': {
        pattern: /\b(?:程序集|类|数据类型|枚举|常量|宏|资源|函数|子程序|方法|事件|模块|接口|继承|实现|版本|支持库|导入|导出)\b/,
        alias: 'keyword'
    },
    'variable': {
        pattern: /\b(?:变量|局部变量|全局变量|静态变量|参数|数组|成员|公开|私有|保护|共享|静态|为)\b/,
        alias: 'keyword'
    },
    'control': {
        pattern: /\b(?:如果|如果真|否则|否则如果|判断|判断开始|判断结束|循环|计次循环|变量循环|循环判断|跳出循环|继续循环|返回|结束|销毁|关闭|暂停|延时|结束计次循环|结束变量循环)\b/,
        alias: 'keyword'
    },
    'type': /\b(?:整数型|小数型|文本型|字节型|字节集|逻辑型|日期时间型|子程序指针|布尔型|字符型|浮点型|无符号整数型|指针型|对象型|变体型|自定义型)\b/,
    'builtin': /\b(?:输出|输出行|信息框|输入框|调试输出|到文本|到整数|到小数|到字节集|取随机数|取系统时间|取当前目录|复制文件|删除文件|读入文件|写出文件|打开文件|关闭文件|读一行|写一行|取数组成员数|重定义数组|加入成员|删除成员|插入成员|取文本长度|取子文本|替换子文本|寻找文本|分割文本|连接文本)\b/,
    'number': /\b(?:0x[\da-f]+|0b[01]+|-?\d+(?:\.\d+)?)\b/i,
    'operator': /[+\-*\/×=<>]=?|并且|或者|非|模|整除/,
    'symbol': /[.\[\]]/,
    'punctuation': /[(){},;:]/
  };
}
