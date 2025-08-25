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
.版本 2

.子程序 测试添加代理IP, 逻辑型, 公开
    .局部变量 代理IP, 文本型
    .局部变量 代理端口, 整数型
    .局部变量 代理账号, 文本型
    .局部变量 代理密码, 文本型
    .局部变量 代理类型, 整数型
    .局部变量 结果, 逻辑型
    
    ' 设置代理服务器信息
    代理IP ＝ "192.168.1.100"
    代理端口 ＝ 8080
    代理账号 ＝ "user1"
    代理密码 ＝ "pass123"
    代理类型 ＝ 0  ' 0=HTTP代理, 1=SOCKS代理
    
    调试输出 ("准备添加代理IP配置")
    调试输出 ("IP地址：", 代理IP)
    调试输出 ("端口：", 代理端口)
    调试输出 ("账号：", 代理账号)
    调试输出 ("类型：", .如果真 (代理类型 ＝ 0, "HTTP代理", "SOCKS代理"))
    
    ' 添加代理IP配置
    结果 ＝ HDIP_有米添加IP (代理IP, 代理端口, 代理账号, 代理密码, 代理类型, 1, "")
    .如果 (结果 ＝ 真)
        调试输出 ("代理IP添加成功")
        调试输出 ("可以开始使用此代理服务器")
    .否则
        调试输出 ("代理IP添加失败")
        调试输出 ("请检查IP地址和认证信息")
    .如果结束
    
    返回 (结果)
```
### HD插件_加载插件 - 进阶用法
```
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HD插件_加载插件 - 高级应用
```
.版本 2
.子程序 高级示例
    调试输出("高级示例")
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
### HD插件_卸载插件 - 进阶用法
```
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HD插件_卸载插件 - 高级应用
```
.版本 2
.子程序 高级示例
    调试输出("高级示例")
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
### HD插件_CALL - 进阶用法
```
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HD插件_CALL - 高级应用
```
.版本 2
.子程序 高级示例
    调试输出("高级示例")
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
### HD插件_CALLEx - 进阶用法
```
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HD插件_CALLEx - 高级应用
```
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
