# 🛰️ HDVT
## 📌 函数: HCHDVT_AllocateMemory
### 描述
```
VT驱动申请内存
```
### 原型
```
__int64 __stdcall HCHDVT_AllocateMemory(__int32 pid,__int32 size);
```
### 参数
```
__int32 pid - 进程PID
__int32 size - 申请内存大小(字节)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_AllocateMemory - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_AllocateMemory - 进阶用法
```
// 示例2：HCHDVT_AllocateMemory 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_AllocateMemory - 高级应用
```
// 示例3：HCHDVT_AllocateMemory 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDVT_FreeMemory
### 描述
```
VT驱动释放内存
```
### 原型
```
__int64 __stdcall HCHDVT_FreeMemory(__int32 pid,__int64 addr,__int32 size);
```
### 参数
```
__int32 pid - 进程PID
__int64 addr - 释放地址(该地址是由HCHDVT_AllocateMemory申请的内存地址)
__int32 size - 申请内存大小(字节)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_FreeMemory - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_FreeMemory - 进阶用法
```
// 示例2：HCHDVT_FreeMemory 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_FreeMemory - 高级应用
```
// 示例3：HCHDVT_FreeMemory 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDVT_Read
### 描述
```
VT驱动读内存
```
### 原型
```
__int64 __stdcall HCHDVT_Read(__int32 pid,__int64 addr,void* data,__int32 size);
```
### 参数
```
__int32 pid - 进程PID
__int64 addr - 目标地址
void data - 存读数据的缓冲区地址
__int32 size - 读的大小(字节),缓冲区的大小要大于等于读的大小
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_Read - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_Read - 进阶用法
```
// 示例2：HCHDVT_Read 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_Read - 高级应用
```
// 示例3：HCHDVT_Read 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDVT_Write
### 描述
```
VT驱动写内存
```
### 原型
```
__int64 __stdcall HCHDVT_Write(__int32 pid,__int64 addr,void* data,__int32 size);
```
### 参数
```
__int32 pid - 进程PID
__int64 addr - 目标地址
void data - 写入数据的缓冲区地址(存要写的数据)
__int32 size - 写的大小(字节),缓冲区的大小要大于等于写的大小
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_Write - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_Write - 进阶用法
```
// 示例2：HCHDVT_Write 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_Write - 高级应用
```
// 示例3：HCHDVT_Write 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDVT_GetModule
### 描述
```
VT驱动获取模块地址
```
### 原型
```
__int64 __stdcall HCHDVT_GetModule(__int32 pid,char* moduleName);
```
### 参数
```
__int32 pid - 进程PID
char* moduleName - 模块名字(ascii编码)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_GetModule - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_GetModule - 进阶用法
```
// 示例2：HCHDVT_GetModule 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_GetModule - 高级应用
```
// 示例3：HCHDVT_GetModule 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDVT_GetModuleFun
### 描述
```
VT驱动获取模块函数地址
```
### 原型
```
__int64 __stdcall HCHDVT_GetModuleFun(__int32 pid,__int64 moduleAddr,char* funName);
```
### 参数
```
__int32 pid - 进程PID
__int64 moduleAddr - 模块地址
 moduleName - 函数名字(ascii编码)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_GetModuleFun - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_GetModuleFun - 进阶用法
```
// 示例2：HCHDVT_GetModuleFun 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_GetModuleFun - 高级应用
```
// 示例3：HCHDVT_GetModuleFun 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDVT_Hook
### 描述
```
VT驱动无痕HOOK,过CRC
```
### 原型
```
__int64 __stdcall HCHDVT_Hook(__int32 pid,__int64 addr,void* data,__int32 size,__int32 type);
```
### 参数
```
__int32 pid - 进程PID
__int64 addr - HOOK地址
void data - 写入数据缓冲区
__int32 size - 写入数据缓冲区大小
__int32 type - 
 0 - 关闭VTHCHDVT_Hook(0,0,0,0,0)
 1 - 开启VTHCHDVT_Hook(0,0,0,0,1)
 2 - VT写入HCHDVT_Hook(pid,addr,data,size,2)
 3 - VT恢复之前HOOK的地址HCHDVT_Hook(pid,addr,0,0,3)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_Hook - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_Hook - 进阶用法
```
// 示例2：HCHDVT_Hook 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_Hook - 高级应用
```
// 示例3：HCHDVT_Hook 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDVT_RemoteCall
### 描述
```
VT驱动远程插入执行
```
### 原型
```
__int64 __stdcall HCHDVT_RemoteCall(__int32 pid,void* data,__int32 size);
```
### 参数
```
__int32 pid - 进程PID
void data - 执行shellcode首地址(注意
__int32 size - shellcode字节大小
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_RemoteCall - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_RemoteCall - 进阶用法
```
// 示例2：HCHDVT_RemoteCall 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_RemoteCall - 高级应用
```
// 示例3：HCHDVT_RemoteCall 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDVT_InjectX64
### 描述
```
VT驱动无痕无模块注入X64DLL
```
### 原型
```
__int64 __stdcall HCHDVT_InjectX64(__int32 pid,void* data,__int32 size);
```
### 参数
```
__int32 pid - 进程PID
void data - DLL二进制数据
__int32 size - DLL二进制数据大小
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_InjectX64 - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InjectX64 - 进阶用法
```
// 示例2：HCHDVT_InjectX64 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InjectX64 - 高级应用
```
// 示例3：HCHDVT_InjectX64 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDVT_InjectX86
### 描述
```
VT驱动无痕无模块注入X86DLL
```
### 原型
```
__int64 __stdcall HCHDVT_InjectX86(__int32 pid,void* data,__int32 size);
```
### 参数
```
__int32 pid - 进程PID
void data - DLL二进制数据
__int32 size - DLL二进制数据大小
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_InjectX86 - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InjectX86 - 进阶用法
```
// 示例2：HCHDVT_InjectX86 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InjectX86 - 高级应用
```
// 示例3：HCHDVT_InjectX86 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDVT_InstallPlugX64
### 描述
```
VT驱动无痕无模块安装X64插件到目标进程中
```
### 原型
```
__int64 __stdcall HCHDVT_InstallPlugX64(__int32 pid);
```
### 参数
```
__int32 pid - 进程PID
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_InstallPlugX64 - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InstallPlugX64 - 进阶用法
```
// 示例2：HCHDVT_InstallPlugX64 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InstallPlugX64 - 高级应用
```
// 示例3：HCHDVT_InstallPlugX64 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDVT_InstallPlugX86
### 描述
```
VT驱动无痕无模块安装X86插件到目标进程中
```
### 原型
```
__int64 __stdcall HCHDVT_InstallPlugX86(__int32 pid);
```
### 参数
```
__int32 pid - 进程PID
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数2来安装HDVT驱动
```
### HCHDVT_InstallPlugX86 - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InstallPlugX86 - 进阶用法
```
// 示例2：HCHDVT_InstallPlugX86 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InstallPlugX86 - 高级应用
```
// 示例3：HCHDVT_InstallPlugX86 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
