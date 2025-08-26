---
title: 语法高亮测试
sidebar_label: 语法高亮测试
---
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
```


```xuan
// 炫语言：乘法
函数 乘(a:整数, b:整数) : 整数
    返回 a * b
结束函数
输出行(乘(5, 6)) // 输出 30
```
```huoshan
' 火山语言：减法
函数 减(数1 为 整数型, 数2 为 整数型) 为 整数型
返回 数1 - 数2
结束函数
输出行(减(10, 4)) ' 输出 6
```
```cpp
// C++：除法
#include <iostream>
int 除(int m, int n) { return m / n; }
int main() { std::cout << 除(20, 5) << std::endl; return 0; } // 输出 4
```
```csharp
// C#：取余
using System;
class Calc {
static int 余(int a, int b) => a % b;
static void Main() => Console.WriteLine(余(17, 5)); // 输出 2
}
```
```python
# Python：幂运算
def 幂(n, p): return n **p
print(幂(3, 3))  # 输出 27
```