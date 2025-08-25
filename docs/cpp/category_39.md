---
sidebar_position: 40
---

# 🛰️ 主板机模块[SC]
## 📌 函数: HCSC_SetPath
### 描述
```
设置HDScrcpy投屏软件根目录,并重启adb相当于重置一下adb环境
```
### 原型
```cpp
__int64 __stdcall HCSC_SetPath(char* rootPath);
```
### 参数
```
char* rootPath - 根目录(hdscrcpy.exeadb.exe所在目录)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
设置HDScrcpy投屏软件根目录如:J:\\hdscrcpy2.7\\默认C:\\hdscrcpy2.7\\
软件在群文件或者找管理索取
```
### HCSC_SetPath - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCSC_SetPath - 进阶用法
```cpp
// 示例2：HCSC_SetPath 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCSC_SetPath - 高级应用
```cpp
// 示例3：HCSC_SetPath 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCSC_ResetAdb
### 描述
```
重置adb服务
```
### 原型
```cpp
__int64 __stdcall HCSC_ResetAdb(char* ipInfo);
```
### 参数
```
char* ipInfo - IP端口信息多个IP信息用\"|\"隔开IP和端口用\"
```
### 返回值
```
查看返回值表
1.当传递NULL空表示重启ABD此时接口返回的是是否重启成功具体看json返回2.当传递有效IP字符串信息表示重启ADB的同时会连接对应的IP端口此时接口返回的是成功连接数量如果是0表示连接数为0或者重启失败具体看json返回
```
### 注意事项
```
无
```
### HCSC_ResetAdb - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCSC_ResetAdb - 进阶用法
```cpp
// 示例2：HCSC_ResetAdb 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCSC_ResetAdb - 高级应用
```cpp
// 示例3：HCSC_ResetAdb 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCSC_QueryDevices
### 描述
```
查询当前所有可用的设备
```
### 原型
```cpp
__int64 __stdcall HCSC_QueryDevices();
```
### 返回值
```
查看返回值表
成功json字符串信息:设备1名字|设备2名字|设备3名字|以\"|\"分割
如:01aa8320032fe731|127.0.0.1:16384|emulator-5556|emulator-5558|
失败json字符串信息:连接失败信息
```
### 注意事项
```
无
设备号类型:1.emulator-5554/127.0.0.1:5009模拟器Device(-s)
2.01aa8320032fe731手机Device(-d)
3.127.0.0.1:5009tcpipDevice(-e)
```
### HCSC_QueryDevices - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCSC_QueryDevices - 进阶用法
```cpp
// 示例2：HCSC_QueryDevices 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCSC_QueryDevices - 高级应用
```cpp
// 示例3：HCSC_QueryDevices 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCSC_ConnectDevices
### 描述
```
连接设备并通讯窗口序号（需要先初始化中控和登录！！HCHD_LoginHCEnv_Init/HCEnv_InitEx）
```
### 原型
```cpp
__int64 __stdcall HCSC_ConnectDevices(__int32 winIndex,char* devicesName,char* cmdLparam,__int32 type,__int32 w,__int32 h,__int32 timeOut);
```
### 参数
```
__int32 winIndex - 窗口序号devicesName
```
### 返回值
```
成功返回打开的窗口PID
失败返回:查看返回值表
```
### 注意事项
```
1.该接口会自动连接指定的设备号
2.同时会进行通讯和重连判断(需要加载HD驱动)
3.无需再通讯
设备号类型:1.emulator-5554/127.0.0.1:5009模拟器Device(-s)
2.01aa8320032fe731手机Device(-d)
3.127.0.0.1:5009tcpipDevice(-e)
```
### HCSC_ConnectDevices - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCSC_ConnectDevices - 进阶用法
```cpp
// 示例2：HCSC_ConnectDevices 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCSC_ConnectDevices - 高级应用
```cpp
// 示例3：HCSC_ConnectDevices 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
