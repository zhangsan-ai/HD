---
title: 易语言测试用例
sidebar_label: 易语言测试
---

### 基础代码结构
```e-lang
' 易语言单行注释
.版本 2

.程序集 窗口程序集_启动窗口
.子程序 _按钮1_被单击, 整数型, 公开

' 变量定义
.局部变量 测试文本, 文本型
.局部变量 循环计次, 整数型

测试文本 ＝ “Hello 易语言”
信息框 (测试文本, 0, “提示”)

' 计次循环示例
.计次循环首 (5, 循环计次)
    调试输出 (“循环次数: ”, 循环计次)
.计次循环尾 ()

' 条件判断示例
.如果 (循环计次 ＞ 3)
    信息框 (“循环已执行超过 3 次”, 0, )
.否则
    信息框 (“循环执行次数较少”, 0, )
.如果结束

返回 (0)
```
```cpp
#include <iostream>
#include <vector>

// C++ 测试代码
int main() {
    std::vector<int> nums = {1, 2, 3, 4};
    for (int num : nums) {
        std::cout << "Number: " << num << std::endl;
    }
    return 0;
}
__int64 __stdcall HCIP_YMSetRootPath(char* path);
```
```csharp
using System;

public class Test
{
    public void Hello()
    {
        string message = "Hello C#";
        Console.WriteLine(message);
    }
}
```