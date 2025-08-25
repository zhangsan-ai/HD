---
sidebar_position: 31
---

# 🛰️ 后台键鼠(MKB)
## 📌 函数: HD键鼠_绑定
### 描述
```
绑定窗口
```
### 原型
```cpp
__int64 __stdcall HCMKB_Bind(__int32 窗口序号,__int64 hwnd,char* 绑定属性=NULL);
```
### 参数
```
__int32 窗口序号 - 窗口序号
__int64 hwnd - 窗口句柄
char* 绑定属性 - 0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|\"20个值1是选中0未选中为NULL表示全部选中
 例如 - 
 如下 - 属性表
```
### 返回值
```
查看返回值表
```
### 注意事项
```
如果绑定属性\"normal\"或者\"Normal\"表示窗口前台模式！！！！直接用的是sendmessage发消息对于一些普通窗口有效大概率会被拦截这个时候请直接使用全局前台模式,具体看下面解析说明
如果之前后台了,当切换到窗口前台会自动解绑后台
绑定属性表:注意顺序！！
属性值索引
\ndx.mouse.position.lock.api|dx.mouse.position.lock.message1\ndx.mouse.focus.input.api|dx.mouse.focus.input.message2\ndx.mouse.clip.lock.api3\ndx.mouse.input.lock.api4\ndx.mouse.state.api5\ndx.mouse.api6\ndx.mouse.cursor7\ndx.mouse.raw.input8\ndx.mouse.input.lock.api29\ndx.mouse.input.lock.api310\ndx.keypad.input.lock.api11\ndx.keypad.state.api12\ndx.keypad.api13\ndx.keypad.raw.input14\ndx.public.active.api15\ndx.public.active.api216\ndx.public.input.ime17\ndx.public.disable.window.show18\ndx.public.down.cpu19\ndx.public.focus.api20
解析说明:绑定模式窗口序号拦截概率是否调用绑定接口
1.窗口后台模式如:\"1|1|1|1|1|1|1|0|1|1|1|1|1|0|1|0|0|0|0|0|\"窗口序号1-61极低需要
1.1.模拟后台键鼠和输入(高级模拟)坐标是窗口客户区坐标
2.窗口前台模式如:\"normal\"或者\"Normal\"窗口序号1-61对于一些保护窗口很大概率需要
2.1.通过发window消息模拟(普通模拟)坐标是窗口客户区坐标
3.全局前台模式如:无窗口序号为-1极低不需要
3.1会影响鼠标位置坐标是屏幕坐标
```
### HD键鼠_绑定 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_绑定 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_绑定 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_绑定Ex
### 描述
```
绑定窗口
```
### 原型
```cpp
__int64 __stdcall HCMKB_BindEx(__int32 窗口序号,__int64 hwnd,char* 绑定属性=NULL,__int32 bRetMove=1);
```
### 参数
```
__int32 窗口序号 - 窗口序号
__int64 hwnd - 窗口句柄
char* 绑定属性 - 0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|\"20个值1是选中0未选中为NULL表示全部选中
 例如 - \"1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|0|1|\"
__int32 bRetMove - 是否刷新窗口有些窗口需要刷新后台键鼠才正常
 如下 - 属性表
```
### 返回值
```
查看返回值表
```
### 注意事项
```
如果绑定属性\"normal\"或者\"Normal\"表示窗口前台模式！！！！直接用的是sendmessage发消息对于一些普通窗口有效大概率会被拦截这个时候请直接使用全局前台模式,具体看下面解析说明
如果之前后台了,当切换到窗口前台会自动解绑后台
绑定属性表:注意顺序！！
属性值索引
\ndx.mouse.position.lock.api|dx.mouse.position.lock.message1\ndx.mouse.focus.input.api|dx.mouse.focus.input.message2\ndx.mouse.clip.lock.api3\ndx.mouse.input.lock.api4\ndx.mouse.state.api5\ndx.mouse.api6\ndx.mouse.cursor7\ndx.mouse.raw.input8\ndx.mouse.input.lock.api29\ndx.mouse.input.lock.api310\ndx.keypad.input.lock.api11\ndx.keypad.state.api12\ndx.keypad.api13\ndx.keypad.raw.input14\ndx.public.active.api15\ndx.public.active.api216\ndx.public.input.ime17\ndx.public.disable.window.show18\ndx.public.down.cpu19\ndx.public.focus.api20
解析说明:绑定模式窗口序号拦截概率是否调用绑定接口
1.窗口后台模式如:\"1|1|1|1|1|1|1|0|1|1|1|1|1|0|1|0|0|0|0|0|\"窗口序号1-61极低需要
1.1.模拟后台键鼠和输入(高级模拟)坐标是窗口客户区坐标
2.窗口前台模式如:\"normal\"或者\"Normal\"窗口序号1-61对于一些保护窗口很大概率需要
2.1.通过发window消息模拟(普通模拟)坐标是窗口客户区坐标
3.全局前台模式如:无窗口序号为-1极低不需要
3.1会影响鼠标位置坐标是屏幕坐标
```
### HD键鼠_绑定Ex - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_绑定Ex - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_绑定Ex - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_模式绑定Ex
### 描述
```
绑定窗口(扩展接口)
```
### 原型
```cpp
__int64 __stdcall HCMKB_BindModeEx(__int32 窗口序号,__int64 hwnd,char* 绑定属性=NULL,__int32 mode=0,__int32 bRetMove=1);
```
### 参数
```
__int32 窗口序号 - 窗口序号
__int64 hwnd - 窗口句柄
char* 绑定属性 - 0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|\"20个值1是选中0未选中为NULL表示全部选中
 例如 - \"1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|0|1|\"
__int32 mode - 0通用模式效果最好1(0模式不行可以试一试这个1)23后续会进一步测试更多的模式
__int32 bRetMove - 是否刷新窗口有些窗口需要刷新后台键鼠才正常
 解决方案 - 
char* 1.遇到键鼠有时候挂着挂着就失效请换成-------------------------绑定属性 - \"1|0|0|1|1|1|1|0|0|0|1|1|1|0|0|0|0|0|0|0|\"+mode
 如下 - 属性表
```
### 返回值
```
查看返回值表
```
### 注意事项
```
如果绑定属性\"normal\"或者\"Normal\"表示窗口前台模式！！！！直接用的是sendmessage发消息对于一些普通窗口有效大概率会被拦截这个时候请直接使用全局前台模式,具体看下面解析说明
如果之前后台了,当切换到窗口前台会自动解绑后台
绑定属性表:注意顺序！！
属性值索引
\ndx.mouse.position.lock.api|dx.mouse.position.lock.message1\ndx.mouse.focus.input.api|dx.mouse.focus.input.message2\ndx.mouse.clip.lock.api3\ndx.mouse.input.lock.api4\ndx.mouse.state.api5\ndx.mouse.api6\ndx.mouse.cursor7\ndx.mouse.raw.input8\ndx.mouse.input.lock.api29\ndx.mouse.input.lock.api310\ndx.keypad.input.lock.api11\ndx.keypad.state.api12\ndx.keypad.api13\ndx.keypad.raw.input14\ndx.public.active.api15\ndx.public.active.api216\ndx.public.input.ime17\ndx.public.disable.window.show18\ndx.public.down.cpu19\ndx.public.focus.api20
解析说明:绑定模式窗口序号拦截概率是否调用绑定接口
1.窗口后台模式如:\"1|1|1|1|1|1|1|0|1|1|1|1|1|0|1|0|0|0|0|0|\"窗口序号1-61极低需要
1.1.模拟后台键鼠和输入(高级模拟)坐标是窗口客户区坐标
2.窗口前台模式如:\"normal\"或者\"Normal\"窗口序号1-61对于一些保护窗口很大概率需要
2.1.通过发window消息模拟(普通模拟)坐标是窗口客户区坐标
3.全局前台模式如:无窗口序号为-1极低不需要
3.1会影响鼠标位置坐标是屏幕坐标
```
### HD键鼠_模式绑定Ex - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_模式绑定Ex - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_模式绑定Ex - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_切换绑定
### 描述
```
切换绑定到所属子窗口的句柄上
```
### 原型
```cpp
__int64 __stdcall HCMKB_SwitchBind(__int32 窗口序号,__int64 hwnd,char* 绑定属性=NULL);
```
### 参数
```
__int32 窗口序号 - 窗口序号
__int64 hwnd - 窗口句柄
char* 绑定属性 - 0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|\"20个值1是选中0未选中为NULL表示全部选中
 例如 - \"1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|0|1|\"
 如下 - 属性表
```
### 返回值
```
查看返回值表
```
### 注意事项
```
如果绑定属性\"normal\"或者\"Normal\"表示窗口前台模式！！！！直接用的是sendmessage发消息对于一些普通窗口有效大概率会被拦截这个时候请直接使用全局前台模式,具体看下面解析说明
如果之前后台了,当切换到窗口前台会自动解绑后台
绑定属性表:注意顺序！！
属性值索引
\ndx.mouse.position.lock.api|dx.mouse.position.lock.message1\ndx.mouse.focus.input.api|dx.mouse.focus.input.message2\ndx.mouse.clip.lock.api3\ndx.mouse.input.lock.api4\ndx.mouse.state.api5\ndx.mouse.api6\ndx.mouse.cursor7\ndx.mouse.raw.input8\ndx.mouse.input.lock.api29\ndx.mouse.input.lock.api310\ndx.keypad.input.lock.api11\ndx.keypad.state.api12\ndx.keypad.api13\ndx.keypad.raw.input14\ndx.public.active.api15\ndx.public.active.api216\ndx.public.input.ime17\ndx.public.disable.window.show18\ndx.public.down.cpu19\ndx.public.focus.api20
解析说明:绑定模式窗口序号拦截概率是否调用绑定接口
1.窗口后台模式如:\"1|1|1|1|1|1|1|0|1|1|1|1|1|0|1|0|0|0|0|0|\"窗口序号1-61极低需要
1.1.模拟后台键鼠和输入(高级模拟)坐标是窗口客户区坐标
2.窗口前台模式如:\"normal\"或者\"Normal\"窗口序号1-61对于一些保护窗口很大概率需要
2.1.通过发window消息模拟(普通模拟)坐标是窗口客户区坐标
3.全局前台模式如:无窗口序号为-1极低不需要
3.1会影响鼠标位置坐标是屏幕坐标
```
### HD键鼠_切换绑定 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_切换绑定 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_切换绑定 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_切换绑定Ex
### 描述
```
切换绑定到所属子窗口的句柄上
```
### 原型
```cpp
__int64 __stdcall HCMKB_SwitchBindEx(__int32 窗口序号,__int64 hwnd,char* 绑定属性=NULL,__int32 bRetMove=1);
```
### 参数
```
__int32 窗口序号 - 窗口序号
__int64 hwnd - 窗口句柄
char* 绑定属性 - 0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|\"20个值1是选中0未选中为NULL表示全部选中
 例如 - \"1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|0|1|\"
__int32 bRetMove - 是否刷新窗口有些窗口需要刷新后台键鼠才正常
 如下 - 属性表
```
### 返回值
```
查看返回值表
```
### 注意事项
```
如果绑定属性\"normal\"或者\"Normal\"表示窗口前台模式！！！！直接用的是sendmessage发消息对于一些普通窗口有效大概率会被拦截这个时候请直接使用全局前台模式,具体看下面解析说明
如果之前后台了,当切换到窗口前台会自动解绑后台
绑定属性表:注意顺序！！
属性值索引
\ndx.mouse.position.lock.api|dx.mouse.position.lock.message1\ndx.mouse.focus.input.api|dx.mouse.focus.input.message2\ndx.mouse.clip.lock.api3\ndx.mouse.input.lock.api4\ndx.mouse.state.api5\ndx.mouse.api6\ndx.mouse.cursor7\ndx.mouse.raw.input8\ndx.mouse.input.lock.api29\ndx.mouse.input.lock.api310\ndx.keypad.input.lock.api11\ndx.keypad.state.api12\ndx.keypad.api13\ndx.keypad.raw.input14\ndx.public.active.api15\ndx.public.active.api216\ndx.public.input.ime17\ndx.public.disable.window.show18\ndx.public.down.cpu19\ndx.public.focus.api20
解析说明:绑定模式窗口序号拦截概率是否调用绑定接口
1.窗口后台模式如:\"1|1|1|1|1|1|1|0|1|1|1|1|1|0|1|0|0|0|0|0|\"窗口序号1-61极低需要
1.1.模拟后台键鼠和输入(高级模拟)坐标是窗口客户区坐标
2.窗口前台模式如:\"normal\"或者\"Normal\"窗口序号1-61对于一些保护窗口很大概率需要
2.1.通过发window消息模拟(普通模拟)坐标是窗口客户区坐标
3.全局前台模式如:无窗口序号为-1极低不需要
3.1会影响鼠标位置坐标是屏幕坐标
```
### HD键鼠_切换绑定Ex - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_切换绑定Ex - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_切换绑定Ex - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_切换模式绑定Ex
### 描述
```
切换绑定窗口(扩展接口)
```
### 原型
```cpp
__int64 __stdcall HCMKB_SwitchBindModeEx(__int32 窗口序号,__int64 hwnd,char* 绑定属性=NULL,__int32 mode=0,__int32 bRetMove=1);
```
### 参数
```
__int32 窗口序号 - 窗口序号
__int64 hwnd - 窗口句柄
char* 绑定属性 - 0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|\"20个值1是选中0未选中为NULL表示全部选中
 例如 - \"1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|1|0|1|\"
__int32 mode - 0通用模式效果最好1(0模式不行可以试一试这个1)23后续会进一步测试更多的模式
__int32 bRetMove - 是否刷新窗口有些窗口需要刷新后台键鼠才正常
 解决方案 - 
char* 1.遇到键鼠有时候挂着挂着就失效请换成\n绑定属性 - \"1|0|0|1|1|1|1|0|0|0|1|1|1|0|0|0|0|0|0|0|\"+mode
 如下 - 属性表
```
### 返回值
```
查看返回值表
```
### 注意事项
```
如果绑定属性\"normal\"或者\"Normal\"表示窗口前台模式！！！！直接用的是sendmessage发消息对于一些普通窗口有效大概率会被拦截这个时候请直接使用全局前台模式,具体看下面解析说明
如果之前后台了,当切换到窗口前台会自动解绑后台
绑定属性表:注意顺序！！
属性值索引
\ndx.mouse.position.lock.api|dx.mouse.position.lock.message1\ndx.mouse.focus.input.api|dx.mouse.focus.input.message2\ndx.mouse.clip.lock.api3\ndx.mouse.input.lock.api4\ndx.mouse.state.api5\ndx.mouse.api6\ndx.mouse.cursor7\ndx.mouse.raw.input8\ndx.mouse.input.lock.api29\ndx.mouse.input.lock.api310\ndx.keypad.input.lock.api11\ndx.keypad.state.api12\ndx.keypad.api13\ndx.keypad.raw.input14\ndx.public.active.api15\ndx.public.active.api216\ndx.public.input.ime17\ndx.public.disable.window.show18\ndx.public.down.cpu19\ndx.public.focus.api20
解析说明:绑定模式窗口序号拦截概率是否调用绑定接口
1.窗口后台模式如:\"1|1|1|1|1|1|1|0|1|1|1|1|1|0|1|0|0|0|0|0|\"窗口序号1-61极低需要
1.1.模拟后台键鼠和输入(高级模拟)坐标是窗口客户区坐标
2.窗口前台模式如:\"normal\"或者\"Normal\"窗口序号1-61对于一些保护窗口很大概率需要
2.1.通过发window消息模拟(普通模拟)坐标是窗口客户区坐标
3.全局前台模式如:无窗口序号为-1极低不需要
3.1会影响鼠标位置坐标是屏幕坐标
```
### HD键鼠_切换模式绑定Ex - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_切换模式绑定Ex - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_切换模式绑定Ex - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_暂停绑定
### 描述
```
暂停/恢复后台绑定
```
### 原型
```cpp
__int64 __stdcall HCMKB_PauseBind(__int32 窗口序号,__int32 bPause=TRUE,__int32 bRetMove=1);
```
### 参数
```
__int32 窗口序号 - 窗口序号
 bPasue - 是否暂停
__int32 bRetMove - 是否刷新窗口有些窗口需要刷新后台键鼠才正常
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HD键鼠_暂停绑定 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_暂停绑定 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_暂停绑定 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_解绑
### 描述
```
解绑窗口
```
### 原型
```cpp
__int64 __stdcall HCMKB_UnBind(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HD键鼠_解绑 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_解绑 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_解绑 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_右键双击
### 描述
```
鼠标右键双击
```
### 原型
```cpp
__int64 __stdcall HCMKB_RightDoubleClick(__int32 窗口序号,__int32 延时毫秒=50,__int32 窗口状态=-1);
```
### 参数
```
__int32 窗口序号 - 窗口序号特别说明
__int32 延时毫秒 - 延时毫秒（默认50毫秒）
__int32 窗口状态 - -1/0不设置其他值为操作前窗口设置(值)参考
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HD键鼠_右键双击 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_右键双击 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_右键双击 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCMKB_KeyPress(A/W)
### 描述
```
连续按键输入字符串(连续单个按键)
```
### 原型
```cpp
__int64 __stdcall HCMKB_KeyPressA(__int32 窗口序号,char* 文本,__int32 延时毫秒=20,__int32 窗口状态=-1);__int64 __stdcall HCMKB_KeyPressW(__int32 窗口序号,wchar_t* 文本,__int32 延时毫秒=20,__int32 窗口状态=-1);
```
### 参数
```
__int32 窗口序号 - 窗口序号
char* 文本 - 文本(Ascii/Unicode)
__int32 延时毫秒 - 延时毫秒
__int32 窗口状态 - -1/0不设置其他值为操作前窗口设置(值)参考
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCMKB_KeyPress(A/W) - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCMKB_KeyPress(A/W) - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCMKB_KeyPress(A/W) - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCMKB_SendString(2)
### 描述
```
发送Ascii字符串
```
### 原型
```cpp
__int64 __stdcall HCMKB_SendString(__int32 窗口序号,char* 文本A,__int32 延时毫秒=20,__int32 窗口状态=-1);__int64 __stdcall HCMKB_SendString2(__int32 窗口序号,char* 文本A,__int32 延时毫秒=20,__int32 窗口状态=-1);
```
### 参数
```
__int32 窗口序号 - 窗口序号
char* 文本A - 文本(Ascii)
__int32 延时毫秒 - 延时毫秒
__int32 窗口状态 - -1/0不设置其他值为操作前窗口设置(值)参考
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCMKB_SendString(2) - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCMKB_SendString(2) - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCMKB_SendString(2) - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_剪切板发送随机文本
### 描述
```
发送剪切板字符串内容到窗口
```
### 原型
```cpp
__int64 __stdcall HCMKB_SendPasteEx(__int32 窗口序号,void* 发送字节缓冲区,__int32 发送字节大小,__int32 文本类型,__int32 bSend=0,__int32 mis=20,__int32 窗口状态=-1);
```
### 参数
```
__int32 窗口序号 - 窗口序号
void 发送字节缓冲区 - 发送字节缓冲区(字节数据/字符串数据)
__int32 发送字节大小 - 发送字节缓冲区的字节大小
__int32 文本类型 - Ascii(1)Unicode(2)
__int32 bSend - 是否消息发送的方式传递文本,如果为假表示粘贴到文本框
__int32 mis - 延时毫秒
__int32 窗口状态 - -1/0不设置其他值为操作前窗口设置(值)参考
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HD键鼠_剪切板发送随机文本 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_剪切板发送随机文本 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_剪切板发送随机文本 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_设置剪切板文本
### 描述
```
发送随机名字,从2个文本(hf.txt和he.txt)中各获取一个字
```
### 原型
```cpp
__int64 __stdcall HCMKB_SendRoundNamePaste(__int32 窗口序号,__int32 bSend=0,__int32 mis=20,__int32 窗口状态=-1);
```
### 参数
```
__int32 窗口序号 - 窗口序号
__int32 bSend - 是否消息发送的方式传递文本,如果为假表示粘贴到文本框
__int32 mis - 延时毫秒
__int32 窗口状态 - -1/0不设置其他值为操作前窗口设置(值)参考
```
### 返回值
```
查看返回值表
```
### 注意事项
```
hf.txt和he.txt放在程序(.exe)同目录下,文件编码为utf-8随机获取一个姓和一个名组成一个词
```
### HD键鼠_设置剪切板文本 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_设置剪切板文本 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_设置剪切板文本 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_获取剪切板字符串
### 描述
```
设置剪切板字符串
```
### 原型
```cpp
__int64 __stdcall HCMKB_SetClipboard(void* 发送字节缓冲区,__int32 发送字节大小,__int32 文本类型);
```
### 参数
```
void 发送字节缓冲区 - 发送字节缓冲区(字节数据/字符串数据)
__int32 发送字节大小 - 发送字节缓冲区的字节大小
__int32 文本类型 - Ascii(1)Unicode(2)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
该接口无序窗口序号
```
### HD键鼠_获取剪切板字符串 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_获取剪切板字符串 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_获取剪切板字符串 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_句柄发送文本
### 描述
```
获取剪切板字符串
```
### 原型
```cpp
__int64 __stdcall HCMKB_GetClipboard(__int32 文本类型);
```
### 参数
```
__int32 文本类型 - Ascii(1)Unicode(2)
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HD键鼠_句柄发送文本 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_句柄发送文本 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_句柄发送文本 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_句柄发送按键按下
### 描述
```
发送Ascii字符串,部分游戏需要激活窗口！（可以不用通讯调用）
```
### 原型
```cpp
__int64 __stdcall HCMKB_SendStringF(__int64 hwnd,char* 文本A,__int32 延时毫秒=20,__int32 窗口状态=-1);
```
### 参数
```
__int64 hwnd - hwnd窗口句柄
char* 文本A - 文本(Ascii)
__int32 延时毫秒 - 延时毫秒
__int32 窗口状态 - -1/0不设置其他值为操作前窗口设置(值)参考
```
### 返回值
```
查看返回值表
```
### 注意事项
```
注意这个属于类似前台但不是存前台,有些游戏需要激活游戏才能输入成功！！！！
```
### HD键鼠_句柄发送按键按下 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_句柄发送按键按下 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_句柄发送按键按下 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_句柄发送按键弹起
### 描述
```
按下发送键码到指定窗口（可以不用通讯调用）
```
### 原型
```cpp
__int64 __stdcall HCMKB_SendKeyDownF(__int32 窗口序号,__int64 hwnd,__int32 虚拟键码,__int32 窗口状态=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(不需要通讯也可以调用,指定一个大于0的序号就行或者任意一个)
__int64 hwnd - hwnd窗口句柄(指定子窗口的窗口句柄,可以指定非绑定窗口的子窗口)
__int32 虚拟键码 - 虚拟键码
__int32 窗口状态 - -1/0不设置其他值为操作前窗口设置(值)参考
```
### 返回值
```
查看返回值表
```
### 注意事项
```
注意这个属于类似前台但不是存前台,有些游戏需要激活游戏才能输入成功！！！！
```
### HD键鼠_句柄发送按键弹起 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_句柄发送按键弹起 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_句柄发送按键弹起 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_句柄发送按键
### 描述
```
弹起发送键码到指定窗口（可以不用通讯调用）
```
### 原型
```cpp
__int64 __stdcall HCMKB_SendKeyUpF(__int32 窗口序号,__int64 hwnd,__int32 虚拟键码,__int32 窗口状态=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(不需要通讯也可以调用,指定一个大于0的序号就行或者任意一个)
__int64 hwnd - hwnd窗口句柄(指定子窗口的窗口句柄,可以指定非绑定窗口的子窗口)
__int32 虚拟键码 - 虚拟键码
__int32 窗口状态 - -1/0不设置其他值为操作前窗口设置(值)参考
```
### 返回值
```
查看返回值表
```
### 注意事项
```
注意这个属于类似前台但不是存前台,有些游戏需要激活游戏才能输入成功！！！！
```
### HD键鼠_句柄发送按键 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_句柄发送按键 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_句柄发送按键 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_句柄发送清空文本
### 描述
```
按下并弹起发送键码到指定窗口（可以不用通讯调用）
```
### 原型
```cpp
__int64 __stdcall HCMKB_SendKeyPressF(__int32 窗口序号,__int64 hwnd,__int32 虚拟键码,__int32 延时毫秒=20,__int32 窗口状态=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(不需要通讯也可以调用,指定一个大于0的序号就行或者任意一个)
__int64 hwnd - hwnd窗口句柄(指定子窗口的窗口句柄,可以指定非绑定窗口的子窗口)
__int32 虚拟键码 - 虚拟键码
__int32 延时毫秒 - 按下和弹起之间的间隔时间
__int32 窗口状态 - -1/0不设置其他值为操作前窗口设置(值)参考
```
### 返回值
```
查看返回值表
```
### 注意事项
```
注意这个属于类似前台但不是存前台,有些游戏需要激活游戏才能输入成功！！！！
```
### HD键鼠_句柄发送清空文本 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_句柄发送清空文本 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_句柄发送清空文本 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_设置鼠标轨迹参数
### 描述
```
可以清空子窗口的内容（可以不用通讯调用）
```
### 原型
```cpp
__int64 __stdcall HCMKB_SendDeleteTextF(__int32 窗口序号__int64 hwnd,__int32 窗口状态=0);
```
### 参数
```
__int32 窗口序号 - 窗口序号(不需要通讯也可以调用,指定一个大于0的序号就行或者任意一个)
__int32 hwnd - hwnd窗口句柄(指定子窗口的窗口句柄,可以指定非绑定窗口的子窗口)比如
__int32 窗口状态 - -1/0不设置其他值为操作前窗口设置(值)参考
```
### 返回值
```
查看返回值表
```
### 注意事项
```
注意这个属于类似前台但不是存前台,有些游戏需要激活游戏才能输入成功！！！！
```
### HD键鼠_设置鼠标轨迹参数 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_设置鼠标轨迹参数 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_设置鼠标轨迹参数 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HD键鼠_获取鼠标位置
### 描述
```
设置鼠标轨迹参数(当移动鼠标开启轨迹生效)
```
### 原型
```cpp
__int64 __stdcall HCMKB_SetRealMouse(__int32 步长=30,__int32 步数=100,__int32 每步延迟=20,BOOL 开启调试=FALSE);
```
### 参数
```
__int32 步长 - 针对直线轨迹/直线波动轨迹有效
__int32 步数 - 针对曲线随机轨迹有效
__int32 每步延迟 - 中间点每个点发送的频率(毫秒)
bool 开启调试 - 真为开启,只有在调试版本才会触发,会弹窗实时显示轨迹坐标点
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HD键鼠_获取鼠标位置 - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_获取鼠标位置 - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HD键鼠_获取鼠标位置 - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
## 📌 函数: HCMKB_GetMousePos
### 描述
```
获取后台/前台鼠标位置
```
### 原型
```cpp
__int64 __stdcall HCMKB_GetMousePos(__int32 窗口序号);
```
### 参数
```
__int32 窗口序号 - 窗口序号特别说明
```
### 返回值
```
查看返回值表
返回值大于等于0:表示XY组成的8字节低4字节为X高4字节为Y
```
### 注意事项
```
无
```
### HCMKB_GetMousePos - 基础示例
```python
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCMKB_GetMousePos - 进阶用法
```python
# Python 示例2
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```
### HCMKB_GetMousePos - 高级应用
```python
# Python 示例3 高级用法
# Python示例代码
# 这里可以放置与说明内容相关的代码示例
代码内容
```

---
