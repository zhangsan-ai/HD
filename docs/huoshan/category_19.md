# 🛰️ HDVT
## 📌 函数: HDVT.申请内存
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
### HDVT.申请内存 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.申请内存 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.申请内存 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDVT.释放内存
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
### HDVT.释放内存 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.释放内存 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.释放内存 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDVT.读内存
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
### HDVT.读内存 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.读内存 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.读内存 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDVT.写内存
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
### HDVT.写内存 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.写内存 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.写内存 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDVT.获取模块地址
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
### HDVT.获取模块地址 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.获取模块地址 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.获取模块地址 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDVT.获取模块函数地址
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
### HDVT.获取模块函数地址 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.获取模块函数地址 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.获取模块函数地址 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDVT.无痕HOOK
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
### HDVT.无痕HOOK - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.无痕HOOK - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.无痕HOOK - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDVT.远程执行
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
### HDVT.远程执行 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.远程执行 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.远程执行 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
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
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InjectX64 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InjectX64 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
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
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InjectX86 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDVT_InjectX86 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDVT.安装插件X64
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
### HDVT.安装插件X64 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.安装插件X64 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.安装插件X64 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDVT.安装插件X86
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
### HDVT.安装插件X86 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.安装插件X86 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDVT.安装插件X86 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
