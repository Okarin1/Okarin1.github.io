---
title: 微信小程序第四课
date: 2021-07-03
categories:
 - 微信小程序
tags:
 - 微信小程序 
 - app.js
 - GET
 - POST
---
## 学习日志

>今天上午我们将了如何通过`app.js`传递全局数据，我们由此实现了在另一个界面显示查询数据。在下午我们讲了GET和POST的区别，然后我们制作了点击展开和收缩的菜单布局。

### 向另一个页面传递数据
`app.js`中的`globalData`是一个全局数据，可以在其他页面进行访问，我们可以在请求界面对它进行访问，向里面传值，最后在另一个界面再对它进行访问来传值。

***关键代码***
``` js
const app = getApp();//获取app.js
app.globalData.otherlist = res.data.data.info;//向其中写入值
this.setData ({resultlist:app.globalData.otherlist});} //访问其中的值
```
这个问题是一位同学提出来的，这让我要有创新性，要有自己的想法。

### GET 和 POST
在下午我们学习了GET和POST的优缺点：

GET的优点：
* 响应速度快  
  
GET的缺点：
* 数据在请求头中安全性较低
* GET能传递的数据字节短
* 提交类型只能是字符串

POST的优点：
* 提交数据大小理论上没有要求
* 数据类型没有要求
* 安全性更高

POST的缺点：
* 响应速度稍慢

### 每日任务

在下午老师给我们布置了一个菜单布局的作业，通过点击实现菜单栏的展开和收缩。老师让我们自己尝试，自己参考代码进行尝试完成。
通过参考代码，通过动态的向view里面传入数据，来动态显示内容。而收缩展开是通过判断是否`hidden`来展开和隐藏

``` js
 for (let i=0; i < memberList.length; i++){
          var opposite = !memberList[i].hidden;
          if (idx == i) {
              memberList[i].hidden = opposite;
          } else {
             memberList[i].hidden = true;
          }
      }
```
其中巧妙的在于点击判断是否展开来进行相反的操作，而不是进行`true`或者`false`操作展开或者收缩，巧妙的解决了点击展开之后再次点击不收缩的问题。





## 收获心得

通过第四天的学习，在上午，我了解了如何通过app.js来传递数据，然后在另一个界面显示。在下午，我们了解了GET和POST的区别，以及各自的优缺点。最后我们完成了菜单页面展开和收缩的操作。在今天的学习中，我明白了要有新的思维，要善于提出问题。同时，要尝试自己解决问题，即使照抄代码也要自己明白其中的逻辑。最后自己完成。