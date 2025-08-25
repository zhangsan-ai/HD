---
sidebar_position: 45
---

# 🛰️ 调试绘制模块(DS)
## 📌 函数: HD调试_设置颜色
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
### HD调试_设置颜色 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HD调试_设置颜色 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HD调试_设置调试窗口跟随
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
### HD调试_设置调试窗口跟随 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HD调试_设置调试窗口跟随 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HD调试_标记窗口
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
### HD调试_标记窗口 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HD调试_标记窗口 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HD调试_捕捉异常调用堆栈
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
### HD调试_捕捉异常调用堆栈 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HD调试_捕捉异常调用堆栈 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HD调试_附加控制台
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
### HD调试_附加控制台 - 基础示例
```e-lang
.版本 2

.子程序 测试拦截Recvfrom, 长整数型, 公开
    .局部变量 窗口序号, 整数型
    .局部变量 进程位数, 整数型
    .局部变量 结果, 长整数型
    
    窗口序号 ＝ 1
    进程位数 ＝ 64  ' X86进程用32，X64进程用64
    
    ' 设置recvfrom API拦截
    结果 ＝ HDHOOK_设置拦截API_recvfrom (窗口序号, 进程位数, &HD_HOOK回调函数_recvfrom, 456789, 假)
    .如果 (结果 ＝ 1)
        调试输出 ("Recvfrom API拦截设置成功")
    .否则
        调试输出 ("Recvfrom API拦截设置失败")
    .如果结束
    
    返回 (结果)

.子程序 HD_HOOK回调函数_recvfrom, 整数型, 公开, 不需要修改直接返回0
    .参数 窗口序号, 整数型
    .参数 插件序号, 整数型
    .参数 rcx, 长整数型, , 套接字
    .参数 rdx, 长整数型, , 缓冲区的指针
    .参数 r8, 长整数型, , 接收的字节数
    .参数 r9, 长整数型, , 标志位
    .参数 l5, 长整数型, , 端口
    .参数 l6, 长整数型, , IP网络字节序
    .参数 rbp, 长整数型
    .参数 rsp, 长整数型
    .参数 rip, 长整数型
    .参数 buffer封包, 整数型
    .参数 bufferMaxSize, 整数型
    .参数 bufferRealSize, 整数型, , 最好用这个参数，接收的真实字节数
    .参数 lparam, 整数型, , HDHOOK_设置拦截API_recvfrom里的附加参数
    .局部变量 自定义回调参数, HD_HOOK回调类型
    
    调试输出 (rcx, r8, bufferRealSize, r9, l5, l6)
    
    自定义回调参数.封包类型 ＝ 4
    自定义回调参数.套接字 ＝ rcx
    自定义回调参数.封包长度 ＝ bufferRealSize  ' 这里最好用bufferRealSize不用r8
    .如果真 (bufferRealSize ≥ 1)
        自定义回调参数.封包内容 ＝ 指针到字节集 (buffer封包, r8)
    .如果真结束
    自定义回调参数.附加参数 ＝ lparam
    自定义回调参数.l5 ＝ l5  ' 端口
    自定义回调参数.l6 ＝ l6  ' IP网络字节序
    
    .如果真 (bufferRealSize ＞ 3000)
        返回 (0)
    .如果真结束
    
    启动线程 (&插入一行列表框, HDHOOK_取自定义回调参数_内存地址 (自定义回调参数), )
    
    返回 (0)  ' 0表示不修改并且走原有流程
```
### HD调试_附加控制台 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HD调试_附加控制台 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
