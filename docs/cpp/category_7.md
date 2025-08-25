---
sidebar_position: 8
---

# 🛰️ 通讯环境模块(Env)
## 📌 函数: HCEnv_Init
### 描述
```
HD插件环境加载(初始化中控环境)
```
### 原型
```cpp
__int64 __stdcall HCEnv_Init(__int32 timeOut=10000);
```
### 参数
```
__int32 timeOut - 通讯超时时间(毫秒),默认就行
```
### 返回值
```
查看返回值表
返回值为0是正确的,表示当前中控进程窗口序号为0！！！
目标进程窗口序号大于等于1,自己管理,0序号内置为中控进程窗口序号
```
### 注意事项
```
中控初始化开始就要调用,仅仅一次
```
### HCEnv_Init - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_Init - 进阶用法
```cpp
// 示例2：HCEnv_Init 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_Init - 高级应用
```cpp
// 示例3：HCEnv_Init 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_InitEx
### 描述
```
HD插件环境加载(初始化中控环境)(扩展版本)最新版本一般不用了
```
### 原型
```cpp
__int64 __stdcall HCEnv_InitEx(__int32 通讯超时毫秒=10000,__int32 通讯检测间隔毫秒=20,__int32 回调响应毫秒=5);
```
### 参数
```
__int32 timeOut(通讯超时毫秒) - 通讯超时时间(毫秒),默认就行
__int32 通讯检测间隔毫秒 - 默认就行,越小响应越快,CPU占用了越高(可以忽视最新版本不需要考虑这个问题了)
__int32 回调响应毫秒 - 默认就行,越小响应越快,CPU占用了越高
```
### 返回值
```
查看返回值表
返回值为0是正确的,表示当前中控进程窗口序号为0！！！
目标进程窗口序号大于等于1,自己管理,0序号内置为中控进程窗口序号
```
### 注意事项
```
中控初始化开始就要调用,仅仅一次
```
### HCEnv_InitEx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_InitEx - 进阶用法
```cpp
// 示例2：HCEnv_InitEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_InitEx - 高级应用
```cpp
// 示例3：HCEnv_InitEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_Load
### 描述
```
HD插件环境加载
```
### 原型
```cpp
__int64 __stdcall HCEnv_Load(__int32 窗口序号,__int32 目标进程PID,__int32 游戏类型=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int32 目标进程PID - 目标进程PID
__int32 游戏类型 - 内置了游戏接口(每个游戏类型值不同),可以在工具上查看对应的值
```
### 返回值
```
查看返回值表
```
### 注意事项
```
调用这个接口需要先调用环境初始化模块中的初始化接口
每次打开进程后都要调用
```
### HCEnv_Load - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_Load - 进阶用法
```cpp
// 示例2：HCEnv_Load 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_Load - 高级应用
```cpp
// 示例3：HCEnv_Load 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_LoadEx
### 描述
```
HD插件环境加载(扩展版本),涉及到回调
```
### 原型
```cpp
__int64 __stdcall HCEnv_LoadEx(__int32 窗口序号,__int32 目标进程PID,__int32 游戏类型=0,BOOL 是否开启接受线程=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int32 目标进程PID - 目标进程PID
__int32 游戏类型 - 内置了游戏接口(每个游戏类型值不同),可以在工具上查看对应的值
bool 是否开启接受线程 - 如果需要开启跨进程回调(如
```
### 返回值
```
查看返回值表
```
### 注意事项
```
调用这个接口需要先调用环境初始化模块中的初始化接口
每次打开进程后都要调用
```
### HCEnv_LoadEx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_LoadEx - 进阶用法
```cpp
// 示例2：HCEnv_LoadEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_LoadEx - 高级应用
```cpp
// 示例3：HCEnv_LoadEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_UnLoad
### 描述
```
HD插件环境卸载
```
### 原型
```cpp
__int64 __stdcall HCEnv_UnLoad(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号（从1开始）
```
### 返回值
```
查看返回值表
```
### 注意事项
```
调用这个接口需要先调用环境初始化模块中的初始化接口
进程关闭一定要记得卸载窗口序号对应的窗口环境,以便于下次窗口序号使用
1.没安装过插件的都不算重连窗口全部当新窗口处理
2.安装过插件的不管卸载环境还是崩溃或者重启窗口都可以重连窗口一个序号只能绑定到一个窗口操作
```
### HCEnv_UnLoad - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_UnLoad - 进阶用法
```cpp
// 示例2：HCEnv_UnLoad 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_UnLoad - 高级应用
```cpp
// 示例3：HCEnv_UnLoad 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_UnLoadEx
### 描述
```
HD插件环境卸载(扩展版本)
```
### 原型
```cpp
__int64 __stdcall HCEnv_UnLoadEx(__int32 窗口序号,BOOL bRecon=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号（从1开始）
bool bRecon - 是否还需要重连默认是需要重连
```
### 返回值
```
查看返回值表
```
### 注意事项
```
调用这个接口需要先调用环境初始化模块中的初始化接口
进程关闭一定要记得卸载窗口序号对应的窗口环境,以便于下次窗口序号使用
1.没安装过插件的都不算重连窗口全部当新窗口处理
2.安装过插件的不管卸载环境还是崩溃或者重启窗口都可以重连窗口一个序号只能绑定到一个窗口操作
```
### HCEnv_UnLoadEx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_UnLoadEx - 进阶用法
```cpp
// 示例2：HCEnv_UnLoadEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_UnLoadEx - 高级应用
```cpp
// 示例3：HCEnv_UnLoadEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDEnv_GetWinExIndex
### 描述
```
获取副窗口序号
```
### 原型
```cpp
__int64 __stdcall HDEnv_GetWinExIndex(__int32 winIndex);
```
### 参数
```
__int32 winIndex - 传递窗口序号返回一个与当前指定的窗口序号的一个副窗口序号
```
### 返回值
```
查看返回值表
```
### 注意事项
```
这个副窗口序号可以用于登录器的绑定和操作,相当于窗口序号的一个助手,做一些额外的事情相当于一个窗口序号可以操作2个进程如:窗口序号1那么他返回的窗口扩展序号就是1+31也就是32序号
```
### HDEnv_GetWinExIndex - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDEnv_GetWinExIndex - 进阶用法
```cpp
// 示例2：HDEnv_GetWinExIndex 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDEnv_GetWinExIndex - 高级应用
```cpp
// 示例3：HDEnv_GetWinExIndex 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDEnv_GetGlobalWinExIndex
### 描述
```
获取全局副窗口序号,这是一个全局的序号
```
### 原型
```cpp
__int64 __stdcall HDEnv_GetGlobalWinExIndex();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
一个中控仅有一个计算方式:0+31也就是这个全局序号为31序号从0开始用途:给当前中控分配一个助手,来控制一个进程来辅助中控做一些事情
```
### HDEnv_GetGlobalWinExIndex - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDEnv_GetGlobalWinExIndex - 进阶用法
```cpp
// 示例2：HDEnv_GetGlobalWinExIndex 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDEnv_GetGlobalWinExIndex - 高级应用
```cpp
// 示例3：HDEnv_GetGlobalWinExIndex 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_AttachHeart
### 描述
```
给中控附加心跳
```
### 原型
```cpp
__int64 __stdcall HCEnv_AttachHeart(__int32 type,__int64 funCallbackAddr,__int32 timeOutNor=10000,__int32 timeOut=10000);
```
### 参数
```
__int32 给中控附加心跳type - 0->正常心跳(内部触发心跳回调+排序回调)1->通讯线程2->主线程3->卡屏6->1+2+3如果需要检测主线程心跳是否卡住,请记得先HOOK主线程【HC_HookMaint hread()】接口timeOutNorL
```
### 返回值
```
1正常处理返回0禁止当前窗口序号的心跳(永久无法恢复除非重启中控一般用于测试调试)
返回值:
查看返回值表
```
### 注意事项
```
检测主线程心跳
如果需要检测主线程心跳是否卡住,请记得先HOOK主线程接口HC_HookMaint hread
设置心跳回调函数类型
typedef__int32 (* HeartFunType)(__int32 窗口索引,__int32 type);回调函数返回值:0不重置之前的记录1重置之前的记录(一般重新开启新进程会设置为1)
\n0.正常心跳进程存在的情况下会触发\n1.通讯崩溃/关闭等等原因导致进程不存在->重启窗口\n2.主线程崩溃/关闭/未响应/目标进程卡死原因导致进程不存在/存在->强制关闭->重启窗口设置挂接主线程\n2.1.附加心跳的时候可以检查主线程的状态(游戏/目标)\n2.2.后面的内存操作可以主线程调用\n2.3.注意:附加心跳的时候设置的检查时间一定要大于安装插件到挂接主线程的时间\n3.卡屏崩溃/关闭/区域图像卡死了原因导致进程不存在/存在->强制关闭->重启窗口设置屏幕检查范围\n6.1+2+3
```
### HCEnv_AttachHeart - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_AttachHeart - 进阶用法
```cpp
// 示例2：HCEnv_AttachHeart 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_AttachHeart - 高级应用
```cpp
// 示例3：HCEnv_AttachHeart 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_SetWindowsSortInfo
### 描述
```
设置窗口排序信息
```
### 原型
```cpp
__int64 __stdcall HCEnv_SetWindowsSortInfo(__int32 x,__int32 y,__int32 offsetx,__int32 offsety,__int32 cols,__int64 funCallbackAddr);
```
### 参数
```
__int32 x - 屏幕左上角X开始x
```
### 返回值
```
查看返回值表
```
### HCEnv_SetWindowsSortInfo - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetWindowsSortInfo - 进阶用法
```cpp
// 示例2：HCEnv_SetWindowsSortInfo 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetWindowsSortInfo - 高级应用
```cpp
// 示例3：HCEnv_SetWindowsSortInfo 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_SetScreenCheckHeart
### 描述
```
当我们心跳检测指定了3或者6需要设置卡屏范围和卡屏检测次数当大于这个次数就调用回调
```
### 原型
```cpp
__int64 __stdcall HCEnv_SetScreenCheckHeart(__int32 x,__int32 y,__int32 w,__int32 h,__int32 最大次数,__int32 截屏前后间隔时间=1000);
```
### 参数
```
__int32 x - 客户端x
__int32 y - 客户端y
__int32 w - 区域宽度
__int32 h - 区域高度
__int32 最大次数 - 当到达这个次数就会触发回调
__int32 截屏前后间隔时间 - 前后时间间隔用来比较图像是否卡主
```
### 返回值
```
查看返回值表
```
### HCEnv_SetScreenCheckHeart - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetScreenCheckHeart - 进阶用法
```cpp
// 示例2：HCEnv_SetScreenCheckHeart 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetScreenCheckHeart - 高级应用
```cpp
// 示例3：HCEnv_SetScreenCheckHeart 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_DetachHeart
### 描述
```
脱离中控附加的心跳检测
```
### 原型
```cpp
__int64 __stdcall HCEnv_DetachHeart();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
脱离会堵塞直到脱离成功一般中控进程结果关闭前调用
```
### HCEnv_DetachHeart - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_DetachHeart - 进阶用法
```cpp
// 示例2：HCEnv_DetachHeart 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_DetachHeart - 高级应用
```cpp
// 示例3：HCEnv_DetachHeart 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_Debug
### 描述
```
设置导入接口为调试模式
```
### 原型
```cpp
__int64 __stdcall HCEnv_Debug(BOOL 是否调试=FALSE);
```
### 参数
```
bool 是否调试 - 当使用【HDDebug.dll】导入接口的时候就需要调用这个设置为调试模式(否者插件可能安装不成功)然后方可继续后面的一系列操作
```
### 返回值
```
查看返回值表
```
### 注意事项
```
中控初始化开始就可以调用,仅仅一次
发布版本不需要调用此接口,默认为发布版本
```
### HCEnv_Debug - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_Debug - 进阶用法
```cpp
// 示例2：HCEnv_Debug 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_Debug - 高级应用
```cpp
// 示例3：HCEnv_Debug 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_MsgFile
### 描述
```
设置是否打开文件提示窗口
```
### 原型
```cpp
__int64 __stdcall HCEnv_MsgFile(BOOL 是否文件提示=TRUE);</FONT>
```
### 参数
```
bool 是否文件提示 - 是否开启文件提示日志
```
### 返回值
```
查看返回值表
```
### 注意事项
```
当HD内部导致中控关闭或者插件失效会一文件形式提示信息
```
### HCEnv_MsgFile - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_MsgFile - 进阶用法
```cpp
// 示例2：HCEnv_MsgFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_MsgFile - 高级应用
```cpp
// 示例3：HCEnv_MsgFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_AddThread
### 描述
```
添加线程环境
```
### 原型
```cpp
__int64 __stdcall HCEnv_AddThread(__int32 窗口序号,__int32 线程ID,__int32 bDebug=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号（从1开始）
__int32 线程ID - 当前线程ID
__int32 bDebug - 是否是调试模式,如果是那么线程ID可以任意指定
```
### 返回值
```
查看返回值表
```
### 注意事项
```
这个接口用来测试用的,开发者一般用不到
```
### HCEnv_AddThread - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_AddThread - 进阶用法
```cpp
// 示例2：HCEnv_AddThread 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_AddThread - 高级应用
```cpp
// 示例3：HCEnv_AddThread 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_TestCALL_RetValue
### 描述
```
测试是否通讯成功,返回单一值
```
### 原型
```cpp
__int64 __stdcall HCEnv_TestCALL_RetValue(__int32 窗口序号,__int64 rcx=0,__int64 rdx=0,__int64 r8=0,__int64 r9=0,__int64 lparam5=0,__int64 lparam6=0,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号（从1开始）
__int64 rcx - CALL参数
__int64 rdx - CALL参数
__int64 r8 - CALL参数
__int64 r9 - CALL参数
 l5 - CALL参数
 l6 - CALL参数
bool 是否主线程调用 - 是否主线程调用这个CALL,需要挂接主线程
```
### 返回值
```
查看返回值表
```
### 注意事项
```
这个接口用来测试是否环境搭建成功
```
### HCEnv_TestCALL_RetValue - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TestCALL_RetValue - 进阶用法
```cpp
// 示例2：HCEnv_TestCALL_RetValue 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TestCALL_RetValue - 高级应用
```cpp
// 示例3：HCEnv_TestCALL_RetValue 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_TestCALL_RetArray
### 描述
```
测试是否通讯成功,返回json字符串
```
### 原型
```cpp
__int64 __stdcall HCEnv_TestCALL_RetArray(__int32 窗口序号,__int64 rcx=0,__int64 rdx=0,__int64 r8=0,__int64 r9=0,__int64 lparam5=0,__int64 lparam6=0,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号（从1开始）
__int64 rcx - CALL参数
__int64 rdx - CALL参数
__int64 r8 - CALL参数
__int64 r9 - CALL参数
 l5 - CALL参数
 l6 - CALL参数
bool 是否主线程调用 - 是否主线程调用这个CALL,需要挂接主线程
```
### 返回值
```
查看返回值表
```
### 注意事项
```
这个接口用来测试是否环境搭建成功
```
### HCEnv_TestCALL_RetArray - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TestCALL_RetArray - 进阶用法
```cpp
// 示例2：HCEnv_TestCALL_RetArray 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TestCALL_RetArray - 高级应用
```cpp
// 示例3：HCEnv_TestCALL_RetArray 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_TestCALL_RetValueEx
### 描述
```
测试是否通讯成功,返回单一值
```
### 原型
```cpp
__int64 __stdcall HCEnv_TestCALL_RetValueEx(__int32 窗口序号,__int32 线程ID,__int64 rcx=0,__int64 rdx=0,__int64 r8=0,__int64 r9=0,__int64 lparam5=0,__int64 lparam6=0,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号（从1开始）
__int32 线程ID - 当前线程ID或者添加的指定ID
__int64 rcx - CALL参数
__int64 rdx - CALL参数
__int64 r8 - CALL参数
__int64 r9 - CALL参数
 l5 - CALL参数
 l6 - CALL参数
bool 是否主线程调用 - 是否主线程调用这个CALL,需要挂接主线程
```
### 返回值
```
查看返回值表
```
### 注意事项
```
这个接口用来测试是否环境搭建成功
```
### HCEnv_TestCALL_RetValueEx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TestCALL_RetValueEx - 进阶用法
```cpp
// 示例2：HCEnv_TestCALL_RetValueEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TestCALL_RetValueEx - 高级应用
```cpp
// 示例3：HCEnv_TestCALL_RetValueEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_TestCALL_RetArrayEx
### 描述
```
测试是否通讯成功,返回json字符串
```
### 原型
```cpp
__int64 __stdcall HCEnv_TestCALL_RetArrayEx(__int32 窗口序号,__int32 线程ID,__int64 rcx=0,__int64 rdx=0,__int64 r8=0,__int64 r9=0,__int64 lparam5=0,__int64 lparam6=0,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号（从1开始）
__int32 线程ID - 当前线程ID或者添加的指定ID
__int64 rcx - CALL参数
__int64 rdx - CALL参数
__int64 r8 - CALL参数
__int64 r9 - CALL参数
 l5 - CALL参数
 l6 - CALL参数
bool 是否主线程调用 - 是否主线程调用这个CALL,需要挂接主线程
```
### 返回值
```
查看返回值表
```
### 注意事项
```
这个接口用来测试是否环境搭建成功
```
### HCEnv_TestCALL_RetArrayEx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TestCALL_RetArrayEx - 进阶用法
```cpp
// 示例2：HCEnv_TestCALL_RetArrayEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TestCALL_RetArrayEx - 高级应用
```cpp
// 示例3：HCEnv_TestCALL_RetArrayEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_SetProcessType
### 描述
```
设置目标进程位数
```
### 原型
```cpp
__int64 __stdcall HCEnv_SetProcessType(__int32 进程位数);
```
### 参数
```
__int32 进程位数 - 32/64
```
### 返回值
```
查看返回值表
```
### 注意事项
```
该接口是全局设置,也就是设置了一次,接下来的所有进程都是该位数,可以多次调用切换进程位数,建议使用HCEnv_SetProcessTypeEx这个扩展版本
如果使用了HDEX_InstallPlugin1HDEX_InstallPlugin2HDEX_InstallPlugin3这些接口可以不用调用这个接口设置目标进程位数
如果是自定义通讯流程就需要自己设置后然后初始化序号进行通讯绑定
```
### HCEnv_SetProcessType - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetProcessType - 进阶用法
```cpp
// 示例2：HCEnv_SetProcessType 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetProcessType - 高级应用
```cpp
// 示例3：HCEnv_SetProcessType 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_SetProcessTypeEx
### 描述
```
指定某个序号绑定的进程位数
```
### 原型
```cpp
__int64 __stdcall HCEnv_SetProcessTypeEx(__int32 窗口序号,__int32 进程位数);
```
### 参数
```
__int32 窗口序号 - 窗口序号
__int32 进程位数 - 32/64
```
### 返回值
```
查看返回值表
```
### 注意事项
```
如果使用了HDEX_InstallPlugin1HDEX_InstallPlugin2HDEX_InstallPlugin3这些接口可以不用调用这个接口设置目标进程位数
如果是自定义通讯流程就需要自己设置后然后初始化序号进行通讯绑定
```
### HCEnv_SetProcessTypeEx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetProcessTypeEx - 进阶用法
```cpp
// 示例2：HCEnv_SetProcessTypeEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetProcessTypeEx - 高级应用
```cpp
// 示例3：HCEnv_SetProcessTypeEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_SetHandleEventCallBack
### 描述
```
设置中控事件处理回调函数
```
### 原型
```cpp
__int64 __stdcall HCEnv_SetHandleEventCallBack(__int64 funCallBack);
```
### 参数
```
__int64 funCallBack - 事件处理函数地址
```
### 返回值
```
查看返回值表
```
### 注意事项
```
这个回调函数作用于当自定义模块通知中控的时候
中控事件处理回调函数接口类型:
typedef__int32 (__stdcall* HandleEventFunType)(__int32 窗口序号,__int32 插件序号,HDHandleEventInfoInfo);
HDHandleEventInfo结构体:
typedefstructHDHandleEventInfo\n处理事件{__int32 m_callType;\n自定义HDValuem_call;HDValuem_rcx;HDValuem_rdx;HDValuem_r8;HDValuem_r9;HDValuem_lparam5;HDValuem_lparam6;HDValuem_lparam7;HDValuem_lparam8;HDValuem_value;HDValuem_size;charm_buffer[MAX_PATH];charm_buffer2[MAX_PATH];HDValue* m_pRetValue;\n值单独char* m_pRetJson;\n字符串返回}HDHandleEventInfo;
代码案例:
__int32 HCLogin::HandleEvent(__int32 窗口序号,__int32 插件序号,HDHandleEventInfoInfo){HDbgPrint f_Normal(\"处理接受事件->窗口序号:%dcallType:%dbuffer1:%sbuffer2:%scall:%llXrcx:%llXrdx:%llX\",窗口序号,Info.m_callType,Info.m_buffer,Info.m_buffer2,Info.m_call,Info.m_rcx,Info.m_rdx);if(Info.m_callType==1){* Info.m_pRetValue=999;autoret=HCMKB_UnBind(窗口序号);HDbgPrint f_Normal(\"解绑后台ret:%d\",ret);return8;}elseif(Info.m_callType==2){\n处理逻辑* Info.m_pRetValue=123;sprint f_s(Info.m_pRetJson,1024* 10,\"%s\",\"我是中控\");\n672637autoret=HCMKB_Bind(窗口序号,Info.m_call,\"1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|0|1|\");HDbgPrint f_Normal(\"绑定后台ret:%d\",ret);if(ret==1){Sleep(1000);ret=HCMKB_MoveTo(窗口序号,672,610,0);HDbgPrint f_Normal(\"模拟移动一次->672610ret:%d\",ret);ret=HCMKB_LeftClick(窗口序号);HDbgPrint f_Normal(\"模拟点击一次->ret:%d\",ret);}return1024* 10;\n大于8认为是字符串}* Info.m_pRetValue=1;return8;}
```
### HCEnv_SetHandleEventCallBack - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetHandleEventCallBack - 进阶用法
```cpp
// 示例2：HCEnv_SetHandleEventCallBack 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetHandleEventCallBack - 高级应用
```cpp
// 示例3：HCEnv_SetHandleEventCallBack 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_SetShutDownCallBack
### 描述
```
设置关闭回调函数(处理HD功能失效,内部自动关闭中控前的操作)
```
### 原型
```cpp
__int64 __stdcall HCEnv_SetShutDownCallBack(__int64 funCallBack);
```
### 参数
```
__int64 funCallBack - 事件处理函数地址
```
### 返回值
```
查看返回值表
```
### 注意事项
```
当HD出现异常或者失效或者网络验证出现断线,会在自动关闭自身在期间会先调用这个回调(这个回调自己做好关闭前处理工作)然后会自动调用微软API接口ExitProcess();结束自身
在这个回调用户可以自行处理自己的业务逻辑
1.资源清理逻辑
2.接口释放逻辑
3.自启逻辑
4.自定义处理逻辑
回调函数接口类型:
typedef__int32 (__stdcall* ShutDownEventFunType)(__int32 code);
code:错误代码
```
### HCEnv_SetShutDownCallBack - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetShutDownCallBack - 进阶用法
```cpp
// 示例2：HCEnv_SetShutDownCallBack 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetShutDownCallBack - 高级应用
```cpp
// 示例3：HCEnv_SetShutDownCallBack 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_SetPidCheckBack
### 描述
```
设置PID检查回调(内部检查PID不存在会触发这个回调)
```
### 原型
```cpp
__int64 __stdcall HCEnv_SetPidCheckBack(__int64 checkFun);
```
### 参数
```
__int64 checkFun - 检查回调和安装插件那个检查回调一样的函数类型触发条件
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.这是设置全局PID检查回调
2.内部检查PID不存在会触发这个回调
3.如果没有调用此接口设置全局PID检查回调,那么对于4种安装插件方式中,当内部检查不到PID存在也会触发检查回调并传递给回调参数窗口序号:0之前窗口序号:0检查PID:pid提示值:8
回调函数接口类型:
typedef__int64 (__stdcall* CHECKINSTALLPLUGint YPE)(int windowsIndex,int preWindowsIndex,int checkPid,int error);
windowsIndex:窗口序号
preWindowsIndex:窗口序号
checkPid:当前检查的PID
error:传递8表示需要检查PID
```
### HCEnv_SetPidCheckBack - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetPidCheckBack - 进阶用法
```cpp
// 示例2：HCEnv_SetPidCheckBack 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetPidCheckBack - 高级应用
```cpp
// 示例3：HCEnv_SetPidCheckBack 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_SetCheckComItlTime
### 描述
```
设置通讯检测间隔毫秒
```
### 原型
```cpp
__int64 __stdcall HCEnv_SetCheckComItlTime(__int32 通讯检测间隔毫秒=20);
```
### 参数
```
__int32 通讯检测间隔毫秒 - 默认就行,越小响应越快,CPU占用了越高(也可以调用HCEnv_InitEx设置)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.值越小响应越快,随之带来的效率更高但是会导致CPU利用率变高2.值的大小根据当前的项目指定,对于一直要实时响应的最好小点
```
### HCEnv_SetCheckComItlTime - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetCheckComItlTime - 进阶用法
```cpp
// 示例2：HCEnv_SetCheckComItlTime 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetCheckComItlTime - 高级应用
```cpp
// 示例3：HCEnv_SetCheckComItlTime 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_SetCheckCallBackTime
### 描述
```
设置回调响应毫秒
```
### 原型
```cpp
__int64 __stdcall HCEnv_SetCheckCallBackTime(__int32 回调响应毫秒=5);
```
### 参数
```
__int32 回调响应毫秒 - 默认就行,越小响应越快,CPU占用了越高(也可以调用HCEnv_InitEx设置)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.值越小响应越快,随之带来的效率更高但是会导致CPU利用率变高2.值的大小根据当前的项目指定,对于一直要实时响应的最好小点
```
### HCEnv_SetCheckCallBackTime - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetCheckCallBackTime - 进阶用法
```cpp
// 示例2：HCEnv_SetCheckCallBackTime 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_SetCheckCallBackTime - 高级应用
```cpp
// 示例3：HCEnv_SetCheckCallBackTime 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_TerminateThread
### 描述
```
强制结束当前线程(可以在卸载环境后调用)
```
### 原型
```cpp
__int64 __stdcall HCEnv_TerminateThread(__int32 窗口序号,__int32 threadId,BOOL 是否操作锁=TRUE);
```
### 参数
```
__int32 窗口序号 - 指定当前强制关闭线程所操作的窗口序号
__int32 threadId - 强制关闭的线程ID,调用此接口的线程不要和结束的线程是同一个(虽然内部有检查)
bool 是否操作锁 - 一般为了安全的强制关闭线程,必须为真,否则会很有可能出现死锁的情况
```
### 返回值
```
查看返回值表
```
### 注意事项
```
强制结束当前线程内部会对锁操作循环拿到锁才会强制关闭并返回成功此接口小心使用1.不到万不得已不要强制关闭线程(因为强制关闭线程不管在任何时候都有可能造成不可能预计的BUG)2.调用此接口的线程不要和结束的线程是同一个(虽然内部有检查)3.该接口如果参数:是否操作锁为真,那么会堵塞,直到拿到锁权限后,才会强制关闭线程,然后解锁(防止死锁).
```
### HCEnv_TerminateThread - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TerminateThread - 进阶用法
```cpp
// 示例2：HCEnv_TerminateThread 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TerminateThread - 高级应用
```cpp
// 示例3：HCEnv_TerminateThread 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_TerminateThreadEx
### 描述
```
强制结束当前线程(可以在卸载环境后调用)
```
### 原型
```cpp
__int64 __stdcall HCEnv_TerminateThreadEx(__int32 窗口序号,__int64 threadHandle,BOOL 是否操作锁=TRUE);
```
### 参数
```
__int32 窗口序号 - 指定当前强制关闭线程所操作的窗口序号
__int64 threadHandle - 强制关闭的线程句柄,调用此接口的线程不要和结束的线程是同一个(虽然有检查但是可能会崩溃)
bool 是否操作锁 - 一般为了安全的强制关闭线程,必须为真,否则会很有可能出现死锁的情况
```
### 返回值
```
查看返回值表
```
### 注意事项
```
强制结束当前线程内部会对锁操作循环拿到锁才会强制关闭并返回成功此接口小心使用1.不到万不得已不要强制关闭线程(因为强制关闭线程不管在任何时候都有可能造成不可能预计的BUG)2.调用此接口的线程不要和结束的线程是同一个(虽然内部有检查)3.该接口如果参数:是否操作锁为真,那么会堵塞,直到拿到锁权限后,才会强制关闭线程,然后解锁(防止死锁).
```
### HCEnv_TerminateThreadEx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TerminateThreadEx - 进阶用法
```cpp
// 示例2：HCEnv_TerminateThreadEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_TerminateThreadEx - 高级应用
```cpp
// 示例3：HCEnv_TerminateThreadEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCEnv_ExitProcess
### 描述
```
关闭绑定的目标窗口
```
### 原型
```cpp
__int64 __stdcall HCEnv_ExitProcess(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 指定当前强制关闭线程所操作的窗口序号
```
### 返回值
```
查看返回值表
```
### 注意事项
```
内部实现可能是正常关闭也可能是强制关闭 至于是哪一种会根据实际情况动态调用
```
### HCEnv_ExitProcess - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_ExitProcess - 进阶用法
```cpp
// 示例2：HCEnv_ExitProcess 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCEnv_ExitProcess - 高级应用
```cpp
// 示例3：HCEnv_ExitProcess 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
