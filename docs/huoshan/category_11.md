# 🛰️ AddressHOOK
## 📌 函数: HDHOOK.挂钩
### 描述
```
任意HOOK(内置插件)X86X64
```
### 原型
```
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
### HDHOOK.挂钩 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.挂钩 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.挂钩 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDHOOK.挂钩Ex
### 描述
```
任意HOOK(内置插件)X64(该接口针对X64有效)
```
### 原型
```
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
### HDHOOK.挂钩Ex - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.挂钩Ex - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.挂钩Ex - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDHOOK.挂钩Exx
### 描述
```
任意HOOK(内置插件)X64(该接口针对X64有效)
```
### 原型
```
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
### HDHOOK.挂钩Exx - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.挂钩Exx - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.挂钩Exx - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDHOOK.暂停挂钩
### 描述
```
暂停任意HOOK(内置插件)X86X64
```
### 原型
```
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
### HDHOOK.暂停挂钩 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.暂停挂钩 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.暂停挂钩 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDHOOK.恢复挂钩
### 描述
```
恢复任意HOOK(内置插件)X86X64
```
### 原型
```
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
### HDHOOK.恢复挂钩 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.恢复挂钩 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.恢复挂钩 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HDHOOK.卸载挂钩
### 描述
```
卸载任意HOOK(内置插件)X86X64
```
### 原型
```
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
### HDHOOK.卸载挂钩 - 基础示例
```
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.卸载挂钩 - 进阶用法
```
// huoshanpc 示例2
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HDHOOK.卸载挂钩 - 高级应用
```
// huoshanpc 示例3 高级用法
// 火山PC示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
