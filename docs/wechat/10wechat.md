---
title: 微信小程序第十课
date: 2021-07-09
categories:
 - 微信小程序
tags:
 - 微信小程序 
 - 异步缓存
 - 锚点
---

## 学习日志

>今天上午通过最后的答辩，我们学会了很多新的知识，以及明白了自身的不足，其中最让我印象深刻的是异步缓存，和滑动列表锚点。

## 异步缓存

微信小程序的缓存

关于本地缓存

1.wx.setStorage（wx.setStorageSync）、wx.getStorage（wx.getStorageSync）、wx.clearStorage（wx.clearStorageSync）

可以对本地缓存进行设置、获取和清理。本地缓存最大为10MB

2.localStorage 是永久存储

一、异步缓存

wx.setStorage(OBJECT)

将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容
```js
wx.setStorage({
 
 key:"key",
 
 data:"value"
 
})
wx.getStorage(OBJECT)
```
从本地缓存中异步获取指定 key 对应的内容。
```js
wx.getStorage({
 
 key: 'key',
 
 success: function(res) {
 
   console.log(res.data)
 
 }
 
})
wx.getStorageInfo(OBJECT)
```
异步获取当前storage的相关信息
```js
wx.getStorageInfo({
 
 success: function(res) {
 
  console.log(res.keys)
 
  console.log(res.currentSize)
 
  console.log(res.limitSize)
 
 }
 
})
wx.removeStorage(OBJECT)
```
从本地缓存中异步移除指定 key 。

```js
wx.removeStorage({
 
 key: 'key',
 
 success: function(res) {
 
  console.log(res.data)
 
 }
 
})
```

## 列表滑动锚点

因为在微信小程序的环境中不能想在浏览器里设置标签，或者操作dom滚动，传统做法就行不通了，一切都得按小程序的文档来。、

使用boundingClientRect()方法获取每个锚点的坐标，然后再用wx.pageScrollTo()方法滑动过去。结果发现效果不是很好，因为boundingClientRect方法返回的每个点的坐标会随着屏幕滑动而变化，可能还会引起页面抖动，选择scroll-view(可滚动视图区域)
组件来实现锚点效果。

* scroll-into-view：这个绑定了一个属性，它的值应该是页面元素的id，设置它的值就可以跳转到ID对应的元素那里了。
* scroll-y：添加这个属性标明是竖向滑动的，对应的scroll-x则表示横向滑动，竖向滑动时scroll-view必须设置一个固定的height
* bindscroll：监听滑动，传给他一个事件，滑动时执行该事件
文档上给的属性特别多，暂时只需要上述几个就可实现我们想要的效果。实现原理也很简单，内容部分，每个英文简写的view设置一个 id，然后在导航list那里点击时，就把scroll-into-view的值设置成点击的那个id即可实现跳转。
再说一下scroll-view的高度问题，这个一定要做适配的固定高度，不然在不同屏幕大小的手机上的显示效果有差异。

```js
<!--pages/scrollnav/scrollnav.wxml-->
<!--导航滚动  -->
<scroll-view class="tui-city-scroll" scroll-x="true" scroll-into-view="NAV{{status}}" scroll-with-animation="true">
  <text bindtap="getStatus" id="NAV{{index}}" class="tui-nav-li {{index === status ? 'tui-nav-active' : ''}}" data-index="{{index}}" wx:for="{{navList}}" wx:key="">{{item}}</text>
</scroll-view>
```

```js
<!--列表滚动区  -->
<view class="tui-fixed-y">
  <scroll-view class="tui-city-scroll-y" scroll-y="true" scroll-into-view="NAV{{status}}" scroll-with-animation="true">
    <view wx:for="{{navList}}" wx:key="">
      <view id="NAV{{index}}" class="tui-list-head">{{item}}</view>
      <view class="tui-list-li">{{item}} 列表 {{index}}</view>
    </view>
  </scroll-view>
</view>
```
## 收获心得

通过第九天的答辩，在上午，我们进行了最后的答辩，在这个过程中我们学到了很多东西，包括怎么解释自己做的功能。在其他组的展示过程中，我了解到了异步缓存和锚点滑动。最后，明白了要懂得虚心向别人请教的道理。