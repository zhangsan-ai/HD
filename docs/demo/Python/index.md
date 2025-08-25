# Python环境搭建
## 1.安装Python环境使用32位Python

## 2.安装Python库
``` python
    pip install hdgdk
```
## 3.下载HD dll 使用

使用HD平台升级工具下载需要版本的dll
## 4.测试环境
``` python
from HD import *

HD_Path("./dll",True) # 指定dll所在目录 设置是否为调试模式
ret = HD登录_登录("","","","") #设置账号密码
print(ret) #查看是否正确

```