---
sidebar_position: 30
---

# 🛰️ 智能识字模块(RC)
## 📌 函数: HCRC_InitRCServer
### 描述
```
初始化识别服务器
```
### 原型
```cpp
__int64 __stdcall HCRC_InitRCServer(__int32 窗口序号,char* 语言库名字);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 语言库名字 - 在全局语言路径中找指定的语言库名字
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCRC_InitRCServer - 基础示例
```xuan
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_InitRCServer - 进阶用法
```xuan
// xuanlanguage 示例2
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_InitRCServer - 高级应用
```xuan
// xuanlanguage 示例3 高级用法
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCRC_OpenRCServer
### 描述
```
打开识别服务器
```
### 原型
```cpp
__int64 __stdcall HCRC_OpenRCServer(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCRC_OpenRCServer - 基础示例
```xuan
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_OpenRCServer - 进阶用法
```xuan
// xuanlanguage 示例2
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_OpenRCServer - 高级应用
```xuan
// xuanlanguage 示例3 高级用法
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCRC_StopRCServer
### 描述
```
停止识别服务器
```
### 原型
```cpp
__int64 __stdcall HCRC_StopRCServer(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCRC_StopRCServer - 基础示例
```xuan
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_StopRCServer - 进阶用法
```xuan
// xuanlanguage 示例2
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_StopRCServer - 高级应用
```xuan
// xuanlanguage 示例3 高级用法
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCRC_SwitchRCServer
### 描述
```
切换识字服务:主要针对语言字体文件的切换
```
### 原型
```cpp
__int64 __stdcall HCRC_SwitchRCServer(__int32 窗口序号,char* 语言库名字);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 语言库名字 - 在全局语言路径中找指定的语言库名字
```
### 返回值
```
查看返回值表
```
### 注意事项
```
内部实现原理:先停止之前的服务(HCRC_StopRCServer)重新初始化(HCRC_InitRCServer)然后重新开启(HCRC_OpenRCServer)
```
### HCRC_SwitchRCServer - 基础示例
```xuan
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_SwitchRCServer - 进阶用法
```xuan
// xuanlanguage 示例2
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_SwitchRCServer - 高级应用
```xuan
// xuanlanguage 示例3 高级用法
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCRC_RecognitionChar
### 描述
```
智能识字
```
### 原型
```cpp
__int64 __stdcall HCRC_RecognitionCharA(__int32 窗口序号,char* 图片名字,int 二值化阈值=127,int 置信度=80,BOOL 开启灰度图=TRUE,BOOL 是否打开查看器=FALSE);__int64 __stdcall HCRC_RecognitionCharW(__int32 窗口序号,wchar_t* 图片名字,int 二值化阈值=127,int 置信度=80,BOOL 开启灰度图=TRUE,BOOL 是否打开查看器=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 图片名字 - 图片名字(支持绝对路径和相对路径)
int 二值化阈值 - 0-255范围内指定,一般中间就合适,默认127,工具的裁剪功能上可以实时编辑查看,确定阈值后填写
int 置信度 - 0-100值越高越精准
bool 开启灰度图 - 再原有二值化上先灰度图再二值化,如果为假表示不灰度图直接再原图的基础上二值化
bool 是否打开查看器 - 是否打开查看器
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":AAA,\"data\":[{\"image\":XXX},{\"image\":YYY}],\"time\":ZZZ}XXX->图片识别后的结果(字符串)每一个{\"image\":XXX}是一个识别的字符串,对应<参数:图片名字集合>索引
XXX:格式
\"%s,%0.2f,%d,%d,%d,%d|\"
字符串1,置信度1,x1,y1,x2,y2|字符串2,置信度2,x1,y1,x2,y2|...|
```
### HCRC_RecognitionChar - 基础示例
```xuan
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_RecognitionChar - 进阶用法
```xuan
// xuanlanguage 示例2
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_RecognitionChar - 高级应用
```xuan
// xuanlanguage 示例3 高级用法
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCRC_RecognitionCharEx
### 描述
```
指定范围内智能识字
```
### 原型
```cpp
__int64 __stdcall HCRC_RecognitionCharExA(__int32 窗口序号,char* 图片名字,__int32 x1=-1,__int32 y1=-1,__int32 x2=-1,__int32 y2=-1,int 二值化阈值=127,int 置信度=80,BOOL 开启灰度图=TRUE,BOOL 是否打开查看器=FALSE);__int64 __stdcall HCRC_RecognitionCharExW(__int32 窗口序号,wchar_t* 图片名字,__int32 x1=-1,__int32 y1=-1,__int32 x2=-1,__int32 y2=-1,int 二值化阈值=127,int 置信度=80,BOOL 开启灰度图=TRUE,BOOL 是否打开查看器=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 图片名字 - 图片名字(支持绝对路径和相对路径)
__int32 x1,y1,x2,y2 - 左上角-右下角组成一个矩形范围
int 二值化阈值 - 0-255范围内指定,一般中间就合适,默认127,工具的裁剪功能上可以实时编辑查看,确定阈值后填写
int 置信度 - 0-100值越高越精准
bool 开启灰度图 - 再原有二值化上先灰度图再二值化,如果为假表示不灰度图直接再原图的基础上二值化
bool 是否打开查看器 - 是否打开查看器
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":AAA,\"data\":[{\"image\":XXX},{\"image\":YYY}],\"time\":ZZZ}XXX->图片识别后的结果(字符串)每一个{\"image\":XXX}是一个识别的字符串,对应<参数:图片名字集合>索引
XXX:格式
\"%s,%0.2f,%d,%d,%d,%d|\"
字符串1,置信度1,x1,y1,x2,y2|字符串2,置信度2,x1,y1,x2,y2|...|
```
### HCRC_RecognitionCharEx - 基础示例
```xuan
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_RecognitionCharEx - 进阶用法
```xuan
// xuanlanguage 示例2
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_RecognitionCharEx - 高级应用
```xuan
// xuanlanguage 示例3 高级用法
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCRC_RecognitionCharByMemory
### 描述
```
从内存图片数据中范围内智能识字
```
### 原型
```cpp
__int64 __stdcall HCRC_RecognitionCharByMemoryA(__int32 窗口序号,__int64 pData,__int32 宽度,__int32 高度,__int32 x1=-1,__int32 y1=-1,__int32 x2=-1,__int32 y2=-1,int 二值化阈值=127,int 置信度=80,BOOL 开启灰度图=TRUE,BOOL 是否打开查看器=FALSE);__int64 __stdcall HCRC_RecognitionCharByMemoryW(__int32 窗口序号,__int64 pData,__int32 宽度,__int32 高度,__int32 x1=-1,__int32 y1=-1,__int32 x2=-1,__int32 y2=-1,int 二值化阈值=127,int 置信度=80,BOOL 开启灰度图=TRUE,BOOL 是否打开查看器=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int64 pData - 图片内存数据(格式
__int32 宽度 - 图片内存数据宽度
__int32 高度 - 图片内存数据高度
__int32 x1,y1,x2,y2 - 左上角-右下角组成一个矩形范围默认-1表示全部
int 二值化阈值 - 0-255范围内指定,一般中间就合适,默认127,工具的裁剪功能上可以实时编辑查看,确定阈值后填写
int 置信度 - 0-100值越高越精准
bool 开启灰度图 - 再原有二值化上先灰度图再二值化,如果为假表示不灰度图直接再原图的基础上二值化
bool 是否打开查看器 - 是否打开查看器
 格式 - 
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":AAA,\"data\":[{\"image\":XXX},{\"image\":YYY}],\"time\":ZZZ}XXX->图片识别后的结果(字符串)每一个{\"image\":XXX}是一个识别的字符串,对应<参数:图片名字集合>索引.
XXX:格式
\"%s,%0.2f,%d,%d,%d,%d|\"
字符串1,置信度1,x1,y1,x2,y2|字符串2,置信度2,x1,y1,x2,y2|...|
```
### HCRC_RecognitionCharByMemory - 基础示例
```xuan
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_RecognitionCharByMemory - 进阶用法
```xuan
// xuanlanguage 示例2
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCRC_RecognitionCharByMemory - 高级应用
```xuan
// xuanlanguage 示例3 高级用法
// 炫语言示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容
```

---
