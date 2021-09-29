---
title: 微信小程序 样式与布局
date: 2021-07-08
categories:
 - 微信小程序
tags:
 - 微信小程序 
---

## 学习日志

>今天上午我们完善了微信小程序的功能，下午我们在其他小组那里学到了很多经验。

## 完善功能

为了完善微信小程序我们要将很多值整合进全局变量。
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


在跳转后的js页面，接收传递过来的数据detail.js

同样通过全局额方式取值出来就可以让很多页面使用同一个值

## 调整布局
要让小程序页面统一就要让样式统一，常用的是flex布局，可以使用任何方向进行布局。
容器默认有两个轴：主轴(main axis)和侧轴(cross axis)。
主轴的开始位置为主轴起点(main start)，主轴的结束位置为主轴终点(main end),而主轴的长度为主轴长度(main size)。
同理侧轴的起点为侧轴起点(cross start),结束位置为侧轴终点(cross end),长度为侧轴长度(cross size)。


主轴并不是一定是从左到右的，同理侧轴也不一定是从上到下，主轴的方向使用flex-direction属性控制,它有4个可选值:

* row :从左到右的水平方向为主轴
* row-reverse：从右到左的水平方向为主轴
* column:从上到下的垂直方向为主轴
* column-reverse从下到上的垂直方向为主轴

如果水平方向为主轴，那个垂直方向就是侧轴，反之亦然。

图中的实例展示了使用了不同的flex-direction值排列方向的区别。
实例代码:
``` css
<view >
    <view class="flex-row" style="display: flex;flex-direction: row;">
        <view class="flex-view-item">1</view>
        <view class="flex-view-item">2</view>
        <view class="flex-view-item">3</view>
    </view>
    <view class="flex-column" style="display:flex;flex-direction: column;" >
        <view class="flex-view-item">c1</view>
        <view class="flex-view-item">c2</view>
        <view class="flex-view-item">c3</view>
    </view>
</view>
```

***对齐方式***
子元素有两种对齐方式：

* justify-conent 定义子元素在主轴上面的对齐方式
* align-items 定义子元素在侧轴上对齐的方式

justify-content有5个可选的对齐方式:

* flex-start 主轴起点对齐(默认值)
* flex-end 主轴结束点对齐
* center 在主轴中居中对齐
* space-between 两端对齐，除了两端的子元素分别靠向两端的容器之外，其他子元素之间的间隔都相等
* space-around 每个子元素之间的距离相等，两端的子元素距离容器的距离也和其它子元素之间的距离相同。
justify-content的对齐方式和主轴的方向有关
justify-content
align-items表示侧轴上的对齐方式:

* stretch 填充整个容器(默认值)
* flex-start 侧轴的起点对齐
* flex-end 侧轴的终点对齐
* center 在侧轴中居中对齐
* baseline 以子元素的第一行文字对齐
align-tiems设置的对齐方式，和侧轴的方向有关

## 收获心得

通过第八天的学习，在上午，我们完善了微信小程序，在下午，我们再次统一了app的样式。同时学到了各种传值方法以及各种布局的写法。同时在看过了其他组的小程序之后，明白了不能高估自己，要懂得虚心向人请教。