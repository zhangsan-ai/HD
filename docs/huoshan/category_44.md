---
sidebar_position: 45
---

# 🛰️ 调试绘制模块(DS)
## 📌 函数: HD调试.设置颜色
### 描述
```
(用于调试)设置全局可视化标注颜色值
```
### 原型
```cpp
__int64 __stdcall HCSD_SetColor(__int32 lineColor=0x0000FF00,int textColor=0x00FFFF00,int backColor=0x00000000);
```
### 参数
```
__int32 lineColor - 线色
int textColor - 文本色
int backColor - 背景色
```
### 返回值
```
查看返回值表
```
### 注意事项
```
颜色值是4字节分别对应XRGB如:0x00FF0000红色如:0x0000FF00绿色如:0x000000FF蓝色
```
### HD调试.设置颜色 - 基础示例
```huoshan
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD调试.设置颜色 - 进阶用法
```huoshan
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD调试.设置颜色 - 高级应用
```huoshan
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD调试.设置调试窗口跟随
### 描述
```
(用于调试)设置当前调试窗口跟随的进程信息
```
### 原型
```cpp
__int64 __stdcall HCSD_SetFollowClassTitleName(int pid,__int64 hwnd=NULL,char* className=NULL,char* titleName=NULL);
```
### 参数
```
int pid - 指定pid内部会配合className或titleName找绑定的窗口句柄
__int64 hwnd - 指定了窗口句柄,其他3个参数无效
char* className - 类名可以为NULL
char* titleName - 标题名可以为NULL
```
### 返回值
```
查看返回值表
```
### HD调试.设置调试窗口跟随 - 基础示例
```huoshan
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD调试.设置调试窗口跟随 - 进阶用法
```huoshan
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD调试.设置调试窗口跟随 - 高级应用
```huoshan
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD调试.标记窗口
### 描述
```
给指定窗口画边框或者填充矩形
```
### 原型
```cpp
__int64 __stdcall HCSD_DrawWinodws(__int64 hwnd,__int32 LineRgbColor,__int32 lineSize,__int32 type=0,__int32 fillRgbColor=0);
```
### 参数
```
__int64 hwnd - 句柄LineRgbColor
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HD调试.标记窗口 - 基础示例
```huoshan
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD调试.标记窗口 - 进阶用法
```huoshan
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD调试.标记窗口 - 高级应用
```huoshan
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD调试.捕捉异常调用堆栈
### 描述
```
开启/关闭捕捉异常
```
### 原型
```cpp
__int64 __stdcall HCHD_CatchException(BOOL bOpen=TRUE);
```
### 参数
```
bool bOpen - 是否打开
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HD调试.捕捉异常调用堆栈 - 基础示例
```huoshan
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD调试.捕捉异常调用堆栈 - 进阶用法
```huoshan
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD调试.捕捉异常调用堆栈 - 高级应用
```huoshan
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD调试.附加控制台
### 描述
```
附加控制台
```
### 原型
```cpp
__int64 __stdcall HCSD_SetAttachConsole(BOOL bOpen);
```
### 参数
```
bool bOpen - 是否打开
```
### 返回值
```
查看返回值表
返回当前控制台是否已经打开
```
### 注意事项
```
print fcout输入输出到控制台上显示注意:自行定时清空屏幕防止满屏卡主进程运行
```
### HD调试.附加控制台 - 基础示例
```huoshan
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD调试.附加控制台 - 进阶用法
```huoshan
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD调试.附加控制台 - 高级应用
```huoshan
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
