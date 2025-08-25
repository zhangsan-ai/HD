---
sidebar_position: 42
---

# 🛰️ 虚拟机DMA模块[VMDMA]
## 📌 函数: HCVMDMA_GetVersion
### 描述
```
获取DMA服务器版本号
```
### 原型
```cpp
__int64 __stdcall HCVMDMA_GetVersion(__int32 windowsIndex);
```
### 参数
```
__int32 windowsIndex - 窗口序号
```
### 返回值
```
查看返回值表
```
### 注意事项
```
返回长整数:如:240401格式:24年-04版本号-01小版本号
```
### HCVMDMA_GetVersion - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetVersion - 进阶用法
```cpp
// 示例2：HCVMDMA_GetVersion 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetVersion - 高级应用
```cpp
// 示例3：HCVMDMA_GetVersion 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_IsVersion
### 描述
```
判断HD插件的DMA接口和DMA服务器接口版本是否一致
```
### 原型
```cpp
__int64 __stdcall HCVMDMA_IsVersion(__int32 windowsIndex);
```
### 参数
```
__int32 windowsIndex - 窗口序号
```
### 返回值
```
查看返回值表
真假版本是否一致
```
### HCVMDMA_IsVersion - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_IsVersion - 进阶用法
```cpp
// 示例2：HCVMDMA_IsVersion 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_IsVersion - 高级应用
```cpp
// 示例3：HCVMDMA_IsVersion 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_StartServer
### 描述
```
开启DMA服务器
```
### 原型
```cpp
__int64 __stdcall HCVMDMA_StartServer(char* ip=\"0.0.0.0\",int port=6532,char* serverRootPath=\"\");
```
### 参数
```
char* ip - IP默认
int port - 端口默认
char* serverRootPath - 服务器exe根目录默认
```
### 返回值
```
查看返回值表
```
### 注意事项
```
服务器在群下载或者官网下载
兼容指定自定义进程名(全路径\\XXXX.exe)XXXX.exe为自定义进程名不指定进程名表示使用内置进程名(全路径\\HDVMDma.exe)不指定路径(当前中控exe根目录\\HDVMDma.exe)
```
### HCVMDMA_StartServer - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_StartServer - 进阶用法
```cpp
// 示例2：HCVMDMA_StartServer 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_StartServer - 高级应用
```cpp
// 示例3：HCVMDMA_StartServer 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_CloseServer
### 描述
```
关闭服务器,同时结束进程
```
### 原型
```cpp
__int64 __stdcall HCVMDMA_CloseServer();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVMDMA_CloseServer - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_CloseServer - 进阶用法
```cpp
// 示例2：HCVMDMA_CloseServer 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_CloseServer - 高级应用
```cpp
// 示例3：HCVMDMA_CloseServer 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_ServerIsStart
### 描述
```
服务器是否已经开启
```
### 原型
```cpp
__int64 __stdcall HCVMDMA_ServerIsStart(char* ip=\"127.0.0.1\",int port=6532);
```
### 参数
```
char* ip - 指定服务器IP,指定后可以用来判断服务器是否开启
int port - 指定服务器端口,指定后可以用来判断服务器是否开启
```
### 返回值
```
查看返回值表
```
### 注意事项
```
循环检查直到服务器开启成功
如果使用HCVMDMA_StartServer开启服务器,不指定IP和端口,则使用的是HCVMDMA_ServerIsStart指定的IP和端口
```
### HCVMDMA_ServerIsStart - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ServerIsStart - 进阶用法
```cpp
// 示例2：HCVMDMA_ServerIsStart 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ServerIsStart - 高级应用
```cpp
// 示例3：HCVMDMA_ServerIsStart 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_Init
### 描述
```
初始化并关联虚拟机
```
### 原型
```cpp
__int64 __stdcall HCVMDMA_Init(__int32 windowsIndex,__int32 vmPid,__int32 timeOut=10000);
```
### 参数
```
__int32 windowsIndex - 窗口序号
__int32 vmPid - 虚拟机PID进程名是
__int32 timeOut - 超时等待时间
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先开启服务器HCVMDMA_StartServer
内部会自动调用HCEnv_Load接口,使窗口序号和虚拟机进程关联绑定然后初始化虚拟机相关资源
后续就可以使用该窗口虚拟机去操作对应的虚拟机中的进程
```
### HCVMDMA_Init - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_Init - 进阶用法
```cpp
// 示例2：HCVMDMA_Init 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_Init - 高级应用
```cpp
// 示例3：HCVMDMA_Init 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_GetPid
### 描述
```
通过进程名获取PID
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_GetPid - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetPid - 进阶用法
```cpp
// 示例2：HCVMDMA_GetPid 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetPid - 高级应用
```cpp
// 示例3：HCVMDMA_GetPid 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_Read
### 描述
```
读地址,仅支持1248地址大小
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_Read - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_Read - 进阶用法
```cpp
// 示例2：HCVMDMA_Read 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_Read - 高级应用
```cpp
// 示例3：HCVMDMA_Read 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_ReadFloat
### 描述
```
读单浮点数
```
### 原型
### 返回值
```
查看返回值表
成功返回:浮点数从json返回获取
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_ReadFloat - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ReadFloat - 进阶用法
```cpp
// 示例2：HCVMDMA_ReadFloat 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ReadFloat - 高级应用
```cpp
// 示例3：HCVMDMA_ReadFloat 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_ReadDouble
### 描述
```
读双浮点数
```
### 原型
### 返回值
```
查看返回值表
成功返回:浮点数从json返回获取
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_ReadDouble - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ReadDouble - 进阶用法
```cpp
// 示例2：HCVMDMA_ReadDouble 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ReadDouble - 高级应用
```cpp
// 示例3：HCVMDMA_ReadDouble 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_ReadBytes
### 描述
```
读字节集
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_ReadBytes - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ReadBytes - 进阶用法
```cpp
// 示例2：HCVMDMA_ReadBytes 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ReadBytes - 高级应用
```cpp
// 示例3：HCVMDMA_ReadBytes 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_Write
### 描述
```
写地址,仅支持1248地址大小
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_Write - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_Write - 进阶用法
```cpp
// 示例2：HCVMDMA_Write 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_Write - 高级应用
```cpp
// 示例3：HCVMDMA_Write 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_WriteFloat
### 描述
```
写单浮点数
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_WriteFloat - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_WriteFloat - 进阶用法
```cpp
// 示例2：HCVMDMA_WriteFloat 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_WriteFloat - 高级应用
```cpp
// 示例3：HCVMDMA_WriteFloat 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_WriteDouble
### 描述
```
写双浮点数
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_WriteDouble - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_WriteDouble - 进阶用法
```cpp
// 示例2：HCVMDMA_WriteDouble 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_WriteDouble - 高级应用
```cpp
// 示例3：HCVMDMA_WriteDouble 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_WriteBytes
### 描述
```
写字节集
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_WriteBytes - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_WriteBytes - 进阶用法
```cpp
// 示例2：HCVMDMA_WriteBytes 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_WriteBytes - 高级应用
```cpp
// 示例3：HCVMDMA_WriteBytes 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_GetProcAddr
### 描述
```
获取函数地址
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_GetProcAddr - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetProcAddr - 进阶用法
```cpp
// 示例2：HCVMDMA_GetProcAddr 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetProcAddr - 高级应用
```cpp
// 示例3：HCVMDMA_GetProcAddr 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_GetBaseModule
### 描述
```
获取主模块地址
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_GetBaseModule - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetBaseModule - 进阶用法
```cpp
// 示例2：HCVMDMA_GetBaseModule 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetBaseModule - 高级应用
```cpp
// 示例3：HCVMDMA_GetBaseModule 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_GetModule
### 描述
```
获取模块地址
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_GetModule - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetModule - 进阶用法
```cpp
// 示例2：HCVMDMA_GetModule 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetModule - 高级应用
```cpp
// 示例3：HCVMDMA_GetModule 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_ShellCodeInitX64
### 描述
```
初始化获取一个某个进程(x64)的执行环境句柄
```
### 原型
### 返回值
```
查看返回值表
成功返回:执行环境句柄,是一个8字节
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
支持内置保存执行环境最多可以保存20个进程执行环境,保存策略为->同线程-同虚拟机-指定虚拟机中的进程PID-执行环境-绑定
执行环境句柄解析:
1.可以理解成一个空间可以与物理机进行交互,实现参数传递和调用CALL
2.每次调用都会获取一个全新的执行环境句柄(实现物理机中控多线程调用)
3.物理机中控在一个执行环境句柄只能同时一个线程执行,如果要多线程执行请获取多个执行环境句柄
4.此接口不适合多线程获取,请在初始化最开始把所需要的执行环境句柄的数量初始化好,方便物理机中控多线程中单独分别使用
```
### HCVMDMA_ShellCodeInitX64 - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ShellCodeInitX64 - 进阶用法
```cpp
// 示例2：HCVMDMA_ShellCodeInitX64 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ShellCodeInitX64 - 高级应用
```cpp
// 示例3：HCVMDMA_ShellCodeInitX64 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_RunShellCodeX64
### 描述
```
通过指定一个初进程(x64)的执行环境句柄来执行CALL
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
执行环境句柄解析:
1.可以理解成一个空间可以与物理机进行交互,实现参数传递和调用CALL
2.如果需要参数传递,请自行往excuteEnvAddr+0x8写参数(参数最大缓冲区为0x200字节),同时自己的汇编机器码要引入自己参数的地址
```
### HCVMDMA_RunShellCodeX64 - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RunShellCodeX64 - 进阶用法
```cpp
// 示例2：HCVMDMA_RunShellCodeX64 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RunShellCodeX64 - 高级应用
```cpp
// 示例3：HCVMDMA_RunShellCodeX64 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_ShellCodeInitX86
### 描述
```
初始化获取一个某个进程(x86)的执行环境句柄
```
### 原型
### 返回值
```
查看返回值表
成功返回:执行环境句柄,是一个8字节
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
支持内置保存执行环境最多可以保存20个进程执行环境,保存策略为->同线程-同虚拟机-指定虚拟机中的进程PID-执行环境-绑定
执行环境句柄解析:
1.可以理解成一个空间可以与物理机进行交互,实现参数传递和调用CALL
2.每次调用都会获取一个全新的执行环境句柄(实现物理机中控多线程调用)
3.物理机中控在一个执行环境句柄只能同时一个线程执行,如果要多线程执行请获取多个执行环境句柄
4.此接口不适合多线程获取,请在初始化最开始把所需要的执行环境句柄的数量初始化好,方便物理机中控多线程中单独分别使用
```
### HCVMDMA_ShellCodeInitX86 - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ShellCodeInitX86 - 进阶用法
```cpp
// 示例2：HCVMDMA_ShellCodeInitX86 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_ShellCodeInitX86 - 高级应用
```cpp
// 示例3：HCVMDMA_ShellCodeInitX86 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_RunShellCodeX86
### 描述
```
通过指定一个初进程(x86)的执行环境句柄来执行CALL
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
执行环境句柄解析:
1.可以理解成一个空间可以与物理机进行交互,实现参数传递和调用CALL
2.如果需要参数传递,请自行往excuteEnvAddr+0x8写参数(参数最大缓冲区为0x200字节),同时自己的汇编机器码要引入自己参数的地址
```
### HCVMDMA_RunShellCodeX86 - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RunShellCodeX86 - 进阶用法
```cpp
// 示例2：HCVMDMA_RunShellCodeX86 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RunShellCodeX86 - 高级应用
```cpp
// 示例3：HCVMDMA_RunShellCodeX86 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_FindCodeX86
### 描述
```
特征码搜索(X86)(指定模块名)
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_FindCodeX86 - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_FindCodeX86 - 进阶用法
```cpp
// 示例2：HCVMDMA_FindCodeX86 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_FindCodeX86 - 高级应用
```cpp
// 示例3：HCVMDMA_FindCodeX86 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_FindCodeX86Ex
### 描述
```
特征码搜索(X86)(指定开始地址和搜索大小)
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_FindCodeX86Ex - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_FindCodeX86Ex - 进阶用法
```cpp
// 示例2：HCVMDMA_FindCodeX86Ex 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_FindCodeX86Ex - 高级应用
```cpp
// 示例3：HCVMDMA_FindCodeX86Ex 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_FindCodeX64
### 描述
```
特征码搜索(X64)(指定模块名)
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_FindCodeX64 - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_FindCodeX64 - 进阶用法
```cpp
// 示例2：HCVMDMA_FindCodeX64 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_FindCodeX64 - 高级应用
```cpp
// 示例3：HCVMDMA_FindCodeX64 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_FindCodeX64Ex
### 描述
```
特征码搜索(X64)(指定开始地址和搜索大小)
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_FindCodeX64Ex - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_FindCodeX64Ex - 进阶用法
```cpp
// 示例2：HCVMDMA_FindCodeX64Ex 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_FindCodeX64Ex - 高级应用
```cpp
// 示例3：HCVMDMA_FindCodeX64Ex 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_Close
### 描述
```
卸载并关闭连接虚拟机
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
与HCVMDMA_Init是一对接口
内部会自动调用HCEnv_UnLoadEx接口,使窗口序号和虚拟机进程断开绑定然后释放虚拟机相关资源
一旦调用,则虚拟机需要被关闭后开启而不是重启PID不能一样
```
### HCVMDMA_Close - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_Close - 进阶用法
```cpp
// 示例2：HCVMDMA_Close 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_Close - 高级应用
```cpp
// 示例3：HCVMDMA_Close 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_InitCapture
### 描述
```
初始化截图环境
```
### 原型
### 返回值
```
查看返回值表
成功:截图句柄,一个虚拟机只能一个,不要多获取,自行保存维护,方便后续调用其他接口传参
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
小技巧:
1.初始化接口有根据不同虚拟机,失败概率不同,为了提高初始化成功率,可以尝试自启动任务管理器,让系统激活起来,初始化完成就可以把任务管理器关掉了
2.步骤:打开虚拟机-关联虚拟机-检查是否有管理器PID-开始初始化键鼠/截图环境-如果失败3次直接重启虚拟机
3.如图操作自启任务管理器就行
4.支持内置保存截图环境一个虚拟机固定一个,自动判断是否之前初始化过
如果有的虚拟机初始化句柄超时建议:
```
### HCVMDMA_InitCapture - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_InitCapture - 进阶用法
```cpp
// 示例2：HCVMDMA_InitCapture 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_InitCapture - 高级应用
```cpp
// 示例3：HCVMDMA_InitCapture 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_Capture
### 描述
```
截图一次(获取一次虚拟机全屏数据到物理机)
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_Capture - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_Capture - 进阶用法
```cpp
// 示例2：HCVMDMA_Capture 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_Capture - 高级应用
```cpp
// 示例3：HCVMDMA_Capture 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_OpenCapture
### 描述
```
开启截图(内部会开启一条线程循环调用HCVMDMA_Capture)
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_OpenCapture - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_OpenCapture - 进阶用法
```cpp
// 示例2：HCVMDMA_OpenCapture 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_OpenCapture - 高级应用
```cpp
// 示例3：HCVMDMA_OpenCapture 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_CloseCapture
### 描述
```
关闭截图(内部会关闭之前开启的线程)和HCVMDMA_OpenCapture是一对接口
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_CloseCapture - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_CloseCapture - 进阶用法
```cpp
// 示例2：HCVMDMA_CloseCapture 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_CloseCapture - 高级应用
```cpp
// 示例3：HCVMDMA_CloseCapture 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_InitMouseKey
### 描述
```
初始化键鼠环境
```
### 原型
### 返回值
```
查看返回值表
成功:返回键鼠句柄一个虚拟机只能一个,不要多获取,自行保存维护,方便后续调用其他接口传参
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
小技巧:
1.初始化接口有根据不同虚拟机,失败概率不同,为了提高初始化成功率,可以尝试自启动任务管理器,让系统激活起来,初始化完成就可以把任务管理器关掉了
2.步骤:打开虚拟机-关联虚拟机-检查是否有管理器PID-开始初始化键鼠/截图环境-如果失败3次直接重启虚拟机
3.如图操作自启任务管理器就行
4.支持内置保存键鼠环境一个虚拟机固定一个,自动判断是否之前初始化过
如果有的虚拟机初始化句柄超时建议:
```
### HCVMDMA_InitMouseKey - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_InitMouseKey - 进阶用法
```cpp
// 示例2：HCVMDMA_InitMouseKey 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_InitMouseKey - 高级应用
```cpp
// 示例3：HCVMDMA_InitMouseKey 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_MoveTo
### 描述
```
鼠标移动(不包含轨迹)
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_MoveTo - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_MoveTo - 进阶用法
```cpp
// 示例2：HCVMDMA_MoveTo 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_MoveTo - 高级应用
```cpp
// 示例3：HCVMDMA_MoveTo 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_LeftDown
### 描述
```
鼠标左键按下
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_LeftDown - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_LeftDown - 进阶用法
```cpp
// 示例2：HCVMDMA_LeftDown 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_LeftDown - 高级应用
```cpp
// 示例3：HCVMDMA_LeftDown 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_LeftUp
### 描述
```
鼠标左键弹起
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_LeftUp - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_LeftUp - 进阶用法
```cpp
// 示例2：HCVMDMA_LeftUp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_LeftUp - 高级应用
```cpp
// 示例3：HCVMDMA_LeftUp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_LeftClick
### 描述
```
鼠标左键点击
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_LeftClick - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_LeftClick - 进阶用法
```cpp
// 示例2：HCVMDMA_LeftClick 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_LeftClick - 高级应用
```cpp
// 示例3：HCVMDMA_LeftClick 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_LeftDoubleClick
### 描述
```
鼠标左键双击
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_LeftDoubleClick - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_LeftDoubleClick - 进阶用法
```cpp
// 示例2：HCVMDMA_LeftDoubleClick 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_LeftDoubleClick - 高级应用
```cpp
// 示例3：HCVMDMA_LeftDoubleClick 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_MiddleDown
### 描述
```
鼠标中键按下
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_MiddleDown - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_MiddleDown - 进阶用法
```cpp
// 示例2：HCVMDMA_MiddleDown 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_MiddleDown - 高级应用
```cpp
// 示例3：HCVMDMA_MiddleDown 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_MiddleUp
### 描述
```
鼠标中键弹起
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_MiddleUp - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_MiddleUp - 进阶用法
```cpp
// 示例2：HCVMDMA_MiddleUp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_MiddleUp - 高级应用
```cpp
// 示例3：HCVMDMA_MiddleUp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_MiddleClick
### 描述
```
鼠标中键点击
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_MiddleClick - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_MiddleClick - 进阶用法
```cpp
// 示例2：HCVMDMA_MiddleClick 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_MiddleClick - 高级应用
```cpp
// 示例3：HCVMDMA_MiddleClick 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_MiddleDoubleClick
### 描述
```
鼠标中键双击
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_MiddleDoubleClick - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_MiddleDoubleClick - 进阶用法
```cpp
// 示例2：HCVMDMA_MiddleDoubleClick 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_MiddleDoubleClick - 高级应用
```cpp
// 示例3：HCVMDMA_MiddleDoubleClick 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_RightDown
### 描述
```
鼠标右键按下
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_RightDown - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RightDown - 进阶用法
```cpp
// 示例2：HCVMDMA_RightDown 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RightDown - 高级应用
```cpp
// 示例3：HCVMDMA_RightDown 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_RightUp
### 描述
```
鼠标右键弹起
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_RightUp - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RightUp - 进阶用法
```cpp
// 示例2：HCVMDMA_RightUp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RightUp - 高级应用
```cpp
// 示例3：HCVMDMA_RightUp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_RightClick
### 描述
```
鼠标右键点击
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_RightClick - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RightClick - 进阶用法
```cpp
// 示例2：HCVMDMA_RightClick 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RightClick - 高级应用
```cpp
// 示例3：HCVMDMA_RightClick 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_RightDoubleClick
### 描述
```
鼠标右键双击
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_RightDoubleClick - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RightDoubleClick - 进阶用法
```cpp
// 示例2：HCVMDMA_RightDoubleClick 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_RightDoubleClick - 高级应用
```cpp
// 示例3：HCVMDMA_RightDoubleClick 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_WheelUp
### 描述
```
鼠标滚轮滚上
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_WheelUp - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_WheelUp - 进阶用法
```cpp
// 示例2：HCVMDMA_WheelUp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_WheelUp - 高级应用
```cpp
// 示例3：HCVMDMA_WheelUp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_WheelDown
### 描述
```
鼠标滚轮滚下
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_WheelDown - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_WheelDown - 进阶用法
```cpp
// 示例2：HCVMDMA_WheelDown 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_WheelDown - 高级应用
```cpp
// 示例3：HCVMDMA_WheelDown 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_KeyDown
### 描述
```
键盘按下
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_KeyDown - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_KeyDown - 进阶用法
```cpp
// 示例2：HCVMDMA_KeyDown 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_KeyDown - 高级应用
```cpp
// 示例3：HCVMDMA_KeyDown 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_KeyUp
### 描述
```
键盘弹起
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_KeyUp - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_KeyUp - 进阶用法
```cpp
// 示例2：HCVMDMA_KeyUp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_KeyUp - 高级应用
```cpp
// 示例3：HCVMDMA_KeyUp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_KeyClick
### 描述
```
键盘敲击
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_KeyClick - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_KeyClick - 进阶用法
```cpp
// 示例2：HCVMDMA_KeyClick 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_KeyClick - 高级应用
```cpp
// 示例3：HCVMDMA_KeyClick 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_SendUnicode
### 描述
```
发送unicode字符串
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_SendUnicode - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_SendUnicode - 进阶用法
```cpp
// 示例2：HCVMDMA_SendUnicode 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_SendUnicode - 高级应用
```cpp
// 示例3：HCVMDMA_SendUnicode 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_SendAscii
### 描述
```
发送ascii字符串
```
### 原型
### 返回值
```
查看返回值表
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_SendAscii - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_SendAscii - 进阶用法
```cpp
// 示例2：HCVMDMA_SendAscii 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_SendAscii - 高级应用
```cpp
// 示例3：HCVMDMA_SendAscii 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_GetPidList
### 描述
```
获取PID列表
```
### 原型
### 返回值
```
查看返回值表
返回值:PID数量小于等于0为错误大于0为数量返回JSON:具体进程PID从最近json获取字符串pid1,name1|pid2,name2|pid3,name3|\"|\"分隔符每个进程信息
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
C++解析获取案例:
\n最大51个数量存储量autojsonStr=HCEnv_GetRetJson(windowsIndex);if(jsonStr==NULL)returnERROR_获取数据失败;\npid1,name1|pid2,name2|pid3,name3|vector<string>pidNameArray;Tool::HSplitStringA(jsonStr,pidNameArray,\"|\");if(pidNameArray.size()<=0)returnRET_失败;for(int index=0;index<pidSize;index++){\npid1,name1，vector<string>proArray;Tool::HSplitStringA(pidNameArray[index]+\",\",proArray,\",\");if(proArray.size()<2)continue;if(atoi(proArray[0].c_str())==pid)returnRET_成功;\n元素1就是PID元素2是进程名}returnRET_失败;\n没找到
```
### HCVMDMA_GetPidList - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetPidList - 进阶用法
```cpp
// 示例2：HCVMDMA_GetPidList 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_GetPidList - 高级应用
```cpp
// 示例3：HCVMDMA_GetPidList 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVMDMA_IsExistPid
### 描述
```
对应虚拟机中的进程PID是否存在
```
### 原型
### 返回值
```
查看返回值表
返回值:01
```
### 注意事项
```
需要先初始化关联虚拟机HCVMDMA_Init
```
### HCVMDMA_IsExistPid - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_IsExistPid - 进阶用法
```cpp
// 示例2：HCVMDMA_IsExistPid 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVMDMA_IsExistPid - 高级应用
```cpp
// 示例3：HCVMDMA_IsExistPid 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
