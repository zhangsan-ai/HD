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
// 炫语言
函数 计算面积(半径:小数) : 小数 {
    返回 3.14 * 半径 * 半径; // 注释无斜体
}
输出行(计算面积(5)); // 内置命令无加粗
```
```huoshan
' 火山语言
函数 计算面积(半径 为 小数型) 为 小数型
返回 3.14 × 半径 × 半径 ' 注释有斜体
结束函数
输出行(计算面积(5)) ' 内置命令加粗
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