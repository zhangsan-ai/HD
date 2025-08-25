# 🛰️ 登录验证(Login)
## 📌 函数: HCHD_Login
### 描述
```
HD登录验证接口（强烈建议主线程中调用）
```
### 原型
```
__int64 __stdcall HCHD_Login(char* account,char* password,char* appName,char* appLparam,BOOL bAutoUpdate=FALSE,BOOL bShowMsgBox=FALSE);
```
### 参数
```
char* account - 账号
char* password - 密码
char* appName - 中控进程名字(指定了方便自动更新)
char* appLparam - 打开中控的启动参数(指定了方便自动更新)
bool bAutoUpdate - 是否自动更新
bool bShowMsgBox - 如果需要更新是否弹出消息框提醒
```
### 返回值
```
查看返回值表
大于0表示版本号:当前服务器的版本号不是当前插件的版本号
```
### 注意事项
```
1.验证接口,所有接口需要通过验证才能调用
2.如果自己写中控可以不用打开自动更新
```
### HCHD_Login - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_Login - 进阶用法
```
// 示例2：HCHD_Login 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_Login - 高级应用
```
// 示例3：HCHD_Login 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_GetLastLoginFYI
### 描述
```
最近登录时候的点数
```
### 原型
```
__int64 __stdcall HCHD_GetLastLoginFYI();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_GetLastLoginFYI - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetLastLoginFYI - 进阶用法
```
// 示例2：HCHD_GetLastLoginFYI 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetLastLoginFYI - 高级应用
```
// 示例3：HCHD_GetLastLoginFYI 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_GetExpiredTimeStamp
### 描述
```
获取最近登录时间戳
```
### 原型
```
__int64 __stdcall HCHD_GetExpiredTimeStamp();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_GetExpiredTimeStamp - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetExpiredTimeStamp - 进阶用法
```
// 示例2：HCHD_GetExpiredTimeStamp 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetExpiredTimeStamp - 高级应用
```
// 示例3：HCHD_GetExpiredTimeStamp 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_GetFYI
### 描述
```
获取点数
```
### 原型
```
__int64 __stdcall HCHD_GetFYI();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_GetFYI - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetFYI - 进阶用法
```
// 示例2：HCHD_GetFYI 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetFYI - 高级应用
```
// 示例3：HCHD_GetFYI 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
## 📌 函数: HCHD_GetOpenMaxNum
### 描述
```
获取最大多少开
```
### 原型
```
__int64 __stdcall HCHD_GetOpenMaxNum();
```
### 返回值
```
查看返回值表
```
### 注意事项
```
无
```
### HCHD_GetOpenMaxNum - 基础示例
```
// C++示例代码
// 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetOpenMaxNum - 进阶用法
```
// 示例2：HCHD_GetOpenMaxNum 调用
// [示例2] C++示例代码
// [示例2] 这里可以放置与说明内容相关的代码示例
代码内容;
```
### HCHD_GetOpenMaxNum - 高级应用
```
// 示例3：HCHD_GetOpenMaxNum 高级用法
// [高级] C++示例代码
// [高级] 这里可以放置与说明内容相关的代码示例
代码内容;
```

---
