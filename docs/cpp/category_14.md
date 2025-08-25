---
sidebar_position: 15
---

# 🛰️ LUA模块(LUA)
## 📌 函数: HCLUA_ReadFile
### 描述
```
执行或加载LUA文件
```
### 原型
```cpp
__int64 __stdcall HCLUA_ReadFile(__int32 窗口序号,char* 文件名路径,__int32 LUA标识符,BOOL 是否执行=FALSE,BOOL 是否需要拿到返回值=FALSE,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 文件名路径 - LUA文件名路径
__int32 LUA标识符 - 一个任意整数的标识(不要重复就行)
bool 是否执行 - 是否直接执行LUA文件
```
### 返回值
```
是否需要拿到返回值
是否主线程调用:是否需要主线程来调用这个CALL
返回值:
查看返回值表
```
### 注意事项
```
LUA标识符:当【是否需要拿到返回值】参数为真的时候,用作线程的标识符,方便主动退出线程，标识符规则:不要太大了{0到100}以内就行是否执行:真表示执行并加载LUA(比如:注入一些自定义LUA接口同时还能执行LUA),反之只是加载LUA文件(比如:注入一些自定义LUA接口)是否需要拿到返回值:真表示堵塞直到LUA文件执行完毕并获取返回值，反之表示开启一根线程执行(无法拿到返回值,可以在LUA文件中做一些耗时的操作)
```
### HCLUA_ReadFile - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCLUA_ReadFile - 进阶用法
```cpp
// 示例2：HCLUA_ReadFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCLUA_ReadFile - 高级应用
```cpp
// 示例3：HCLUA_ReadFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCLUA_CloseLua
### 描述
```
关闭LUA线程
```
### 原型
```cpp
__int64 __stdcall HCLUA_CloseLua(__int32 窗口序号,__int32 LUA标识符=-1);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int32 LUA标识符 - 通过标识符来停止LUA线程
```
### 返回值
```
查看返回值表
```
### 注意事项
```
LUA标识符:调用【HCLUA_ReadFile】接口指定的【LUA标识符】参数,一一对应,-1表示全部LUA线程退出！！！
```
### HCLUA_CloseLua - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCLUA_CloseLua - 进阶用法
```cpp
// 示例2：HCLUA_CloseLua 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCLUA_CloseLua - 高级应用
```cpp
// 示例3：HCLUA_CloseLua 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCLUA_ExcuteCall
### 描述
```
执行被注册过的LUA函数
```
### 原型
```cpp
__int64 __stdcall HCLUA_ExcuteCall(__int32 窗口序号,char* 函数名,__int32 参数数量=0,__int64 rcx=0,__int64 rdx=0,__int64 r8=0,__int64 r9=0,__int64 lparam5=0,__int64 lparam6=0,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 函数名 - 被注册过的函数名
__int32 参数数量 - 参数数量
__int64 rcx - CALL参数
__int64 rdx - CALL参数
__int64 r8 - CALL参数
__int64 r9 - CALL参数
 l5 - CALL参数
 l6 - CALL参数
bool 是否主线程调用 - 是否主线程调用
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:{\"error\":0,\"ret\":AAA,\"data\":XXX}
```
### HCLUA_ExcuteCall - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCLUA_ExcuteCall - 进阶用法
```cpp
// 示例2：HCLUA_ExcuteCall 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCLUA_ExcuteCall - 高级应用
```cpp
// 示例3：HCLUA_ExcuteCall 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
