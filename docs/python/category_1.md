---
sidebar_position: 2
---

# 🛰️ 基础说明
## 📌 说明: HD简介
### 描述
```
教程以官网为准 
后面会出帖子教程
供大家学习使用
官网:
https://www.hdgdk.com
HD【RPG引擎库】交流群(3群):882724064 1030698387
 (有事请主动找群主和管理，群主和管理不会主动私聊任何人,请勿上当受骗！！！！)
 (有事请主动找群主和管理，群主和管理不会主动私聊任何人,请勿上当受骗！！！！)
 (有事请主动找群主和管理，群主和管理不会主动私聊任何人,请勿上当受骗！！！！)
功能: 
1.自研驱动注入，模拟键鼠 ，读写内存相关操作，进程以及线程相关操作等. 
2.自研接口注入模式框架.
3.目前支持 32 位/64位/ASCII/UNICODE(8个版本中控)<->32/64位 (目标程序) 
4.还支持LUA编写,自定义模块,谷歌内置浏览器,主板机投屏,多线程框架模块,yolov5,等操作
5.支持易语言 C/C++ 火山 Python C# 炫语言 golong等语言（支持调用C++DLL的语言）
6.具体看对应的模块功能接口
7.支持win7/8/10/11系统
=============================================================  
一.【HD易语言基础课程】
https://www.bilibili.com/video/BV1UgJFz5EKN/?spm_id_from=333.1387.homepage.video_card.click 
   .【HD易语言多线程框架实战课程】
https://www.bilibili.com/video/BV1UgJFz5EKN/?spm_id_from=333.1387.homepage.video_card.click
二.【HD火山基础课程】
https://www.bilibili.com/video/BV1iBftYoE5b/?spm_id_from=333.1387.homepage.video_card.click
三.【HD C++基础课程】
https://www.bilibili.com/video/BV1G9fnYeEEp/?spm_id_from=333.1387.homepage.video_card.click
    .【HD C++多线程框架实战课程】
https://www.bilibili.com/video/BV1G9fnYeEEp/?spm_id_from=333.1387.homepage.video_card.click
   .【HD C++ 夜鸦国际服实战课程】
https://www.bilibili.com/video/BV1Ei1sYsELz/?spm_id_from=333.1387.homepage.video_card.click
四.【HD Python基础课程】
https://www.bilibili.com/video/BV1rtRAYXEwQ/?spm_id_from=333.1387.homepage.video_card.click
五.【HD 炫语言基础课程】
https://www.bilibili.com/video/BV1LJXGYPEXy/?spm_id_from=333.1387.homepage.video_card.click
https://www.bilibili.com/video/BV1UNqdYqEBQ/?spm_id_from=333.1387.homepage.video_card.click
六.【HD 综合工具使用教程】
https://www.bilibili.com/video/BV1nscbeVEfY/?spm_id_from=333.1387.homepage.video_card.click
七.【HD Yolov8综合工具使用教程】
https://www.bilibili.com/video/BV13c3vzfE2D/?spm_id_from=333.1387.homepage.video_card.click
=============================================================  
```
### 注意事项
```
免责声明
一.        本软件完全出于个人兴趣爱好，由本人在业余时间开发，是一款安全，绿色，可靠的软件产品.
二.        利用本软件所做出的任何软件作品，和本人无关.
三.        本软件绝对不针对任何一款游戏或者游戏开发商，如果有人利用本软件开发非法游戏辅助，本人将保留追究其民事以及刑事责任的权利.
四.        因使用本软件而引致的任何意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其所造成的任何损失，本人概不负责，亦概不承担任何民事或刑事法律责任。
五.        当你第一次开始使用本人所提供的任何软件及资源的那一刻起就将被视为对本声明全部内容的认可。同时您必须认可上述免责条款，方可使用本软件及资源。如有任何异议，建议立刻删除本软件及资源并且停止使用.
六.        以上内容，本人保留最终解释权。
```
### HD简介 - 进阶用法
```python
# Python 示例2

```
### HD简介 - 高级应用
```python
# Python 示例3 高级用法

```

---
## 📌 说明: HD返回值表
### 描述
```
接口返回值： 小于等于0 为错误代码 大于 0为成功  (驱动接口返回值在下面↓)

#define RET_检查PID存在 8
#define RET_环境已卸载 7
#define RET_重连窗口序号不一致 6
#define RET_重连窗口 5
#define RET_状态变动 4
#define RET_暂停过 3
#define RET_结束 2
#define RET_成功 1
#define RET_失败 0
#define RET_真 1
#define RET_非 0
#define ERROR_未初始化全局环境 -1000
#define ERROR_未找到进程环境 -1001
#define ERROR_进程环境内存为NULL -1002
#define ERROR_获取CALL环境失败 -1003
#define ERROR_超时返回 -1004
#define ERROR_主线程调用超时返回 -1005
#define ERROR_数据异常 -1006
#define ERROR_参数错误 -1007
#define ERROR_未挂接主线程 -1008
#define ERROR_后台绑定句柄无效 -1009
#define ERROR_未绑定后台 -1010
#define ERROR_多开超出限制 -1011
#define ERROR_字符串为空 -1012
#define ERROR_地址为空 -1013
#define ERROR_未知错误 -1014
#define ERROR_远进程申请内存失败 -1015
#define ERROR_文件夹创建失败 -1016
#define ERROR_异步无法获取返回值 -1017
#define ERROR_语法错误 -1018
#define ERROR_申请内存失败 -1019
#define ERROR_创建线程失败 -1020
#define ERROR_缓冲区大小不足 -1021
#define ERROR_未初始化LUA -1022
#define ERROR_LUA状态机为NULL -1023
#define ERROR_未找到LUA函数 -1024
#define ERROR_返回值未知类型 -1025
#define ERROR_LUA线程标识符不符合 -1026
#define ERROR_模块获取失败 -1027
#define ERROR_地址不可读 -1028
#define ERROR_返回值为JSON -1029
#define ERROR_获取数据失败 -1030
#define ERROR_未初始化 -1031
#define ERROR_已经开启 -1032
#define ERROR_已经结束 -1033
#define ERROR_未开启 -1034
#define ERROR_未结束 -1035
#define ERROR_高宽为0 -1036
#define ERROR_数据为NULL -1037
#define ERROR_数据不符合要求 -1038
#define ERROR_文件打开失败 -1039
#define ERROR_打开失败 -1040
#define ERROR_解析失败 -1041
#define ERROR_无游戏类型 -1042
#define ERROR_HOOK失败 -1043
#define ERROR_UNHOOK失败 -1044
#define ERROR_功能失效 -1045
#define ERROR_无效PE文件格式 -1046
#define ERROR_未找到PE头 -1047
#define ERROR_重定位表失败 -1048
#define ERROR_未找到函数入口 -1049
#define ERROR_无法附加DLL -1050
#define ERROR_接口数量上限 -1051
#define ERROR_已经存在 -1052
#define ERROR_打开句柄失败 -1053
#define ERROR_未找到全局环境 -1054
#define ERROR_组件数量上限 -1055
#define ERROR_未找到组件接口 -1056
#define ERROR_接口类型不匹配 -1057
#define ERROR_组件无效 -1058
#define ERROR_接口地址无效 -1059
#define ERROR_生成密钥失败 -1060
#define ERROR_加密失败 -1061
#define ERROR_解密失败 -1062
#define ERROR_DLL中无此接口 -1063
#define ERROR_下载失败 -1064
#define ERROR_注册表操作失败 -1065
#define ERROR_路径获取失败 -1066
#define ERROR_提权失败 -1067
#define ERROR_驱动已安装 -1068
#define ERROR_HD驱动已安装无法安装HN驱动 -1069
#define ERROR_资源未找到 -1070
#define ERROR_资源加载失败 -1071
#define ERROR_提取资源失败 -1072
#define ERROR_未加载插件 -1073
#define ERROR_文件无法保存 -1074
#define ERROR_打开目录失败 -1075
#define ERROR_写入文件的字节大小不符合要求 -1076
#define ERROR_删除文件失败 -1077
#define ERROR_获取字符串失败 -1078
#define ERROR_获取注册表值失败 -1079
#define ERROR_类型错误 -1080
#define ERROR_参数不符合要求 -1081
#define ERROR_区域超出 -1082
#define ERROR_文件不存在 -1083
#define ERROR_创建文件失败 -1084
#define ERROR_文件读取失败 -1085
#define ERROR_与系统驱动通讯失败 -1086
#define ERROR_创建管道失败 -1087
#define ERROR_创建进程失败 -1088
#define ERROR_未找到相关字符串信息 -1089
#define ERROR_缓冲区大小不充足 -1090
#define ERROR_数据类型转换失败 -1091
#define ERROR_格式化字符串失败 -1092
#define ERROR_网络超时 -1093
#define ERROR_网络连接失败 -1094
#define ERROR_加载指定DLL失败 -1095
#define ERROR_解析字符串失败 -1096
#define ERROR_窗口大小变动导致数据不一致 -1097
#define ERROR_打开剪切板失败 -1098
#define ERROR_加锁失败 -1099
#define ERROR_获取剪切板数据失败 -1100
#define ERROR_版本号获取失败 -1101
#define ERROR_已经绑定其他设备 -1102
#define ERROR_已经达到最大在线数 -1103
#define ERROR_账号或密码为空 -1104
#define ERROR_验证失败 -1105
#define ERROR_打开进程失败 -1106
#define ERROR_进程位数不匹配 -1107
#define ERROR_添加进程环境失败 -1108
#define ERROR_定位特征地址失败 -1109
#define ERROR_寻找空白地址失败 -1110
#define ERROR_无操作类型 -1111
#define ERROR_无相关句柄 -1112
#define ERROR_无HDC句柄 -1113
#define ERROR_获取矩形大小失败 -1114
#define ERROR_拷贝数据失败 -1115
#define ERROR_无效句柄 -1116
#define ERROR_创建对象失败 -1117
#define ERROR_截图方式需要重开才能切换 -1118
#define ERROR_格式有误 -1119
#define ERROR_字库数据为空 -1120
#define ERROR_字库中未找到相应字 -1121
#define ERROR_大小计算为0 -1122
#define ERROR_容器大小不一致 -1123
#define ERROR_句柄无效 -1124
#define ERROR_获取PID无效 -1125
#define ERROR_获取大小失败 -1126
#define ERROR_获取失败 -1127
#define ERROR_未找到 -1128
#define ERROR_立即返回无效值 -1129
#define ERROR_未设置路径 -1130
#define ERROR_文件操作失败 -1131
#define ERROR_写入内存失败 -1132
#define ERROR_模块查找失败 -1133
#define ERROR_接口查找失败 -1134
#define ERROR_组件信息保存失败 -1135
#define ERROR_组件加载失败 -1136
#define ERROR_组件卸载失败 -1137
#define ERROR_组件不符合卸载要求 -1138
#define ERROR_进程环境句柄为NULL -1139
#define ERROR_未绑定PID -1140
#define ERROR_读取图片失败 -1141
#define ERROR_打开注册表失败 -1142
#define ERROR_获取注册表失败 -1143
#define ERROR_写内存失败 -1144
#define ERROR_清除缓存失败 -1145
#define ERROR_字体无宽度 -1146
#define ERROR_裁剪矩形数据失败 -1147
#define ERROR_图片无宽或高 -1148
#define ERROR_功能未开放 -1149
#define ERROR_模块信息获取失败 -1150
#define ERROR_未找到合适的JMP地址 -1151
#define ERROR_HOOK初始化失败 -1152
#define ERROR_无HOOK接口类型 -1153
#define ERROR_CALL类型不匹配 -1154
#define ERROR_创建通讯失败 -1155
#define ERROR_加载通讯失败 -1156
#define ERROR_数据格式错误 -1157
#define ERROR_地址失效 -1158
#define ERROR_坐标转换失败 -1159
#define ERROR_容器为空 -1160
#define ERROR_数据为空 -1161
#define ERROR_特征不符合 -1162
#define ERROR_范围未确定 -1163
#define ERROR_缓冲区不足 -1164
#define ERROR_此接口调试版本无效 -1165
#define ERROR_子图不在范围内 -1166
#define ERROR_插件数量上限 -1167
#define ERROR_API枚举失败 -1168
#define ERROR_无法定位模块 -1169
#define ERROR_无效HOOK地址 -1170
#define ERROR_无对应的HOOK函数 -1171
#define ERROR_破坏字节超过容量 -1172
#define ERROR_指定地址不适合HOOK -1173
#define ERROR_没有充足的HOOK大小 -1174
#define ERROR_设置回调地址失败 -1175
#define ERROR_API获取时间失败 -1176
#define ERROR_无效插件序号 -1177
#define ERROR_进程不存在 -1178
#define ERROR_未安装插件 -1179
#define ERROR_初始化通讯失败 -1180
#define ERROR_未初始化通讯序号 -1181
#define ERROR_当前线程字库为空 -1182
#define ERROR_线程数量超出限制 -1183
#define ERROR_字库序号不存在 -1184
#define ERROR_释放资源失败 -1185
#define ERROR_超出容量 -1186
#define ERROR_空模型 -1187
#define ERROR_环境序号不存在 -1188
#define ERROR_回调处理中 -1189
#define ERROR_无法操作绑定窗口 -1190
#define ERROR_接口已被移除 -1191
#define ERROR_不支持类型 -1192
#define ERROR_初始化失败 -1193
#define ERROR_环境被卸载 -1194
#define ERROR_进程已经关闭 -1195
#define ERROR_中控环境未初始化 -1196
#define ERROR_未加载HD驱动 -1197
#define ERROR_未绑定设备 -1198
#define ERROR_未找到进程 -1199
#define ERROR_进程PID不匹配 -1200
#define ERROR_前台模式无法后台 -1201
#define ERROR_JMP地址无效 -1202
#define ERROR_HOOK地址无效 -1203
#define ERROR_类型和HOOK地址不匹配 -1204
#define ERROR_不在HD多线程环境下 -1205
#define ERROR_未连接 -1206
#define ERROR_进程环境已被卸载 -1207
#define ERROR_安装插件失败 -1208 //检查是否安装了驱动
#define ERROR_安装驱动失败 -1209 //检查是否管理员或者杀毒或者关闭内核隔离
#define ERROR_加载环境失败 -1210 //检查账号是否欠费或者网络问题或者参数不符合要求
#define ERROR_初始化序号失败 -1211 //一般不会失败
#define ERROR_获取PID超时返回 -1212 //确定是否打开进程成功或者增大等待时间
#define ERROR_获取状态值20超时返回 -1213 //未安装插件或被拦截或增大等待时间
#define ERROR_获取状态值120超时返回 -1214 //未安装插件或被拦截或增大等待时间
#define ERROR_继续失败 -1215 //可能未初始化相关环境 一般不会失败
#define ERROR_当前进程插件序号不一致 -1216 //说明指定的PID进程绑定的窗口序号已经存在 与指定的序号不一致 调用HCInject_GetPreWinIndex 获取指定PID的绑定的窗口序号
#define ERROR_PID无效 -1217
#define ERROR_扩展序号不能用 -1218//扩展序号不能自己指定
#define ERROR_接口丢弃 -1219//老版本的接口丢弃
#define ERROR_序号超出限制 -1220
#define ERROR_已经重启 -1221
#define ERROR_登录中无法重启 -1222
#define ERROR_暂停中无法重启 -1223
#define ERROR_操作中无法重启 -1224
#define ERROR_强制关闭线程中无法发送 -1225
#define ERROR_卸载失败 -1226
#define ERROR_未完全开启 -1227
#define ERROR_逻辑异常 -1228
#define ERROR_无法连接VNC -1229
#define ERROR_未连接过VNC -1230
#define ERROR_未关联过VM -1231
#define ERROR_未获取截图环境 -1232
#define ERROR_未获取截图环境 -1232
#define ERROR_环境为NULL -1233
#define ERROR_区域无效 -1234
#define ERROR_继续当前操作 -1235
#define ERROR_加解密失败 -1236
#define ERROR_未安装驱动 -1237
#define ERROR_调试版本无法加解密 -1238
#define ERROR_截图缓存不存在 -1239//检查截图模式不对 或者 未开启截图 请用截图查看器查看是否截图缓存存在
```
### 注意事项
```
也可以可通过工具后台查看
```
### HD返回值表 - 进阶用法
```python
# Python 示例2

```
### HD返回值表 - 高级应用
```python
# Python 示例3 高级用法

```

---
