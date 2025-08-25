---
sidebar_position: 28
---

# 🛰️ 找字模块(FS)
## 📌 函数: HD识字_设置字库
### 描述
```
设置当前像素识字的字库文件(为了提高识别效率,不支持多线程)
建议在登录回调中最开始初始化调用
其他线程需要那个序号就切换那个序号HCFS_SwitchCurDictFile
调用一次会给所有窗口序号添加当前设置的字库文件
```
### 原型
```cpp
__int64 __stdcall HCFS_SetDictFile(__int32 窗口序号,__int32 字库序号,char* file);
```
### 参数
```
__int32 窗口序号 - 窗口序号
__int32 字库序号 - 字库序号自定义整数类型枚举类型宏定义不要小于0！！小于0用于错误返回值
char* file - 字库文件名字(可以加路径)最后寻找路径
```
### 返回值
```
查看返回值表
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
这个不支持多线程,请在开启前首先设置好
类型提前添加字库,需要在当前线程使用字库必须调用HCFS_SwitchCurDictFile切换字库
字库文件绑定窗口序号字库序号绑定线程窗口序号支持多线程多进程来操作目标进程可以在多线程中通过窗口序号拿到所有绑定的字库文件信息至于在多线程中要使用的是哪一个字库文件？取决于当前线程所绑定的字库序号
总结:1.所有字库文件只需要和窗口序号关联一次就行\n2.在多线程中需要使用到那个字库序号就切换就行多线程有自己的字库序号副本互不影响各自切换
```
### HD识字_设置字库 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置字库 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置字库 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_设置字库Ex
### 描述
```
设置当前像素识字的字库文件(为了提高识别效率,不支持多线程)
请在主线程中最开始初始化调用
其他线程需要那个序号就切换那个序号HCFS_SwitchCurDictFile
调用一次会给所有窗口序号添加当前设置的字库文件
```
### 原型
```cpp
__int64 __stdcall HCFS_SetDictFileEx(__int32 字库序号,char* file);
```
### 参数
```
 窗口序号 - 窗口序号
__int32 字库序号 - 字库序号自定义整数类型枚举类型宏定义不要小于0！！小于0用于错误返回值
char* file - 字库文件名字(可以加路径)最后寻找路径
```
### 返回值
```
查看返回值表
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
这个不支持多线程,请在开启前首先设置好
类型提前添加字库,需要在当前线程使用字库必须调用HCFS_SwitchCurDictFile切换字库
```
### HD识字_设置字库Ex - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置字库Ex - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置字库Ex - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_设置字库Exx
### 描述
```
设置当前像素识字的字库文件(为了提高识别效率,不支持多线程)
建议在登录回调中最开始初始化调用
其他线程需要那个序号就切换那个序号HCFS_SwitchCurDictFile
调用一次会给所有窗口序号添加当前设置的字库文件
```
### 原型
```cpp
__int64 __stdcall HCFS_SetDictFileExx(__int32 窗口序号,__int32 字库序号,char* file,char* password=NULL);
```
### 参数
```
__int32 窗口序号 - 窗口序号
__int32 字库序号 - 字库序号自定义整数类型枚举类型宏定义不要小于0！！小于0用于错误返回值
char* file - 字库文件名字(可以加路径)最后寻找路径
char* password - 密码使用综合工具进行加密
```
### 返回值
```
查看返回值表
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
这个不支持多线程,请在开启前首先设置好
类型提前添加字库,需要在当前线程使用字库必须调用HCFS_SwitchCurDictFile切换字库
字库文件绑定窗口序号字库序号绑定线程窗口序号支持多线程多进程来操作目标进程可以在多线程中通过窗口序号拿到所有绑定的字库文件信息至于在多线程中要使用的是哪一个字库文件？取决于当前线程所绑定的字库序号
总结:1.所有字库文件只需要和窗口序号关联一次就行\n2.在多线程中需要使用到那个字库序号就切换就行多线程有自己的字库序号副本互不影响各自切换
```
### HD识字_设置字库Exx - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置字库Exx - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置字库Exx - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_切换字库序号
### 描述
```
切换当前像素识字的字库文件(支持多线程)
```
### 原型
```cpp
__int64 __stdcall HCFS_SwitchCurDictFile(__int32 窗口序号,__int32 字库序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号
__int32 字库序号 - 字库序号自定义整数类型枚举类型宏定义
```
### 返回值
```
查看返回值表
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好
运行起来了就不能设置否则冲突
切换字库文件可以在运行的时候切换,而HCFS_SetDictFile设置字库文件必须在初始化阶段中进行！
对于多线程操作同一个窗口序号的时候,切换字库支持多线程操作,操作前请先在主执行线程中设置字库就行其他副线程(包含主线程)就只需要切换就行
```
### HD识字_切换字库序号 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_切换字库序号 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_切换字库序号 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_获取当前字库
### 描述
```
获取当前线程的加载后的字库文件信息(支持多线程)
```
### 原型
```cpp
__int64 __stdcall HCFS_GetCurDictInfo(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
\"{\"error\":0,\"ret\":[{\"bRet\":ret,\"info\":info}]}\"
info:窗口索引,当前字库索引,加载了字库文件数量,(加载的字库序号,对应的字条数目)|...如:info:0,1,3,(1,55)|(2,55)|(3,55)|
注意返回的是当前线程的字库信息
```
### HD识字_获取当前字库 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_获取当前字库 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_获取当前字库 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_获取当前字库序号
### 描述
```
获取当前线程绑定的字库索引(支持多线程)
```
### 原型
```cpp
__int64 __stdcall HCFS_GetCurDictIndex(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号
```
### 返回值
```
查看返回值表
```
### 注意事项
```
返回大于等于0的值是当前线程绑定的字库索引
```
### HD识字_获取当前字库序号 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_获取当前字库序号 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_获取当前字库序号 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_单字符找字
### 描述
```
在客户区范围内找字(只支持单字符串并且是单字符字库)
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStr(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstr,LPCSTRdeltaColor,doublesim,longbfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
大于0表示:高4字节为y低4字节为x
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->0,x1,y1,w1,h1,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_单字符找字 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_单字符找字 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_单字符找字 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_单字符找字Ex
### 描述
```
在客户区范围内找字(支持多字符串并且是单字符字库)
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrEx(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstr,LPCSTRdeltaColor,doublesim,longbfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串支持多字符串例如
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
字符串用HCEnv_GetRetJson获取
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->字符串序号,x1,y1,w1,h1,sim|字符串序号,x2,y2,w2,h2,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_单字符找字Ex - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_单字符找字Ex - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_单字符找字Ex - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_单字符找字Exx
### 描述
```
在客户区范围内找字(支持多字符串并且是单字符字库)找到一个就返回
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrExx(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstr,LPCSTRdeltaColor,doublesim,longbfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串支持多字符串例如
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
字符串用HCEnv_GetRetJson获取
大于0表示:高4字节为x低4字节为y同时字符串信息存在json中
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->字符串序号,x1,y1,w1,h1,sim|字符串序号,x2,y2,w2,h2,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_单字符找字Exx - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_单字符找字Exx - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_单字符找字Exx - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_列表单列找字从文件
### 描述
```
单字符串找(原图从文件)
字库是字符串
例如:洛阳多行返回多个坐标一行只找一列(一次)
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrMutilVPointsByFile(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstr,LPCSTRcolor_format,doublesim,LPCSTRiamgeName,__int32 bfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串
 color_format - 偏色(如
 sim - 整个像素矩阵的相似度
 iamgeName - bmp图片名字,支持加路径,不加路径则在全局路径找,图片后缀不要省略(支持绝对路径和相对路径)
__int32 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
大于0表示:找到的数量
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->0,x1,y1,w,h,sim|0,x2,y2,w,h,sim|0,x3,y2,w,h,sim|...
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_列表单列找字从文件 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_列表单列找字从文件 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_列表单列找字从文件 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_列表单列找字从内存
### 描述
```
单字符串找(原图从内存)
字库是字符串
例如:洛阳多行返回多个坐标一行只找一列(一次)
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrMutilVPointsByMem(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstr,LPCSTRcolor_format,doublesim,BYTE* data,__int32 dataSize,__int32 bfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串
 color_format - 偏色(如
 sim - 整个像素矩阵的相似度
byte* data - bmp图片格式的二进制内存数据首地址
__int32 dataSize - 图片数据大小
__int32 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
大于0表示:找到的数量
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->0,x1,y1,w,h,sim|0,x2,y2,w,h,sim|0,x3,y2,w,h,sim|...
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_列表单列找字从内存 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_列表单列找字从内存 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_列表单列找字从内存 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_列表多列找字从文件
### 描述
```
单字符串找(原图从文件)
字库是字符串
例如:洛阳多行多列返回多个坐标
一行找多列(多次)找多行
```
### 原型
### 返回值
```
查看返回值表
大于0表示:找到的数量
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->0,x1,y1,w,h,sim|0,x2,y2,w,h,sim|0,x3,y2,w,h,sim|...
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_列表多列找字从文件 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_列表多列找字从文件 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_列表多列找字从文件 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_列表多列找字从内存
### 描述
```
单字符串找(原图从内存)
字库是字符串
例如:洛阳多行多列返回多个坐标
一行找多列(多次)找多行
```
### 原型
### 返回值
```
查看返回值表
大于0表示:找到的数量
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->0,x1,y1,w,h,sim|0,x2,y2,w,h,sim|0,x3,y2,w,h,sim|...
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_列表多列找字从内存 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_列表多列找字从内存 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_列表多列找字从内存 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_自动识字
### 描述
```
单/多字符串找都兼容|分割
字库是字符串或单字
找到一个就返回
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrMutilsAuto(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstrs,LPCSTRcolor_format,doublesim,longbfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串支持多字符串例如
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
MAKEXYWHTO8(fx1,fy1,w,h);
字符串用HCEnv_GetRetJson获取
```
### 注意事项
```
单多字符串找都兼容|分割找到一个就返回字库是字符串或单字判断规则:拼接+完整1.有完整先识别完整2.无完整按拼接处理3.有分隔符|,统一按完整字符串处理
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->字符串序号(0开始),x1,y1,w,h,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_自动识字 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_自动识字从文件
### 描述
```
单/多字符串找都兼容|分割
字库是字符串或单字
找到一个就返回
可以通过指定图片来获取截图数据其他功能和HCFS_FindStrMutilsAuto一致
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrMutilsAutoByFile(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstrs,LPCSTRcolor_format,doublesim,LPCSTRiamgeName,longbfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串支持多字符串例如
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
 iamgeName - bmp图片名字,支持加路径,不加路径则在全局路径找,图片后缀不要省略(支持绝对路径和相对路径)
 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
MAKEXYWHTO8(fx1,fy1,w,h);
字符串用HCEnv_GetRetJson获取
```
### 注意事项
```
单多字符串找都兼容|分割找到一个就返回字库是字符串或单字判断规则:拼接+完整1.有完整先识别完整2.无完整按拼接处理3.有分隔符|,统一按完整字符串处理
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->字符串序号,x1,y1,w,h,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_自动识字从文件 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字从文件 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字从文件 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_自动识字从内存
### 描述
```
单/多字符串找都兼容|分割
字库是字符串或单字
找到一个就返回
可以通过指定图片来获取截图数据其他功能和HCFS_FindStrMutilsAuto一致
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrMutilsAutoByMem(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstrs,LPCSTRcolor_format,doublesim,BYTE* data,__int32 dataSize,__int32 bfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串支持多字符串例如
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
byte* data - bmp图片格式的二进制内存数据首地址
__int32 dataSize - 图片数据大小
__int32 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
MAKEXYWHTO8(fx1,fy1,w,h);
字符串用HCEnv_GetRetJson获取
```
### 注意事项
```
单多字符串找都兼容|分割找到一个就返回字库是字符串或单字判断规则:拼接+完整1.有完整先识别完整2.无完整按拼接处理3.有分隔符|,统一按完整字符串处理
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->字符串序号,x1,y1,w,h,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_自动识字从内存 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字从内存 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字从内存 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_自动识字Ex
### 描述
```
单/多字符串找都兼容|分割
字库是字符串或单字
找到全部或仅仅找一个
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrMutilsAutoEx(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstrs,LPCSTRcolor_format,doublesim,longbfx,__int32 dirType=0,__int32 bFindOne=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串支持多字符串例如
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
__int32 bFindOne - 是否找到一个就返回
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
MAKEXYWHTO8(fx1,fy1,w,h);
字符串用HCEnv_GetRetJson获取
```
### 注意事项
```
单多字符串找都兼容|分割找到一个就返回字库是字符串或单字判断规则:拼接+完整1.有完整先识别完整2.无完整按拼接处理3.有分隔符|,统一按完整字符串处理
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->字符串序号(0开始),x1,y1,w,h,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_自动识字Ex - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字Ex - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字Ex - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_自动识字从文件Ex
### 描述
```
单/多字符串找都兼容|分割
字库是字符串或单字
找到全部或仅仅找一个
可以通过指定图片来获取截图数据其他功能和HCFS_FindStrMutilsAuto一致
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrMutilsAutoByFileEx(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstrs,LPCSTRcolor_format,doublesim,LPCSTRiamgeName,longbfx,__int32 dirType=0,__int32 bFindOne=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串支持多字符串例如
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
 iamgeName - bmp图片名字,支持加路径,不加路径则在全局路径找,图片后缀不要省略(支持绝对路径和相对路径)
 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
__int32 bFindOne - 是否找到一个就返回
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
MAKEXYWHTO8(fx1,fy1,w,h);
字符串用HCEnv_GetRetJson获取
```
### 注意事项
```
单多字符串找都兼容|分割找到一个就返回字库是字符串或单字判断规则:拼接+完整1.有完整先识别完整2.无完整按拼接处理3.有分隔符|,统一按完整字符串处理
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->字符串序号,x1,y1,w,h,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_自动识字从文件Ex - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字从文件Ex - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字从文件Ex - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_自动识字从内存Ex
### 描述
```
单/多字符串找都兼容|分割
字库是字符串或单字
找到全部或仅仅找一个
可以通过指定图片来获取截图数据其他功能和HCFS_FindStrMutilsAuto一致
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrMutilsAutoByMemEx(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstrs,LPCSTRcolor_format,doublesim,BYTE* data,__int32 dataSize,__int32 bfx,__int32 dirType=0,__int32 bFindOne=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串支持多字符串例如
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
byte* data - bmp图片格式的二进制内存数据首地址
__int32 dataSize - 图片数据大小
__int32 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
__int32 bFindOne - 是否找到一个就返回默认0表示全部找
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
MAKEXYWHTO8(fx1,fy1,w,h);
字符串用HCEnv_GetRetJson获取
```
### 注意事项
```
单多字符串找都兼容|分割找到一个就返回字库是字符串或单字判断规则:拼接+完整1.有完整先识别完整2.无完整按拼接处理3.有分隔符|,统一按完整字符串处理
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->字符串序号,x1,y1,w,h,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_自动识字从内存Ex - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字从内存Ex - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_自动识字从内存Ex - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_多字符识字
### 描述
```
单字符串找字库是字符串例如:洛阳
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrMutil(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstr,LPCSTRcolor_format,doublesim,longbfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串
 color_format - 偏色(如
 sim - 整个像素矩阵的相似度
 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
MAKEXYWHTO8(fx1,fy1,w,h);
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
在客户区范围内找字符串(只支持单字符串),同时字库是字符串
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->字符串序号,x1,y1,w1,h1,sim|字符串序号,x2,y2,w2,h2,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_多字符识字 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_多字符识字 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_多字符识字 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_多字符识字Ex
### 描述
```
多字符串找字库是字符串例如:洛阳|北京|广州
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrMutilsEx(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstr,LPCSTRcolor_format,doublesim,longbfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串
 color_format - 偏色(如
 sim - 整个像素矩阵的相似度
 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
MAKEXYWHTO8(fx1,fy1,w,h);
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
在客户区范围内找字符串(只支持单字符串),同时字库是字符串
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->字符串序号,x1,y1,w1,h1,sim|字符串序号,x2,y2,w2,h2,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_多字符识字Ex - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_多字符识字Ex - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_多字符识字Ex - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFS_FindStrMutilsExx
### 描述
```
多字符串找字库是字符串例如:洛阳|北京|广州找到一个就返回
```
### 原型
```cpp
__int64 __stdcall HCFS_FindStrMutilsExx(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRstr,LPCSTRcolor_format,doublesim,longbfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 str - 需要找找的字符串
 color_format - 偏色(如
 sim - 整个像素矩阵的相似度
 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
MAKEXYWHTO8(fx1,fy1,w,h);
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
在客户区范围内找字符串(只支持单字符串),同时字库是字符串
json:
{error:0,ret:[{bRet:1,info:识字结果}]}\"
info格式->字符串序号,x1,y1,w1,h1,sim|字符串序号,x2,y2,w2,h2,sim
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HCFS_FindStrMutilsExx - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFS_FindStrMutilsExx - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFS_FindStrMutilsExx - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_Ocr
### 描述
```
在客户区范围内识别字
字库是字符串或单字
拼接+字符串都支持
```
### 原型
```cpp
__int64 __stdcall HCFS_Ocr(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRdeltaColor,doublesim,longbfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
字符串用HCEnv_GetRetJson获取
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{\"error\":0,\"ret\":AAA,\"info\":BBB}
AAA:0未找到1找到
BBB:json数组如:[{\"x\":0,\"y\":0,\"text\":“NULL”}]表示未找到类似这样[{\"x\":123,\"y\":456,\"text\":\"洛阳\"},{\"x\":654,\"y\":987,\"text\":\"洱海\"}]表示找到了
格式化字符串:
未找到:\"{\\"error\\":0,\\"ret\\":%lld,\\"info\\":[{\\"x\\":0,\\"y\\":0,\\"text\\":\\"NULL\\"}]}\"
找到:\"{\\"error\\":0,\\"ret\\":%lld,\\"info\\":%s}\"
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_Ocr - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_Ocr - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_Ocr - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_Ocr从文件
### 描述
```
在客户区范围内识别字
字库是字符串或单字
拼接+字符串都支持
```
### 原型
```cpp
__int64 __stdcall HCFS_OcrByFile(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRcolor_format,doublesim,LPCSTRiamgeName,__int32 bfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
 iamgeName - 指定一张识字的图片文件(.bmp),支持加路径,不加路径则在全局路径找,图片后缀不要省略(支持绝对路径和相对路径)
__int32 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
字符串用HCEnv_GetRetJson获取
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{\"error\":0,\"ret\":AAA,\"info\":BBB}
AAA:0未找到1找到
BBB:json数组如:[{\"x\":0,\"y\":0,\"text\":“NULL”}]表示未找到类似这样[{\"x\":123,\"y\":456,\"text\":\"洛阳\"},{\"x\":654,\"y\":987,\"text\":\"洱海\"}]表示找到了
格式化字符串:
未找到:\"{\\"error\\":0,\\"ret\\":%lld,\\"info\\":[{\\"x\\":0,\\"y\\":0,\\"text\\":\\"NULL\\"}]}\"
找到:\"{\\"error\\":0,\\"ret\\":%lld,\\"info\\":%s}\"
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_Ocr从文件 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_Ocr从文件 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_Ocr从文件 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_Ocr从内存
### 描述
```
在客户区范围内识别字
字库是字符串或单字
拼接+字符串都支持
```
### 原型
```cpp
__int64 __stdcall HCFS_OcrByMem(__int32 窗口序号,longfindX,longfindY,longfindW,longfindH,LPCSTRcolor_format,doublesim,BYTE* data,__int32 dataSize,__int32 bfx,__int32 dirType=0,int spaceH=11,int spaceV=11,doublegroundRate=0.1,BOOL bOne11=TRUE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
 w - 矩形范围宽度
int h - 矩形范围高度
 deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
byte* data - bmp图片格式的二进制内存数据首地址
__int32 dataSize - 图片数据大小
__int32 bfx - 是否开启反向相似度(开启更精准,但是对于一些小范围的可能会过滤掉,一般开启就行)
__int32 dirType - 排序类型/方向类型排序/方向类型
int spaceH - 字体水平间距默认11像素参考
int spaceV - 字体垂直间距默认11像素参考
 groundRate - 一个字的周围占比默认0.1参考
bool bOne11 - 一个字是否独占11像素默认真/TREU/开启参考
```
### 返回值
```
查看返回值表
字符串用HCEnv_GetRetJson获取
```
### 注意事项
```
字库文件会在资源路径下寻找，还需要调用HCRES_SetResPath设置路径
设置后会自动解析文件字库数据
设置字库文件初始化要全部设置好运行起来了就不能设置否则冲突
json:
{\"error\":0,\"ret\":AAA,\"info\":BBB}
AAA:0未找到1找到
BBB:json数组如:[{\"x\":0,\"y\":0,\"text\":“NULL”}]表示未找到类似这样[{\"x\":123,\"y\":456,\"text\":\"洛阳\"},{\"x\":654,\"y\":987,\"text\":\"洱海\"}]表示找到了
格式化字符串:
未找到:\"{\\"error\\":0,\\"ret\\":%lld,\\"info\\":[{\\"x\\":0,\\"y\\":0,\\"text\\":\\"NULL\\"}]}\"
找到:\"{\\"error\\":0,\\"ret\\":%lld,\\"info\\":%s}\"
字库格式:（兼容大漠插件字库文件）
3FE7FCD9FFFFFE7FCFFBFFFFF98FFFB1E0001C0FFFFFE707E1EC398FFFFFCCC198130$邮件$0.0.196$13----》字符串字库
009813FE7FC008$1$0.0.23$9----》单字符字库
```
### HD识字_Ocr从内存 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_Ocr从内存 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_Ocr从内存 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_设置水平垂直间距
### 描述
```
设置间距(在识别拼接字和OCR中尤其重要)-丢弃改为每个接口单独设置
```
### 原型
```cpp
__int64 __stdcall HCFS_SetCharSpaceHV(int lenH=11,int lenV=11);
```
### 参数
```
int lenH - 水平方向的间距默认11像素
int lenV - 垂直方向的间距默认11像素
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.当相邻的字/数字/字母/符号,在间距范围内,才被认为是一个整体(字符串)
2.不明白什么是水平垂直间距请前往查看水平垂直间距解析和案例分析
3.这种对于数字和符号,尤其重要
```
### HD识字_设置水平垂直间距 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置水平垂直间距 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置水平垂直间距 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_设置11
### 描述
```
设置11行中(同宽)矩形内,是否只有一个字-丢弃改为每个接口单独设置
```
### 原型
```cpp
__int64 __stdcall HCFS_IsOne11(BOOL b=TRUE);
```
### 参数
```
bool b - 是否打开默认打开
```
### 返回值
```
查看返回值表
返回当前开关状态0/1
```
### 注意事项
```
1.如果打开识别速度快,关闭速度慢一点(不影响多少)
2.如果这个i这个字,由2个字符组成'.'和'|'
3.如果打开表示i是一个整体识别,不能拆开识别
4.如果关闭表示i可以拆分成2个字符分别识别
```
### HD识字_设置11 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置11 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置11 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HD识字_设置周围占比
### 描述
```
设置字周围一个像素上下左右的像素占比-丢弃改为每个接口单独设置
```
### 原型
```cpp
double__stdcall HCFS_GroundRate(doublerate=0.1);
```
### 参数
```
 rate - 占比分别是4个方向的上下左右
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.对于那种连体字的情况下占比越高,可能识别的不准确2.这个相当于一个容错率占比3.返回当前设置后的占比4.默认0.1
5.这种对于数字和符号,尤其重要,可以准确的提高识别率,越小的字效果越好
```
### HD识字_设置周围占比 - 基础示例
```csharp
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置周围占比 - 进阶用法
```csharp
// C# 示例2
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HD识字_设置周围占比 - 高级应用
```csharp
// C# 示例3 高级用法
// C#示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
