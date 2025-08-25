# 🛰️ 驱动模块(HD)
## 📌 函数: HCHD_LoadDrv
### 描述
```
加载HD驱动(正式版本)
```
### 原型
```
__int64 __stdcall HCHD_LoadDrv();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要联网,不可以卸载驱动,可以清除注入DLL缓存
此接口相当于调用HCHD_LoadDrv2传递-1:HDEx正式版本(云下发正常驱动,无特殊处理)
```
### HCHD_LoadDrv - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_LoadDrv - 进阶用法
```
// 示例2：HCHD_LoadDrv 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_LoadDrv - 高级应用
```
// 示例3：HCHD_LoadDrv 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_LoadDrv2
### 描述
```
云下发加载驱动或组件(可以通过指定驱动序号,加载不同版本的驱动如:正式版本定制版本备用版本其他保护盾VT等等)
```
### 原型
```
__int64 __stdcall HCHD_LoadDrv2(__int32 type=0);
```
### 参数
```
__int32 type - 驱动序号-1表示
 说明 - 云下发加载驱动或组件-1
 注意 - -1016不能共存其他任意组合都可以共存！！！！
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要联网,不可以卸载驱动,可以清除注入DLL缓存
```
### HCHD_LoadDrv2 - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_LoadDrv2 - 进阶用法
```
// 示例2：HCHD_LoadDrv2 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_LoadDrv2 - 高级应用
```
// 示例3：HCHD_LoadDrv2 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_InitFastRW
### 描述
```
初始化HD驱动快速读写(一般在HD安装驱动接口后的下一句就开始初始化)
```
### 原型
```
__int64 __stdcall HCHD_InitFastRW();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
如果最开始安装HD驱动调用的是HCHD_LoadDrv同时又需要快速读写遍历,就需要先调用此接口,然后调用HCHD_RWExx进行快读内存读写遍历(百万级别)
如果最开始安装HD驱动调用的是HCHD_LoadDrv2并传递驱动序号为0,表示可以直接调用HCHD_RWExx进行快读内存读写遍历(百万级别),不需要再调用此接口了
```
### HCHD_InitFastRW - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_InitFastRW - 进阶用法
```
// 示例2：HCHD_InitFastRW 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_InitFastRW - 高级应用
```
// 示例3：HCHD_InitFastRW 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_InjectX86X64
### 描述
```
把DLL注入到指定进程中(指定DLL二进制文件数据)
```
### 原型
```
__int64 __stdcall HCHD_InjectX86X64(char* injectExeName,__int32 dllBits,__int32 injectMode,__int32 memoryHide,PVOIDinjectData,__int32 injectSize);
```
### 参数
```
char* injectExeName - 进程名(如
__int32 dllBits - 进程位(32/64)
__int32 injectMode - 注入模式(0/1/2),一般0,1模式就行,2用于steam游戏
__int32 memoryHide - 内存保护模式(0/1/2)
 injectData - 注入数据缓冲区首地址
__int32 injectSize - 注入数据缓冲区大小(单位
```
### 返回值
```
查看返回值表
```
### 注意事项
```
不能卸载驱动,可以清除注入DLL缓存,支持32/64进程
```
### HCHD_InjectX86X64 - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_InjectX86X64 - 进阶用法
```
// 示例2：HCHD_InjectX86X64 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_InjectX86X64 - 高级应用
```
// 示例3：HCHD_InjectX86X64 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_InjectX86X64ByFile
### 描述
```
把DLL注入到指定进程中(指定DLL文件路径)
```
### 原型
```
__int64 __stdcall HCHD_InjectX86X64ByFile(char* injectExeName,__int32 dllBits,__int32 injectMode,__int32 memoryHide,char* DLL绝对路径A);
```
### 参数
```
char* injectExeName - 进程名(如
__int32 dllBits - 进程位(32/64)
__int32 injectMode - 注入模式(0/1/2),一般0,1模式就行,2用于steam游戏
__int32 memoryHide - 内存保护模式(0/1/2)
char* DLL绝对路径A - DLL绝对路径A
```
### 返回值
```
查看返回值表
```
### 注意事项
```
不能卸载驱动,可以清除注入DLL缓存,支持32/64进程
```
### HCHD_InjectX86X64ByFile - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_InjectX86X64ByFile - 进阶用法
```
// 示例2：HCHD_InjectX86X64ByFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_InjectX86X64ByFile - 高级应用
```
// 示例3：HCHD_InjectX86X64ByFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_InstallPlug(86/64)
### 描述
```
安装HD插件到指定进程中
```
### 原型
```
__int64 __stdcall HCHD_InstallPlugX86(char* injectExeName,__int32 injectMode,__int32 memoryHide);
```
```
__int64 __stdcall HCHD_InstallPlugX64(char* injectExeName,__int32 injectMode,__int32 memoryHide);
```
### 参数
```
char* injectExeName - 进程名(如
__int32 injectMode - 注入模式(0/1/2),一般0,1模式就行,2用于steam游戏
__int32 memoryHide - 内存保护模式(0/1/2)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
需要联网,可以清除注入DLL缓存,支持32/64进程
```
### HCHD_InstallPlug(86/64) - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_InstallPlug(86/64) - 进阶用法
```
// 示例2：HCHD_InstallPlug(86/64) 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_InstallPlug(86/64) - 高级应用
```
// 示例3：HCHD_InstallPlug(86/64) 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_UnInstallPlug
### 描述
```
卸载插件(并不是从进程中卸载,而是清除了下一次进程打开的时候安装插件的缓存)
```
### 原型
```
__int64 __int64 __stdcall HCHD_UnInstallPlug();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_UnInstallPlug - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_UnInstallPlug - 进阶用法
```
// 示例2：HCHD_UnInstallPlug 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_UnInstallPlug - 高级应用
```
// 示例3：HCHD_UnInstallPlug 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_MousePress
### 描述
```
前台驱动鼠标移动并点击
```
### 原型
```
__int64 __stdcall HCHD_MousePress(__int32 abx,__int32 aby,__int32 mButCode,__int32 mis);
```
### 参数
```
__int32 X - 屏幕坐标X
__int32 X - 屏幕坐标Y
__int32 mButCode - 
__int32 mButCode 鼠标移动时鼠标按钮的值如下 指定0表示移动不按键 - #defineMOUSE_BUTTON_1_DOWN1左按下#defineMOUSE_BUTTON_1_UP2左弹起#defineMOUSE_BUTTON_2_DOWN4中按下#defineMOUSE_BUTTON_2_UP8中弹起#defineMOUSE_BUTTON_3_DOWN16右按下#defineMOUSE_BUTTON_3_UP32右弹起
__int32 mis - 按下和弹起之间的毫秒差
```
### 返回值
```
查看返回值表
```
### 注意事项
```
可以通过调用HCHD_SetMMTrackType来设置鼠标全局移动轨迹类型
按键在轨迹坐标集中那些坐标有效:第一个点操作按键-中间点不操作按键-最后一个点不操作按键
```
### HCHD_MousePress - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MousePress - 进阶用法
```
// 示例2：HCHD_MousePress 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MousePress - 高级应用
```
// 示例3：HCHD_MousePress 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_MousePressEx
### 描述
```
前台驱动鼠标移动并点击(可指定句柄)
```
### 原型
```
__int64 __stdcall HCHD_MousePressEx(__int64 hwnd,__int32 x,__int32 y,__int32 mButCode,__int32 mis);
```
### 参数
```
__int64 hwnd - 窗口句柄
__int32 X - 窗口客户区坐标X
__int32 X - 窗口客户区坐标Y
__int32 mButCode - 
__int32 mButCode 鼠标移动时鼠标按钮的值如下 指定0表示移动不按键 - #defineMOUSE_BUTTON_1_DOWN1左按下#defineMOUSE_BUTTON_1_UP2左弹起#defineMOUSE_BUTTON_2_DOWN4中按下#defineMOUSE_BUTTON_2_UP8中弹起#defineMOUSE_BUTTON_3_DOWN16右按下#defineMOUSE_BUTTON_3_UP32右弹起
__int32 mis - 按下和弹起之间的毫秒差
```
### 返回值
```
查看返回值表
```
### 注意事项
```
可以通过调用HCHD_SetMMTrackType来设置鼠标全局移动轨迹类型
按键在轨迹坐标集中那些坐标有效:第一个点操作按键-中间点不操作按键-最后一个点不操作按键
```
### HCHD_MousePressEx - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MousePressEx - 进阶用法
```
// 示例2：HCHD_MousePressEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MousePressEx - 高级应用
```
// 示例3：HCHD_MousePressEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_MouseDown
### 描述
```
前台驱动鼠标移动并按下指定键(可指定句柄)
```
### 原型
```
__int64 __stdcall HCHD_MouseDown(__int64 hwnd,__int32 x,__int32 y,__int32 mButCode);
```
### 参数
```
__int64 hwnd - 窗口句柄
__int32 X - 窗口客户区坐标X
__int32 X - 窗口客户区坐标Y
__int32 mButCode - 
__int32 mButCode 鼠标移动时鼠标按钮的值如下 指定0表示移动不按键 - #defineMOUSE_BUTTON_1_DOWN1左按下#defineMOUSE_BUTTON_2_DOWN4中按下#defineMOUSE_BUTTON_3_DOWN16右按下
```
### 返回值
```
查看返回值表
```
### 注意事项
```
可以通过调用HCHD_SetMMTrackType来设置鼠标全局移动轨迹类型
按键在轨迹坐标集中那些坐标有效:第一个点操作按键-中间点不操作按键-最后一个点不操作按键
```
### HCHD_MouseDown - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MouseDown - 进阶用法
```
// 示例2：HCHD_MouseDown 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MouseDown - 高级应用
```
// 示例3：HCHD_MouseDown 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_MouseUp
### 描述
```
前台驱动鼠标移动并弹起指定键(可指定句柄)
```
### 原型
```
__int64 __stdcall HCHD_MouseUp(__int64 hwnd,__int32 x,__int32 y,__int32 mButCode);
```
### 参数
```
__int64 hwnd - 窗口句柄
__int32 X - 窗口客户区坐标X
__int32 X - 窗口客户区坐标Y
__int32 mButCode - 
__int32 mButCode 鼠标移动时鼠标按钮的值如下 指定0表示移动不按键 - #defineMOUSE_BUTTON_1_UP2左弹起#defineMOUSE_BUTTON_2_UP8中弹起#defineMOUSE_BUTTON_3_UP32右弹起
```
### 返回值
```
查看返回值表
```
### 注意事项
```
可以通过调用HCHD_SetMMTrackType来设置鼠标全局移动轨迹类型
按键在轨迹坐标集中那些坐标有效:第一个点操作按键-中间点不操作按键-最后一个点不操作按键
```
### HCHD_MouseUp - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MouseUp - 进阶用法
```
// 示例2：HCHD_MouseUp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MouseUp - 高级应用
```
// 示例3：HCHD_MouseUp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_KbPress
### 描述
```
前台驱动键盘(按下并弹起)
```
### 原型
```
__int64 __stdcall HCHD_KbPress(__int32 virtualKeyCode,__int32 mis);
```
### 参数
```
__int32 virtualKeyCode - 虚拟键码
__int32 mis - 按下和弹起之间的毫秒差
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_KbPress - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_KbPress - 进阶用法
```
// 示例2：HCHD_KbPress 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_KbPress - 高级应用
```
// 示例3：HCHD_KbPress 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_KbDown
### 描述
```
前台驱动键盘(按下某键)
```
### 原型
```
__int64 __stdcall HCHD_KbDown(__int32 virtualKeyCode);
```
### 参数
```
__int32 virtualKeyCode - 虚拟键码
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_KbDown - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_KbDown - 进阶用法
```
// 示例2：HCHD_KbDown 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_KbDown - 高级应用
```
// 示例3：HCHD_KbDown 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_KbUp
### 描述
```
前台驱动键盘(弹起某键)
```
### 原型
```
__int64 __stdcall HCHD_KbUp(__int32 virtualKeyCode);
```
### 参数
```
__int32 virtualKeyCode - 虚拟键码
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_KbUp - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_KbUp - 进阶用法
```
// 示例2：HCHD_KbUp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_KbUp - 高级应用
```
// 示例3：HCHD_KbUp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_RW
### 描述
```
驱动读写
```
### 原型
```
__int64 __stdcall HCHD_RW(__int32 pid,__int64 targetAddress,__int64 bufferAddress,__int32 bufferOfBytes,__int32 rwType);
```
### 参数
```
__int32 pid - 进程ID
__int64 targetAddress - 目标地址
__int64 bufferAddress - 数据缓冲区指针
__int32 bufferOfBytes - 数据缓冲区大小,
__int32 rwType - 读写类型[0=读内存;1=写内存;2=强写内存]
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_RW - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_RW - 进阶用法
```
// 示例2：HCHD_RW 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_RW - 高级应用
```
// 示例3：HCHD_RW 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_BeginRWEx
### 描述
```
驱动读写Ex(开始批读写)与HCHD_EndRWEx成对出现适合快速遍历(百万级别读写单线程)
```
### 原型
```
__int64 __stdcall HCHD_BeginRWEx(__int32 pid);
```
### 参数
```
__int32 pid - 进程ID
```
### 返回值
```
查看返回值表
```
### 注意事项
```
适合快速遍历
```
### HCHD_BeginRWEx - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_BeginRWEx - 进阶用法
```
// 示例2：HCHD_BeginRWEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_BeginRWEx - 高级应用
```
// 示例3：HCHD_BeginRWEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_RWEx
### 描述
```
驱动读写Ex(批量读写)(百万级别读写单线程)
```
### 原型
```
__int64 __stdcall HCHD_RWEx(__int64 targetAddress,__int64 bufferAddress,__int32 bufferOfBytes,__int32 rwType);
```
### 参数
```
__int64 targetAddress - 目标地址
__int64 bufferAddress - 数据缓冲区指针
__int32 bufferOfBytes - 数据缓冲区大小,
__int32 rwType - 读写类型[0=读内存;1=写内存;2=强写内存]
```
### 返回值
```
查看返回值表
```
### 注意事项
```
先调用HCHD_BeginRWEx然后中间调用该接口HCHD_RWEx最后调用HCHD_EndRWEx用于释放环境
```
### HCHD_RWEx - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_RWEx - 进阶用法
```
// 示例2：HCHD_RWEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_RWEx - 高级应用
```
// 示例3：HCHD_RWEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_EndRWEx
### 描述
```
驱动读写Ex(结束批读写)与HCHD_BeginRWEx成对出现适合快速遍历(百万级别读写单线程)
```
### 原型
```
__int64 __stdcall HCHD_EndRWEx();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
适合快速遍历
```
### HCHD_EndRWEx - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_EndRWEx - 进阶用法
```
// 示例2：HCHD_EndRWEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_EndRWEx - 高级应用
```
// 示例3：HCHD_EndRWEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_AddrIsRead
### 描述
```
检查地址是否可读
```
### 原型
```
__int64 __stdcall HCHD_AddrIsRead(__int32 pid,__int64 addr,__int32 size);
```
### 参数
```
__int32 pid - 进程ID指定为0表示初始化HD快速读写遍历(适合)
__int64 addr - 需要测试的地址
__int32 size - 地址所涉及到的字节大小(4字节或者8字节),不能为其他字节数
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_AddrIsRead - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_AddrIsRead - 进阶用法
```
// 示例2：HCHD_AddrIsRead 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_AddrIsRead - 高级应用
```
// 示例3：HCHD_AddrIsRead 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_PP
### 描述
```
进程保护
```
### 原型
```
__int64 __stdcall HCHD_PP(__int32 pid,BOOL bOpen);
```
### 参数
```
__int32 pid - 进程ID
bool bOpen - 是否开启[1=开启保护;0=关闭保护]
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_PP - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PP - 进阶用法
```
// 示例2：HCHD_PP 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PP - 高级应用
```
// 示例3：HCHD_PP 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_PHide
### 描述
```
开启进程隐藏
```
### 原型
```
__int64 __stdcall HCHD_PHide(__int32 pid);
```
### 参数
```
__int32 pid - 进程ID
```
### 返回值
```
查看返回值表
```
### 注意事项
```
一次性只能隐藏一个,如果需要隐藏第二个,先把之前的给显示了
```
### HCHD_PHide - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PHide - 进阶用法
```
// 示例2：HCHD_PHide 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PHide - 高级应用
```
// 示例3：HCHD_PHide 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_PHideEx
### 描述
```
开启进程隐藏(加强版本)无法恢复
```
### 原型
```
__int64 __stdcall HCHD_PHideEx(__int32 pid);
```
### 参数
```
__int32 pid - 进程ID
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.隐藏后关闭进程不会蓝屏
2.隐藏后该接口无法恢复显示,其实也没必要恢复显示
```
### HCHD_PHideEx - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PHideEx - 进阶用法
```
// 示例2：HCHD_PHideEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PHideEx - 高级应用
```
// 示例3：HCHD_PHideEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_PShow
### 描述
```
进程显示
```
### 原型
```
__int64 __stdcall HCHD_PShow(__int32 pid);
```
### 参数
```
__int32 pid - 进程ID
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_PShow - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PShow - 进阶用法
```
// 示例2：HCHD_PShow 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PShow - 高级应用
```
// 示例3：HCHD_PShow 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_PPKill
### 描述
```
进程杀死
```
### 原型
```
__int64 __stdcall HCHD_PPKill(char* processName,__int32 pid);
```
### 参数
```
char* processName - 进程名把当前所有相同进程名全部杀掉
__int32 pid - 进程PID指定了PID进程名就失效
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_PPKill - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PPKill - 进阶用法
```
// 示例2：HCHD_PPKill 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PPKill - 高级应用
```
// 示例3：HCHD_PPKill 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_MemoryAllocate
### 描述
```
驱动申请内存
```
### 原型
```
__int64 __stdcall HCHD_MemoryAllocate(__int32 pid,__int64 memorySize,__int32 memoryProtect,BOOL bHighAddress,__int64 pOutBuffer);
```
### 参数
```
__int32 pid - 进程ID
__int64 memorySize - 申请大小
__int32 memoryProtect - 内存保护属性例如
bool bHighAddress - 是否申请高位内存如果申请大小超过4字节存储的值就属于高位内存一般为假就行
__int64 pOutBuffer - 缓冲区指针(存申请返回的地址)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_MemoryAllocate - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryAllocate - 进阶用法
```
// 示例2：HCHD_MemoryAllocate 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryAllocate - 高级应用
```
// 示例3：HCHD_MemoryAllocate 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_MemoryAllocateEx
### 描述
```
驱动申请内存(扩展版本)
```
### 原型
```
__int64 __stdcall HCHD_MemoryAllocateEx(__int32 pid,__int64 memoryAddr,__int64 memorySize,__int32 memoryProtect,BOOL bHighAddress,__int64 pOutBuffer);
```
### 参数
```
__int32 pid - 进程ID
__int64 memoryAddr - 指定的内存地址或者为NULL(0)
__int64 memorySize - 申请大小
__int32 memoryProtect - 内存保护属性
bool bHighAddress - 是否申请高位内存如果申请大小超过4字节存储的值就属于高位内存一般为假就行
__int64 pOutBuffer - 缓冲区指针(存申请返回的地址)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_MemoryAllocateEx - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryAllocateEx - 进阶用法
```
// 示例2：HCHD_MemoryAllocateEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryAllocateEx - 高级应用
```
// 示例3：HCHD_MemoryAllocateEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_MemoryFree
### 描述
```
驱动内存释放
```
### 原型
```
__int64 __stdcall HCHD_MemoryFree(__int32 pid,__int64 memoryAddress);
```
### 参数
```
__int32 pid - 进程ID
__int64 memoryAddress - 需要释放的内存地址
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_MemoryFree - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryFree - 进阶用法
```
// 示例2：HCHD_MemoryFree 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryFree - 高级应用
```
// 示例3：HCHD_MemoryFree 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_MemoryProtect
### 描述
```
驱动修改内存保护属性
```
### 原型
```
__int64 __stdcall HCHD_MemoryProtect(__int32 pid,__int64 memoryAddress,__int64 memoryOfBytes,__int32 newProtect);
```
### 参数
```
__int32 pid - 进程ID
__int64 memoryAddress - 内存地址
__int64 memoryOfBytes - 内存大小
__int32 newProtect - 新保护值
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_MemoryProtect - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryProtect - 进阶用法
```
// 示例2：HCHD_MemoryProtect 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryProtect - 高级应用
```
// 示例3：HCHD_MemoryProtect 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_MemoryHide
### 描述
```
驱动内存隐藏
```
### 原型
```
__int64 __stdcall HCHD_MemoryHide(__int32 pid,__int64 memoryAddress,__int64 memoryOfBytes);
```
### 参数
```
__int32 pid - 进程ID
__int64 memoryAddress - 内存地址
__int64 memoryOfBytes - 内存大小
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_MemoryHide - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryHide - 进阶用法
```
// 示例2：HCHD_MemoryHide 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryHide - 高级应用
```
// 示例3：HCHD_MemoryHide 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_MemoryQuery
### 描述
```
驱动内存查询
```
### 原型
```
__int64 __stdcall HCHD_MemoryQuery(__int32 pid,__int64 memoryAddress,PVOIDpOutBuffer);
```
### 参数
```
__int32 pid - 进程ID
__int64 memoryAddress - 内存地址
 pOutBuffer - 缓冲区指针[这里固定使用的是64位的MEMORY_BASIC_INFORMATION结构体,结构体大(48字节)]结构体
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_MemoryQuery - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryQuery - 进阶用法
```
// 示例2：HCHD_MemoryQuery 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryQuery - 高级应用
```
// 示例3：HCHD_MemoryQuery 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_MemoryFindCode
### 描述
```
驱动通过特征码查找地址
```
### 原型
```
__int64 __stdcall HCHD_MemoryFindCode(__int32 pid,__int64 address,__int64 siginCode,__int32 siginCodeSize,__int32 iProtect,__int64 outBuffer);
```
### 参数
```
__int32 pid - 进程ID
__int64 address - 起始搜索地址
__int64 siginCode - 特征码(二进制缓冲区不是字符串)
__int32 siginCodeSize - 特征码长度(字节单位),
__int32 iProtect - 要搜索的内存保护属性
__int64 outBuffer - 缓冲区(存地址)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_MemoryFindCode - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryFindCode - 进阶用法
```
// 示例2：HCHD_MemoryFindCode 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_MemoryFindCode - 高级应用
```
// 示例3：HCHD_MemoryFindCode 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_GetMainModuleBase
### 描述
```
驱动获取主模块EXE的地址
```
### 原型
```
__int64 __stdcall HCHD_GetMainModuleBase(__int32 pid,__int64 outBuffer);
```
### 参数
```
__int32 pid - 进程ID
__int64 outBuffer - 缓冲区指针(存地址)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_GetMainModuleBase - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetMainModuleBase - 进阶用法
```
// 示例2：HCHD_GetMainModuleBase 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetMainModuleBase - 高级应用
```
// 示例3：HCHD_GetMainModuleBase 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_GetModuleBase
### 描述
```
驱动获取指定模块的地址
```
### 原型
```
__int64 __stdcall HCHD_GetModuleBase(__int32 pid,char* moduleName,__int64 outBuffer);
```
### 参数
```
__int32 pid - 进程ID
char* moduleName - 模块名(Ascii字符串)
__int64 outBuffer - 缓冲区指针(存地址)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_GetModuleBase - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetModuleBase - 进阶用法
```
// 示例2：HCHD_GetModuleBase 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetModuleBase - 高级应用
```
// 示例3：HCHD_GetModuleBase 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_GetModuleCallAddr
### 描述
```
驱动获取指定模块的指定的函数地址
```
### 原型
```
__int64 __stdcall HCHD_GetModuleCallAddr(__int32 pid,char* moduleName,char* callName,__int64 outBuffer);
```
### 参数
```
__int32 pid - 进程ID
char* moduleName - 模块名(Ascii字符串)
char* callName - 函数名字(Ascii字符串)
__int64 outBuffer - 缓冲区指针(存地址)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_GetModuleCallAddr - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetModuleCallAddr - 进阶用法
```
// 示例2：HCHD_GetModuleCallAddr 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetModuleCallAddr - 高级应用
```
// 示例3：HCHD_GetModuleCallAddr 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_ChangeMachineKey
### 描述
```
驱动修改机器码
```
### 原型
```
__int64 __stdcall HCHD_ChangeMachineKey(__int32 type);
```
### 参数
```
 参数 - 类型0=全部开启1=注册表2=硬盘序列号3=网卡序列号4=本地文件特征5=微端设备序列号6=网络代理设备序列号7=图形处理器(GPU-GUID)8=分区序列号9=固态硬盘序列号10=主板BIOS序列号11=硬盘数据卷序列号(静态)12=硬盘数据卷序列号(动态)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_ChangeMachineKey - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_ChangeMachineKey - 进阶用法
```
// 示例2：HCHD_ChangeMachineKey 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_ChangeMachineKey - 高级应用
```
// 示例3：HCHD_ChangeMachineKey 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_NTNCaptureScreen
### 描述
```
驱动内核反截图
```
### 原型
```
__int64 __stdcall HCHD_NTNCaptureScreen(__int64 hWnd,BOOL Enable);
```
### 参数
```
__int64 hWnd - 窗口句柄
bool Enable - 是否开启
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_NTNCaptureScreen - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_NTNCaptureScreen - 进阶用法
```
// 示例2：HCHD_NTNCaptureScreen 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_NTNCaptureScreen - 高级应用
```
// 示例3：HCHD_NTNCaptureScreen 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_NTThreadRunCall
### 描述
```
驱动内存远线程执行函数
```
### 原型
```
__int64 __stdcall HCHD_NTThreadRunCall(__int32 pid,__int64 callAddress);
```
### 参数
```
__int32 pid - 进程PID
__int64 callAddress - CALL地址
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_NTThreadRunCall - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_NTThreadRunCall - 进阶用法
```
// 示例2：HCHD_NTThreadRunCall 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_NTThreadRunCall - 高级应用
```
// 示例3：HCHD_NTThreadRunCall 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_ClearInject
### 描述
```
驱动清除注入缓存(全局插件缓存,DLL缓存)
```
### 原型
```
__int64 __stdcall HCHD_ClearInject();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_ClearInject - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_ClearInject - 进阶用法
```
// 示例2：HCHD_ClearInject 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_ClearInject - 高级应用
```
// 示例3：HCHD_ClearInject 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_PcrocessRoot
### 描述
```
进程提权
```
### 原型
```
__int64 __stdcall HCHD_PcrocessRoot(__int32 pid);
```
### 参数
```
__int32 pid - 进程PID(内部会通过PID获取进程句柄)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_PcrocessRoot - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PcrocessRoot - 进阶用法
```
// 示例2：HCHD_PcrocessRoot 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_PcrocessRoot - 高级应用
```
// 示例3：HCHD_PcrocessRoot 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_HandleRoot
### 描述
```
进程提权
```
### 原型
```
__int64 __stdcall HCHD_HandleRoot(__int64 handle);
```
### 参数
```
__int64 handle - 句柄
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_HandleRoot - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_HandleRoot - 进阶用法
```
// 示例2：HCHD_HandleRoot 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_HandleRoot - 高级应用
```
// 示例3：HCHD_HandleRoot 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_SetMMTrackType
### 描述
```
设置驱动鼠标移动轨迹类型
```
### 原型
```
__int64 __int64 __stdcall  HCHD_SetMMTrackType(__int32 type);
```
### 参数
```
__int32 type - 轨迹类型 -1或0 表示无轨迹  1 表示随机轨迹 2表示直线轨迹 3表示直线波动轨迹(过检测强)  具体的轨迹效果可以参考:后台键鼠的轨迹
```
### 返回值
```
查看返回值表
返回之前的轨迹类型
```
### 注意事项
```
无
```
### HCHD_SetMMTrackType - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_SetMMTrackType - 进阶用法
```
// 示例2：HCHD_SetMMTrackType 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_SetMMTrackType - 高级应用
```
// 示例3：HCHD_SetMMTrackType 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
