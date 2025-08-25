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
### HCVM_Run - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HCVM_Run - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
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
```e-lang
.版本 2

.子程序 测试重启虚拟机, 逻辑型, 公开
    .局部变量 窗口序号, 整数型
    .局部变量 结果, 逻辑型
    .局部变量 VM路径, 文本型
    .局部变量 VMX文件路径, 文本型
    
    窗口序号 ＝ 1
    VM路径 ＝ "D:\VMware\"
    VMX文件路径 ＝ "D:\VMs\Windows10\Windows10.vmx"
    
    ' 强制重启虚拟机
    结果 ＝ HDVM_重启 (窗口序号, VM路径, VMX文件路径, 真, 假, "", 0, 0)
    .如果 (结果 ＝ 真)
        调试输出 ("虚拟机重启成功（强制重启）")
    .否则
        调试输出 ("虚拟机重启失败")
    .如果结束
    
    返回 (结果)
```
### HCVM_Rerun - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HCVM_Rerun - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
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
```e-lang
.版本 2

.子程序 测试关闭实时绘制, 逻辑型, 公开
    .局部变量 窗口序号, 整数型
    .局部变量 结果, 逻辑型
    
    窗口序号 ＝ 1
    
    调试输出 ("准备关闭实时绘制功能")
    
    ' 关闭实时绘制
    结果 ＝ HD实时绘制_关闭 (窗口序号)
    .如果 (结果 ＝ 真)
        调试输出 ("实时绘制关闭成功")
        调试输出 ("绘制资源已清理")
        调试输出 ("目标窗口上的绘制内容已清除")
    .否则
        调试输出 ("实时绘制关闭失败")
        调试输出 ("可能未正确开启或已经关闭")
    .如果结束
    
    返回 (结果)
```
### HCVM_Close - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HCVM_Close - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
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
```e-lang
.版本 2

.子程序 _列表单列找字示例
    .局部变量 找到数量, 整数型
    .局部变量 窗口序号, 整数型
    .局部变量 识别文字, 文本型
    .局部变量 返回信息, 文本型
    
    窗口序号 = 0
    识别文字 = "玩家名称"  ' 查找列表中的玩家名称
    
    找到数量 = HD识字_列表单列找字 (窗口序号, 100, 100, 400, 500, 识别文字, "000000-ffffff", 0.9)
    
    .如果 (找到数量 > 0)
        返回信息 = HD通用_获取最近返回json (窗口序号)
        调试输出 ("找到" + 到文本 (找到数量) + "个匹配项")
        调试输出 ("详细位置: " + 返回信息)
    .否则
        调试输出 ("未找到指定文字")
    .如果结束
```
### HCVM_List - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HCVM_List - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
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
### HCVM_IsStart - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HCVM_IsStart - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
