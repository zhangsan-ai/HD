---
sidebar_position: 21
---

# 🛰️ YOLOV(HDYOLOV)
## 📌 函数: HCYOLO_AddModel
### 描述
```
添加YOLOV(ncnn.bin和ncnn.param)模型文件(从内存中加载模型)
```
### 原型
```cpp
__int64 __stdcall HCYOLO_AddModel(__int32 ver,void* modeData,__int32 modeDataSize,void* modeLparam,__int32 modeLparamSize,__int32 size=640,BOOL bGpu=FALSE,char* password=NULL);
```
### 参数
```
__int32 ver - yolov版本支持581011版本
void modeData - ncnn.bin模型文件的二进制数据
__int32 modeDataSize - ncnn.bin模型文件的二进制数据大小
void modeLparam - ncnn.param模型文件的二进制数据
__int32 modeLparamSize - ncnn.param模型文件的二进制数据大小
__int32 size - 训练时候的图片大小一般默认640
bool bGpu - 是否GPU识别
char* password - 没有就空,一般为默认空就行
```
### 返回值
```
查看返回值表
```
### 注意事项
```
ncnn模型bin“＝XXX.ncnn.bin”param“＝XXX.ncnn.param”从内存中加载模型备注:一个进程仅同时支持一个版本的模型
需要调用HCHD_LoadDrv2传递参数4来安装YOLOV组件模块
```
### HCYOLO_AddModel - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCYOLO_AddModel - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCYOLO_AddModel - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCYOLO_AddModelFile
### 描述
```
添加YOLOV(ncnn.bin和ncnn.param)模型文件(从文件中加载模型)
```
### 原型
```cpp
__int64 __stdcall HCYOLO_AddModelFile(__int32 ver,char* modeFileName,char* modeLparamName,__int32 size=640,BOOL bGpu=FALSE,char* password=NULL);
```
### 参数
```
__int32 ver - yolov版本支持581011版本
char* modeFileName - ncnn.bin模型文件名(支持绝对路径或相对路径)相对路径需要调用HCRES_SetResPath设置路径
char* modeLparamName - ncnn.param模型文件名(支持绝对路径或相对路径)相对路径需要调用HCRES_SetResPath设置路径
__int32 size - 训练时候的图片大小一般默认640
bool bGpu - 是否GPU识别
char* password - 没有就空,一般为默认空就行
```
### 返回值
```
查看返回值表
```
### 注意事项
```
ncnn模型bin“＝XXX.ncnn.bin”param“＝XXX.ncnn.param”从文件中加载模型备注:一个进程仅同时支持一个版本的模型
需要调用HCHD_LoadDrv2传递参数4来安装YOLOV组件模块
```
### HCYOLO_AddModelFile - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCYOLO_AddModelFile - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCYOLO_AddModelFile - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCYOLO_Identify
### 描述
```
添加YOLOV(ncnn.bin和ncnn.param)模型文件(从文件中加载模型),从后台截图缓存识别
```
### 原型
```cpp
__int64 __stdcall HCYOLO_Identify(__int32 窗口序号,floatconf=0.7f,floatiou=0.4f,BOOL bDebug=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号
 conf - 置信度默认0.7
 iou - 过重率一般默认在0.4~0.6之间默认0.4
bool bDebug - 是否弹窗调试标注查看默认假
```
### 返回值
```
查看返回值表
```
### 注意事项
```
识别信息调用HCEnv_GetRetJson“获取字符串信息以|”分割,自行切割
%d,%f,%f,%f,%f,%f,%d|%d,%f,%f,%f,%f,%f,%d|
字段含义:类别,X1,Y1,X2,Y2,置信度,耗时|类别,X1,Y1,X2,Y2,置信度,耗时|
需要调用HCHD_LoadDrv2传递参数4来安装YOLOV组件模块
```
### HCYOLO_Identify - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCYOLO_Identify - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCYOLO_Identify - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCYOLO_IdentifyByFile
### 描述
```
添加YOLOV(ncnn.bin和ncnn.param)模型文件(从文件中加载模型),从指定图片文件识别
```
### 原型
```cpp
__int64 __stdcall HCYOLO_IdentifyByFile(__int32 窗口序号,char* image,floatconf=0.7f,floatiou=0.4f,BOOL bDebug=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号
char* image - 图片文件名(支持绝对路径或相对路径)相对路径需要调用HCRES_SetResPath设置路径(图片格式支持多种格式
 conf - 置信度默认0.7
 iou - 过重率一般默认在0.4~0.6之间默认0.4
bool bDebug - 是否弹窗调试标注查看默认假
```
### 返回值
```
查看返回值表
```
### 注意事项
```
识别信息调用HCEnv_GetRetJson“获取字符串信息以|”分割,自行切割
%d,%f,%f,%f,%f,%f,%d|%d,%f,%f,%f,%f,%f,%d|
字段含义:类别,X1,Y1,X2,Y2,置信度,耗时|类别,X1,Y1,X2,Y2,置信度,耗时|
需要调用HCHD_LoadDrv2传递参数4来安装YOLOV组件模块
```
### HCYOLO_IdentifyByFile - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCYOLO_IdentifyByFile - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCYOLO_IdentifyByFile - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
