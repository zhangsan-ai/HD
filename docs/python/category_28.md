# 🛰️ 智能识图模块(FI)
## 📌 函数: HCFI_FindImage
### 描述
```
识图(返回的是圆型的圆点)
```
### 原型
```
__int64 __stdcall HCFI_FindImageA(__int32 窗口序号,char* 图片名字集合,doublesim=0.8,BOOL 是否灰度图=FALSE,BOOL 是否打开查看器=FALSE);__int64 __stdcall HCFI_FindImageW(__int32 窗口序号,wchar_t* 图片名字集合,doublesim=0.8,BOOL 是否灰度图=FALSE,BOOL 是否打开查看器=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 图片名字集合 - 如
 sim - 相似度0-1
bool 是否灰度图 - 是否灰度图一般开启就行
bool 是否打开查看器 - 是否打开
```
### 返回值
```
查看返回值表
```
### 注意事项
```
图片越多耗时多长
json:
{\"error\":0,\"ret\":AAA,\"data\":[{\"x\":XX,\"y\":YY},{\"x\":XX,\"y\":YY},{\"x\":XX,\"y\":YY}],\"time\":ZZZ}
每张图会有1个坐标点(圆点)
AAA:表示找到几个XX:X坐标YY:Y坐标XX或YY:-1图片打不开-2未找到匹配点-3匹配点小于0time:毫秒耗时data:是一个json数组,每一个元素是一个XY坐标分别对应图片路径参数的位置
```
### HCFI_FindImage - 基础示例
```
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFI_FindImage - 进阶用法
```
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFI_FindImage - 高级应用
```
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCFI_FindImageEx
### 描述
```
识图(返回的是矩形左上角和右下角)
```
### 原型
```
__int64 __stdcall HCFI_FindImageExA(__int32 窗口序号,char* 图片名字集合,doublesim=0.8,BOOL 是否灰度图=FALSE,BOOL 是否打开查看器=FALSE);__int64 __stdcall HCFI_FindImageExW(__int32 窗口序号,wchar_t* 图片名字集合,doublesim=0.8,BOOL 是否灰度图=FALSE,BOOL 是否打开查看器=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 图片名字集合 - 如
 sim - 相似度0-1
bool 是否灰度图 - 是否灰度图一般开启就行
bool 是否打开查看器 - 是否打开
```
### 返回值
```
查看返回值表
```
### 注意事项
```
图片越多耗时多长
json:
{\"error\":0,\"ret\":AAA,\"data\":[{\"x1\":XX,\"y1\":YY,\"x2\":XX,\"y2\":YY},{\"x1\":XX,\"y1\":YY,\"x2\":XX,\"y2\":YY}],\"time\":ZZZ}
每张图会有2个坐标点(左上角+右下角)
AAA:表示找到几个XX:X坐标YY:Y坐标XX或YY:-1图片打不开-2未找到匹配点-3匹配点小于0time:毫秒耗时data:是一个json数组,每一个元素是一个XY坐标分别对应图片路径参数的位置
```
### HCFI_FindImageEx - 基础示例
```
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFI_FindImageEx - 进阶用法
```
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFI_FindImageEx - 高级应用
```
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCFI_FindRangeImage
### 描述
```
范围内识图
```
### 原型
```
__int64 __stdcall HCFI_FindRangeImageA(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,char* 图片名字集合,__int32 type=0,doublesim=0.8,BOOL 是否灰度图=FALSE,BOOL 是否打开查看器=FALSE);__int64 __stdcall HCFI_FindRangeImageW(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,wchar_t* 图片名字集合,__int32 type=0,doublesim=0.8,BOOL 是否灰度图=FALSE,BOOL 是否打开查看器=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int32 x,y,w,h - 左上角+高度+宽度
char* 图片名字集合 - 如
__int32 type - 0表示返回圆点1表示返回矩形左上角和右下角
 sim - 相似度0-1
bool 是否灰度图 - 是否灰度图一般开启就行
bool 是否打开查看器 - 是否打开
```
### 返回值
```
查看返回值表
```
### 注意事项
```
图片越多耗时多长
json:
{\"error\":0,\"ret\":AAA,\"data\":[{\"x\":XX,\"y\":YY},{\"x\":XX,\"y\":YY},{\"x\":XX,\"y\":YY}]}type==0</STRONG>
每张图会有1个坐标点(圆点)
{\"error\":0,\"ret\":AAA,\"data\":[{\"x1\":XX,\"y1\":YY,\"x2\":XX,\"y2\":YY},{\"x1\":XX,\"y1\":YY,\"x2\":XX,\"y2\":YY}]}type==1</STRONG>
每张图会有2个坐标点(左上角+右下角)
AAA:表示找到几个XX:X坐标YY:Y坐标XX或YY:-1图片打不开-2未找到匹配点-3匹配点小于0time:毫秒耗时data:是一个json数组,每一个元素是一个XY坐标分别对应图片路径参数的位置
```
### HCFI_FindRangeImage - 基础示例
```
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFI_FindRangeImage - 进阶用法
```
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFI_FindRangeImage - 高级应用
```
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD智能识图_Tem找图从文件
### 描述
```
从文件中加载截图数据并识图(返回的是矩形左上角和右下角)
```
### 原型
```
__int64 __stdcall HCFI_FindImageByFile(__int32 窗口序号,char* 原图名字,char* 子图片名字集合,doublesim=0.9,BOOL 是否灰度图=FALSE,BOOL 是否打开查看器=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 原图名字 - 指定一张原图文件名(支持绝对路径和相对路径)
char* 图片名字集合 - 如
 sim - 相似度0-1
bool 是否灰度图 - 是否灰度图一般开启就行
bool 是否打开查看器 - 是否打开
```
### 返回值
```
查看返回值表
```
### 注意事项
```
图片越多耗时多长
json:
{\"error\":0,\"ret\":AAA,\"data\":[{\"x1\":XX,\"y1\":YY,\"x2\":XX,\"y2\":YY},{\"x1\":XX,\"y1\":YY,\"x2\":XX,\"y2\":YY}],\"time\":ZZZ}
每张图会有2个坐标点(左上角+右下角)
AAA:表示找到几个XX:X坐标YY:Y坐标XX或YY:-1图片打不开-2未找到匹配点-3匹配点小于0max:置信度time:毫秒耗时data:是一个json数组,每一个元素是一个XY坐标分别对应图片路径参数的位置
```
### HD智能识图_Tem找图从文件 - 基础示例
```
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD智能识图_Tem找图从文件 - 进阶用法
```
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD智能识图_Tem找图从文件 - 高级应用
```
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD智能识图_Tem找图从内存
### 描述
```
从内存中加载截图数据并识图(返回的是矩形左上角和右下角)
```
### 原型
```
__int64 __stdcall HCFI_FindImageByMem(__int32 窗口序号,BYTE* data,__int32 dataSize,char* 子图片名字集合,doublesim=0.8,BOOL 是否灰度图=FALSE,BOOL 是否打开查看器=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
byte* data - Bmp图片字节数据缓冲区地址
__int32 dataSize - Bmp图片字节大小
char* 图片名字集合 - 如
 sim - 相似度0-1
bool 是否灰度图 - 是否灰度图一般开启就行
bool 是否打开查看器 - 是否打开
```
### 返回值
```
查看返回值表
```
### 注意事项
```
图片越多耗时多长
json:
{\"error\":0,\"ret\":AAA,\"data\":[{\"i\":index,\"x1\":XX,\"y1\":YY,\"x2\":XX,\"y2\":YY\"max\":0.0f},{\"i\":index,\"x1\":XX,\"y1\":YY,\"x2\":XX,\"y2\":YY\"max\":0.0f}]}每张图对应会有图片索引+2个坐标点(左上角+右下角)+置信度(max)index:图片集合指定的索引(0开始)如:\"洛阳.bmp|洱海.bmp|\"(洛阳.bmp)索引就是0AAA:表示找到几个(真正的找到数量)XX:X坐标YY:Y坐标XX或YY:-1图片打不开-2未找到匹配点-3匹配点小于0max:置信度time:毫秒耗时data:是一个json数组,每一个元素是一个XY坐标分别对应图片路径参数的位置
```
### HD智能识图_Tem找图从内存 - 基础示例
```
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD智能识图_Tem找图从内存 - 进阶用法
```
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD智能识图_Tem找图从内存 - 高级应用
```
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
