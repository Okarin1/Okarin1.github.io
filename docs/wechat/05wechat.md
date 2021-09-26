---
title: 微信小程序第五课
date: 2021-07-04
categories:
 - 微信小程序
tags:
 - 微信小程序 
---

## 学习日志

>今天上午我们在老师的带领下深入学习了如何进行收缩展开菜单布局，在下午我们自己尝试设计获取个人信息的页面和一个查询天气的页面。

### 收缩展开菜单布局
通过`wx:for`列表渲染来显示导航栏，在通过`hidden`的布尔值判断是否展开子栏，同样的，子栏也通过`wx:for`列表渲染来显示。同时通过`currentTarget`事件来监听是哪个菜单栏被点击。再通过`dataset.index`来获取点击的导航栏的id.
***关键代码***
```html
<view wx:for="{{memberList}}">
        <view class="cells {{item.hidden ? '' : 'show'}}" bindtap="isOpen"  data-index="{{item.id}}">
            <view>
                <text>{{item.cont}}</text><image class="img {{item.hidden ? '' : 'ro-show'}}" src="{{item.iamges}}" />
            </view>
        </view>
```
```js
 var idx = e.currentTarget.dataset.index;
```
然后通过if判断语句来实现点击导航栏时判断是否展开来进行相反的操作，而不是进行`true`或者`false`操作展开或者收缩，巧妙的解决了点击展开之后再次点击不收缩的问题。

```js
          var opposite = !memberList[i].hidden;
          if (idx == i) {
              memberList[i].hidden = opposite;
          } else {
             memberList[i].hidden = true;
          }
```


### 获取信息

在下午我们自己制作了获取个人信息的界面：
有两种方法来获取信息，分别是通过picker滚动选择器

wx.getUserProfile需要用户进行授权，而open-data用于展示微信开放的数据，不需要进行授权。

***wx.getUserProfile***

```js
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
```
***wx.getUserProfile***

```html
<open-data type="groupName" open-gid="xxxxxx"></open-data>
<open-data type="userAvatarUrl"></open-data>
<open-data type="userGender" lang="zh_CN"></open-data>
```



### 每日任务

在下午老师给我们布置了查询天气的任务，与查快递类似都是通过一个api来获取想要的数据，通过`picker`滚动选择器里的`mode = region`属性来获取选择的地理位置，向api传值。最后将api返回的结果显示在界面里面。
通过if判断api返回的结果，例如晴，多云，雨，来显示不同的图标。
```js
        if(res.data.data.now.cond_txt == "晴")
        {
          that.setData({weathericon:myicon[0]})
        }
        else if(res.data.data.now.cond_txt == "阴"||"多云")
        {
          that.setData({weathericon:myicon[1]})
        }
        else {
          that.setData({weathericon:myicon[2]})
        }
```




## 收获心得

通过第五天的学习，在上午，我详细的了解了如何进行收缩展开菜单布局，在下午我们自己尝试设计完成了获取个人信息的页面和一个查询天气的页面。学到了关于`picker`新的属性，还有动态的显示图片。收获良多。