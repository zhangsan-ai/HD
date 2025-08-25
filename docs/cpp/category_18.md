---
sidebar_position: 19
---

# 🛰️ 盾
## 📌 函数: HCHDPP_Protect
### 描述
```
一键保护进程(隐藏等)
```
### 原型
```cpp
__int64 __stdcall HCHDPP_Protect(__int32 pid);
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
需要调用HCHD_LoadDrv2传递参数3来安装保护盾HDPP驱动
```
### HCHDPP_Protect - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDPP_Protect - 进阶用法
```cpp
// 示例2：HCHDPP_Protect 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDPP_Protect - 高级应用
```cpp
// 示例3：HCHDPP_Protect 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDPW_OnProtect
### 描述
```
打开窗口保护以及子窗口
```
### 原型
```cpp
__int64 __stdcall HCHDPW_OnProtect(__int64 hwnd);
```
### 参数
```
__int64 hwnd - 窗口句柄目标窗口句柄一般为父窗口句柄
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数5来安装保护盾HDPW驱动
可以多次指定内部会把指定的保护窗口句柄以及所属子窗口一起保护
```
### HCHDPW_OnProtect - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDPW_OnProtect - 进阶用法
```cpp
// 示例2：HCHDPW_OnProtect 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDPW_OnProtect - 高级应用
```cpp
// 示例3：HCHDPW_OnProtect 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHDPW_OffProtect
### 描述
```
取消所有窗口保护(指定保护过的)
```
### 原型
```cpp
__int64 __stdcall HCHDPW_OffProtect();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要调用HCHD_LoadDrv2传递参数5来安装保护盾HDPW驱动
可以取消调用过HCHDPW_OnProtect所有保护的窗口句柄
```
### HCHDPW_OffProtect - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDPW_OffProtect - 进阶用法
```cpp
// 示例2：HCHDPW_OffProtect 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHDPW_OffProtect - 高级应用
```cpp
// 示例3：HCHDPW_OffProtect 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
