# 🛰️ 基础功能接口
## 📌 函数: HCHD_GetVersion
### 描述
```
获取当前插件版本号
```
### 原型
```
__int64 __stdcall HCHD_GetVersion();
```
### 返回值
```
返回值即是版本号长整数型(8字节)
```
### 注意事项
```
无
```
### HCHD_GetVersion - 基础示例
```
__int64 version = HCHD_GetVersion();
printf("当前插件版本号:%lld",version);
//或
HDValue version = HCHD_GetVersion();
printf("当前插件版本号:%lld",version);
```
### HCHD_GetVersion - 进阶用法
```
// 示例2：HCHD_GetVersion 调用
__int64 version = HCHD_GetVersion();
printf("当前插件版本号:%lld",version);
//或
HDValue version = HCHD_GetVersion();
printf("当前插件版本号:%lld",version);
```
### HCHD_GetVersion - 高级应用
```
// 示例3：HCHD_GetVersion 高级用法
__int64 version = HCHD_GetVersion();
printf("当前插件版本号:%lld",version);
//或
HDValue version = HCHD_GetVersion();
printf("当前插件版本号:%lld",version);
```

---
## 📌 函数: HCEnv_GetRetJson
### 描述
```
获取最近一次调用接口返回的json字符串
```
### 原型
```
char* __stdcall HCEnv_GetRetJson(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号可以包含0表示中控
```
### 返回值
```
查看返回值表
```
### 注意事项
```
并不是所有接口都返回json字符串
有一些接口返回单一的值就没必要调用这个接口
一些接口需要拿到字符串信息返回,那么这些字符串会存在json字符串中,需要自己调用此接口获取
```
### HCEnv_GetRetJson - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetRetJson - 进阶用法
```
// 示例2：HCEnv_GetRetJson 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetRetJson - 高级应用
```
// 示例3：HCEnv_GetRetJson 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_GetRetValue
### 描述
```
获取最近一次调用接口返回的值(用于检测是否有错)
```
### 原型
```
__int64 __stdcall HCEnv_GetRetValue(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号可以包含0表示中控
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCEnv_GetRetValue - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetRetValue - 进阶用法
```
// 示例2：HCEnv_GetRetValue 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetRetValue - 高级应用
```
// 示例3：HCEnv_GetRetValue 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_GetErrorStr
### 描述
```
通过传递HD返回值获取字符串信息
```
### 原型
```
char* __stdcall HCEnv_GetErrorStr(__int32 ret);
```
### 参数
```
__int32 ret - HD返回值
```
### 返回值
```
查看返回值表
```
### HCEnv_GetErrorStr - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetErrorStr - 进阶用法
```
// 示例2：HCEnv_GetErrorStr 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetErrorStr - 高级应用
```
// 示例3：HCEnv_GetErrorStr 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_GetLastError
### 描述
```
获取最近一次调用WIN32API错误值
```
### 原型
```
__int64 __stdcall HCEnv_GetLastError();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCEnv_GetLastError - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetLastError - 进阶用法
```
// 示例2：HCEnv_GetLastError 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetLastError - 高级应用
```
// 示例3：HCEnv_GetLastError 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_GetMaxWindowNum
### 描述
```
获取最大窗口数
```
### 原型
```
__int64 __stdcall HCEnv_GetMaxWindowNum();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
窗口序号不能大于等于这个返回值同时也不能小于0
```
### HCEnv_GetMaxWindowNum - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetMaxWindowNum - 进阶用法
```
// 示例2：HCEnv_GetMaxWindowNum 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetMaxWindowNum - 高级应用
```
// 示例3：HCEnv_GetMaxWindowNum 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_GetLastInfo
### 描述
```
获取当前环境搭建流程中的操作信息
```
### 原型
```
__int64 __stdcall HCInject_GetLastInfo(__int32 窗口序号);
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
这个CALL返回HD状态信息可以确定当前处于那个步骤
typedefenumHD状态信息{HD状态信息_无=0,\n0HD状态信息_DLL环境_加载全局成功=1,\n1HD状态信息_DLL环境_加载全局失败=2,\n2HD状态信息_DLL环境_窗口序号不符合=3,\n3HD状态信息_DLL环境_进程不符合=4,\n4HD状态信息_DLL环境_打开句柄失败=5,\n5HD状态信息_DLL环境_获取内存失败=6,\n6HD状态信息_DLL环境_等待继续=20,\n20需要调用HCInject_Continue()HD状态信息_通讯环境_开始=21,\n21HD状态信息_通讯环境_成功=22,\n22HD状态信息_通讯环境_失败=23,\n23HD状态信息_通讯环境_打开句柄失败=24,\n24HD状态信息_通讯环境_获取内存失败=25,\n25HD状态信息_接口映射_成功=40,\n40自制通讯协议创建HD状态信息_接口映射_失败=41,\n41HD状态信息_LUA_成功=60,\n60可以执行LUAHD状态信息_LUA_失败=61,\n61不可以执行LUAHD状态信息_数据库_开启=80,\n80需要调用HHIT2_Load()的时候参数bOpenData设置为1HD状态信息_数据库_未开启=81,\n81HD状态信息_数据库_开启失败=82,\n82内置特征码有误联系管理员HD状态信息_验证_有误=100,\n100联系管理员HD状态信息_监听_成功=120,\n120【【【【大于等于120说明可以调用接口了】】】】HD状态信息_监听_失败=121,\n121基本是不会出现这个错误HD状态信息_挂接主线_开启=140,\n140调用HD状态信息_挂接主线_进入=141,\n141准备挂接HD状态信息_挂接主线_尝试中=142,\n142处于这个阶段需要用SetHwnd()暂时没用HD状态信息_挂接主线_成功=143,\n143成功挂接所有关于可以主线程调用的接口的参数\"是否主线程调用\"生效HD状态信息_挂接主线_失败=144,\n144HD状态信息_挂接主线_已经开启=145,\n145已经开启了HD状态信息_加载_延迟=146,\n2秒延迟HD状态信息_通讯加载失败=147\n2秒延迟}HD状态信息;
```
### HCInject_GetLastInfo - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetLastInfo - 进阶用法
```
// 示例2：HCInject_GetLastInfo 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_GetLastInfo - 高级应用
```
// 示例3：HCInject_GetLastInfo 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_GetExcuteEnvInfo
### 描述
```
获取通讯插件所绑定的目标进程的执行线程环境信息
```
### 原型
```
__int64 __stdcall HCEnv_GetExcuteEnvInfo(__int32 窗口序号);
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
无
```
### HCEnv_GetExcuteEnvInfo - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetExcuteEnvInfo - 进阶用法
```
// 示例2：HCEnv_GetExcuteEnvInfo 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_GetExcuteEnvInfo - 高级应用
```
// 示例3：HCEnv_GetExcuteEnvInfo 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCInject_SetPlugin
### 描述
```
设置插件信息
```
### 原型
```
__int64 __stdcall HCInject_SetPlugin(char* 发布版本DLL名=NULL,char* 调试版本DLL名=NULL);
```
### 参数
```
char* 发布版本DLL名 - 为空则根据不同版本内置了DLL名字
char* 调试版本DLL名 - 为空则根据不同版本内置了DLL名字
```
### 返回值
```
查看返回值表
```
### 注意事项
```
易语言/火山/Python/炫语言/C#等语言:还需要拿到模块源码更改导入DLL名字需要与自定义DLL同名
内置版本名规则:
\n======64位#ifdef_WIN64#ifdef_UNICODE\n64位W版本std::stringHCInject::g_发布版本DLL名字=\"hd64.dll\";std::stringHCInject::g_调试版本DLL名字=\"hddebug64.dll\";#else\n64位A版本std::stringHCInject::g_发布版本DLL名字=\"hd64a.dll\";std::stringHCInject::g_调试版本DLL名字=\"hddebug64a.dll\";#endif\n======32位#else#ifdef_UNICODE\n32位W版本std::stringHCInject::g_发布版本DLL名字=\"hd.dll\";std::stringHCInject::g_调试版本DLL名字=\"hddebug.dll\";#else\n32位A版本std::stringHCInject::g_发布版本DLL名字=\"hda.dll\";std::stringHCInject::g_调试版本DLL名字=\"hddebuga.dll\";#endif#endif\n》》》》》》
```
### HCInject_SetPlugin - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_SetPlugin - 进阶用法
```
// 示例2：HCInject_SetPlugin 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCInject_SetPlugin - 高级应用
```
// 示例3：HCInject_SetPlugin 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
