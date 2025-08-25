---
sidebar_position: 11
---

# 🛰️ APIHOOK
## 📌 函数: HDHOOK_Send发包
### 描述
```
调用SendAPI(目标进程中调用)X86X64
```
### 原型
```cpp
__int64 HDHK_SendApi(__int32 窗口序号,__int32 socket,BYTE* buffer,__int32 bufferSize,__int32 flag,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int32 socket - 套接字socket
byte* buffer - 字节缓冲区地址
__int32 bufferSize - 缓冲区字节大小
__int32 flag - send的第4个参数flag
bool 是否主线程调用 - 需要开启才开启,一般默认就行
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HDHOOK_Send发包 - 基础示例
```e-lang
.版本 2

.子程序 测试API拦截, 长整数型, 公开
    .局部变量 窗口序号, 整数型
    .局部变量 结果, 长整数型
    
    窗口序号 ＝ 1
    
    ' 拦截send API
    结果 ＝ HDHOOK_拦截API (窗口序号, "ws2_32.dll", "send", 5, &API拦截回调函数, 0, 假)
    .如果 (结果 ＝ 1)
        调试输出 ("API拦截设置成功")
    .否则
        调试输出 ("API拦截设置失败")
    .如果结束
    
    返回 (结果)

.子程序 API拦截回调函数, 整数型, 公开
    .参数 窗口序号, 整数型
    .参数 插件序号, 整数型
    .参数 raxOreax, 长整数型
    .参数 rbxOrebx, 长整数型
    .参数 rcxOrecx, 长整数型
    .参数 rdxOredx, 长整数型
    .参数 rbpOrebp, 长整数型
    .参数 rspOresp, 长整数型
    .参数 rsiOresi, 长整数型
    .参数 rdiOredi, 长整数型
    .参数 r8, 长整数型
    .参数 r9, 长整数型
    .参数 r10, 长整数型
    .参数 r11, 长整数型
    .参数 r12, 长整数型
    .参数 r13, 长整数型
    .参数 r14, 长整数型
    .参数 r15, 长整数型
    .参数 lparam, 长整数型
    
    调试输出 ("拦截到API调用，lparam：", lparam)
    调试输出 ("rax寄存器：", raxOreax)
    调试输出 ("rbx寄存器：", rbxOrebx)
    
    ' 返回值说明：
    ' 0: 忽视被破坏的汇编语句，直接跳到下一句汇编地址
    ' 1: 走原有流程
    ' 2: 需要修改值 + 忽视被破坏的汇编语句，直接跳到下一句汇编地址
    ' 3: 需要修改值 + 走原有流程
    返回 (1)  ' 走原有流程，不拦截
```
### HDHOOK_Send发包 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HDHOOK_Send发包 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HDHOOK_SendTo发包
### 描述
```
调用SendtoAPI(目标进程中调用)X86X64
```
### 原型
```cpp
__int64 HDHK_SendToApi(__int32 窗口序号,__int32 socket,BYTE* buffer,__int32 bufferSize,__int32 flag,__int32 port,__int32 ip,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int32 socket - 套接字socket
byte* buffer - 字节缓冲区地址
__int32 bufferSize - 缓冲区字节大小
__int32 flag - send的第4个参数flag
__int32 port - 目标地址端口
__int32 ip - IP网络字节序,需要把字符串如
bool 是否主线程调用 - 需要开启才开启,一般默认就行
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HDHOOK_SendTo发包 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HDHOOK_SendTo发包 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
