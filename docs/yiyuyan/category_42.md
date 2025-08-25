---
sidebar_position: 43
---

# 🛰️ (B2)剑灵2台服
## 📌 函数: HB2_GetPlayerInfo
### 描述
```
调用获取人物信息CALL
```
### 原型
```cpp
__int64 __stdcall HB2_GetPlayerInfo(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":[{\"name\":\"Jack\",\"level\":26,\"curHp\":588,\"maxHp\":999,\"curMp\":255,\"maxMp\":666,\"gold\":99999,\"diamond\":999999}]}
```
### HB2_GetPlayerInfo - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_GetPlayerInfo - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_GetBagInfo
### 描述
```
调用获取背包信息CALL
```
### 原型
```cpp
__int64 __stdcall HB2_GetBagInfo(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"flag\":99,\"ret\":[{\"id\":1111,\"tId\":22222,\"dId\":33333,\"num\":588},{\"id\":1111,\"tId\":22222,\"dId\":33333,\"num\":588},{\"id\":1111,\"tId\":22222,\"dId\":33333,\"num\":588}]}
```
### HB2_GetBagInfo - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_GetBagInfo - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_GetShortCutInfo1
### 描述
```
调用获取快捷栏遍历信息CALL（前10个）
```
### 原型
```cpp
__int64 __stdcall HB2_GetShortCutInfo1(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":[{\"index\":0,\"id\":1111,\"bAct\":0},{\"index\":1,\"id\":2222,\"bAct\":1}]}
```
### HB2_GetShortCutInfo1 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_GetShortCutInfo1 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_GetShortCutInfo2
### 描述
```
调用获取快捷栏遍历信息CALL（后10个）
```
### 原型
```cpp
__int64 __stdcall HB2_GetShortCutInfo2(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":[{\"index\":0,\"id\":1111,\"bAct\":0},{\"index\":1,\"id\":2222,\"bAct\":1}]}
```
### HB2_GetShortCutInfo2 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_GetShortCutInfo2 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_GetPlayerXYZ
### 描述
```
调用获取人物坐标CALL
```
### 原型
```cpp
__int64 __stdcall HB2_GetPlayerXYZ(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":[{\"x\":125,\"y\":125,\"z\":125}]}
```
### HB2_GetPlayerXYZ - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_GetPlayerXYZ - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_GetPlayerCurMapId
### 描述
```
调用获取人物当前地图IDCALL
```
### 原型
```cpp
__int64 __stdcall HB2_GetPlayerCurMapId(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":[{\"mapId\":1993}]}
```
### HB2_GetPlayerCurMapId - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_GetPlayerCurMapId - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_GetCurChapterTaskId
### 描述
```
调用遍历已结任务章节ID信息(主线+支线)
```
### 原型
```cpp
__int64 __stdcall HB2_GetCurChapterTaskId(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":[{\"CTaskId\":1993,\"index\":1}]}
```
### HB2_GetCurChapterTaskId - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_GetCurChapterTaskId - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_GetAChapterTask
### 描述
```
调用遍历已结任务章节ID信息(主线+支线)
```
### 原型
```cpp
__int64 __stdcall HB2_GetAChapterTask(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":[{\"CTaskId\":1993,\"index\":1,\"curNum\":2},{\"CTaskId\":1998,\"index\":2,\"curNum\":2}]}
```
### HB2_GetAChapterTask - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_GetAChapterTask - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_PlayerIsMove
### 描述
```
调用人物是否移动CALL
```
### 原型
```cpp
__int64 __stdcall HB2_PlayerIsMove(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HB2_PlayerIsMove - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_PlayerIsMove - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_IsAutoUseMed
### 描述
```
调用人物是否自动使用药品状态
```
### 原型
```cpp
__int64 __stdcall HB2_IsAutoUseMed(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HB2_IsAutoUseMed - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_IsAutoUseMed - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_Move
### 描述
```
调用移动CALL
```
### 原型
```cpp
__int64 __stdcall HB2_Move(__int32 窗口序号,__int32 地图ID,__int32 x,__int32 y,__int32 z,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int32 地图ID - 地图ID
__int32 x - x
__int32 y - y
__int32 z - z
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HB2_Move - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_Move - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_GetHuaShen
### 描述
```
调用化身遍历CALL
```
### 原型
```cpp
__int64 __stdcall HB2_GetHuaShen(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":[{\"id\":0,\"xLevel\":1111,\"type\":0},{\"id\":0,\"xLevel\":1111,\"type\":0}]}
id:化身IDxLevel:化身星级type:化身品质0123依次递增+1白绿蓝...
```
### HB2_GetHuaShen - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_GetHuaShen - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_GetChongWu
### 描述
```
调用宠物遍历CALL
```
### 原型
```cpp
__int64 __stdcall HB2_GetChongWu(__int32 窗口序号,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
json:
{\"error\":0,\"ret\":[{\"id\":0,\"xLevel\":1111,\"type\":0},{\"id\":0,\"xLevel\":1111,\"type\":0}]}
id:宠物IDxLevel:宠物星级type:宠物品质0123依次递增+1白绿蓝...
```
### HB2_GetChongWu - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_GetChongWu - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HB2_UseGoods
### 描述
```
调用使用物品CALL
```
### 原型
```cpp
__int64 __stdcall HB2_UseGoods(__int32 窗口序号,__int64 物品ID,__int64 物品数量,__int64 物品临时ID,__int64 物品描述ID,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int64 物品ID - 物品ID
__int64 物品数量 - 物品数量
__int64 物品临时ID - 物品临时ID
__int64 物品描述ID - 物品描述ID
bool 是否主线程调用 - 是否需要主线程来调用这个CALL
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HB2_UseGoods - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HB2_UseGoods - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
