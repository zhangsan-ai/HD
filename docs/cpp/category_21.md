# 🛰️ VNC(HDVNC)
## 📌 函数: HCVnc_Connect
### 描述
```
连接虚拟机
```
### 原型
```
__int64 __stdcall HCVnc_Connect(__int32 windowsIndex,__int32 port);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口注意
__int32 port - 虚拟机开启VNC设置的端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
对应的虚拟机请开启VNC并设置好端口
两种使用VNC模式特别注意:
1.安装插件(HDEX_InstallPluginVM)的形式连接VNC:支持重连port==0属于重连会检查安装插件时候的PID同时自动获取之前连接过的端口前提是已经连接过卸载的时候内部调用(HCEnv_UnLoadEx)
2.未安装插件(HCVnc_Connect)的形式连接VNC:重连一直都可以不能port==0因为会检查PID未安装插件的PID为0卸载的时候内部调用(HCEnv_UnLoad)
```
### HCVnc_Connect - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_Connect - 进阶用法
```
// 示例2：HCVnc_Connect 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_Connect - 高级应用
```
// 示例3：HCVnc_Connect 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_Close
### 描述
```
关闭连接虚拟机
```
### 原型
```
__int64 __stdcall HCVnc_Close(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
对应的虚拟机请开启VNC并设置好端口
两种使用VNC模式特别注意:
1.安装插件(HDEX_InstallPluginVM)的形式连接VNC:支持重连port==0属于重连会检查安装插件时候的PID同时自动获取之前连接过的端口前提是已经连接过卸载的时候内部调用(HCEnv_UnLoadEx)
2.未安装插件(HCVnc_Connect)的形式连接VNC:重连一直都可以不能port==0因为会检查PID未安装插件的PID为0卸载的时候内部调用(HCEnv_UnLoad)
```
### HCVnc_Close - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_Close - 进阶用法
```
// 示例2：HCVnc_Close 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_Close - 高级应用
```
// 示例3：HCVnc_Close 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_MoveTo
### 描述
```
VNC鼠标绝对移动(自带移动轨迹直线波动防检测)
```
### 原型
```
__int64 __stdcall HCVnc_MoveTo(__int32 windowsIndex,__int32 x,__int32 y);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
__int32 x - 虚拟机屏幕坐标X
__int32 y - 虚拟机屏幕坐标Y
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_MoveTo - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_MoveTo - 进阶用法
```
// 示例2：HCVnc_MoveTo 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_MoveTo - 高级应用
```
// 示例3：HCVnc_MoveTo 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_MoveToOffset
### 描述
```
VNC鼠标相对移动(自带移动轨迹直线波动防检测)
```
### 原型
```
__int64 __stdcall HCVnc_MoveToOffset(__int32 windowsIndex,__int32 x,__int32 y);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
__int32 x - 虚拟机屏幕相对坐标X
__int32 y - 虚拟机屏幕相对坐标X
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_MoveToOffset - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_MoveToOffset - 进阶用法
```
// 示例2：HCVnc_MoveToOffset 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_MoveToOffset - 高级应用
```
// 示例3：HCVnc_MoveToOffset 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_LeftClick
### 描述
```
VNC鼠标左键点击
```
### 原型
```
__int64 __stdcall HCVnc_LeftClick(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_LeftClick - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_LeftClick - 进阶用法
```
// 示例2：HCVnc_LeftClick 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_LeftClick - 高级应用
```
// 示例3：HCVnc_LeftClick 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_LeftDown
### 描述
```
VNC鼠标左键按下
```
### 原型
```
__int64 __stdcall HCVnc_LeftDown(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_LeftDown - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_LeftDown - 进阶用法
```
// 示例2：HCVnc_LeftDown 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_LeftDown - 高级应用
```
// 示例3：HCVnc_LeftDown 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_LeftUp
### 描述
```
VNC鼠标左键弹起
```
### 原型
```
__int64 __stdcall HCVnc_LeftUp(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_LeftUp - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_LeftUp - 进阶用法
```
// 示例2：HCVnc_LeftUp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_LeftUp - 高级应用
```
// 示例3：HCVnc_LeftUp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_LeftDoubleClick
### 描述
```
VNC鼠标左键双击
```
### 原型
```
__int64 __stdcall HCVnc_LeftDoubleClick(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_LeftDoubleClick - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_LeftDoubleClick - 进阶用法
```
// 示例2：HCVnc_LeftDoubleClick 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_LeftDoubleClick - 高级应用
```
// 示例3：HCVnc_LeftDoubleClick 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_RightClick
### 描述
```
VNC鼠标右键点击
```
### 原型
```
__int64 __stdcall HCVnc_RightClick(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_RightClick - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_RightClick - 进阶用法
```
// 示例2：HCVnc_RightClick 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_RightClick - 高级应用
```
// 示例3：HCVnc_RightClick 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_RightDown
### 描述
```
VNC鼠标右键按下
```
### 原型
```
__int64 __stdcall HCVnc_RightDown(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_RightDown - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_RightDown - 进阶用法
```
// 示例2：HCVnc_RightDown 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_RightDown - 高级应用
```
// 示例3：HCVnc_RightDown 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_RightUp
### 描述
```
VNC鼠标右键弹起
```
### 原型
```
__int64 __stdcall HCVnc_RightUp(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_RightUp - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_RightUp - 进阶用法
```
// 示例2：HCVnc_RightUp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_RightUp - 高级应用
```
// 示例3：HCVnc_RightUp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_WheelDown
### 描述
```
VNC鼠标滚轮滚下
```
### 原型
```
__int64 __stdcall HCVnc_WheelDown(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_WheelDown - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_WheelDown - 进阶用法
```
// 示例2：HCVnc_WheelDown 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_WheelDown - 高级应用
```
// 示例3：HCVnc_WheelDown 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_WheelUp
### 描述
```
VNC鼠标滚轮滚上
```
### 原型
```
__int64 __stdcall HCVnc_WheelUp(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_WheelUp - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_WheelUp - 进阶用法
```
// 示例2：HCVnc_WheelUp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_WheelUp - 高级应用
```
// 示例3：HCVnc_WheelUp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_KeyPress
### 描述
```
VNC键盘按键敲击
```
### 原型
```
__int64 __stdcall HCVnc_KeyPress(__int32 windowsIndex,int keycode,BOOL isKeypad=false);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
int keycode - VK键值
bool isKeypad - 是否数字小键盘一般假
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_KeyPress - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_KeyPress - 进阶用法
```
// 示例2：HCVnc_KeyPress 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_KeyPress - 高级应用
```
// 示例3：HCVnc_KeyPress 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_KeyDown
### 描述
```
VNC键盘按键按下
```
### 原型
```
__int64 __stdcall HCVnc_KeyDown(__int32 windowsIndex,int keycode);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
int keycode - VK键值
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_KeyDown - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_KeyDown - 进阶用法
```
// 示例2：HCVnc_KeyDown 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_KeyDown - 高级应用
```
// 示例3：HCVnc_KeyDown 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_KeyUp
### 描述
```
VNC键盘按键弹起
```
### 原型
```
__int64 __stdcall HCVnc_KeyUp(__int32 windowsIndex,int keycode);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
int keycode - VK键值
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_KeyUp - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_KeyUp - 进阶用法
```
// 示例2：HCVnc_KeyUp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_KeyUp - 高级应用
```
// 示例3：HCVnc_KeyUp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_KeyPressStr
### 描述
```
VNC键盘连续按键字符串(数字+字母)
```
### 原型
```
__int64 __stdcall HCVnc_KeyPressStr(__int32 windowsIndex,char* strText,BOOL isKeypad=false);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
char* strText - 字符串(ascii编码)如
bool isKeypad - 是否数字小键盘一般假
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_KeyPressStr - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_KeyPressStr - 进阶用法
```
// 示例2：HCVnc_KeyPressStr 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_KeyPressStr - 高级应用
```
// 示例3：HCVnc_KeyPressStr 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_SendString
### 描述
```
VNC键盘输入字符串(中文+数字+符号+字母)
```
### 原型
```
__int64 __stdcall HCVnc_SendString(__int32 windowsIndex,char* strText);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
char* strText - 字符串(ascii编码)如
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCVnc_SendString - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_SendString - 进阶用法
```
// 示例2：HCVnc_SendString 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_SendString - 高级应用
```
// 示例3：HCVnc_SendString 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_OpenCapture
### 描述
```
开启截图(内部会开启一根线程循环获取虚拟机画面)
```
### 原型
```
__int64 __stdcall HCVnc_OpenCapture(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
可以调用HCVnc_CloseCapture来结束截图线程
```
### HCVnc_OpenCapture - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_OpenCapture - 进阶用法
```
// 示例2：HCVnc_OpenCapture 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_OpenCapture - 高级应用
```
// 示例3：HCVnc_OpenCapture 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCVnc_CloseCapture
### 描述
```
关闭截图(结束开启截图内部产生的线程)
```
### 原型
```
__int64 __stdcall HCVnc_CloseCapture(__int32 windowsIndex);
```
### 参数
```
 窗口序号 - 窗口序号每个窗口序号可以绑定一个虚拟机VNC端口
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要多次调用关闭,直到关闭成功,通常情况一次就能关闭成功
```
### HCVnc_CloseCapture - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_CloseCapture - 进阶用法
```
// 示例2：HCVnc_CloseCapture 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCVnc_CloseCapture - 高级应用
```
// 示例3：HCVnc_CloseCapture 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
