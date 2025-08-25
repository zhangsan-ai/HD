---
sidebar_position: 27
---

# 🛰️ 找图模块(FP)
## 📌 函数: HCFP_Capture
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
### HCFP_Capture - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_Capture - 进阶用法
```cpp
// 示例2：HCFP_Capture 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_Capture - 高级应用
```cpp
// 示例3：HCFP_Capture 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindColor
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
### HCFP_FindColor - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColor - 进阶用法
```cpp
// 示例2：HCFP_FindColor 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColor - 高级应用
```cpp
// 示例3：HCFP_FindColor 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindColors
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
### HCFP_FindColors - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColors - 进阶用法
```cpp
// 示例2：HCFP_FindColors 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColors - 高级应用
```cpp
// 示例3：HCFP_FindColors 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindColorsOffset
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
### HCFP_FindColorsOffset - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorsOffset - 进阶用法
```cpp
// 示例2：HCFP_FindColorsOffset 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorsOffset - 高级应用
```cpp
// 示例3：HCFP_FindColorsOffset 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_CmpColors
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
### HCFP_CmpColors - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColors - 进阶用法
```cpp
// 示例2：HCFP_CmpColors 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColors - 高级应用
```cpp
// 示例3：HCFP_CmpColors 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_CmpColorExs
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
### HCFP_CmpColorExs - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColorExs - 进阶用法
```cpp
// 示例2：HCFP_CmpColorExs 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColorExs - 高级应用
```cpp
// 示例3：HCFP_CmpColorExs 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_GetColor
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
### HCFP_GetColor - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_GetColor - 进阶用法
```cpp
// 示例2：HCFP_GetColor 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_GetColor - 高级应用
```cpp
// 示例3：HCFP_GetColor 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindPic
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
### HCFP_FindPic - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPic - 进阶用法
```cpp
// 示例2：HCFP_FindPic 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPic - 高级应用
```cpp
// 示例3：HCFP_FindPic 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindPicEx
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
### HCFP_FindPicEx - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicEx - 进阶用法
```cpp
// 示例2：HCFP_FindPicEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicEx - 高级应用
```cpp
// 示例3：HCFP_FindPicEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
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
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExx - 进阶用法
```cpp
// 示例2：HCFP_FindPicExx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExx - 高级应用
```cpp
// 示例3：HCFP_FindPicExx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_IsDisplayDead
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
### HCFP_IsDisplayDead - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_IsDisplayDead - 进阶用法
```cpp
// 示例2：HCFP_IsDisplayDead 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_IsDisplayDead - 高级应用
```cpp
// 示例3：HCFP_IsDisplayDead 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_GetRangeCRC
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
### HCFP_GetRangeCRC - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_GetRangeCRC - 进阶用法
```cpp
// 示例2：HCFP_GetRangeCRC 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_GetRangeCRC - 高级应用
```cpp
// 示例3：HCFP_GetRangeCRC 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindColorByFile
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
### HCFP_FindColorByFile - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorByFile - 进阶用法
```cpp
// 示例2：HCFP_FindColorByFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorByFile - 高级应用
```cpp
// 示例3：HCFP_FindColorByFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindColorByMem
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
### HCFP_FindColorByMem - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorByMem - 进阶用法
```cpp
// 示例2：HCFP_FindColorByMem 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorByMem - 高级应用
```cpp
// 示例3：HCFP_FindColorByMem 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindColorsByFile
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
### HCFP_FindColorsByFile - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorsByFile - 进阶用法
```cpp
// 示例2：HCFP_FindColorsByFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorsByFile - 高级应用
```cpp
// 示例3：HCFP_FindColorsByFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindColorsByMem
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
### HCFP_FindColorsByMem - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorsByMem - 进阶用法
```cpp
// 示例2：HCFP_FindColorsByMem 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorsByMem - 高级应用
```cpp
// 示例3：HCFP_FindColorsByMem 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindColorsOffsetByFile
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
### HCFP_FindColorsOffsetByFile - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorsOffsetByFile - 进阶用法
```cpp
// 示例2：HCFP_FindColorsOffsetByFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorsOffsetByFile - 高级应用
```cpp
// 示例3：HCFP_FindColorsOffsetByFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindColorsOffsetByMem
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
### HCFP_FindColorsOffsetByMem - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorsOffsetByMem - 进阶用法
```cpp
// 示例2：HCFP_FindColorsOffsetByMem 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindColorsOffsetByMem - 高级应用
```cpp
// 示例3：HCFP_FindColorsOffsetByMem 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindPicByFile
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
### HCFP_FindPicByFile - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicByFile - 进阶用法
```cpp
// 示例2：HCFP_FindPicByFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicByFile - 高级应用
```cpp
// 示例3：HCFP_FindPicByFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindPicByMem
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
### HCFP_FindPicByMem - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicByMem - 进阶用法
```cpp
// 示例2：HCFP_FindPicByMem 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicByMem - 高级应用
```cpp
// 示例3：HCFP_FindPicByMem 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindPicExByFile
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
### HCFP_FindPicExByFile - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExByFile - 进阶用法
```cpp
// 示例2：HCFP_FindPicExByFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExByFile - 高级应用
```cpp
// 示例3：HCFP_FindPicExByFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindPicExByMem
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
### HCFP_FindPicExByMem - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExByMem - 进阶用法
```cpp
// 示例2：HCFP_FindPicExByMem 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExByMem - 高级应用
```cpp
// 示例3：HCFP_FindPicExByMem 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
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
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExxByFile - 进阶用法
```cpp
// 示例2：HCFP_FindPicExxByFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExxByFile - 高级应用
```cpp
// 示例3：HCFP_FindPicExxByFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
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
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExxByMem - 进阶用法
```cpp
// 示例2：HCFP_FindPicExxByMem 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExxByMem - 高级应用
```cpp
// 示例3：HCFP_FindPicExxByMem 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_FindPicExFromMem
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
### HCFP_FindPicExFromMem - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExFromMem - 进阶用法
```cpp
// 示例2：HCFP_FindPicExFromMem 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExFromMem - 高级应用
```cpp
// 示例3：HCFP_FindPicExFromMem 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
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
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExxFromMem - 进阶用法
```cpp
// 示例2：HCFP_FindPicExxFromMem 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_FindPicExxFromMem - 高级应用
```cpp
// 示例3：HCFP_FindPicExxFromMem 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_CmpColorsByFile
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
### HCFP_CmpColorsByFile - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColorsByFile - 进阶用法
```cpp
// 示例2：HCFP_CmpColorsByFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColorsByFile - 高级应用
```cpp
// 示例3：HCFP_CmpColorsByFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_CmpColorsByMem
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
### HCFP_CmpColorsByMem - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColorsByMem - 进阶用法
```cpp
// 示例2：HCFP_CmpColorsByMem 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColorsByMem - 高级应用
```cpp
// 示例3：HCFP_CmpColorsByMem 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_CmpColorExsByFile
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
### HCFP_CmpColorExsByFile - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColorExsByFile - 进阶用法
```cpp
// 示例2：HCFP_CmpColorExsByFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColorExsByFile - 高级应用
```cpp
// 示例3：HCFP_CmpColorExsByFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_CmpColorExsByMem
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
### HCFP_CmpColorExsByMem - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColorExsByMem - 进阶用法
```cpp
// 示例2：HCFP_CmpColorExsByMem 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_CmpColorExsByMem - 高级应用
```cpp
// 示例3：HCFP_CmpColorExsByMem 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_GetColorByFile
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
### HCFP_GetColorByFile - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_GetColorByFile - 进阶用法
```cpp
// 示例2：HCFP_GetColorByFile 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_GetColorByFile - 高级应用
```cpp
// 示例3：HCFP_GetColorByFile 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCFP_GetColorByMem
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
### HCFP_GetColorByMem - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_GetColorByMem - 进阶用法
```cpp
// 示例2：HCFP_GetColorByMem 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCFP_GetColorByMem - 高级应用
```cpp
// 示例3：HCFP_GetColorByMem 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
