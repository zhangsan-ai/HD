# 🛰️ 窗口模块(WIN)
## 📌 函数: HCWIN_SortWindows
### 描述
```
排序安装过插件的进程
```
### 原型
```
__int64 __stdcall HCWIN_SortWindows(__int32 offsetW,__int32 offsetH,__int32 width,__int32 height);
```
### 参数
```
 offsertX - 水平偏移距离(2个相邻窗口的左上角的水平距离)
 offsertY - 垂直偏移距离(2个相邻窗口的左上角的垂直距离)
__int32 width - 窗口宽度
__int32 height - 窗口高度
```
### 返回值
```
查看返回值表
```
### 注意事项
```
安装过插件的经常意思表示:
1.通讯过的窗口序号的对应的进程PID(未被第二次初始化序号HCInject_Init)
2.卸载进程环境不会影响绑定过的进程排序(不能调用始化序号HCInject_Init的前提下,也就是可以重连的情况下)
3.HCInject_Init这个接口一旦调用,就会取消所有关联(意味着不能重连了),从而影响当前绑定的窗口PID,意味着新窗口即将打开
```
### HCWIN_SortWindows - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_SortWindows - 进阶用法
```
// 示例2：HCWIN_SortWindows 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_SortWindows - 高级应用
```
// 示例3：HCWIN_SortWindows 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_CamouflageProcess
### 描述
```
伪装进程(防止检查到实际的进程存在)
```
### 原型
```
__int64 __stdcall HCWIN_CamouflageProcess(char* runName,char* targetPath,__int32 type);
```
### 参数
```
char* runName - 给伪装进程取的别名(任意前缀/后缀名字)如
char* targetPath - 需要伪装的进程全路径(包含.exe)如
__int32 type - 需要伪装的进程位数32或64
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
案例:
把注入器伪装成了hd.exe
```
### HCWIN_CamouflageProcess - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_CamouflageProcess - 进阶用法
```
// 示例2：HCWIN_CamouflageProcess 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_CamouflageProcess - 高级应用
```
// 示例3：HCWIN_CamouflageProcess 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_SetWindowState
### 描述
```
设置或者操作窗口状态
```
### 原型
```
__int64 __stdcall HCWIN_SetWindowState(__int64 hwnd,__int32 type);
```
### 参数
```
__int64 hwnd - 窗口句柄如果type==18/19表示刷新桌面这个时候hwnd可以为0type
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_SetWindowState - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_SetWindowState - 进阶用法
```
// 示例2：HCWIN_SetWindowState 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_SetWindowState - 高级应用
```
// 示例3：HCWIN_SetWindowState 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_SetWindowSize
### 描述
```
设置窗口大小
```
### 原型
```
__int64 __stdcall HCWIN_SetWindowSize(__int64 hwnd,__int32 width,__int32 hight,BOOL bCenter=FALSE);
```
### 参数
```
__int64 hwnd - 窗口句柄
__int32 width - 宽度
__int32 hight - 高度
bool bCenter - 窗口是否居中
```
### 返回值
```
查看返回值表
```
### 注意事项
```
窗口居中会改变窗口位置
```
### HCWIN_SetWindowSize - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_SetWindowSize - 进阶用法
```
// 示例2：HCWIN_SetWindowSize 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_SetWindowSize - 高级应用
```
// 示例3：HCWIN_SetWindowSize 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_MoveWindow
### 描述
```
移动窗口
```
### 原型
```
__int64 __stdcall HCWIN_MoveWindow(__int64 hwnd,__int32 x,__int32 y);
```
### 参数
```
__int64 hwnd - 窗口句柄
__int32 x - 屏幕坐标x
__int32 y - 屏幕坐标y
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_MoveWindow - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_MoveWindow - 进阶用法
```
// 示例2：HCWIN_MoveWindow 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_MoveWindow - 高级应用
```
// 示例3：HCWIN_MoveWindow 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_IsWow64Process
### 描述
```
目标窗口句柄/目标进程是否64位
```
### 原型
```
__int64 __stdcall HCWIN_IsWow64Process(__int64 hwnd,__int32 pid=0);
```
### 参数
```
__int64 hwnd - 窗口句柄
__int32 pid - 进程PID
```
### 返回值
```
查看返回值表
```
### 注意事项
```
窗口句柄或者PID任意指定一个就行
如果2个都指定则PID用于检测
```
### HCWIN_IsWow64Process - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_IsWow64Process - 进阶用法
```
// 示例2：HCWIN_IsWow64Process 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_IsWow64Process - 高级应用
```
// 示例3：HCWIN_IsWow64Process 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetWindowTitle
### 描述
```
获取目标窗口标题
```
### 原型
```
__int64 __stdcall HCWIN_GetWindowTitle(__int64 hwnd);
```
### 参数
```
__int64 hwnd - 窗口句柄
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_GetWindowTitle - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowTitle - 进阶用法
```
// 示例2：HCWIN_GetWindowTitle 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowTitle - 高级应用
```
// 示例3：HCWIN_GetWindowTitle 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetWindowThreadProcessId
### 描述
```
获取目标窗口句柄的线程ID
```
### 原型
```
__int64 __stdcall HCWIN_GetWindowThreadProcessId(__int64 hwnd);
```
### 参数
```
__int64 hwnd - 窗口句柄
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_GetWindowThreadProcessId - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowThreadProcessId - 进阶用法
```
// 示例2：HCWIN_GetWindowThreadProcessId 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowThreadProcessId - 高级应用
```
// 示例3：HCWIN_GetWindowThreadProcessId 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetWindowProcessId
### 描述
```
获取目标窗口句柄的进程ID
```
### 原型
```
__int64 __stdcall HCWIN_GetWindowProcessId(__int64 hwnd);
```
### 参数
```
__int64 hwnd - 窗口句柄
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_GetWindowProcessId - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowProcessId - 进阶用法
```
// 示例2：HCWIN_GetWindowProcessId 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowProcessId - 高级应用
```
// 示例3：HCWIN_GetWindowProcessId 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetWindowProcessPath
### 描述
```
获取目标窗口句柄的路径
```
### 原型
```
__int64 __stdcall HCWIN_GetWindowProcessPath(__int64 hwnd);
```
### 参数
```
__int64 hwnd - 窗口句柄
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_GetWindowProcessPath - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowProcessPath - 进阶用法
```
// 示例2：HCWIN_GetWindowProcessPath 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowProcessPath - 高级应用
```
// 示例3：HCWIN_GetWindowProcessPath 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetWindowRect
### 描述
```
获取窗口在屏幕上的位置
```
### 原型
```
__int64 __stdcall HCWIN_GetWindowRect(__int64 hwnd,void* pRect=NULL);
```
### 参数
```
__int64 hwnd - 窗口句柄
void pRect - 指向RECT结构体地址(供C/C++调用)这个参数可以直接获取值,如果是其他语言可以HCEnv_GetRetJson获取字符串
```
### 返回值
```
查看返回值表
```
### 注意事项
```
返回字符串:
left|top|rifght|bottom|
RECT结构体:
typedefstructtagRECT{LONGleft;LONGtop;LONGright;LONGbottom;}RECT,* PRECT;
```
### HCWIN_GetWindowRect - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowRect - 进阶用法
```
// 示例2：HCWIN_GetWindowRect 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowRect - 高级应用
```
// 示例3：HCWIN_GetWindowRect 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetWindowClass
### 描述
```
获取目标窗口句柄的窗口类名
```
### 原型
```
__int64 __stdcall HCWIN_GetWindowClass(__int64 hwnd);
```
### 参数
```
__int64 hwnd - 窗口句柄
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_GetWindowClass - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowClass - 进阶用法
```
// 示例2：HCWIN_GetWindowClass 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowClass - 高级应用
```
// 示例3：HCWIN_GetWindowClass 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetWindowState
### 描述
```
获取目标窗口句柄的窗口状态
```
### 原型
```
__int64 __stdcall HCWIN_GetWindowState(__int64 hwnd,__int32 flag);
```
### 参数
```
__int64 hwnd - 窗口句柄
__int32 flag - 判断窗口是否存在(0),判断窗口是否处于激活(1),判断窗口是否可见(2),判断窗口是否最小化(3),判断窗口是否最大化(4),判断窗口是否置顶(5),判断窗口是否无响应(6),
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_GetWindowState - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowState - 进阶用法
```
// 示例2：HCWIN_GetWindowState 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindowState - 高级应用
```
// 示例3：HCWIN_GetWindowState 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetSpecialWindow
### 描述
```
获取特殊窗口桌面Shell_TrayWnd
```
### 原型
```
__int64 __stdcall HCWIN_GetSpecialWindow(__int32 flag);
```
### 参数
```
__int32 flag - 桌面(0),Shell_TrayWnd(1)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_GetSpecialWindow - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetSpecialWindow - 进阶用法
```
// 示例2：HCWIN_GetSpecialWindow 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetSpecialWindow - 高级应用
```
// 示例3：HCWIN_GetSpecialWindow 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetWindow
### 描述
```
获取目标窗口句柄的关联窗口句柄
```
### 原型
```
__int64 __stdcall HCWIN_GetWindow(__int64 hwnd,__int32 flag)
```
### 参数
```
__int64 hwnd - 窗口句柄
__int32 flag - 获取父窗口(0),获取第一个子窗口(1),获取第一个窗口(2),获取最后个窗口(3),获取下一个窗口(4),获取上一个窗口(5),获取拥有者窗口(6),获取顶层窗口(7)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_GetWindow - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindow - 进阶用法
```
// 示例2：HCWIN_GetWindow 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetWindow - 高级应用
```
// 示例3：HCWIN_GetWindow 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetForegroundWindow
### 描述
```
获取顶层活动窗口,可以获取到按键自带插件无法获取到的句柄
```
### 原型
```
__int64 __stdcall HCWIN_GetForegroundWindow();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_GetForegroundWindow - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetForegroundWindow - 进阶用法
```
// 示例2：HCWIN_GetForegroundWindow 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetForegroundWindow - 高级应用
```
// 示例3：HCWIN_GetForegroundWindow 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetForegroundFocus
### 描述
```
获取顶层活动窗口中具有输入焦点的窗口句柄
```
### 原型
```
__int64 __stdcall HCWIN_GetForegroundFocus();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_GetForegroundFocus - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetForegroundFocus - 进阶用法
```
// 示例2：HCWIN_GetForegroundFocus 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetForegroundFocus - 高级应用
```
// 示例3：HCWIN_GetForegroundFocus 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_SetForegroundFocus
### 描述
```
设置输入焦点到窗口
```
### 原型
```
__int64 __stdcall HCWIN_SetForegroundFocus(__int64 hwnd);
```
### 参数
```
__int64 hwnd - 窗口句柄
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_SetForegroundFocus - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_SetForegroundFocus - 进阶用法
```
// 示例2：HCWIN_SetForegroundFocus 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_SetForegroundFocus - 高级应用
```
// 示例3：HCWIN_SetForegroundFocus 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetClientSize
### 描述
```
获取窗口客户区域的宽度和高度
```
### 原型
```
__int64 __stdcall HCWIN_GetClientSize(__int64 hwnd,void* pW=NULL,void* pH=NULL);
```
### 参数
```
__int64 hwnd - 窗口句柄
void pW - 指向4字节宽度整数int 地址(供C/C++使用),其他语言调用HCEnv_GetRetJson获取字符串并自行解析
void pH - 指向4字节高度整数int 地址(供C/C++使用),其他语言调用HCEnv_GetRetJson获取字符串并自行解析
```
### 返回值
```
查看返回值表
```
### 注意事项
```
返回字符串:
w|h|
```
### HCWIN_GetClientSize - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetClientSize - 进阶用法
```
// 示例2：HCWIN_GetClientSize 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetClientSize - 高级应用
```
// 示例3：HCWIN_GetClientSize 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_GetClientRectInWindow
### 描述
```
获取窗口客户区域在屏幕上的位置
```
### 原型
```
__int64 __stdcall HCWIN_GetClientRectInWindow(__int64 hwnd,void* pRect=NULL);
```
### 参数
```
__int64 hwnd - 窗口句柄
void pRect - 指向RECT结构体地址(供C/C++调用)这个参数可以直接获取值,如果是其他语言可以HCEnv_GetRetJson获取字符串
```
### 返回值
```
查看返回值表
```
### 注意事项
```
返回字符串:
left|top|rifght|bottom|
RECT结构体:
typedefstructtagRECT{LONGleft;LONGtop;LONGright;LONGbottom;}RECT,* PRECT;
```
### HCWIN_GetClientRectInWindow - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetClientRectInWindow - 进阶用法
```
// 示例2：HCWIN_GetClientRectInWindow 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_GetClientRectInWindow - 高级应用
```
// 示例3：HCWIN_GetClientRectInWindow 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_FindWindowEx
### 描述
```
查找符合类名或者标题名的顶层可见窗口,如果指定了parent,则在parent的第一层子窗口中查找
```
### 原型
```
__int64 __stdcall HCWIN_FindWindowEx(__int64 parentHwnd,char* className,char* title,BOOL bType=FALSE);
```
### 参数
```
__int64 parentHwnd - 窗口的父窗口句柄(不指定则从桌面窗口开始搜索)
char* className - 窗口类名(不指定为NULL/0)
char* title - 窗口标题(不指定为NULL/0)
bool bType - 真/1为模糊匹配假/0为完全匹配
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_FindWindowEx - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_FindWindowEx - 进阶用法
```
// 示例2：HCWIN_FindWindowEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_FindWindowEx - 高级应用
```
// 示例3：HCWIN_FindWindowEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_FindTopWindow
### 描述
```
查找顶层窗口句柄,父窗口句柄为NULL
```
### 原型
```
__int64 __stdcall HCWIN_FindTopWindow(char* className,char* title,BOOL bType=FALSE);
```
### 参数
```
char* className - 窗口类名(不指定为NULL/0/“”)
char* title - 窗口标题(不指定为NULL/0/“”)
bool bType - 真/1为模糊匹配假/0为完全匹配
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCWIN_FindTopWindow - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_FindTopWindow - 进阶用法
```
// 示例2：HCWIN_FindTopWindow 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_FindTopWindow - 高级应用
```
// 示例3：HCWIN_FindTopWindow 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_EnumWindowByProcess
### 描述
```
根据指定进程以及其它条件,枚举系统中符合条件的窗口
```
### 原型
```
__int64 __stdcall HCWIN_EnumWindowByProcess(char* processName,char* className,char* title,__int32 filter,BOOL bType=FALSE);
```
### 参数
```
char* processName - 进程名(如果是完全匹配要加.exe,如果是模糊匹配自行判断)
char* className - 窗口类名(不指定为NULL/0)
char* title - 窗口标题(不指定为NULL/0)
__int32 filter - 1标题2类名4第一个PID8检测是否无父窗口16检查窗口是否显示32检索多PID多个标识可以用|累加
bool bType - 真/1为模糊匹配假/0为完全匹配
```
### 返回值
```
查看返回值表
0表示未找到
```
### 注意事项
```
单PID返回字符串:
hwnd
多PID返回字符串:根据创建时间排序过的
hwnd1|hwnd2|hwnd3|
```
### HCWIN_EnumWindowByProcess - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_EnumWindowByProcess - 进阶用法
```
// 示例2：HCWIN_EnumWindowByProcess 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_EnumWindowByProcess - 高级应用
```
// 示例3：HCWIN_EnumWindowByProcess 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_EnumWindowByProcessId
### 描述
```
根据指定进程pid以及其它条件,枚举系统中符合条件的窗口,可以枚举到按键自带的无法枚举到的窗口
```
### 原型
```
__int64 __stdcall HCWIN_EnumWindowByProcessId(__int32 pid,char* className,char* title,__int32 filter,BOOL bType=FALSE);
```
### 参数
```
__int32 pid - 进程PID
char* className - 窗口类名(不指定为NULL/0)
char* title - 窗口标题(不指定为NULL/0)
__int32 filter - 1标题2类名8检测是否无父窗口16检查窗口是否显示多个标识可以用|累加
bool bType - 真/1为模糊匹配假/0为完全匹配
```
### 返回值
```
查看返回值表
0表示未找到
1表示找到结果存在返回json字符串
```
### 注意事项
```
单PID返回字符串:
hwnd
```
### HCWIN_EnumWindowByProcessId - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_EnumWindowByProcessId - 进阶用法
```
// 示例2：HCWIN_EnumWindowByProcessId 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_EnumWindowByProcessId - 高级应用
```
// 示例3：HCWIN_EnumWindowByProcessId 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_EnumProcess
### 描述
```
根据指定进程名,枚举系统中符合条件的进程PID
```
### 原型
```
__int64 __stdcall HCWIN_EnumProcess(char* processName,BOOL bType=FALSE);
```
### 参数
```
char* processName - 进程名(如果是完全匹配要加.exe,如果是模糊匹配自行判断)
bool bType - 真/1为模糊匹配假/0为完全匹配
```
### 返回值
```
查看返回值表
0表示未找到
```
### 注意事项
```
返回字符串:
pid1|pid2|pid3|
```
### HCWIN_EnumProcess - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_EnumProcess - 进阶用法
```
// 示例2：HCWIN_EnumProcess 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_EnumProcess - 高级应用
```
// 示例3：HCWIN_EnumProcess 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCWIN_EnumWindow
### 描述
```
根据指定条件,枚举系统中符合条件的窗口,可以枚举到按键自带的无法枚举到的窗口
```
### 原型
```
__int64 __stdcall HCWIN_EnumWindow(__int64 parentHwnd,char* className,char* title,__int32 filter,BOOL bType=FALSE,BOOL bChild=FALSE);
```
### 参数
```
__int64 parentHwnd - 窗口的父窗口句柄(可以不指定为NULL)
char* className - 窗口类名(不指定为NULL/0)
char* title - 窗口标题(不指定为NULL/0)
__int32 filter - 1标题2类名4检测父窗口是否是指定8检测是否无父窗口16检查窗口是否显示多个标识可以用|累加
bool bType - 真/1为模糊匹配假/0为完全匹配
bool bChild - 根据指定条件,枚举指定父句柄的子窗口
```
### 返回值
```
查看返回值表
0表示未找到
```
### 注意事项
```
多句柄返回字符串:
hwnd1|hwnd2|hwnd3|
```
### HCWIN_EnumWindow - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_EnumWindow - 进阶用法
```
// 示例2：HCWIN_EnumWindow 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCWIN_EnumWindow - 高级应用
```
// 示例3：HCWIN_EnumWindow 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
