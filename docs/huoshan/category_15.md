---
sidebar_position: 16
---

# 🛰️ 驱动模块(N)
## 📌 函数: HCN_LoadDrv
### 描述
```
加载N驱动
```
### 原型
```cpp
__int64 __stdcall HCN_LoadDrv();
```
### 返回值
```
查看返回值表
成功返回1
```
### 注意事项
```
需要联网,可以卸载,驱动内置了进程,如需要自定义进程名联系管理员添加或者用HD驱动
```
### HCN_LoadDrv - 基础示例
```huoshan
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCN_LoadDrv - 进阶用法
```huoshan
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCN_LoadDrv - 高级应用
```huoshan
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCN_InjectDll(W/A)X86
### 描述
```
注入32/64位DLL(需要先加载N驱动)
```
### 原型
```cpp
HEARTDLL_API_HN__int64 __stdcall HCN_InjectDllWX86(wchar_t* DLL路径W);
```
```cpp
HEARTDLL_API_HN__int64 __stdcall HCN_InjectDllAX86(char* DLL路径A);
```
### 参数
```
wchar_t* DLL路径W - Unicode字符串
wchar_t* DLL路径W - Ascii字符串
```
### 返回值
```
查看返回值表
成功返回1
```
### 注意事项
```
无
```
### HCN_InjectDll(W/A)X86 - 基础示例
```huoshan
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCN_InjectDll(W/A)X86 - 进阶用法
```huoshan
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCN_InjectDll(W/A)X86 - 高级应用
```huoshan
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCN_InjectDll(W/A)X64
### 描述
```
注入32/64位DLL(需要先加载N驱动)
```
### 原型
```cpp
HEARTDLL_API_HN__int64 __stdcall HCN_InjectDllWX64(wchar_t* DLL路径W);
```
```cpp
HEARTDLL_API_HN__int64 __stdcall HCN_InjectDllAX64(char* DLL路径A);
```
### 参数
```
wchar_t* DLL路径W - Unicode字符串
wchar_t* DLL路径W - Ascii字符串
```
### 返回值
```
查看返回值表
成功返回1
```
### 注意事项
```
无
```
### HCN_InjectDll(W/A)X64 - 基础示例
```huoshan
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCN_InjectDll(W/A)X64 - 进阶用法
```huoshan
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCN_InjectDll(W/A)X64 - 高级应用
```huoshan
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCN_InstallPlug(86/64)
### 描述
```
安装32/64位HD插件(需要先加载N驱动)
```
### 原型
```cpp
__int64 __stdcall HCN_InstallPlugX86();
```
```cpp
__int64 __stdcall HCN_InstallPlugX64();
```
### 返回值
```
查看返回值表
成功返回1
```
### 注意事项
```
无
```
### HCN_InstallPlug(86/64) - 基础示例
```huoshan
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCN_InstallPlug(86/64) - 进阶用法
```huoshan
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCN_InstallPlug(86/64) - 高级应用
```huoshan
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCN_UnLoadDrv
### 描述
```
卸载驱动同时清除了注入的DLL缓存
```
### 原型
```cpp
__int64 __stdcall HCN_UnLoadDrv();
```
### 返回值
```
查看返回值表
返回值:0释放失败1成功释放
```
### 注意事项
```
取消窗口关联,一定要卸载相关信息,随后所有循环会快速内退,从而线程安全退出！！！！
```
### HCN_UnLoadDrv - 基础示例
```huoshan
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCN_UnLoadDrv - 进阶用法
```huoshan
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCN_UnLoadDrv - 高级应用
```huoshan
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
