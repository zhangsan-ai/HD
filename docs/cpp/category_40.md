---
sidebar_position: 41
---

# 🛰️ 虚拟机[VM]
## 📌 函数: HCVM_Run
### 描述
```
运行虚拟机(管理员运行)
```
### 原型
```cpp
__int64 __stdcall HCVM_Run(__int32 windowsIndex,char* vmPath,char* vmxSysPath,BOOL bGui=FALSE,char* lparam=NULL,longvmType=0,longtype=0);
```
### 参数
```
__int32 windowsIndex - 窗口序号表示只是打开虚拟机注意
char* vmPath - VM安装路径如
char* vmxSysPath - 虚拟机vmx路径如
bool bGui - 是否界面GUI显示启动虚拟机
char* lparam - 额外命令参数
 vmType - 0VMwareWorkstation-Tws默认为01VMwarePlayer-Tplayer
 type - 默认0就行保留
```
### 返回值
```
查看返回值表
返回值:01
```
### 注意事项
```
指令:
D:\vmwin10>D:\vm16\vmrun-Twsstart\"D:/vmwin10/Windows10x64.vmx\"guilparam
D:\vmwin10>D:\vm16\vmrun-Twsstart\"D:/vmwin10/Windows10x64.vmx\"noguilparam
C++案例:
autoret=HCVM_Run(0,\"D:\\vm16\\\",\"D:\\vmwin10\\Windows10x64.vmx\",TRUE,0,0,0);
```
### HCVM_Run - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVM_Run - 进阶用法
```cpp
// 示例2：HCVM_Run 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVM_Run - 高级应用
```cpp
// 示例3：HCVM_Run 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVM_Rerun
### 描述
```
重启运行虚拟机(管理员运行)
```
### 原型
```cpp
__int64 __stdcall HCVM_Rerun(__int32 windowsIndex,char* vmPath,char* vmxSysPath,BOOL bForceRoot=TRUE,BOOL bGui=FALSE,char* lparam=NULL,longvmType=0,longtype=0);
```
### 参数
```
__int32 windowsIndex - 窗口序号表示只是打开虚拟机注意
char* vmPath - VM安装路径如
char* vmxSysPath - 虚拟机vmx路径如
bool bForceRoot - 是否强制重启（类似断电）反之表示正常重启（需VMwareTools支持）
bool bGui - 是否界面GUI显示启动虚拟机
char* lparam - 额外命令参数
 vmType - 0VMwareWorkstation-Tws默认为01VMwarePlayer-Tplayer
 type - 默认0就行保留
```
### 返回值
```
查看返回值表
返回值:01
```
### 注意事项
```
指令:
D:\vmwin10>D:\vm16\vmrun-Twsrestart\"D:/vmwin10/Windows10x64.vmx\"guilparam
D:\vmwin10>D:\vm16\vmrun-Twsrestart\"D:/vmwin10/Windows10x64.vmx\"noguilparam
C++案例:
autoret=HCVM_Rerun(0,\"D:\\vm16\\\",\"D:\\vmwin10\\Windows10x64.vmx\",m_强制关闭CheckBox.GetCheck(),TRUE,0,0,0);</FONT>
```
### HCVM_Rerun - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVM_Rerun - 进阶用法
```cpp
// 示例2：HCVM_Rerun 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVM_Rerun - 高级应用
```cpp
// 示例3：HCVM_Rerun 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVM_Close
### 描述
```
关闭运行虚拟机(管理员运行)
```
### 原型
```cpp
__int64 __stdcall HCVM_Close(__int32 windowsIndex,char* vmPath,char* vmxSysPath,BOOL bForceRoot=TRUE,longvmType=0,longtype=0);
```
### 参数
```
__int32 windowsIndex - 窗口序号表示只是打开虚拟机注意
char* vmPath - VM安装路径如
char* vmxSysPath - 虚拟机vmx路径如
bool bForceRoot - 是否强制重启（类似断电）反之表示正常重启（需VMwareTools支持）
 vmType - 0VMwareWorkstation-Tws默认为01VMwarePlayer-Tplayer
 type - 默认0就行保留
```
### 返回值
```
查看返回值表
返回值:01
```
### 注意事项
```
指令:
D:\vmwin10>D:\vm16\vmrun-Twsstop\"D:/vmwin10/Windows10x64.vmx\"
D:\vmwin10>D:\vm16\vmrun-Twsstop\"D:/vmwin10/Windows10x64.vmx\"
C++案例:
autoret=HCVM_Close(0,\"D:\\vm16\\\",\"D:\\vmwin10\\Windows10x64.vmx\",m_强制关闭CheckBox.GetCheck(),0,0);
```
### HCVM_Close - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVM_Close - 进阶用法
```cpp
// 示例2：HCVM_Close 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVM_Close - 高级应用
```cpp
// 示例3：HCVM_Close 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVM_List
### 描述
```
获取当前正在运行的虚拟机路径和总数(管理员运行)
```
### 原型
```cpp
__int64 __stdcall HCVM_List(char* vmPath);
```
### 参数
```
char* vmPath - VM安装路径如
```
### 返回值
```
查看返回值表
返回值:数量
返回的json:\"|\"隔开如:\"D:/vmwin10/Windows10x64_1.vmx|D:/vmwin10/Windows10x64_2.vmx|D:/vmwin10/Windows10x64_3.vmx\"
```
### 注意事项
```
无
C++案例:
autoret=HCVM_List(\"D:\\vm16\\\");
```
### HCVM_List - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVM_List - 进阶用法
```cpp
// 示例2：HCVM_List 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVM_List - 高级应用
```cpp
// 示例3：HCVM_List 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVM_IsStart
### 描述
```
指定虚拟机是否已经开启(管理员运行)
```
### 原型
```cpp
__int64 __stdcall HCVM_IsStart(char* vmPath,char* vmxSysPath);
```
### 参数
```
char* vmPath - VM安装路径如
char* vmxSysPath - 虚拟机vmx路径如
```
### 返回值
```
查看返回值表
返回值:01
```
### 注意事项
```
无
C++案例:
autoret=HCVM_List(\"D:\\vm16\\\",\"D:/vmwin10/Windows10x64_1.vmx\");
```
### HCVM_IsStart - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVM_IsStart - 进阶用法
```cpp
// 示例2：HCVM_IsStart 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVM_IsStart - 高级应用
```cpp
// 示例3：HCVM_IsStart 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
