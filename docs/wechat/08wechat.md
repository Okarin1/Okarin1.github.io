---
title: 微信小程序第八课
date: 2021-07-07
categories:
 - 微信小程序
tags:
 - 微信小程序 
 - app.js
---

## 学习日志

>今天上午我们完成了app.js之间的数据整合与传递，在下午我们将各种界面整合进主界面并优化了样式。

### 微信小程序传值
全局变量
***app.js里***
```js
　　App({

　　　　//全局变量

　　　　globalData: {

　　　　userInfo: null,

　　　　host: 'http://localhost:8080/data.json'

　　}
```
***在其他js页面取值***
```js
　　const app = getApp()  //获取应用实例 必须有这个才能获取到app.js里的东西
```

***在需要获取值得地方赋值***
```js
　　url:app.globalData.host 
```
本地缓存（最多存10M的数据）

　设值：wx.setStorageSync('title', title)
　取值：var title=wx.getStorageSync('title')
 
URL传值
```js
　　wx.navigateTo({
　　　　url: '/pages/detail/detail?title='+title,
　　})
　　在'/pages/detail/detail的detail.js里面
　　获取值:
　　onLoad: function (options) {
　　　　console.log(options) // 打印结果为：{title:"abc"}
　　},
```
依据上面的方式设置要传递的值，页面跳转后，我们就需要在下一个页面拿到传递的数据（这个数据在传递前，就已经被设置成全局变量）

在跳转后的js页面，接收传递过来的数据detail.js

同样通过全局额方式取值出来，（即和app.js中取某个变量的值是一样的）

### 整合界面
在下午我们开始整合界面，每个人的功能都不同，但是要把他们整合进一个界面之中。其中每个页面的布局要完整。这样的的话就需要调整每个布局的属性，要让每个界面和谐，那么熟悉`margin`和`padding`的用法就尤为重要。


**margin和padding的用法：**

padding和margin后面可以跟1或2或3或4个数，按照顺序分别是上，右，下，左。具体的操作如下：

* padding(margin)-left:10px;左内（外）边距；
* padding(margin)-right:10px;右内（外）边距；
* padding(margin)-top:10px;上内（外）边距；
* padding(margin)-bottom:10px;下内（外）边距；
* padding(margin):10px;四边统一内（外）边距；
* padding(margin):10px 20px; 10px是上下内（外）边距；20px是左右内（外）边距
* padding(margin):10px 20px 30px; 10px是上内（外）边距；20px是左右内（外）边距；30px是下内（外）边距；
* padding(margin):10px 20px 30px 40px; 10px是上内（外）边距；20px是右内（外）边距；30px是下内（外）边距；40px是左内边距；

而margin的用法：
* 上下相连的两个盒子之间的空白需要相互抵消时，比如15px+30px的margin，将得到30px的空白距离。（两个盒子都有margin时，选择较大距离的）
* 需要在border外侧添加空白时。
* 空白处不需要有背景色时。

padding的用法：
* padding不能给负值，margin可以给负值。
* 需要在border内测添加空白时（文字与边框距离的设置）
* 上下相连的两个盒子之间的空白希望等于两者之和时，比如15px
+20px的padding，将得到35px的空白。

![avatar](https://img-blog.csdnimg.cn/20190418091918148.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0ODg1Mzc0,size_16,color_FFFFFF,t_70)

### 轮播图圆
在新闻界面我们还添加了轮播图，但是为了做到轮播图圆角，却花了很大的功夫。

```css
  border-radius: 20rpx;
  overflow: hidden;
```

在父级标签设置圆角虽然能让轮播图展示圆角，但是滑动时却会变成直角，最后通过将图片宽度设为1.2倍。同时将父级标签`overflow`属性设为`hidden`实现了轮播图的圆角。


## 收获心得

通过第七天的学习，在上午，我们完成了app.js之间的数据整合与传递，是所有页面能够相互通讯，在下午我们将各种界面整合进主界面并优化了样式，让整个app风格接近统一。在整个过程中遇到了很多困难，但是经过我们团队合作一个一个解决了问题，让我明白了团队合作的重要性。