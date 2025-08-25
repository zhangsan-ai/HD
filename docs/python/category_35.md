# 🛰️ 自定义插件模块(Com)
## 📌 函数: HD插件_加载插件
### 描述
```
添加自定义组件
```
### 原型
```
__int64 __stdcall HCModule_AddComponent(__int32 窗口序号,char* 账号,char* 密码,char* 组件绝对路径,__int64 rcx,__int64 rdx,__int64 r8,__int64 r9,__int64 l5,__int64 l6,__int64 addType=-1,BOOL 是否自动初始化=TRUE,BOOL 是否主线程调用=FALSE);
```
```
__int64 __stdcall HCModule_AddComponent(__int32 窗口序号,char* 账号,char* 密码,char* 组件绝对路径,__int64 l1,__int64 l2,__int64 l3,__int64 l4,__int64 l5,__int64 l6,__int64 addType=-1,BOOL 是否自动初始化=TRUE,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号
char* 账号 - 开发者自己的自定义模块设置的账号
char* 密码 - 开发者自己的自定义模块设置的密码
char* 组件绝对路径 - 组件绝对路径注意不要用中文路径！！
__int64 rcx-l1 - CALL参数第一个参数
__int64 rdx-l2 - CALL参数第二个参数
__int64 r8-l3 - CALL参数第三个参数
__int64 r9-l4 - CALL参数第四个参数
__int64 l5 - CALL参数第五个参数
__int64 l6 - CALL参数第六个参数
__int64 addType - 添加方式-1默认或者1无痕(不可卸载)2普通加载(可卸载)
bool 是否自动初始化 - 是否自动调用初始化接口(HDDataInit)并传递rcx-l6等6个参数
bool 是否主线程调用 - 是否主线程调用这个CALL,需要挂接主线程HC_HookMaint hread
```
### 返回值
```
查看返回值表
```
### 注意事项
```
自定义模块需要导入包并来实现接口绑定
```
### HD插件_加载插件 - 基础示例
```
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD插件_加载插件 - 进阶用法
```
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD插件_加载插件 - 高级应用
```
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD插件_卸载插件
### 描述
```
卸载指定插件
```
### 原型
```
__int64 __stdcall HCModule_DeleteComponent(__int32 窗口序号,char* 组件名,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号
char* 组件名 - dll的文件名(不包含后缀.dll)
bool 是否主线程调用 - 是否主线程调用这个CALL,需要挂接主线程
```
### 返回值
```
查看返回值表
```
### 注意事项
```
自定义模块需要导入包并来实现接口绑定
```
### HD插件_卸载插件 - 基础示例
```
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD插件_卸载插件 - 进阶用法
```
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD插件_卸载插件 - 高级应用
```
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD插件_CALL
### 描述
```
调用自定义组件中的接口
```
### 原型
```
__int64 __stdcall HCModule_CALL(__int32 窗口序号,char* 组件名,char* 函数名字,__int64 rcx,__int64 rdx,__int64 r8,__int64 r9,__int64 l5,__int64 l6,BOOL 是否主线程调用=FALSE);
```
```
__int64 __stdcall HCModule_CALL(__int32 窗口序号,char* 组件名,char* 函数名字,__int64 l1,__int64 l2,__int64 l3,__int64 l4,__int64 l5,__int64 l6,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号
char* 组件名 - 组件名(就是组件文件的名字)
char* 函数名字 - 函数名字
 组件绝对路径 - 组件绝对路径
__int64 rcx-l1 - CALL参数第一个参数
__int64 rdx-l2 - CALL参数第二个参数
__int64 r8-l3 - CALL参数第三个参数
__int64 r9-l4 - CALL参数第四个参数
__int64 l5 - CALL参数第五个参数
__int64 l6 - CALL参数第六个参数
bool 是否主线程调用 - 是否主线程调用这个CALL,需要挂接主线程
```
### 返回值
```
查看返回值表
```
### 注意事项
```
自定义模块需要导入包并来实现接口绑定
参考:X86X64自定义插件接口说明
```
### HD插件_CALL - 基础示例
```
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD插件_CALL - 进阶用法
```
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD插件_CALL - 高级应用
```
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD插件_CALLEx
### 描述
```
调用自定义组件中的接口(可传递任意参数类型)
```
### 原型
```
__int64 __stdcall HCModule_CALLEx(__int32 窗口序号,char* 组件名,char* 函数名字,__int64 rcx,__int64 rdx,__int64 r8,__int64 r9,__int64 l5,__int64 l6,char* buffer,int bufferSize,BOOL 是否主线程调用=FALSE);
```
```
__int64 __stdcall HCModule_CALLEx(__int32 窗口序号,char* 组件名,char* 函数名字,__int64 l1,__int64 l2,__int64 l3,__int64 l4,__int64 l5,__int64 l6,char* buffer,int bufferSize,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号
char* 组件名 - 组件名(就是组件文件的名字)
char* 函数名字 - 函数名字
__int64 rcx-l1 - CALL参数第一个参数
__int64 rdx-l2 - CALL参数第二个参数
__int64 r8-l3 - CALL参数第三个参数
__int64 r9-l4 - CALL参数第四个参数
__int64 l5 - CALL参数第五个参数
__int64 l6 - CALL参数第六个参数
char* buffer - 缓冲区地址
int bufferSize - 指定的缓冲区中有效字节大小(最大不可超过1024* 100),如果是字符串不能超过(1024* 100-1),统一规定不能超过(1024* 100-1)
bool 是否主线程调用 - 是否主线程调用这个CALL,需要挂接主线程
```
### 返回值
```
查看返回值表
```
### 注意事项
```
自定义模块需要导入包并来实现接口绑定
注意:传递的buffer字符串在自定义插件接口
typedefHDComRet(__stdcall* HDComFunType)(__int64 retStrAddr,__int64 rcx,__int64 rdx,__int64 r8,__int64 r9,__int64 l5,__int64 l6);
第一个参数retStrAddr作为字符串首地址(char* )能拿到
如:
C++代码演示:
char* info=(char* )retStrAddr;
参考:X86X64自定义插件接口说明
```
### HD插件_CALLEx - 基础示例
```
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD插件_CALLEx - 进阶用法
```
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD插件_CALLEx - 高级应用
```
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
