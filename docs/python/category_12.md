---
sidebar_position: 13
---

# 🛰️ 通用模块
## 📌 函数: HD通用_CALLX64
### 描述
```
通用CALL(适合X64),支持0-8个参数
```
### 原型
```cpp
__int64 __stdcall HC_CALL(__int32 窗口序号,__int64 CALL地址,__int64 rcx=0,__int64 rdx=0,__int64 r8=0,__int64 r9=0,__int64 lparam5=0,__int64 lparam6=0,__int64 lparam7=0,__int64 lparam8=0,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号（从1开始）
__int64 CALL地址 - CALL地址
__int64 rcx - CALL参数
__int64 rdx - CALL参数
__int64 r8 - CALL参数
__int64 r9 - CALL参数
 l5 - CALL参数
 l6 - CALL参数
 l7 - CALL参数
 l8 - CALL参数
bool 是否主线程调用 - 是否主线程调用这个CALL,需要挂接主线程
```
### 返回值
```
查看返回值表
```
### 注意事项
```
如果需要更多参数传递请联系作者
```
### HD通用_CALLX64 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD通用_CALLX64 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD通用_CALLX64 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD通用_CALLX86
### 描述
```
通用CALL(适合X86),支持0到8个参数
```
### 原型
```cpp
__int64 __stdcall HC_CALLX86(__int32 窗口序号,__int32 CALL地址,__int32 ecx=0,__int32 lparam1=0,__int32 lparam2=0,__int32 lparam3=0,__int32 lparam4=0,__int32 lparam5=0,__int32 lparam6=0,__int32 lparam7=0,__int32 lparam8=0,__int32 lparamNum=0,__int32 addEsp=-1,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号（从1开始）
__int32 call地址 - 4字节接口地址
__int32 ecx - 对象参数
__int32 lparam1-lparam8 - 从第一个到第八个参数
__int32 lparamNum - 当前接口地址的传递的参数数量(支持0到8个参数)
__int32 addEsp - 如果调用的接口地址是内平栈就置为-1,如果是外平栈就设置为参数数量(lparamNum)* 0x4
bool 是否主线程调用 - 是否主线程调用这个CALL,需要挂接主线程
```
### 返回值
```
查看返回值表
```
### 注意事项
```
如果需要更多参数传递请联系作者
HC_HookMaint hread
函数简介:
挂接主线程
函数原型:__int64 __stdcall HC_HookMaint hread(__int32 窗口序号,__int64 窗口句柄);
参数定义:
窗口序号:窗口序号(从1开始)
窗口句柄:窗口句柄
返回值:
查看返回值表
备注:
无
```
### HD通用_CALLX86 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD通用_CALLX86 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD通用_CALLX86 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
