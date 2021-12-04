---
title: Cordova + Vue 开发安卓应用记录
date: 2021-11-20
sidebar: 'auto'
tags:
 - Cordova
 - android
 - vue
---

<!-- more -->


## Cordova 安装和环境配置 

### jdk安装配置

参考这个的配置：[jdk安装配置指南](http://www.jdkdownload.com/) 环境配置jdk1.8

### SDK安装配置

下载Android Studio 进行 SDK的配置 

### 安装Cordova

需要node环境 我安装的是node.js12.14.1版本使用npm全局安装Cordova

```sh
npm install -g cordova@6.5.0
```

## 创建Cordova程序

### 新建Cordova应用

```sh
cordova create hello com.example.hello HelloWorld
```

![](https://i.loli.net/2021/11/26/SxrgD8FAYyBILe1.png)

其会在当前目录下生成以下项目结构：

![](https://i.loli.net/2021/11/26/57F6EL42lvHkJCX.png)

其中www目录放至编译好的HTML/CSS/JS

### 添加安卓平台

进入我们创建的文件夹，添加安卓平台

```sh
cordova platform add android --save
```

![](https://i.loli.net/2021/11/26/8blhZNfnJYBS1Qd.png)



### 检查当前设置状况

```sh
cordova platform ls
```

![](https://i.loli.net/2021/11/26/kHMUY8bnIhLsKCp.png)

可以看到安卓平台已经添加好了

### 检查打包条件

```sh
cordova requirements
```

![](https://i.loli.net/2021/11/26/7WSh4cdxToy8JKY.png)

可以看到所有环境都安装好了

### 直接调试

手机通过USB连接电脑，在开发者模式中打开**USB调试**，打开**USB安装**，打开**USB调试（安卓设置）**

```sh
cordova run android
```

就可以在手机上直接进行调试

### 打包成安卓应用

```sh
cordova build android
```

首次打包会下载gradle等配置文件，耐心等待就好

![](https://i.loli.net/2021/11/26/wgnsWTjZumQ5INb.png)

打包完成就可以去路径里面找到apk文件进行安装

### 打包发布版本

打包成没有进行签名的发布版本

```sh
cordova build --release android
```

![](https://i.loli.net/2021/11/26/iD4nRAZkBhoJU8y.png)

## 打包 Vue 项目

### Vue项目位置

把 Vue 项目文件夹移到和 cordova 项目同一级的位置（**这不是必须，主要是好管理**)

![](https://i.loli.net/2021/11/26/cNUswneqpBLQVkO.png)

### 设置Vue项目打包地址

对于使用Vue CLI3 创建的项目：新建 `vue.config.js` 文件

文件设置：

![](https://i.loli.net/2021/11/26/E9cbSyDqzjRtsBe.png)

这样做的目的就是让Vue将打包后的文件放入到Cordova文件夹的**www目录**下面。如果有其他办法也是可以的。

### Vue 打包

```sh
npm run build
```

将项目打包到Cordova文件夹的**www目录**下面,然后再回到Cordova项目执行打包命令就完成了



## 安卓应用签名

由于我们通过`cordova build --release android`生成的是没有进行签名的发布版本，所以我们需要进行签名

### 生成证书

**确保jdk环境正常** ，进入一个文件夹，比如前面的Cordova项目文件夹，运行：

```sh
 keytool -genkeypair -alias name.keystore -keyalg RSA -validity 4000 -keystore name.keystore
```

执行上面命令，会要求填写密码口令，单位信息等等，这里需要记住录入的密码，因为最后编译apk的时候还需要用到，在所有的选项都录入完后，按回车，会在项目的根目录下生成一个name.keystore的签名文件，里面就包含刚刚录入的一些信息。(name.keystore中的name是签名文件的名字，这里可以任意取名，我这里用name.keystore为例)

**如果提升升级**

```sh
keytool -importkeystore -srckeystore name.keystore -destkeystore name.keystore -deststoretype pkcs12
```



### 进行签名

将前面生成的是没有进行签名的发布版本的apk：（一般在*./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk*）复制到上面的签名证书同级目录下，并改名为`name_unsigned.apk`（自己取也可以）运行：

```sh
jarsigner -verbose -keystore name.keystore -signedjar name.apk name_unsigned.apk name.keystore
```

最终上架的APK包就打包好了



## Cordovar实现沉浸式状态栏

使用cordova实现就需要cordova-plugin-statusbar这个插件

**安装插件**

```sh
cordova plugin add cordova-plugin-statusbar
```

**修改statusbar.java**
找到android\app\src\main\java\org\apache\cordova\statusbar中的statusbar.java其中的**getActivity()**,修改其中的run方法：

```java
public void run() {
    // Clear flag FLAG_FORCE_NOT_FULLSCREEN which is set initially
    // by the Cordova.
  		Window window = cordova.getActivity().getWindow();
		// 添加内容start
		window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS); // 控制顶部状态栏
		// window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION); 控制底部导航栏
		window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
		window.setStatusBarColor(Color.TRANSPARENT);
		window.setNavigationBarColor(Color.TRANSPARENT);
 
		// 修改状态栏字体颜色为黑色，无需设置则注释
		window.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
		//添加内容end
        window.clearFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
		// Read 'StatusBarBackgroundColor' from config.xml, default is #000000.
 		//注释默认的设置背景色的方法                												//setStatusBarBackgroundColor(preferences.getString("StatusBarBackgroundColor", "#000000"));
         }
```





本文参考链接：

[cordova + Vue 开发 APP 上手指南](https://www.jianshu.com/p/2e9bebb73d37)

[cordova+vue 项目打包成Android（apk）应用](https://www.cnblogs.com/qirui/p/8421372.html)

[cordova打包apk流程](https://blog.csdn.net/qq_38563845/article/details/80304169)

[vue-cli3搭建项目之webpack配置](https://blog.csdn.net/u014440483/article/details/87267160)

[cordovar实现沉浸式状态栏和导航栏效果、改变状态栏字体颜色为黑色](https://blog.csdn.net/jie_rookie/article/details/89212323?spm=1001.2101.3001.6650.8&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-8.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-8.no_search_link)

[cordova实现沉浸式状态栏（andriod+ios）](https://blog.csdn.net/weixin_43721741/article/details/106916953)

[cordova 更改app版本_cordova 更改app的图标](https://blog.csdn.net/weixin_29609679/article/details/112819148)
