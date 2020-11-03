### myNewTab
自定义chrome新标签页的插件

### 使用
1. ```git clone git@github.com:Stareven233/myNewTab.git```
2. 打开chrome，地址栏进入`chrome://extensions/`
3. 勾选开发者模式，并点击左上角已解压程序，选择myNewTab文件夹
4. Ctrl+T打开新标签页即可体验

### 自定义
- 修改目录下`manifest.json`定义程序信息
- 修改newtab.html即可对应修改新标签页

### 踩坑
现今(2020.11.3) chrome的CSP限制非常严格，几乎不允许内联js执行
参考[stackoverflow相关问题](https://stackoverflow.com/questions/25625412chrome-extension-content-security-policy-executing-inline-code)  
测试过 "script-src 'unsafe-inline';" / "script-src *;" / "script-src nonce-xxxx"等发现皆已失效，而sha256似乎也行不通  
最后设置CSP为 "script-src 'self' https://xxx.com;" 
通过引用本地js及网络资源才成功，其中网址必须要带协议部分，仅主机无法使用  
