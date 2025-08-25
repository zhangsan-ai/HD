---
sidebar_position: 24
---

# 🛰️ 目标[TARGET]
## 📌 函数: HCTarget_UseVT
### 描述
```
目标进程是否使用VT驱动
```
### 原型
```cpp
__int64 __stdcall HCTarget_UseVT(__int32 type);
```
### 参数
```
__int32 type - 1使用0不使用
```
### 返回值
```
查看返回值表
```
### 注意事项
```
目标进程是否使用VT驱动需要中控安装和开启VT驱动type:0不使用1使用作用模块包含:后台键鼠模块后台截图模块谷歌内置浏览器模块APIHOOK模块自定义HOOK模块目的:过检测能力强
```
### HCTarget_UseVT - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HCTarget_UseVT - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
