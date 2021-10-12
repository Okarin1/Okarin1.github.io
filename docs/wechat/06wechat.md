---
title: 微信小程序 导航栏
date: 2021-07-05
categories:
 - 微信小程序
tags:
 - 微信小程序 
---

## 学习日志

>今天上午老师给我们宣讲了很多有关就业方面的知识以及检查了天气页面的完成情况，在下午给我讲了获取地理位置的map标签的应用，同时给我们布置了实训大作业。

### map标签
使用map定位需要`wx.getLocation(OBJECT)`函数：
```js
wx.getLocation({
  type: 'wgs84',
  success: function(res) {
    var latitude = res.latitude
    var longitude = res.longitude
    var speed = res.speed
    var accuracy = res.accuracy
  }
})
```
会返回多个结果，使用其中的`markers`定位当前位置的红色圆圈
```js
 wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {

        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50,


          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 3000, //circles半径3000米
            strokeWidth: 1
          }]

        })
      }

    })
```
还有其他的很多控件比如`controls`，在地图上显示加减大小控件，控件不随着地图移动

### 实训设计
在下午我们开始选题设计最后的实训作业，我们小组选择的是一个旅游小程序。我负责制作首页和主界面。

### 底部导航栏
微信提供了`tabBar`来实现底部导航栏，在`app.json`中添加，具有很多属性：
* list：存放要展示的页面
* pagePath : 页面路径
* text : icon下面显示的文字
* color: 默认颜色
* selectedColor: 选择后的颜色
* borderStyle: 分隔线
* iconPath: 默认图标
* selectedIconPath: 选择后的图标

```js
  "tabBar": {
  "color": "#a9b7b7",
  "selectedColor": "#11cd6e",
  "borderStyle": "white",
  "list": [
    {
      "selectedIconPath": "images/1.png",
      "iconPath": "images/2.png",
      "pagePath": "pages/index/index",
      "text": "首页"
    },
    {
      "selectedIconPath": "images/1.png",
      "iconPath": "images/2.png",
      "pagePath": "pages/logs/logs",
      "text": "日志"
    },
    {
      "selectedIconPath": "images/1.png",
      "iconPath": "images/2.png",
      "pagePath": "pages/test/test",
      "text": "测试"
    }
  ]
}
```
### 轮播图圆角
在首页我还添加了轮播图，但是为了做到轮播图圆角，却花了很大的功夫。
在父级标签设置圆角虽然能让轮播图展示圆角，但是滑动时却会变成直角，最后通过将图片宽度设为1.2倍。同时将父级标签`overflow`属性设为`hidden`实现了轮播图的圆角。

```css
  border-radius: 20rpx;
  overflow: hidden;
```



## 收获心得

通过第六天的学习，在上午，我实现了随温度变化的查询天气页面的图标，在下午我了解了微信小程序中map标签的应用，同时，掌握了微信小程序中底部导航栏的使用方法。同时在制作首页中，掌握了微信轮播图的圆角设置方法。在多次设置轮播图圆角的过程中，我明白了要敢于尝试，精益求精的编程思想。