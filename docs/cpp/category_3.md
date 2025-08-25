---
sidebar_position: 4
---

# 🛰️ IP模块[IP]
## 📌 函数: HCIP_YMSetRootPath
### 描述
```
设置有米软件路径(EXE路径)
```
### 原型
```cpp
__int64 __stdcall HCIP_YMSetRootPath(char* path);
```
### 参数
```
char* path - 路径
```
### 返回值
```
查看返回值表
```
### 注意事项
```
软件找HD作者拿(魔改版)
```
### HCIP_YMSetRootPath - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMSetRootPath - 进阶用法
```cpp
// 示例2：HCIP_YMSetRootPath 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMSetRootPath - 高级应用
```cpp
// 示例3：HCIP_YMSetRootPath 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCIP_YMAddIP
### 描述
```
添加IP
```
### 原型
```cpp
__int64 __stdcall HCIP_YMAddIP(char* ip,int port,char* account,char* password,int type,int kfp=1,char* proName=NULL);
```
### 参数
```
char* ip - IP如
int port - 端口
char* account - 对于type==1是账号如
char* password - 密码
int type - 1socket52ss
int kfp - 是否可分配(一般就为空默认1就行)
char* proName - 进程名(一般就为空默认NULL就行)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
软件找HD作者拿(魔改版)
```
### HCIP_YMAddIP - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMAddIP - 进阶用法
```cpp
// 示例2：HCIP_YMAddIP 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMAddIP - 高级应用
```cpp
// 示例3：HCIP_YMAddIP 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCIP_YMAddProcess
### 描述
```
添加代理的进程名
```
### 原型
```cpp
__int64 __stdcall HCIP_YMAddProcess(char* proName);
```
### 参数
```
char* proName - 进程名如
```
### 返回值
```
查看返回值表
```
### 注意事项
```
软件找HD作者拿(魔改版)
```
### HCIP_YMAddProcess - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMAddProcess - 进阶用法
```cpp
// 示例2：HCIP_YMAddProcess 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMAddProcess - 高级应用
```cpp
// 示例3：HCIP_YMAddProcess 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCIP_YMOpen
### 描述
```
打开有米软件
```
### 原型
```cpp
__int64 __stdcall HCIP_YMOpen(int type);
```
### 参数
```
int type - 0国内IP1国外IP
```
### 返回值
```
查看返回值表
```
### 注意事项
```
软件找HD作者拿(魔改版)
流程:
1.先设置路径
2.添加代理进程和IP
3.打开有米
```
### HCIP_YMOpen - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMOpen - 进阶用法
```cpp
// 示例2：HCIP_YMOpen 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMOpen - 高级应用
```cpp
// 示例3：HCIP_YMOpen 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCIP_YMIsOpen
### 描述
```
有米软件是否已经打开
```
### 原型
```cpp
__int64 __stdcall HCIP_YMIsOpen(int type);
```
### 参数
```
int type - 0国内IP1国外IP
```
### 返回值
```
查看返回值表
```
### 注意事项
```
软件找HD作者拿(魔改版)
流程:
1.先设置路径
2.添加代理进程和IP
3.打开有米
```
### HCIP_YMIsOpen - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMIsOpen - 进阶用法
```cpp
// 示例2：HCIP_YMIsOpen 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMIsOpen - 高级应用
```cpp
// 示例3：HCIP_YMIsOpen 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCIP_YMClose
### 描述
```
关闭有米软件
```
### 原型
```cpp
__int64 __stdcall HCIP_YMClose(int type);
```
### 参数
```
int type - 0国内IP1国外IP
```
### 返回值
```
查看返回值表
```
### 注意事项
```
软件找HD作者拿(魔改版)
流程:
1.先设置路径
2.添加代理进程和IP
3.打开有米
```
### HCIP_YMClose - 基础示例
```cpp
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMClose - 进阶用法
```cpp
// 示例2：HCIP_YMClose 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCIP_YMClose - 高级应用
```cpp
// 示例3：HCIP_YMClose 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
