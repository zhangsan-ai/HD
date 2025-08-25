---
sidebar_position: 37
---

# 🛰️ 插件包装器
## 📌 函数: HCCOM_Load
### 描述
```
加载组件
```
### 原型
```cpp
__int64 __stdcall HCCOM_Load(char* 组件名,__int32 组件索引,__int32 timeOutMs=300000);
```
### 参数
```
char* 组件名 - 组件名(这里的组件名就是HCModule_CALL的参数)不包含后缀
__int32 组件索引 - 1开始最多添加2个组件
__int32 timeOutMs - 当通知接口为堵塞模式下有效默认5分钟超时
```
### 返回值
```
查看返回值表
```
### 注意事项
```
组件名为当前组件文件的名字(不包含后缀!,如果组件文件无后缀可忽视)
如:hdmad.dll所对应的组件名必须是hdmad
头文件:
HDLoader.h
静态库:
HDPacker.librelease版本
HDPackerd.libdebug版本
```
### HCCOM_Load - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_Load - 进阶用法
```cpp
// 示例2：HCCOM_Load 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_Load - 高级应用
```cpp
// 示例3：HCCOM_Load 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCCOM_Register
### 描述
```
注册自定义组件中的接口
```
### 原型
```cpp
__int64 __stdcall HCCOM_Register(char* 函数名,__int64 函数地址);
```
### 参数
```
char* 函数名 - 函数名
__int64 函数地址 - 函数地址
```
### 返回值
```
查看返回值表
```
### 注意事项
```
内置数据初始化函数接口名字:HDDataInit(接口类型是HDComFunType)HDDataInit初始化函数会在加载组件的时候首次调用以便于完成对相关组件数据的初始化(比如:基地址相关表达式的获取)如果需要初始化就自己写一个名字叫做HDDataInit的函数,类型为HDComFunType,并调用HCCOM_Register
头文件:
HDLoader.h
静态库:
HDPacker.librelease版本
HDPackerd.libdebug版本
参考:X86X64自定义插件接口说明
```
### HCCOM_Register - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_Register - 进阶用法
```cpp
// 示例2：HCCOM_Register 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_Register - 高级应用
```cpp
// 示例3：HCCOM_Register 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCCOM_NotifyToTarget
### 描述
```
自定义模块通知目标进程接口
```
### 原型
```cpp
__int64 __stdcall HCCOM_NotifyToTarget(__int32 插件序号,__int32 callType,BOOL 堵塞=FALSE,__int32 超时毫秒=10000,char* 字符串信息1=NULL,char* 字符串信息2=NULL,__int64 CALL地址=0,__int64 rcx=0,__int64 rdx=0,__int64 r8=0,__int64 r9=0,__int64 lparam5=0,__int64 lparam6=0,__int64 lparam7=0,__int64 lparam8=0,BOOL 是否主线程调用=FALSE);
```
```cpp
__int64 __stdcall HCCOM_NotifyToTarget(__int32 插件序号,__int32 callType,BOOL 堵塞=FALSE,__int32 超时毫秒=10000,char* 字符串信息1=NULL,char* 字符串信息2=NULL,__int32 CALL地址=0,__int32 lparam1=0,__int32 lparam2=0,__int32 lparam3=0,__int32 lparam4=0,__int32 lparam5=0,__int32 lparam6=0,__int32 lparam7=0,__int32 lparam8=0,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 插件序号 - 自定义插件支持2个这里分别是1或者2
__int32 callType - 接口编号(内置了找管理员索要)
bool 堵塞 - 调用接口是否堵塞,等待返回注意
__int32 超时毫秒 - 如果堵塞参数为假这个参数有效
char* 字符串信息1-字符串信息2-CALL地址-rcx-rdx-r8-r9-lparam5-lparam6-lparam7-lparam8 - 用户自定义传递参数注意参数类型
char* 字符串信息1-字符串信息2-CALL地址-lparam1-lparam2-lparam3-lparam4-lparam5-lparam6-lparam7-lparam8 - 用户自定义传递参数注意参数类型
bool 是否主线程调用 - 真为主线程调用,前期在绑定了主程序,请先使用HC_HookMaint hread
```
### 返回值
```
查看返回值表
```
### 注意事项
```
内置数据初始化函数接口名字:HDDataInit(接口类型是HDComFunType)HDDataInit初始化函数会在加载组件的时候首次调用以便于完成对相关组件数据的初始化(比如:基地址相关表达式的获取)如果需要初始化就自己写一个名字叫做HDDataInit的函数,类型为HDComFunType,并调用HCCOM_Register
头文件:
HDLoader.h
静态库:
HDPacker.librelease版本
HDPackerd.libdebug版本
```
### HCCOM_NotifyToTarget - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_NotifyToTarget - 进阶用法
```cpp
// 示例2：HCCOM_NotifyToTarget 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_NotifyToTarget - 高级应用
```cpp
// 示例3：HCCOM_NotifyToTarget 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCCOM_NotifyToController
### 描述
```
自定义模块通知中控进程接口
```
### 原型
```cpp
__int64 __stdcall HCCOM_NotifyToController(__int32 插件序号,__int32 callType,BOOL 堵塞=FALSE,__int32 超时毫秒=10000,char* 字符串信息1=NULL,char* 字符串信息2=NULL,__int64 CALL地址=0,__int64 rcx=0,__int64 rdx=0,__int64 r8=0,__int64 r9=0,__int64 lparam5=0,__int64 lparam6=0,__int64 lparam7=0,__int64 lparam8=0,BOOL 是否主线程调用=FALSE);
```
```cpp
__int64 __stdcall HCCOM_NotifyToController(__int32 插件序号,__int32 callType,BOOL 堵塞=FALSE,__int32 超时毫秒=10000,char* 字符串信息1=NULL,char* 字符串信息2=NULL,__int32 CALL地址=0,__int32 lparam1=0,__int32 lparam2=0,__int32 lparam3=0,__int32 lparam4=0,__int32 lparam5=0,__int32 lparam6=0,__int32 lparam7=0,__int32 lparam8=0,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 插件序号 - 自定义插件支持2个这里分别是1或者2
__int32 callType - 接口编号(自定义)中控自己再处理事件回调函数中可以判断调用HCEnv_SetHandleEventCallBack接口设置【注意！自定义编号值在0到1000之间不包含1000！！！！！】
bool 堵塞 - 调用接口是否堵塞,等待返回注意
__int32 超时毫秒 - 如果堵塞参数为假这个参数有效
char* 字符串信息1-字符串信息2-CALL地址-rcx-rdx-r8-r9-lparam5-lparam6-lparam7-lparam8 - 用户自定义传递参数注意参数类型
char* 字符串信息1-字符串信息2-CALL地址-lparam1-lparam2-lparam3-lparam4-lparam5-lparam6-lparam7-lparam8 - 用户自定义传递参数注意参数类型
bool 是否主线程调用 - 真为主线程调用,前期在绑定了主程序,请先使用HC_HookMaint hread
```
### 返回值
```
查看返回值表
中控事件处理回调函数接口类型:
typedef__int32 (__stdcall* HandleEventFunType)(__int32 窗口序号,__int32 插件序号,HDHandleEventInfoInfo);
HDHandleEventInfo结构体:
typedefstructHDHandleEventInfo\n处理事件{__int32 m_callType;\n自定义HDValuem_call;HDValuem_rcx;HDValuem_rdx;HDValuem_r8;HDValuem_r9;HDValuem_lparam5;HDValuem_lparam6;HDValuem_lparam7;HDValuem_lparam8;HDValuem_value;HDValuem_size;charm_buffer[MAX_PATH];charm_buffer2[MAX_PATH];HDValue* m_pRetValue;\n值单独char* m_pRetJson;\n字符串返回}HDHandleEventInfo;
```
### 注意事项
```
内置数据初始化函数接口名字:HDDataInit(接口类型是HDComFunType)HDDataInit初始化函数会在加载组件的时候首次调用以便于完成对相关组件数据的初始化(比如:基地址相关表达式的获取)如果需要初始化就自己写一个名字叫做HDDataInit的函数,类型为HDComFunType,并调用HCCOM_Register
头文件:
HDLoader.h
静态库:
HDPacker.librelease版本
HDPackerd.libdebug版本
```
### HCCOM_NotifyToController - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_NotifyToController - 进阶用法
```cpp
// 示例2：HCCOM_NotifyToController 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_NotifyToController - 高级应用
```cpp
// 示例3：HCCOM_NotifyToController 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCCOM_GetRetJson
### 描述
```
获取自定义模块通知中控进程返回的字符串结果
```
### 原型
```cpp
char* __stdcall HCCOM_GetRetJson(__int32 插件序号);
```
### 参数
```
__int32 插件序号 - 自定义插件支持2个这里分别是1或者2
```
### 返回值
```
查看返回值表
```
### 注意事项
```
返回的字符串是自定义的
在中控中自己设置的事件处理回调函数中设置返回
头文件:
HDLoader.h
静态库:
HDPacker.librelease版本
HDPackerd.libdebug版本
```
### HCCOM_GetRetJson - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_GetRetJson - 进阶用法
```cpp
// 示例2：HCCOM_GetRetJson 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_GetRetJson - 高级应用
```cpp
// 示例3：HCCOM_GetRetJson 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCCOM_FindCode
### 描述
```
特征码查找
```
### 原型
```cpp
__int64 __stdcall HCCOM_FindCode(char* 特征码字符串地址,__int32 偏移,__int32 次数,__int32 type=1,char* 模块名字=NULL);
```
### 参数
```
char* 特征码字符串地址 - 特征码字符串地址(支持??)
__int32 偏移 - 正负偏移
__int32 次数 - 找到的第几次从1开始
__int32 type - 获取的是(基地址/CALL地址/直接地址/地址中的值)1为地址2为基地址3为CALL4为地址中的值
char* 模块名字 - 在指定的模块中搜索,默认为主模块NULL为默认
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCCOM_FindCode - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_FindCode - 进阶用法
```cpp
// 示例2：HCCOM_FindCode 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_FindCode - 高级应用
```cpp
// 示例3：HCCOM_FindCode 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCCOM_PrintLog
### 描述
```
是否打开debugview调试日志信息
```
### 原型
```cpp
__int64 __stdcall HCCOM_PrintLog(BOOL bOpen);
```
### 参数
```
BOOL bOpen - 是否打开
```
### 返回值
```
查看返回值表
```
### 注意事项
```
返回当前是否开启
```
### HCCOM_PrintLog - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_PrintLog - 进阶用法
```cpp
// 示例2：HCCOM_PrintLog 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_PrintLog - 高级应用
```cpp
// 示例3：HCCOM_PrintLog 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCCOM_GetVersion
### 描述
```
获取自定义内存插件版本号
```
### 原型
```cpp
__int64 __stdcall HCCOM_GetVersion();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
返回当前是否开启
```
### HCCOM_GetVersion - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_GetVersion - 进阶用法
```cpp
// 示例2：HCCOM_GetVersion 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCCOM_GetVersion - 高级应用
```cpp
// 示例3：HCCOM_GetVersion 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
