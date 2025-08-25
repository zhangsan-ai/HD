---
sidebar_position: 12
---

# 🛰️ AddressHOOK
## 📌 函数: HDHOOK_挂钩
### 描述
```
任意HOOK(内置插件)X86X64
```
### 原型
```cpp
__int64 HDHK_Hook(__int32 窗口序号,__int64 hook地址,__int32 破坏字节,__int64 回调地址,__int64 附加参数,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int64 hook地址 - 当前HOOK的目标地址(参考适合的HOOK地址X86HOOK地址规则X64HOOK地址规则)
__int32 破坏字节数 - 涉及到的汇编字节数
__int64 回调地址 - 遵循下面回调函数类型
__int64 附加参数 - 自定义参数,此参数会传递给回调函数
bool 是否主线程调用 - 需要开启才开启,一般默认就行
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
回调写法:
=============
X86X64:typedef__int64 (__stdcall* HandleCallBackFunType)(__int32 窗口序号,__int32 插件序号,__int64 raxOreax,__int64 rbxOrebx,__int64 rcxOrecx,__int64 rdxOredx,__int64 rbpOrebp,__int64 rspOresp,__int64 rsiOresi,__int64 rdiOredi,__int64 r8,__int64 r9,__int64 r10,__int64 r11,__int64 r12,__int64 r13,__int64 r14,__int64 r15,__int64 lparam);
参数解析:
窗口序号:对应的窗口序号
插件序号:内部自动传递
raxOreaxrbxOrebxrcxOrecxrdxOredxrbpOrebprspOresprsiOresirdiOredi:分别对应X86X64的8个寄存器
r8r9r10r11r12r13r14r15:分别对应X64的8个寄存器
lparam:是HDHK_Hook的第五个参数附加参数
备注:
返回值:
0【忽视被破坏的汇编语句,直接跳到下一句汇编地址(HOOK地址+破坏字节)】
1【走原有流程】
2【需要修改值】+【忽视被破坏的汇编语句,直接跳到下一句汇编地址(HOOK地址+破坏字节)】
3【需要修改值】+【走原有流程】
备注:调用约定是__stdcall
X86X64通用调用案例:
__int32 __stdcall HandleHookCallBackFun(__int32 窗口序号,__int32 插件序号,__int64 raxOreax,__int64 rbxOrebx,__int64 rcxOrecx,__int64 rdxOredx,__int64 rbpOrebp,__int64 rspOresp,__int64 rsiOresi,__int64 rdiOredi,__int64 r8,__int64 r9,__int64 r10,__int64 r11,__int64 r12,__int64 r13,__int64 r14,__int64 r15,__int64 lparam){
HDbgPrint f_HOOK(\"触发HOOK回调->窗口序号:%d插件序号:%draxOreax:%llXrbxOrebx:%llXrcxOrecx:%llXrdxOredx:%llXrbpOrebp::%llXrspOresp:%llXrsiOresi:%llXrdiOredi:%llXr8:%llXr9:%llXr10:%llXr11:%llXr12:%llXr13:%llXr14:%llXr15:%llXlparam:%d\",窗口序号,插件序号,raxOreax,rbxOrebx,rcxOrecx,rdxOredx,rbpOrebp,rspOresp,rsiOresi,rdiOredi,r8,r9,r10,r11,r12,r13,r14,r15,lparam);
\n....中间执行自己的逻辑
\n....可以用驱动读写
\n如果需要修改寄存器值就调用HDHK_SetProcessHookCallBackLparam设置__int32 mark=1;autoret=HDHK_SetProcessHookCallBackLparam(窗口序号,插件序号,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,mark);HDbgPrint f_HOOK(\"ret:%lld\",ret);
\n返回值:0忽视HOOK语句直接跳到原来1走原有流程2需要修改值+直接跳到原来3需要修改值+走原有流程return3;}
回调内修改写法请转至》》》》》修改回调返回方法(X86X64)《《《《《《
```
### HDHOOK_挂钩 - 基础示例
```e-lang
.版本 2

.子程序 测试暂停API拦截, 长整数型, 公开
    .局部变量 窗口序号, 整数型
    .局部变量 结果, 长整数型
    
    窗口序号 ＝ 1
    
    ' 暂停send API拦截
    结果 ＝ HDHOOK_暂停拦截API (窗口序号, "ws2_32.dll", "send", 假)
    .如果 (结果 ＝ 1)
        调试输出 ("Send API拦截已暂停")
    .否则
        调试输出 ("暂停Send API拦截失败")
    .如果结束
    
    返回 (结果)
```
### HDHOOK_挂钩 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HDHOOK_挂钩 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HDHOOK_挂钩Ex
### 描述
```
任意HOOK(内置插件)X64(该接口针对X64有效)
```
### 原型
```cpp
__int64 HDHK_HookEx(__int32 窗口序号,char* 所属模块名字,__int64 hook地址,__int32 破坏字节,__int64 回调地址,__int64 附加参数,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 所属模块名字 - 当前HOOK地址所属那个模块当前HOOK地址所属那个模块可以不指定为0就行但是建议指定
__int64 hook地址 - 当前HOOK的目标地址(参考适合的HOOK地址X86HOOK地址规则X64HOOK地址规则)
__int32 破坏字节数 - 涉及到的汇编字节数
__int64 回调地址 - 遵循下面回调函数类型
__int64 附加参数 - 自定义参数,此参数会传递给回调函数
bool 是否主线程调用 - 需要开启才开启,一般默认就行
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
回调写法:
=============
X86X64:typedef__int64 (__stdcall* HandleCallBackFunType)(__int32 窗口序号,__int32 插件序号,__int64 raxOreax,__int64 rbxOrebx,__int64 rcxOrecx,__int64 rdxOredx,__int64 rbpOrebp,__int64 rspOresp,__int64 rsiOresi,__int64 rdiOredi,__int64 r8,__int64 r9,__int64 r10,__int64 r11,__int64 r12,__int64 r13,__int64 r14,__int64 r15,__int64 lparam);
参数解析:
窗口序号:对应的窗口序号
插件序号:内部自动传递
raxOreaxrbxOrebxrcxOrecxrdxOredxrbpOrebprspOresprsiOresirdiOredi:分别对应X86X64的8个寄存器
r8r9r10r11r12r13r14r15:分别对应X64的8个寄存器
lparam:是HDHK_Hook的第五个参数附加参数
备注:
返回值:
0【忽视被破坏的汇编语句,直接跳到下一句汇编地址(HOOK地址+破坏字节)】
1【走原有流程】
2【需要修改值】+【忽视被破坏的汇编语句,直接跳到下一句汇编地址(HOOK地址+破坏字节)】
3【需要修改值】+【走原有流程】
备注:调用约定是__stdcall
X86X64通用调用案例:
__int32 __stdcall HandleHookCallBackFun(__int32 窗口序号,__int32 插件序号,__int64 raxOreax,__int64 rbxOrebx,__int64 rcxOrecx,__int64 rdxOredx,__int64 rbpOrebp,__int64 rspOresp,__int64 rsiOresi,__int64 rdiOredi,__int64 r8,__int64 r9,__int64 r10,__int64 r11,__int64 r12,__int64 r13,__int64 r14,__int64 r15,__int64 lparam){
HDbgPrint f_HOOK(\"触发HOOK回调->窗口序号:%d插件序号:%draxOreax:%llXrbxOrebx:%llXrcxOrecx:%llXrdxOredx:%llXrbpOrebp::%llXrspOresp:%llXrsiOresi:%llXrdiOredi:%llXr8:%llXr9:%llXr10:%llXr11:%llXr12:%llXr13:%llXr14:%llXr15:%llXlparam:%d\",窗口序号,插件序号,raxOreax,rbxOrebx,rcxOrecx,rdxOredx,rbpOrebp,rspOresp,rsiOresi,rdiOredi,r8,r9,r10,r11,r12,r13,r14,r15,lparam);
\n....中间执行自己的逻辑
\n....可以用驱动读写
\n如果需要修改寄存器值就调用HDHK_SetProcessHookCallBackLparam设置__int32 mark=1;autoret=HDHK_SetProcessHookCallBackLparam(窗口序号,插件序号,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,mark);HDbgPrint f_HOOK(\"ret:%lld\",ret);
\n返回值:0忽视HOOK语句直接跳到原来1走原有流程2需要修改值+直接跳到原来3需要修改值+走原有流程return3;}
回调内修改写法请转至》》》》》修改回调返回方法(X86X64)《《《《《《
```
### HDHOOK_挂钩Ex - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HDHOOK_挂钩Ex - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HDHOOK_挂钩Exx
### 描述
```
任意HOOK(内置插件)X64(该接口针对X64有效)
```
### 原型
```cpp
__int64 HDHK_HookExx(__int32 窗口序号,char* 所属模块名字,__int64 模块首地址,__int32 模块大小,__int64 hook地址,__int32 破坏字节,__int64 回调地址,__int64 附加参数,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
char* 所属模块名字 - 当前HOOK地址所属那个模块必须指定
__int64 模块首地址 - HOOK地址所属模块的模块基地址
__int32 模块大小 - HOOK地址所属模块的模块大小字节
__int64 hook地址 - 当前HOOK的目标地址(参考适合的HOOK地址X86HOOK地址规则X64HOOK地址规则)
__int32 破坏字节数 - 涉及到的汇编字节数
__int64 回调地址 - 遵循下面回调函数类型
__int64 附加参数 - 自定义参数,此参数会传递给回调函数
bool 是否主线程调用 - 需要开启才开启,一般默认就行
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
回调写法:
=============
X86X64:typedef__int64 (__stdcall* HandleCallBackFunType)(__int32 窗口序号,__int32 插件序号,__int64 raxOreax,__int64 rbxOrebx,__int64 rcxOrecx,__int64 rdxOredx,__int64 rbpOrebp,__int64 rspOresp,__int64 rsiOresi,__int64 rdiOredi,__int64 r8,__int64 r9,__int64 r10,__int64 r11,__int64 r12,__int64 r13,__int64 r14,__int64 r15,__int64 lparam);
参数解析:
窗口序号:对应的窗口序号
插件序号:内部自动传递
raxOreaxrbxOrebxrcxOrecxrdxOredxrbpOrebprspOresprsiOresirdiOredi:分别对应X86X64的8个寄存器
r8r9r10r11r12r13r14r15:分别对应X64的8个寄存器
lparam:是HDHK_Hook的第五个参数附加参数
备注:
返回值:
0【忽视被破坏的汇编语句,直接跳到下一句汇编地址(HOOK地址+破坏字节)】
1【走原有流程】
2【需要修改值】+【忽视被破坏的汇编语句,直接跳到下一句汇编地址(HOOK地址+破坏字节)】
3【需要修改值】+【走原有流程】
备注:调用约定是__stdcall
X86X64通用调用案例:
__int32 __stdcall HandleHookCallBackFun(__int32 窗口序号,__int32 插件序号,__int64 raxOreax,__int64 rbxOrebx,__int64 rcxOrecx,__int64 rdxOredx,__int64 rbpOrebp,__int64 rspOresp,__int64 rsiOresi,__int64 rdiOredi,__int64 r8,__int64 r9,__int64 r10,__int64 r11,__int64 r12,__int64 r13,__int64 r14,__int64 r15,__int64 lparam){
HDbgPrint f_HOOK(\"触发HOOK回调->窗口序号:%d插件序号:%draxOreax:%llXrbxOrebx:%llXrcxOrecx:%llXrdxOredx:%llXrbpOrebp::%llXrspOresp:%llXrsiOresi:%llXrdiOredi:%llXr8:%llXr9:%llXr10:%llXr11:%llXr12:%llXr13:%llXr14:%llXr15:%llXlparam:%d\",窗口序号,插件序号,raxOreax,rbxOrebx,rcxOrecx,rdxOredx,rbpOrebp,rspOresp,rsiOresi,rdiOredi,r8,r9,r10,r11,r12,r13,r14,r15,lparam);
\n....中间执行自己的逻辑
\n....可以用驱动读写
\n如果需要修改寄存器值就调用HDHK_SetProcessHookCallBackLparam设置__int32 mark=1;autoret=HDHK_SetProcessHookCallBackLparam(窗口序号,插件序号,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,mark);HDbgPrint f_HOOK(\"ret:%lld\",ret);
\n返回值:0忽视HOOK语句直接跳到原来1走原有流程2需要修改值+直接跳到原来3需要修改值+走原有流程return3;}
回调内修改写法请转至》》》》》修改回调返回方法(X86X64)《《《《《《
HDHK_HookExxx
函数简介:
任意HOOK(内置插件)X64(该接口针对X64有效)
函数原型:__int64 HDHK_HookExxx(__int32 窗口序号,__int64 hook地址,char* 所属模块名字,__int64 jmp13空白地址,__int64 保留汇编地址,__int32 破坏字节,__int64 回调地址,__int64 附加参数,BOOL 是否主线程调用=FALSE);
参数定义:
窗口序号:窗口序号(从1开始)
所属模块名字:当前HOOK地址所属那个模块可以不指定为0就行
jmp13空白地址:在当前模块的代码地址找一个空白空间大小为13字节用于存储jmp一些指令
保留汇编地址:用来存储破坏字节数量+5字节大小的空白空间的首地址一般这个地址位于当前所属模块代码空白空间
hook地址:当前HOOK的目标地址(参考适合的HOOK地址X86HOOK地址规则X64HOOK地址规则)
破坏字节数:涉及到的汇编字节数
回调地址:遵循下面回调函数类型
附加参数:自定义参数,此参数会传递给回调函数
是否主线程调用:需要开启才开启,一般默认就行
返回值:
查看返回值表
备注:
无
回调写法:
=============
X86X64:typedef__int64 (__stdcall* HandleCallBackFunType)(__int32 窗口序号,__int32 插件序号,__int64 raxOreax,__int64 rbxOrebx,__int64 rcxOrecx,__int64 rdxOredx,__int64 rbpOrebp,__int64 rspOresp,__int64 rsiOresi,__int64 rdiOredi,__int64 r8,__int64 r9,__int64 r10,__int64 r11,__int64 r12,__int64 r13,__int64 r14,__int64 r15,__int64 lparam);
参数解析:
窗口序号:对应的窗口序号
插件序号:内部自动传递
raxOreaxrbxOrebxrcxOrecxrdxOredxrbpOrebprspOresprsiOresirdiOredi:分别对应X86X64的8个寄存器
r8r9r10r11r12r13r14r15:分别对应X64的8个寄存器
lparam:是HDHK_Hook的第五个参数附加参数
备注:
返回值:
0【忽视被破坏的汇编语句,直接跳到下一句汇编地址(HOOK地址+破坏字节)】
1【走原有流程】
2【需要修改值】+【忽视被破坏的汇编语句,直接跳到下一句汇编地址(HOOK地址+破坏字节)】
3【需要修改值】+【走原有流程】
备注:调用约定是__stdcall
X86X64通用调用案例:
__int32 __stdcall HandleHookCallBackFun(__int32 窗口序号,__int32 插件序号,__int64 raxOreax,__int64 rbxOrebx,__int64 rcxOrecx,__int64 rdxOredx,__int64 rbpOrebp,__int64 rspOresp,__int64 rsiOresi,__int64 rdiOredi,__int64 r8,__int64 r9,__int64 r10,__int64 r11,__int64 r12,__int64 r13,__int64 r14,__int64 r15,__int64 lparam){
HDbgPrint f_HOOK(\"触发HOOK回调->窗口序号:%d插件序号:%draxOreax:%llXrbxOrebx:%llXrcxOrecx:%llXrdxOredx:%llXrbpOrebp::%llXrspOresp:%llXrsiOresi:%llXrdiOredi:%llXr8:%llXr9:%llXr10:%llXr11:%llXr12:%llXr13:%llXr14:%llXr15:%llXlparam:%d\",窗口序号,插件序号,raxOreax,rbxOrebx,rcxOrecx,rdxOredx,rbpOrebp,rspOresp,rsiOresi,rdiOredi,r8,r9,r10,r11,r12,r13,r14,r15,lparam);
\n....中间执行自己的逻辑
\n....可以用驱动读写
\n如果需要修改寄存器值就调用HDHK_SetProcessHookCallBackLparam设置__int32 mark=1;autoret=HDHK_SetProcessHookCallBackLparam(窗口序号,插件序号,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,mark);HDbgPrint f_HOOK(\"ret:%lld\",ret);
\n返回值:0忽视HOOK语句直接跳到原来1走原有流程2需要修改值+直接跳到原来3需要修改值+走原有流程return3;}
回调内修改写法请转至》》》》》修改回调返回方法(X86X64)《《《《《《
```
### HDHOOK_挂钩Exx - 基础示例
```e-lang
.版本 2

.子程序 测试拦截Send, 长整数型, 公开
    .局部变量 窗口序号, 整数型
    .局部变量 结果, 长整数型
    
    窗口序号 ＝ 1
    
    ' 设置send API拦截
    结果 ＝ HDHOOK_设置拦截API_send (窗口序号, &HD_HOOK回调函数_send, 12345, 假)
    .如果 (结果 ＝ 1)
        调试输出 ("Send API拦截设置成功")
    .否则
        调试输出 ("Send API拦截设置失败")
    .如果结束
    
    返回 (结果)

.子程序 HD_HOOK回调函数_send, 整数型, 公开, 不需要修改直接返回0，要修改返回2
    .参数 窗口序号, 整数型
    .参数 插件序号, 整数型
    .参数 rcx, 长整数型, , 套接字
    .参数 rdx, 长整数型, , 缓冲区的指针
    .参数 r8, 长整数型, , 发送的字节数
    .参数 r9, 长整数型, , 标志位
    .参数 rbp, 长整数型
    .参数 rsp, 长整数型
    .参数 rip, 长整数型
    .参数 buffer封包, 整数型
    .参数 bufferMaxSize, 整数型
    .参数 bufferRealSize, 整数型, , 最好用这个参数，发送的真实字节数
    .参数 lparam, 整数型, , HDHOOK_设置拦截API_send里的附加参数
    .局部变量 自定义回调参数, HD_HOOK回调类型
    .局部变量 打坐部分1, 字节集
    .局部变量 打坐部分2, 字节集
    .局部变量 动态验证的字节集, 字节集
    .局部变量 打开NPC部分1, 字节集
    .局部变量 打开NPC部分2, 字节集
    .局部变量 要发送的打开NPC, 字节集
    
    自定义回调参数.封包类型 ＝ 1
    自定义回调参数.套接字 ＝ rcx
    自定义回调参数.封包长度 ＝ bufferRealSize  ' 这里最好用bufferRealSize不用r8
    
    .如果真 (bufferRealSize ≥ 1)
        自定义回调参数.封包内容 ＝ 指针到字节集 (buffer封包, r8)
    .如果真结束
    自定义回调参数.附加参数 ＝ lparam
    
    .如果真 (bufferRealSize ＞ 3000)
        返回 (0)
    .如果真结束
    
    ' 1. 我们可以选择是否打印出来，不修改的话直接返回0就行
    启动线程 (&插入一行列表框, HDHOOK_取自定义回调参数_内存地址 (自定义回调参数), )
    
    ' 2. 我们修改封包，有动态字节我们也能修改封包功能
    ' 示例：把打坐改成打开NPC（天龙八部游戏示例）
    .如果真 (bufferRealSize ＝ 34)
        调试输出 ("接到的封包内容", HD系统_字节集到十六进制文本 (自定义回调参数.封包内容))
        
        ' 天龙打坐封包特征 34字节
        打坐部分1 ＝ HD系统_十六进制文本到字节集 ("99 00 1C 00 00")
        打坐部分2 ＝ HD系统_十六进制文本到字节集 ("00 00 FF FF FF FF 00 00 80 BF 00 00 80 BF")
        
        .如果真 (寻找字节集 (自定义回调参数.封包内容, 打坐部分1, ) ≠ -1)
            .如果真 (寻找字节集 (自定义回调参数.封包内容, 打坐部分2, ) ≠ -1)
                
                动态验证的字节集 ＝ 取字节集中间 (自定义回调参数.封包内容, 6, 1)
                调试输出 ("动态验证的字节集", HD系统_字节集到十六进制文本 (动态验证的字节集))
                
                ' 打开NPC封包，第6个字节为动态验证，我们替换掉
                打开NPC部分1 ＝ HD系统_十六进制文本到字节集 ("40 00 0F 00 00")
                打开NPC部分2 ＝ HD系统_十六进制文本到字节集 ("B6 6C 00 00 FF FF FF FF 04 48 44 38 37 34 00")
                要发送的打开NPC ＝ 打开NPC部分1 ＋ 动态验证的字节集 ＋ 打开NPC部分2
                调试输出 ("要发送的打开NPC", HD系统_字节集到十六进制文本 (要发送的打开NPC))
                
                HD内存_写地址字节流 (窗口序号, buffer封包, 要发送的打开NPC, )  ' 确保插件安装到进程中才能修改
                调试输出 (指针到字节集 (buffer封包, 取字节集长度 (要发送的打开NPC)))
                
                .如果真 (HDHOOK_设置拦截Send返回参数 (窗口序号, 全局_进程位数, rcx, buffer封包, 取字节集长度 (要发送的打开NPC), r9, rbp, rsp, rip, 6) ＝ 1)
                    返回 (2)  ' 返回2表示自己另外再调用send，返回1表示走原来的send流程
                .如果真结束
                
            .如果真结束
        .如果真结束
    .如果真结束
    
    ' 0: 表示不修改并且走原有流程
    返回 (0)
```
### HDHOOK_挂钩Exx - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HDHOOK_挂钩Exx - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HDHOOK_暂停挂钩
### 描述
```
暂停任意HOOK(内置插件)X86X64
```
### 原型
```cpp
__int64 HDHK_PauseHook(__int32 窗口序号,__int64 hook地址,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int64 hook地址 - 当前HOOK的目标地址
bool 是否主线程调用 - 需要开启才开启,一般默认就行
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HDHOOK_暂停挂钩 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HDHOOK_暂停挂钩 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HDHOOK_恢复挂钩
### 描述
```
恢复任意HOOK(内置插件)X86X64
```
### 原型
```cpp
__int64 HDHK_RecoverHook(__int32 窗口序号,__int64 hook地址,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int64 hook地址 - 当前HOOK的目标地址
bool 是否主线程调用 - 需要开启才开启,一般默认就行
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HDHOOK_恢复挂钩 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HDHOOK_恢复挂钩 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
## 📌 函数: HDHOOK_卸载挂钩
### 描述
```
卸载任意HOOK(内置插件)X86X64
```
### 原型
```cpp
__int64 HDHK_UnHook(__int32 窗口序号,__int64 hook地址,BOOL 是否主线程调用=FALSE);
```
### 参数
```
__int32 窗口序号 - 窗口序号(从1开始)
__int64 hook地址 - 当前HOOK的目标地址
bool 是否主线程调用 - 需要开启才开启,一般默认就行
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HDHOOK_卸载挂钩 - 基础示例
```e-lang
.版本 2

.子程序 测试恢复API拦截, 长整数型, 公开
    .局部变量 窗口序号, 整数型
    .局部变量 结果, 长整数型
    
    窗口序号 ＝ 1
    
    ' 恢复send API拦截
    结果 ＝ HDHOOK_恢复拦截API (窗口序号, "ws2_32.dll", "send", 假)
    .如果 (结果 ＝ 1)
        调试输出 ("Send API拦截已恢复")
    .否则
        调试输出 ("恢复Send API拦截失败")
    .如果结束
    
    返回 (结果)
```
### HDHOOK_卸载挂钩 - 进阶用法
```e-lang
.版本 2
.子程序 示例2
    调试输出("示例2")
```
### HDHOOK_卸载挂钩 - 高级应用
```e-lang
.版本 2
.子程序 高级示例
    调试输出("高级示例")
```

---
