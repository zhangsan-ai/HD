# 🛰️ APIHOOK
## 📌 函数: HDHOOK_Send发包
### 描述
```
调用SendAPI(目标进程中调用)X86X64
```
### 原型
```
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
```
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HDHOOK_Send发包 - 进阶用法
```
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HDHOOK_Send发包 - 高级应用
```
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HDHOOK_SendTo发包
### 描述
```
调用SendtoAPI(目标进程中调用)X86X64
```
### 原型
```
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
### HDHOOK_SendTo发包 - 基础示例
```
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HDHOOK_SendTo发包 - 进阶用法
```
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HDHOOK_SendTo发包 - 高级应用
```
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
