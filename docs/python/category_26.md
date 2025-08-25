---
sidebar_position: 27
---

# 🛰️ 找图模块(FP)
## 📌 函数: HD识图_截图
### 描述
```
截图并保存到文件(.bmp)
```
### 原型
```cpp
__int64 __stdcall HCFP_Capture(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,char* fileNamePath,BOOL 是否打开查看器=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* fileNamePath - 保存到文件的路径+文件名(.bmp)
bool 是否打开查看器 - 是否打开查看
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HD识图_截图 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_截图 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_截图 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_单点找色
### 描述
```
单点找色
```
### 原型
```cpp
__int64 __stdcall HCFP_FindColor(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
大于0表示:高4字节为x低4字节为y
json:\"{\"error\":0,\"ret\":[{\"bRet\":ret,\"info\":\"X1,Y1\"}]}\",
```
### 注意事项
```
注意返回值含义和XY值的提取
```
### HD识图_单点找色 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_单点找色 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_单点找色 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_多点找色
### 描述
```
多点找色
```
### 原型
```cpp
__int64 __stdcall HCFP_FindColors(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
返回找到匹配颜色的数量
```
### 注意事项
```
json:
{error:0,ret:[{bRet:1,info:结果}]}\"
info格式->像素序号,x1,y1|像素序号,x2,y2
```
### HD识图_多点找色 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点找色 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点找色 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_多点偏移找色
### 描述
```
多点偏移找色
```
### 原型
```cpp
__int64 __stdcall HCFP_FindColorsOffset(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,char* firstDeltaColor,char* deltaColor,doublesim,__int32 bALL=0,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 宽度
__int32 h - 高度
char* firstDeltaColor - 首色XXXXXX-YYYYYY格式
char* deltaColor - 偏移色x1|y1|XXXXXX-YYYYYY|XXXXXX-YYYYYY|...,x2|y3|XXXXXX-YYYYYY|XXXXXX-YYYYYY|...,...格式
 sim - 相似度
__int32 bALL - 是否全部找0表示找到一个就返回
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
\"{\\"error\\":0,\\"ret\\":[{\\"bRet\\":%lld,\\"info\\":\\"%s\\"}]}\",
info:x1,y1|x2,y2|
```
### HD识图_多点偏移找色 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点偏移找色 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点偏移找色 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_比较颜色
### 描述
```
比较颜色
```
### 原型
```cpp
__int64 __stdcall HCFP_CmpColors(__int32 窗口序号,__int32 x,__int32 y,char* deltaColor);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* deltaColor - XXXXXX-YYYYYY格式
```
### 返回值
```
查看返回值表
1找到
0未找到
```
### 注意事项
```
无
```
### HD识图_比较颜色 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_比较颜色Ex
### 描述
```
多点找色确定某个图像块,指定多个具体点
```
### 原型
```cpp
__int64 __stdcall HCFP_CmpColorExs(__int32 窗口序号,char* deltaXYColor);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* deltaXYColor - x1|y1|e3e6eb-101010|e3e6eb-101010|e3e6eb-101010|...,x2|y2|e3e6eb-101010|e3e6eb-101010|e3e6eb-101010|...
```
### 返回值
```
查看返回值表
找到返回8字节长整数包含第一个坐标点x1,y1低4字节x1高4字节y1
未找到返回0或者小于0
json:\"{\"error\":0,\"ret\":[{\"bRet\":ret,\"info\":”X1,Y1“}]}\",
```
### 注意事项
```
这个接口是给具体的坐标直接比较颜色
而这个HCFP_FindColorsOffset是是先搜索首色然后以首色开始拿到偏移的坐标去比较颜色
```
### HD识图_比较颜色Ex - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色Ex - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色Ex - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_获取颜色
### 描述
```
获取某个点的颜色值(从后台)
```
### 原型
```cpp
__int64 __stdcall HCFP_GetColor(__int32 窗口序号,__int32 x,__int32 y);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 客户区x
__int32 y - 客户区y
```
### 返回值
```
查看返回值表
大于0表示具体颜色值(ARGB)4字节颜色
```
### 注意事项
```
注意返回值含义和值的提取
#pragmapack(1)typedefstructMYA8R8G8B8{BYTEm_a;\n0x00BYTEm_r;\n低8位BYTEm_g;\n中8位BYTEm_b;\n高8位MYA8R8G8B8(){m_a=0;m_r=0;m_g=0;m_b=0;}}MYA8R8G8B8;
#pragmapack()
json:
“{\"error\":0,\"ret\":[{\"bRet\":1,\"info\":\"44,29,5B\"}]}”A(0x00)rgbr红色:低8位g绿色:中8位b蓝色:高8位RGBFFFFFF
```
### HD识图_获取颜色 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_获取颜色 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_获取颜色 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_范围找图
### 描述
```
在客户区范围内找图(仅支持一个图片)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindPic(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,char* 图片名字,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* 图片名字 - 一张图片(bmp)文件名字(不包含路径，路径调用HCRES_SetResPath全局设置)
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
大于0表示:低4字节为x高4字节为y
返回json:0,x1,y1,w1,h1|对于这种单图索引固定为0
```
### 注意事项
```
注意返回值含义和xy值的提取
{error:0,ret:[{bRet:NN,info:MM}]}
图片索引,左上角X,左上角Y,宽度,高度|
NN:返回值
MM:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|含义:图片索引(0开始),左上角X,左上角Y,宽度,高度|
```
### HD识图_范围找图 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_范围找图Ex
### 描述
```
在客户区范围内找图(返回找到其中一张信息)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindPicEx(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,char* 图片名字集合,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* 图片名字集合 - 多张张图片(bmp)文件名字(不包含路径，路径调用HCRES_SetResPath全局设置),以'|'分隔开
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
大于0表示:低4字节为x高4字节为y
返回json:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|
```
### 注意事项
```
注意返回值含义和xy值的提取
返回json:
{error:0,ret:[{bRet:NN,info:MM}]}
图片索引,左上角X,左上角Y,宽度,高度|
NN:返回值
MM:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|含义:图片索引(0开始),左上角X,左上角Y,宽度,高度|
```
### HD识图_范围找图Ex - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图Ex - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图Ex - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCFP_FindPicExx
### 描述
```
在客户区范围内找图(返回全部找到的信息)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindPicExx(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,char* 图片名字集合,char* deltaColor,doublesim,BOOL bAll=TRUE,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* 图片名字集合 - 多张张图片(bmp)文件名字(不包含路径，路径调用HCRES_SetResPath全局设置),以'|'分隔开
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
bool bAll - 是否全部找如果不是表示每个图片只找一次就换下个图片
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
返回01错误值
```
### 注意事项
```
注意返回值含义和xy值的提取
返回json:
{error:0,ret:[{bRet:NN,info:MM}]}
图片索引,左上角X,左上角Y,宽度,高度|
NN:返回值
MM:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|含义:图片索引(0开始),左上角X,左上角Y,宽度,高度|
```
### HCFP_FindPicExx - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFP_FindPicExx - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFP_FindPicExx - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_是否卡屏
### 描述
```
在客户区范围内检测再规定时间内是否卡图
```
### 原型
```cpp
__int64 __stdcall HCFP_IsDisplayDead(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,__int32 mstime);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
__int32 mstime - 间隔时间(不变就说明卡屏了),不会卡主线程
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HD识图_是否卡屏 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_是否卡屏 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_是否卡屏 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_获取区域图像CRC
### 描述
```
在客户区范围内获取像素CRC值,用于卡屏校验
```
### 原型
```cpp
__int64 __stdcall HCFP_GetRangeCRC(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\\"error\\":0,\\"ret\\":[{\\"bRet\\":%lld,\\"info\\":\"%X“,\\"time\\":%d}]}
info字段是校验值4字节整数
```
### HD识图_获取区域图像CRC - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_获取区域图像CRC - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_获取区域图像CRC - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_单点找色从文件
### 描述
```
单点找色(从文件)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindColorByFile(__int32 窗口序号,char* orgImageName,__int32 x,__int32 y,__int32 w,__int32 h,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* orgImageName - 指定一张原图数据(支持绝对路径和相对路径)bmp图片文件
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
大于0表示:高4字节为x低4字节为y
json:\"{\"error\":0,\"ret\":[{\"bRet\":ret,\"info\":\"X1,Y1\"}]}\",
```
### 注意事项
```
注意返回值含义和XY值的提取
```
### HD识图_单点找色从文件 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_单点找色从文件 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_单点找色从文件 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_单点找色从内存
### 描述
```
单点找色(从内存)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindColorByMem(__int32 窗口序号,BYTE* data,__int32 dataSize,__int32 x,__int32 y,__int32 w,__int32 h,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
byte* data - Bmp图片字节数据缓冲区地址
__int32 dataSize - Bmp图片字节大小
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
大于0表示:高4字节为x低4字节为y
json:\"{\"error\":0,\"ret\":[{\"bRet\":ret,\"info\":\"X1,Y1\"}]}\",
```
### 注意事项
```
注意返回值含义和XY值的提取
图片内存缓冲区自己维护
```
### HD识图_单点找色从内存 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_单点找色从内存 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_单点找色从内存 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_多点找色从文件
### 描述
```
多点找色(从文件)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindColorsByFile(__int32 窗口序号,char* orgImageName,__int32 x,__int32 y,__int32 w,__int32 h,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* orgImageName - 指定一张原图数据(支持绝对路径和相对路径)
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{error:0,ret:[{bRet:1,info:结果}]}\"
info格式->像素序号,x1,y1|像素序号,x2,y2
```
### HD识图_多点找色从文件 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点找色从文件 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点找色从文件 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_多点找色从内存
### 描述
```
多点找色(从内存)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindColorsByMem(__int32 窗口序号,BYTE* data,__int32 dataSize,__int32 x,__int32 y,__int32 w,__int32 h,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
byte* data - Bmp图片字节数据缓冲区地址
__int32 dataSize - Bmp图片字节大小
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{error:0,ret:[{bRet:1,info:结果}]}\"
info格式->像素序号,x1,y1|像素序号,x2,y2
图片内存缓冲区自己维护
```
### HD识图_多点找色从内存 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点找色从内存 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点找色从内存 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_多点偏移找色从文件
### 描述
```
多点偏移找色(从文件)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindColorsOffsetByFile(__int32 窗口序号,char* orgImageName,__int32 x,__int32 y,__int32 w,__int32 h,char* firstDeltaColor,char* deltaColor,doublesim,__int32 bALL=0,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* orgImageName - 指定一张原图数据(支持绝对路径和相对路径)
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 宽度
__int32 h - 高度
char* firstDeltaColor - 首色XXXXXX-YYYYYY格式
char* deltaColor - 偏移色x1|y1|XXXXXX-YYYYYY|XXXXXX-YYYYYY|...,x2|y3|XXXXXX-YYYYYY|XXXXXX-YYYYYY|...,...格式
 sim - 相似度
__int32 bALL - 是否全部找0表示找到一个就返回
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HD识图_多点偏移找色从文件 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点偏移找色从文件 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点偏移找色从文件 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_多点偏移找色从内存
### 描述
```
多点偏移找色(从内存)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindColorsOffsetByMem(__int32 窗口序号,BYTE* data,__int32 dataSize,__int32 x,__int32 y,__int32 w,__int32 h,char* firstDeltaColor,char* deltaColor,doublesim,__int32 bALL=0,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
byte* data - Bmp图片字节数据缓冲区地址
__int32 dataSize - Bmp图片字节大小
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 宽度
__int32 h - 高度
char* firstDeltaColor - 首色XXXXXX-YYYYYY格式
char* deltaColor - 偏移色x1|y1|XXXXXX-YYYYYY|XXXXXX-YYYYYY|...,x2|y3|XXXXXX-YYYYYY|XXXXXX-YYYYYY|...,...格式
 sim - 相似度
__int32 bALL - 是否全部找0表示找到一个就返回
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
```
### 注意事项
```
图片内存缓冲区自己维护
```
### HD识图_多点偏移找色从内存 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点偏移找色从内存 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_多点偏移找色从内存 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_范围找图从文件
### 描述
```
在客户区范围内找图(从文件)(仅支持一个图片)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindPicByFile(__int32 窗口序号,char* orgImageName,__int32 x,__int32 y,__int32 w,__int32 h,char* 图片名字,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* orgImageName - 指定一张原图数据(支持绝对路径和相对路径)
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* 图片名字 - 一张图片(bmp)文件名字(路径调用HCRES_SetResPath全局设置)(支持绝对路径和相对路径)
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
大于0表示:高4字节为x低4字节为y
```
### 注意事项
```
注意返回值含义和xy值的提取
{error:0,ret:[{bRet:NN,info:MM}]}
图片索引,左上角X,左上角Y,宽度,高度|
NN:返回值
MM:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|含义:图片索引(0开始),左上角X,左上角Y,宽度,高度|
```
### HD识图_范围找图从文件 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图从文件 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图从文件 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_范围找图从内存
### 描述
```
在客户区范围内找图(从内存)(仅支持一个图片)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindPicByMem(__int32 窗口序号,BYTE* data,__int32 dataSize,__int32 x,__int32 y,__int32 w,__int32 h,char* 图片名字,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
byte* data - Bmp图片字节数据缓冲区地址
__int32 dataSize - Bmp图片字节大小
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* 图片名字 - 一张图片(bmp)文件名字(路径调用HCRES_SetResPath全局设置)(支持绝对路径和相对路径)
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
大于0表示:高4字节为x低4字节为y
```
### 注意事项
```
注意返回值含义和xy值的提取
图片内存缓冲区自己维护
{error:0,ret:[{bRet:NN,info:MM}]}
图片索引,左上角X,左上角Y,宽度,高度|
NN:返回值
MM:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|含义:图片索引(0开始),左上角X,左上角Y,宽度,高度|
```
### HD识图_范围找图从内存 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图从内存 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图从内存 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_范围找图从文件Ex
### 描述
```
在客户区范围内找图(从文件)(找到一个图片就返回)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindPicExByFile(__int32 窗口序号,char* orgImageName,__int32 x,__int32 y,__int32 w,__int32 h,char* 图片名字集合,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* orgImageName - 指定一张原图数据(支持绝对路径和相对路径)
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* 图片名字集合 - 多张张图片(bmp)文件名字(不包含路径，路径调用HCRES_SetResPath全局设置),以'|'分隔开(支持绝对路径和相对路径)
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
大于0表示:低4字节为x高4字节为y
```
### 注意事项
```
注意返回值含义和xy值的提取
返回json:
{error:0,ret:[{bRet:NN,info:MM}]}
图片索引,左上角X,左上角Y,宽度,高度|
NN:返回值
MM:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|含义:图片索引(0开始),左上角X,左上角Y,宽度,高度|
```
### HD识图_范围找图从文件Ex - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图从文件Ex - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图从文件Ex - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_范围找图从内存Ex
### 描述
```
在客户区范围内找图(从内存)(找到一个图片就返回)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindPicExByMem(__int32 窗口序号,BYTE* data,__int32 dataSize,__int32 x,__int32 y,__int32 w,__int32 h,char* 图片名字集合,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
byte* data - Bmp图片字节数据缓冲区地址
__int32 dataSize - Bmp图片字节大小
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* 图片名字集合 - 多张张图片(bmp)文件名字(不包含路径，路径调用HCRES_SetResPath全局设置),以'|'分隔开(支持绝对路径和相对路径)
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
大于0表示:低4字节为x高4字节为y
```
### 注意事项
```
注意返回值含义和xy值的提取
图片内存缓冲区自己维护
返回json:
{error:0,ret:[{bRet:NN,info:MM}]}
图片索引,左上角X,左上角Y,宽度,高度|
NN:返回值
MM:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|含义:图片索引(0开始),左上角X,左上角Y,宽度,高度|
```
### HD识图_范围找图从内存Ex - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图从内存Ex - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图从内存Ex - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCFP_FindPicExxByFile
### 描述
```
在客户区范围内找图(从文件)(找全部图片信息坐标)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindPicExxByFile(__int32 窗口序号,char* orgImageName,__int32 x,__int32 y,__int32 w,__int32 h,char* 图片名字集合,char* deltaColor,doublesim,BOOL bAll=TRUE,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* orgImageName - 指定一张原图数据(支持绝对路径和相对路径)
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* 图片名字集合 - 多张张图片(bmp)文件名字(不包含路径，路径调用HCRES_SetResPath全局设置),以'|'分隔开(支持绝对路径和相对路径)
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
bool bAll - 是否全部找如果不是表示每个图片只找一次就换下个图片
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
返回01错误值
```
### 注意事项
```
注意返回值含义和xy值的提取
返回json:
{error:0,ret:[{bRet:NN,info:MM}]}
图片索引,左上角X,左上角Y,宽度,高度|
NN:返回值
MM:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|含义:图片索引(0开始),左上角X,左上角Y,宽度,高度|
```
### HCFP_FindPicExxByFile - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFP_FindPicExxByFile - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFP_FindPicExxByFile - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCFP_FindPicExxByMem
### 描述
```
在客户区范围内找图(从内存)(找全部图片信息坐标)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindPicExxByMem(__int32 窗口序号,BYTE* data,__int32 dataSize,__int32 x,__int32 y,__int32 w,__int32 h,char* 图片名字集合,char* deltaColor,doublesim,BOOL bAll=TRUE,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
byte* data - Bmp图片字节数据缓冲区地址
__int32 dataSize - Bmp图片字节大小
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
char* 图片名字集合 - 多张张图片(bmp)文件名字(不包含路径，路径调用HCRES_SetResPath全局设置),以'|'分隔开(支持绝对路径和相对路径)
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
bool bAll - 是否全部找如果不是表示每个图片只找一次就换下个图片
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
返回01错误值
```
### 注意事项
```
注意返回值含义和xy值的提取
图片内存缓冲区自己维护
返回json:
{error:0,ret:[{bRet:NN,info:MM}]}
图片索引,左上角X,左上角Y,宽度,高度|</SPAN>
NN:返回值
MM:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|含义:图片索引(0开始),左上角X,左上角Y,宽度,高度|
```
### HCFP_FindPicExxByMem - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFP_FindPicExxByMem - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFP_FindPicExxByMem - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_范围找图来源内存Ex
### 描述
```
在客户区范围内找图(子图从内存)(找到一个图片就返回)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindPicExFromMem(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,char* 子图内存地址集合字符串,char* deltaColor,doublesim,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* 子图内存地址集合字符串 - \"地址1,长度1|地址2,长度2|地址3,长度3\"地址和长度用十进制表示
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
 图片名字集合 - 多张张图片(bmp)文件名字(不包含路径，路径调用HCRES_SetResPath全局设置),以'|'分隔开(支持绝对路径和相对路径)
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
大于0表示:低4字节为x高4字节为y
```
### 注意事项
```
注意返回值含义和xy值的提取
图片内存缓冲区自己维护
返回json:
{error:0,ret:[{bRet:NN,info:MM}]}
图片索引,左上角X,左上角Y,宽度,高度|
NN:返回值
MM:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|含义:图片索引(0开始),左上角X,左上角Y,宽度,高度|
```
### HD识图_范围找图来源内存Ex - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图来源内存Ex - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_范围找图来源内存Ex - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCFP_FindPicExxFromMem
### 描述
```
在客户区范围内找图(子图从内存)(找全部图片信息坐标)
```
### 原型
```cpp
__int64 __stdcall HCFP_FindPicExxFromMem(__int32 窗口序号,__int32 x,__int32 y,__int32 w,__int32 h,char* 子图内存地址集合字符串,char* deltaColor,doublesim,BOOL bAll=TRUE,__int32 dirType=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* 子图内存地址集合字符串 - \"地址1,长度1|地址2,长度2|地址3,长度3\"地址和长度用十进制表示
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
__int32 w - 矩形范围宽度
__int32 h - 矩形范围高度
 图片名字集合 - 多张张图片(bmp)文件名字(不包含路径，路径调用HCRES_SetResPath全局设置),以'|'分隔开(支持绝对路径和相对路径)
char* deltaColor - 偏色(如
 sim - 整个像素矩阵的相似度
bool bAll - 是否全部找如果不是表示每个图片只找一次就换下个图片
__int32 dirType - 排序类型/方向类型排序/方向类型
```
### 返回值
```
查看返回值表
返回01错误值
```
### 注意事项
```
注意返回值含义和xy值的提取
图片内存缓冲区自己维护
返回json:
{error:0,ret:[{bRet:NN,info:MM}]}
图片索引,左上角X,左上角Y,宽度,高度|
NN:返回值
MM:index1,x1,y1,w1,h1|index2,x2,y2,w3,h3|index3,x3,y3,w3,h3|含义:图片索引(0开始),左上角X,左上角Y,宽度,高度|
```
### HCFP_FindPicExxFromMem - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFP_FindPicExxFromMem - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCFP_FindPicExxFromMem - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_比较颜色从文件
### 描述
```
比较颜色(从文件)
```
### 原型
```cpp
__int64 __stdcall HCFP_CmpColorsByFile(__int32 窗口序号,char* orgImageName,__int32 x,__int32 y,char* deltaColor);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* orgImageName - 指定一张原图数据(支持绝对路径和相对路径)
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
char* deltaColor - XXXXXX-YYYYYY格式
```
### 返回值
```
查看返回值表
1找到
0未找到
```
### 注意事项
```
无
```
### HD识图_比较颜色从文件 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色从文件 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色从文件 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_比较颜色从内存
### 描述
```
比较颜色(从内存)
```
### 原型
```cpp
__int64 __stdcall HCFP_CmpColorsByMem(__int32 窗口序号,BYTE* data,__int32 dataSize,__int32 x,__int32 y,char* deltaColor);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
byte* data - Bmp图片字节数据缓冲区地址
__int32 dataSize - Bmp图片字节大小
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
char* deltaColor - XXXXXX-YYYYYY格式
```
### 返回值
```
查看返回值表
1找到
0未找到
```
### 注意事项
```
图片内存缓冲区自己维护
```
### HD识图_比较颜色从内存 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色从内存 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色从内存 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_比较颜色从文件Ex
### 描述
```
多点找色确定某个图像块,指定多个具体点,从文件
```
### 原型
```cpp
__int64 __stdcall HCFP_CmpColorExsByFile(__int32 窗口序号,char* orgImageName,char* deltaXYColor);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* orgImageName - 指定一张原图数据(支持绝对路径和相对路径)
char* deltaXYColor - x1|y1|e3e6eb-101010|e3e6eb-101010|e3e6eb-101010|...,x2|y2|e3e6eb-101010|e3e6eb-101010|e3e6eb-101010|...
```
### 返回值
```
查看返回值表
找到返回8字节长整数包含第一个坐标点x1,y1低4字节x1高4字节y1
未找到返回0或者小于0
json:\"{\"error\":0,\"ret\":[{\"bRet\":ret,\"info\":”X1,Y1“}]}\",
```
### 注意事项
```
无
```
### HD识图_比较颜色从文件Ex - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色从文件Ex - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色从文件Ex - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_比较颜色从内存Ex
### 描述
```
多点找色确定某个图像块,指定多个具体点,从内存
```
### 原型
```cpp
__int64 __stdcall HCFP_CmpColorExsByMem(__int32 窗口序号,BYTE* data,__int32 dataSize,char* deltaXYColor);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
byte* data - Bmp图片字节数据缓冲区地址
__int32 dataSize - Bmp图片字节大小
char* deltaXYColor - x1|y1|e3e6eb-101010|e3e6eb-101010|e3e6eb-101010|...,x2|y2|e3e6eb-101010|e3e6eb-101010|e3e6eb-101010|...
```
### 返回值
```
查看返回值表
找到返回8字节长整数包含第一个坐标点x1,y1低4字节x1高4字节y1
未找到返回0或者小于0
json:\"{\"error\":0,\"ret\":[{\"bRet\":ret,\"info\":”X1,Y1“}]}\",
```
### 注意事项
```
无
```
### HD识图_比较颜色从内存Ex - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色从内存Ex - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_比较颜色从内存Ex - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_获取颜色从文件
### 描述
```
获取颜色(从文件)
```
### 原型
```cpp
__int64 __stdcall HCFP_GetColorByFile(__int32 窗口序号,char* orgImageName,__int32 x,__int32 y);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
char* orgImageName - 指定一张原图数据(支持绝对路径和相对路径)
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
```
### 返回值
```
查看返回值表
```
### 注意事项
```
注意返回值含义和值的提取
#pragmapack(1)typedefstructMYA8R8G8B8{BYTEm_a;\n0x00BYTEm_r;\n低8位BYTEm_g;\n中8位BYTEm_b;\n高8位MYA8R8G8B8(){m_a=0;m_r=0;m_g=0;m_b=0;}}MYA8R8G8B8;
#pragmapack()
json:
“{\"error\":0,\"ret\":[{\"bRet\":1,\"info\":\"44,29,5B\"}]}”A(0x00)rgbr红色:低8位g绿色:中8位b蓝色:高8位RGBFFFFFF
```
### HD识图_获取颜色从文件 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_获取颜色从文件 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_获取颜色从文件 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD识图_获取颜色从内存
### 描述
```
获取颜色(从内存)
```
### 原型
```cpp
__int64 __stdcall HCFP_GetColorByMem(__int32 窗口序号,BYTE* data,__int32 dataSize,__int32 x,__int32 y);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)0表示全局全屏识别
byte* data - Bmp图片字节数据缓冲区地址
__int32 dataSize - Bmp图片字节大小
__int32 x - 矩形范围左上角x
__int32 y - 矩形范围左上角y
```
### 返回值
```
查看返回值表
```
### 注意事项
```
图片内存缓冲区自己维护
注意返回值含义和值的提取
#pragmapack(1)typedefstructMYA8R8G8B8{BYTEm_a;\n0x00BYTEm_r;\n低8位BYTEm_g;\n中8位BYTEm_b;\n高8位MYA8R8G8B8(){m_a=0;m_r=0;m_g=0;m_b=0;}}MYA8R8G8B8;
#pragmapack()
json:
“{\"error\":0,\"ret\":[{\"bRet\":1,\"info\":\"44,29,5B\"}]}”A(0x00)rgbr红色:低8位g绿色:中8位b蓝色:高8位RGBFFFFFF
```
### HD识图_获取颜色从内存 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_获取颜色从内存 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD识图_获取颜色从内存 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
