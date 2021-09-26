---
title: 微信小程序第七课
date: 2021-07-06
categories:
 - 微信小程序
tags:
 - 微信小程序 
 - Flex布局
---

## 学习日志

>今天上午我们继续制作大作业，我开始制作首页的购票界面，在下午我们整合了天气和防疫界面。

### 文本居中

***水平居中***

让文本在父布局中水平居中，可以通过设置父布局的`text-align`属性设置为`center`可实现文本的水平居中。

***垂直居中***

让文本在父布局垂直居中，可以通过设置父布局的`height`和`inline-height`的高度设为一致，则可实现文本在父布局中垂直居中



### 按钮宽度
当前版本的微信小程序，在.wxss文件里设置Button宽度无效，如：

```css
button {
  display: block;
  margin-top: 20rpx;
  width: 80vw}
```
无论如何调整width，Button的宽度都不会有变化

***解决办法***
* 把 `app.json`里的 ` style: v2`语句删掉，虽然这样可以解决问题，但会导致全局的样式变化。
* 在`button`标签中直接写 style，例如：
```css
<button style="width:600rpx"bindtap="onSelectAnswerA">查询</button>
```

### Flex布局
Flex布局提供了元素在容器中的对齐，方向以及顺序，甚至他们可以是动态的或者不确定的大小的。Flex布局的主要特征是能够调整其子元素在不同的屏幕大小中能够用最适合的方法填充合适的空间。

在微信小程序中，设有`display:flex`或者`display:block`的元素就是一个`flex container`(伸缩容器)，里面的子元素称为`flex item`(伸缩项目)，`flex container`中子元素都是使用Flex布局排版。

`display:flex`:指定为行内容器模式，在一行内显示子元素，可以使用flex-wrap属性指定其是否换行，`flex-wrap`有三个值
* nowrap(不换行)
* wrap(换行)
* wrap-reverse(换行第一行在下面)

Flex布局的伸缩容器可以使用任何方向进行布局。
容器默认有两个轴：主轴(main axis)和侧轴(cross axis)。
主轴的开始位置为主轴起点(main start)，主轴的结束位置为主轴终点(main end),而主轴的长度为主轴长度(main size)。
同理侧轴的起点为侧轴起点(cross start),结束位置为侧轴终点(cross end),长度为侧轴长度(cross size)。

![avatar](https://upload-images.jianshu.io/upload_images/22188-bbf58812dfcac77d.png?imageMogr2/auto-orient/strip%7CimageView2/2)

主轴并不是一定是从左到右的，同理侧轴也不一定是从上到下，主轴的方向使用flex-direction属性控制,它有4个可选值:

* row :从左到右的水平方向为主轴
* row-reverse：从右到左的水平方向为主轴
* column:从上到下的垂直方向为主轴
* column-reverse从下到上的垂直方向为主轴

如果水平方向为主轴，那个垂直方向就是侧轴，反之亦然。
四种主轴方向设置的效果图:
![avatar](https://upload-images.jianshu.io/upload_images/22188-c3cae998d57982ef.png?imageMogr2/auto-orient/strip%7CimageView2/2)

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
![avatar](https://upload-images.jianshu.io/upload_images/22188-1bdb989fea46fdc1.png?imageMogr2/auto-orient/strip%7CimageView2/2)

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
justify-content的对齐方式和主轴的方向有关，下图以flex-direction为row，主轴方式是从左到右,描述jstify-content5个值的显示效果:
![avatar](https://upload-images.jianshu.io/upload_images/22188-e843b222e9ae5244.png?imageMogr2/auto-orient/strip%7CimageView2/2)

justify-content
align-items表示侧轴上的对齐方式:

* stretch 填充整个容器(默认值)
* flex-start 侧轴的起点对齐
* flex-end 侧轴的终点对齐
* center 在侧轴中居中对齐
* baseline 以子元素的第一行文字对齐
align-tiems设置的对齐方式，和侧轴的方向有关，下图以flex-direction为row,侧轴方向是从上到下,描述align-items的5个值显示效果:
![avatar](https://upload-images.jianshu.io/upload_images/22188-b9c64a339a543827.png?imageMogr2/auto-orient/strip%7CimageView2/2)



## 收获心得

通过第六天的学习，在上午，我实现了首页的购票界面，。同时在制作首页中，掌握了垂直居中和button的设置方法。同上掌握了flex布局的操作。在多次设置布局的过程中，我明白了要不怕困难敢于尝试的编程思想。