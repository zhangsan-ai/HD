# 🛰️ YOLOV(HDYOLOV)
## 📌 函数: HCYOLO_AddModel
### 描述
```
添加YOLOV(ncnn.bin和ncnn.param)模型文件(从内存中加载模型)
```
### 原型
```
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
### HCYOLO_AddModel - 进阶用法
```
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HCYOLO_AddModel - 高级应用
```
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HCYOLO_AddModelFile
### 描述
```
添加YOLOV(ncnn.bin和ncnn.param)模型文件(从文件中加载模型)
```
### 原型
```
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
```
.版本 2

.子程序 测试从内存加载YOLO模型, 逻辑型, 公开
    .局部变量 版本, 整数型
    .局部变量 bin数据, 字节集
    .局部变量 param数据, 字节集
    .局部变量 bin地址, 整数型
    .局部变量 param地址, 整数型
    .局部变量 结果, 逻辑型
    
    版本 ＝ 5  ' YOLOv5版本
    
    ' 从文件读取模型数据到内存
    bin数据 ＝ 读入文件 ("models\yolov5s.bin")
    param数据 ＝ 读入文件 ("models\yolov5s.param")
    
    .如果 (取字节集长度 (bin数据) ＞ 0 且 取字节集长度 (param数据) ＞ 0)
        调试输出 ("模型文件读取成功")
        调试输出 ("bin文件大小：", 取字节集长度 (bin数据), "字节")
        调试输出 ("param文件大小：", 取字节集长度 (param数据), "字节")
        
        ' 申请内存并复制模型数据
        bin地址 ＝ 申请内存 (取字节集长度 (bin数据), 真)
        param地址 ＝ 申请内存 (取字节集长度 (param数据), 真)
        内存_写字节集 (bin地址, bin数据)
        内存_写字节集 (param地址, param数据)
        
        ' 从内存加载YOLO模型
        结果 ＝ HDYOLO_添加模型数据 (版本, bin地址, 取字节集长度 (bin数据), param地址, 取字节集长度 (param数据), 640, 真, "")
        .如果 (结果 ＝ 真)
            调试输出 ("从内存加载YOLO模型成功")
        .否则
            调试输出 ("从内存加载YOLO模型失败")
        .如果结束
        
        ' 释放内存
        释放内存 (bin地址)
        释放内存 (param地址)
    .否则
        调试输出 ("模型文件读取失败")
        结果 ＝ 假
    .如果结束
    
    返回 (结果)
```
### HCYOLO_AddModelFile - 进阶用法
```
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HCYOLO_AddModelFile - 高级应用
```
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HCYOLO_Identify
### 描述
```
添加YOLOV(ncnn.bin和ncnn.param)模型文件(从文件中加载模型),从后台截图缓存识别
```
### 原型
```
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
```
.版本 2

.子程序 测试YOLO内存图片识别, 逻辑型, 公开
    .局部变量 窗口序号, 整数型
    .局部变量 图片数据地址, 整数型
    .局部变量 数据大小, 整数型
    .局部变量 图片字节集, 字节集
    .局部变量 结果, 逻辑型
    
    窗口序号 ＝ 1
    
    ' 从文件读取图片到内存
    图片字节集 ＝ 读入文件 ("test_images\sample.png")
    .如果 (取字节集长度 (图片字节集) ＞ 0)
        调试输出 ("图片加载成功，大小：", 取字节集长度 (图片字节集), "字节")
        
        ' 申请内存并复制图片数据
        数据大小 ＝ 取字节集长度 (图片字节集)
        图片数据地址 ＝ 申请内存 (数据大小, 真)
        内存_写字节集 (图片数据地址, 图片字节集)
        
        ' 识别内存中的图片数据
        结果 ＝ HDYOLO_识别图片数据 (窗口序号, 图片数据地址, 数据大小, 0.7, 0.4, 假)
        .如果 (结果 ＝ 真)
            调试输出 ("内存图片识别成功")
            处理YOLO检测结果 (HD通用_获取最近返回json (窗口序号))
        .否则
            调试输出 ("内存图片识别失败")
        .如果结束
        
        ' 释放内存
        释放内存 (图片数据地址)
    .否则
        调试输出 ("无法加载图片文件")
        结果 ＝ 假
    .如果结束
    
    返回 (结果)
```
### HCYOLO_Identify - 进阶用法
```
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HCYOLO_Identify - 高级应用
```
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HCYOLO_IdentifyByFile
### 描述
```
添加YOLOV(ncnn.bin和ncnn.param)模型文件(从文件中加载模型),从指定图片文件识别
```
### 原型
```
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
```
.版本 2

.子程序 测试YOLO后台识别, 逻辑型, 公开
    .局部变量 窗口序号, 整数型
    .局部变量 置信度, 小数型
    .局部变量 重叠度, 小数型
    .局部变量 调试模式, 逻辑型
    .局部变量 结果, 逻辑型
    .局部变量 检测结果, 文本型
    
    窗口序号 ＝ 1
    置信度 ＝ 0.7  ' 70%置信度
    重叠度 ＝ 0.4  ' 40%IOU阈值
    调试模式 ＝ 假  ' 不显示调试窗口
    
    ' 从后台截图识别目标
    结果 ＝ HDYOLO_识别 (窗口序号, 置信度, 重叠度, 调试模式)
    .如果 (结果 ＝ 真)
        调试输出 ("YOLO识别成功")
        
        ' 获取检测结果
        检测结果 ＝ HD通用_获取最近返回json (窗口序号)
        .如果 (检测结果 ≠ "")
            调试输出 ("检测结果：", 检测结果)
            ' 结果格式：类别,X1,Y1,X2,Y2,置信度,耗时|类别,X1,Y1,X2,Y2,置信度,耗时|
            处理YOLO检测结果 (检测结果)
        .否则
            调试输出 ("未检测到任何目标")
        .如果结束
    .否则
        调试输出 ("YOLO识别失败")
    .如果结束
    
    返回 (结果)

.子程序 处理YOLO检测结果, , 公开
    .参数 检测数据, 文本型
    .局部变量 目标数组, 文本型, , "0"
    .局部变量 单个目标, 文本型, , "0"
    .局部变量 i, 整数型
    
    ' 按|分割多个检测结果
    目标数组 ＝ 分割文本 (检测数据, "|", )
    
    .计次循环首 (取数组成员数 (目标数组), i)
        .如果 (目标数组 [i] ≠ "")
            ' 按,分割单个目标的属性
            单个目标 ＝ 分割文本 (目标数组 [i], ",", )
            .如果 (取数组成员数 (单个目标) ≥ 7)
                调试输出 ("目标", i + 1, ":")
                调试输出 ("  类别：", 单个目标 [1])
                调试输出 ("  坐标：(", 单个目标 [2], ",", 单个目标 [3], ") 到 (", 单个目标 [4], ",", 单个目标 [5], ")")
                调试输出 ("  置信度：", 单个目标 [6])
                调试输出 ("  耗时：", 单个目标 [7], "ms")
            .如果结束
        .如果结束
    .计次循环尾 ()
```
### HCYOLO_IdentifyByFile - 进阶用法
```
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HCYOLO_IdentifyByFile - 高级应用
```
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
