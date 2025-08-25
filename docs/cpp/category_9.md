# 🛰️ 多线程状态机
## 📌 函数: HCMT_StartStatus
### 描述
```
开启状态机
```
### 原型
```
__int64 __stdcall HCMT_StartStatus();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.HDMT_InitProcess/HCMT_InitOperate后才能调用配合多线程模块一起使用
2.一般在执行回调或者检查回调调用就行不需要都开启(内部有检测是否开启)
3.支持多线程,但是不建议,执行回调中调用就行了
```
### HCMT_StartStatus - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_StartStatus - 进阶用法
```
// 示例2：HCMT_StartStatus 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_StartStatus - 高级应用
```
// 示例3：HCMT_StartStatus 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCMT_EnableStatus
### 描述
```
全局(全部窗口序号)禁用或者开启状态
```
### 原型
```
__int64 __stdcall HCMT_EnableStatus(__int32 statusType,BOOL bEnable);
```
### 参数
```
__int32 statusType - 自定义的状态值
bool bEnable - 是否有效真
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.HDMT_InitProcess/HCMT_InitOperate后才能调用配合多线程模块一起使用
2.操作的状态值,必须先调用HCMT_AddStatus添加状态,否则无效
3.支持多线程
4.如果当前状态正在执行中,此时调用该接口使其状态被禁止/无效,那么当前状态对应的状态回调中就会立即退出回调或者立即监控到状态被改变了
5.一旦被禁止,就算我们切换到该状态,也无法去执行绑定的状态回调了
```
### HCMT_EnableStatus - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_EnableStatus - 进阶用法
```
// 示例2：HCMT_EnableStatus 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_EnableStatus - 高级应用
```
// 示例3：HCMT_EnableStatus 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCMT_ChangeStatus
### 描述
```
改变状态机状态
```
### 原型
```
__int64 __stdcall HCMT_ChangeStatus(__int32 statusType);
```
### 参数
```
__int32 statusType - 自定义的状态值
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.HDMT_InitProcess/HCMT_InitOperate/HCMT_StartStatus后才能调用配合多线程模块一起使用
2.操作的状态值,必须先调用HCMT_AddStatus添加状态,否则无效
3.支持多线程,一般在检测回调中调用
4.只能改变比之前优先级低的优先级
《《《特别注意:状态值的大小也表示优先级,优先级越高的回调,享有最先执行权限！！！！》》》
如:登录回调>死亡回调>买药回调>限时副本回调>主线回调
优先级大小策略:
1.优先级用户自行定义大小(-1表示没有,不要重复)建议从0开始123...依次递增值越大优先级越高
2.优先级高回调的可以打断或者中断优先级低的回调,当优先级高的回调执行完毕,会继续执行优先级低的回调
2.如果是优先级一样的回调,只有执行完第一个,才能执行第二个.
3.优先级低的回调是不能打断优先级高的回调,此时如果想执行优先级低的回调,那么必须等待优先级高的回调执行完毕后,方可执行优先级低的回调
4.回调内部如果有循环流程,应加入退出循环条件(一般使用HCMT_IsStatus作为退出循环的条件判断或者其他),不要死循环,否则无法实现状态切换
```
### HCMT_ChangeStatus - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_ChangeStatus - 进阶用法
```
// 示例2：HCMT_ChangeStatus 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_ChangeStatus - 高级应用
```
// 示例3：HCMT_ChangeStatus 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCMT_RetraceStatus
### 描述
```
回溯状态
```
### 原型
```
__int64 __stdcall HCMT_RetraceStatus(BOOL bClear=FALSE);
```
### 参数
```
bool bClear - 真表示清除之前的栈缓存同时改变当前状态为-1(空/无状态)bClear
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.HDMT_InitProcess/HCMT_InitOperate/HCMT_StartStatus后才能调用配合多线程模块一起使用
2.操作的状态值,必须先调用HCMT_AddStatus添加状态,否则无效
3.支持多线程,一般在检测回调中调用
4.只能改变比之前优先级低的优先级
《《《特别注意:状态值的大小也表示优先级,优先级越高的回调,享有最先执行权限！！！！》》》
如:登录回调>死亡回调>买药回调>限时副本回调>主线回调
优先级大小策略:
1.优先级用户自行定义大小(-1表示没有,不要重复)建议从0开始123...依次递增值越大优先级越高
2.优先级高回调的可以打断或者中断优先级低的回调,当优先级高的回调执行完毕,会继续执行优先级低的回调
2.如果是优先级一样的回调,只有执行完第一个,才能执行第二个.
3.优先级低的回调是不能打断优先级高的回调,此时如果想执行优先级低的回调,那么必须等待优先级高的回调执行完毕后,方可执行优先级低的回调
4.回调内部如果有循环流程,应加入退出循环条件(一般使用HCMT_IsStatus作为退出循环的条件判断或者其他),不要死循环,否则无法实现状态切换
```
### HCMT_RetraceStatus - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_RetraceStatus - 进阶用法
```
// 示例2：HCMT_RetraceStatus 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_RetraceStatus - 高级应用
```
// 示例3：HCMT_RetraceStatus 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCMT_IsStatus
### 描述
```
当前状态机的状态在回调中是否有效
```
### 原型
```
__int64 __stdcall HCMT_IsStatus();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.HDMT_InitProcess/HCMT_InitOperate/HCMT_StartStatus后才能调用配合多线程模块一起使用
2.用在状态回调中,检索是否是当前状态3.在设置的状态回调函数中循环调用检查当前窗口序号的状态类型是否是当前的映射的回调状态类型4.支持多线程
C++例子:
==========
__int64 __stdcall HMT::登录状态回调(__int32 windowsIndex,__int64 lparam){while(HCMT_IsStatus()){autoret=HCMT_StatusSleep(1000);HDbgPrint f_Command(\"HCMT_StatusSleep:%lld\",ret);HCMT_MsgStepText(windowsIndex,\"正在登录中...\");}return1;}
==========
```
### HCMT_IsStatus - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_IsStatus - 进阶用法
```
// 示例2：HCMT_IsStatus 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_IsStatus - 高级应用
```
// 示例3：HCMT_IsStatus 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCMT_StatusSleep
### 描述
```
状态机延迟函数(自带暂停/结束/恢复/状态机)
```
### 原型
```
__int64 __stdcall HCMT_StatusSleep(int mis);
```
### 参数
```
int mis - 延迟毫秒
```
### 返回值
```
1:正常
2:线程结束
3.线程被暂停过
4.状态机当前状态被改变
其他值:查看返回值表
```
### 注意事项
```
1.HDMT_InitProcess/HCMT_InitOperate/HCMT_StartStatus后才能调用配合多线程模块一起使用2.支持多线程自带暂停/结束/恢复/状态机
3.注意区别于HCMT_Sleep这个接口是没法检索状态机状态的
C++例子:
==========
__int64 __stdcall HMT::登录状态回调(__int32 windowsIndex,__int64 lparam){while(HCMT_IsStatus()){autoret=HCMT_StatusSleep(1000);\n<<<<<<<<-----------------------------这里能及时返回(当我们状态变动的时候)返回值:4表示状态变动HDbgPrint f_Command(\"HCMT_StatusSleep:%lld\",ret);HCMT_MsgStepText(windowsIndex,\"正在登录中...\");}return1;}
==========
```
### HCMT_StatusSleep - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_StatusSleep - 进阶用法
```
// 示例2：HCMT_StatusSleep 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_StatusSleep - 高级应用
```
// 示例3：HCMT_StatusSleep 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCMT_GetStatus
### 描述
```
获取状态机状态
```
### 原型
```
__int64 __stdcall HCMT_GetStatus(__int32 windowsIndex);
```
### 参数
```
__int32 windowsIndex - 窗口序号
```
### 返回值
```
查看返回值表
```
### 注意事项
```
1.HDMT_InitProcess/HCMT_InitOperate/HCMT_StartStatus后才能调用配合多线程模块一起使用
2.支持多线程,一般在UI回调中调用,获取状态值并显示到控件上
```
### HCMT_GetStatus - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_GetStatus - 进阶用法
```
// 示例2：HCMT_GetStatus 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_GetStatus - 高级应用
```
// 示例3：HCMT_GetStatus 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCMT_SleepEx
### 描述
```
设延迟函数,自带暂停/结束/恢复检查/状态机状态(可选)(扩展版本)
```
### 原型
```
__int64 __stdcall HCMT_SleepEx(int mis,BOOL bStatus=FALSE);
```
### 参数
```
int mis - 毫秒
bool bStatus - 是否状态机回调,默认为FALSE,如果在状态机回调中调用,请置为真/TURE
```
### 返回值
```
1:正常
2:线程结束
3.线程被暂停过
4.状态改变了
其他值:查看返回值表
```
### 注意事项
```
1.HDMT_InitProcess/HCMT_InitOperate后才能调用
2.仅仅设置的是标志位,不会堵塞线程
3.检查随后触发HCMT_InitOperate设置的3个回调;理论上不能在HCMT_InitOperate设置的3个回调中调用,因为会导致无限调用自己(但是内部做了检测所以不会无限调用,也就是如果当前第一次已经检查到标志位并触发对应的绑定回调了,在回调中又再一次调用HCMT_Sleep,那么这一次的HCMT_Sleep只会正常休眠,并不继续检查了,防止无限调用);
3.其他回调均可以(无影响)
4.如果要内部检测状态机状态需要调用HCMT_StatusSleep
```
### HCMT_SleepEx - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_SleepEx - 进阶用法
```
// 示例2：HCMT_SleepEx 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCMT_SleepEx - 高级应用
```
// 示例3：HCMT_SleepEx 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
