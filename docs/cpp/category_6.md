---
sidebar_position: 7
---

# 🛰️ 环境初始化模块(Inject)
## 📌 函数: HCInject_Init
### 描述
```
初始化插件环境
```
### 原型
```cpp
__int64 __stdcall HCInject_Init(__int32 窗口序号,BOOL 是否重置=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否重置 - 真(TRUE)就行
```
### 返回值
```
查看返回值表
```
### 注意事项
```
每次打开游戏都需要先初始化一次
不要多次初始化
该接口还会把当前全局进程位数HCEnv_SetProcessType与当前窗口序号进程绑定,省去了切换进程位数的操作,如果不绑定可能会返回-1107(ERROR_进程位数不匹配)
```
### HCInject_Init - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_Init - 进阶用法
```cpp
// 示例2：HCInject_Init 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_Init - 高级应用
```cpp
// 示例3：HCInject_Init 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_InitEx
### 描述
```
初始化插件环境
```
### 原型
```cpp
__int64 __stdcall HCInject_InitEx(__int32 窗口序号,char* 预加载LUA模块全路径,BOOL 是否重置=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 预加载LUA模块全路径 - 指定一个LUA文件路径+文件名(当插件被加载的时候会自动执行这个LUA文件),通讯后执行
bool 是否重置 - 是否重置
```
### 返回值
```
查看返回值表
```
### 注意事项
```
每次打开游戏都需要先初始化一次
不要多次初始化
如果不需要用LUA来初始化自己的数据,可以直接使用HCInject_Init
该接口还会把当前全局进程位数HCEnv_SetProcessType与当前窗口序号进程绑定,省去了切换进程位数的操作,如果不绑定可能会返回-1107(ERROR_进程位数不匹配)
```
### HCInject_InitEx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_InitEx - 进阶用法
```cpp
// 示例2：HCInject_InitEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_InitEx - 高级应用
```cpp
// 示例3：HCInject_InitEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_InitExx
### 描述
```
初始化插件环境
```
### 原型
```cpp
__int64 __stdcall HCInject_InitExx(__int32 窗口序号,char* 预加载DLL模块全路径=NULL,char* 预加载LUA模块全路径=NULL,__int32 addType=-1,BOOL 是否重置=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 预加载DLL模块全路径 - 指定一个预加载的DLL,通讯前直接加载
char* 预加载LUA模块全路径 - 指定一个LUA文件路径+文件名(当插件被加载的时候会自动执行这个LUA文件),通讯后执行
__int32 addType - -1/0/1无痕无模块加载DLL2普通加载DLL
bool 是否重置 - 是否重置
```
### 返回值
```
查看返回值表
```
### 注意事项
```
每次打开游戏都需要先初始化一次
不要多次初始化
如果不需要用LUA来初始化自己的数据或者预加载DLL,可以直接使用HCInject_Init
该接口还会把当前全局进程位数HCEnv_SetProcessType与当前窗口序号进程绑定,省去了切换进程位数的操作,如果不绑定可能会返回-1107(ERROR_进程位数不匹配)
```
### HCInject_InitExx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_InitExx - 进阶用法
```cpp
// 示例2：HCInject_InitExx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_InitExx - 高级应用
```cpp
// 示例3：HCInject_InitExx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_GetPid
### 描述
```
获取打开的进程PID
```
### 原型
```cpp
__int64 __stdcall HCInject_GetPid(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
调用这个接口之前必须保证插件已经加载才会获取PID
```
### HCInject_GetPid - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetPid - 进阶用法
```cpp
// 示例2：HCInject_GetPid 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetPid - 高级应用
```cpp
// 示例3：HCInject_GetPid 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_GetPrePid
### 描述
```
获取打开的进程之前的PID(可以用于重连)
```
### 原型
```cpp
__int64 __stdcall HCInject_GetPrePid(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
当我们在调试的时候中控如果崩了,如果此时插件还在游戏进程中执行,那么可以当打开中控的时候直接获取PID进行通讯,而不是调用初始化之类的操作
```
### HCInject_GetPrePid - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetPrePid - 进阶用法
```cpp
// 示例2：HCInject_GetPrePid 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetPrePid - 高级应用
```cpp
// 示例3：HCInject_GetPrePid 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_GetPreWinIndex
### 描述
```
通过进程PID尝试拿到绑定的窗口序号
```
### 原型
```cpp
__int64 __stdcall HCInject_GetPreWinIndex(__int32 pid);
```
### 参数
```
__int32 pid - 指定一个进程PID
```
### 返回值
```
查看返回值表
```
### 注意事项
```
返回如果大于等于0的值表示之前进程绑定的窗口序号
没有进程PID返回-1178
没有绑定过返回-1179
```
### HCInject_GetPreWinIndex - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetPreWinIndex - 进阶用法
```cpp
// 示例2：HCInject_GetPreWinIndex 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetPreWinIndex - 高级应用
```cpp
// 示例3：HCInject_GetPreWinIndex 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_GetPreWinIndexEx
### 描述
```
通过进程PID尝试拿到绑定的窗口序号
```
### 原型
```cpp
__int64 __stdcall HCInject_GetPreWinIndexEx(__int32 pid,__int32 winIndex,__int64 checkFun);
```
### 参数
```
__int32 pid - 窗口序号winIndex
```
### 返回值
```
查看返回值表
```
### 注意事项
```
返回如果大于等于0的值表示之前进程绑定的窗口序号
没有进程PID返回-1178
没有绑定过返回-1179
```
### HCInject_GetPreWinIndexEx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetPreWinIndexEx - 进阶用法
```cpp
// 示例2：HCInject_GetPreWinIndexEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetPreWinIndexEx - 高级应用
```cpp
// 示例3：HCInject_GetPreWinIndexEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_GetHwnd
### 描述
```
获取窗口句柄,内部是通过PID获取窗口句柄需要先安装好插件到目标进程
```
### 原型
```cpp
__int64 __stdcall HCInject_GetHwnd(__int32 窗口序号,char* className,char* title,__int32 filter,BOOL bType,__int32 mis=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* className - 窗口类名(不指定为NULL/0)
char* title - 窗口标题(不指定为NULL/0)
__int32 filter - 1标题2类名8检测是否无父窗口16检查窗口句柄是否有效多个标识可以用|累加
bool bType - 真/1为模糊匹配假/0为完全匹配
__int32 mis - 循环检查毫秒数mis<=0表示不需要循环获取>0表示内部循环获取句柄直到有值
```
### 返回值
```
查看返回值表
```
### 注意事项
```
内部是通过HCWIN_EnumWindowByProcessId获取
```
### HCInject_GetHwnd - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetHwnd - 进阶用法
```cpp
// 示例2：HCInject_GetHwnd 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetHwnd - 高级应用
```cpp
// 示例3：HCInject_GetHwnd 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_GetHwndEx
### 描述
```
获取窗口句柄(需要内置,一般不需要调用这个获取句柄),如果需要通过PID获取句柄请调用HCInject_GetHwnd
```
### 原型
```cpp
__int64 __stdcall HCInject_GetHwndEx(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
这个接口和内置的游戏接口有关,需要搭建完通讯才能调用
并不是一定获取到
如果要获取进程句柄还需要自行获取,除非内置了游戏数据
```
### HCInject_GetHwndEx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetHwndEx - 进阶用法
```cpp
// 示例2：HCInject_GetHwndEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetHwndEx - 高级应用
```cpp
// 示例3：HCInject_GetHwndEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_Continue
### 描述
```
继续环境加载操作
```
### 原型
```cpp
__int64 __stdcall HCInject_Continue(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
当我们调用了HCEnv_Load后需要调用这个接口来验证
```
### HCInject_Continue - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_Continue - 进阶用法
```cpp
// 示例2：HCInject_Continue 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_Continue - 高级应用
```cpp
// 示例3：HCInject_Continue 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_SetData
### 描述
```
存自定义二进制数据
```
### 原型
```cpp
__int64 __stdcall HCInject_SetData(__int32 窗口序号,void* 用户数据缓冲区,__int32 数据大小);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
void 用户数据缓冲区 - 数据的来源缓冲区(可以字符串JSON其他类型值)内部会拷贝一份并存储到目标进程中方便下一次获取
__int32 数据大小 - 数据的来源缓冲区中有效数据的大小总大小1024字节
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCInject_SetData - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_SetData - 进阶用法
```cpp
// 示例2：HCInject_SetData 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_SetData - 高级应用
```cpp
// 示例3：HCInject_SetData 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_GetData
### 描述
```
取自定义二进制数据
```
### 原型
```cpp
__int64 __stdcall HCInject_GetData(__int32 窗口序号,void* 用户数据缓冲区,__int32 缓冲区大小);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
void 用户数据缓冲区 - 数据的存储缓冲区取的数据就是用HCInject_SetData接口存的数据
__int32 缓冲区大小 - 数据的存储缓冲区数据的大小不能小于等于0从内部取的数据最大为1024
```
### 返回值
```
查看返回值表
```
### 注意事项
```
取的数据就是用HCInject_SetData接口存的数据
```
### HCInject_GetData - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetData - 进阶用法
```cpp
// 示例2：HCInject_GetData 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetData - 高级应用
```cpp
// 示例3：HCInject_GetData 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
