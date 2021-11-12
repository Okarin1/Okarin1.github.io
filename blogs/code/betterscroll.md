---
title: Better-Scorll的基本使用
date: 2021-10-13
sidebar: 'auto'
tags:
 - Better-Scorll
---

<!-- more -->

# Better-Scorll

[better-scroll](https://better-scroll.github.io/docs/zh-CN/) 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件,它的核心是借鉴的 iscroll 的实现。

## 安装

### npm 安装

```sh
npm install better-scroll --save
```
#### node_modules 引入

```js
import BScroll from 'better-scroll'
```
#### ES5 引入
```js
var BScroll = require('better-scroll')
```

### script 加载

better-scroll 也支持直接用 script 加载的方式，加载后会在 window 上挂载一个 BScroll 的对象。

```js
<script src="https://unpkg.com/better-scroll@latest/dist/better-scroll.min.js"></script>
```

## 基本使用 

将要滚动的内容放在父容器下的第一个容器，如图所示：
![](https://i.loli.net/2021/10/31/H7TDOX5VJQYgdct.png)
绿色部分为 wrapper，也就是父容器，它会有固定的高度。黄色部分为 content，它是**父容器的第一个子元素**，将要滚动的内容用 content 包裹。

```HTML
<body>
	<div class="wrapper">
		<ul>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
			<li>商品</li>
		</ul>
	</div>
</body>
```

```JS
<script src="https://unpkg.com/better-scroll@latest/dist/better-scroll.min.js"></script>
<script>
		let bs = BetterScroll.createBScroll(document.querySelector('.wrapper'), {})
</script>
```

```CSS
    <style>
			.wrapper{
				background-color: antiquewhite;
				height: 400px;
				overflow: hidden;
			}
    </style>
```
## 进阶使用

### 监听滚动

默认情况下BScroll不可以实时监听滚动位置，使用 `probe` 侦测  

probeType: 
* 0,1都是不侦测实时位置
* 2是在手指滚动的过程中监测，手指离开后的惯性滚动过程不监测
* 3是只要滚动，都监测

```js
let bscroll = BetterScroll.createBScroll(document.querySelector('.wrapper'), {
		probeType:3,
		})
		
		bscroll.on('scroll',(position) =>{
			 console.log(position)
		})
```

### 监听点击

默认情况下BScroll内部会阻止原生点击事件

```js
let bscroll = BetterScroll.createBScroll(document.querySelector('.wrapper'), {
		 click: true //点击
		})
```

### 上拉加载更多

使用`pullingUp`调用下拉最底部调用方法

```js
let bscroll = BetterScroll.createBScroll(document.querySelector('.wrapper'), {
		pullUpLoad: true //上拉加载更多
		})

		
		bscroll.on('pullingUp', function () {
		        console.log('上拉加载更多');
		        //发送网络请求，请求更多页的数据
		
		        //等请求完成，进行数据展示
		
		        //调用finishiPullUp()表示本次上拉加载完成，可以进行下次上拉加载更多，不调用这个的话，默认只能由一次上拉加载更多
		        setTimeout(function () {
		            bscroll.finishPullUp()
		        },2000)
		    })
```
### 解决图片重新计算滑动无效

#### observe-dom

开启对 content 以及 content 子元素 DOM 改变的探测。当插件被使用后，当这些 DOM 元素发生变化时，将会触发 scroll 的 refresh 方法。

```js
  import BScroll from '@better-scroll/core'
  import ObserveDOM from '@better-scroll/observe-dom'
  BScroll.use(ObserveDOM)

  new BScroll('.bs-wrapper', {
    //...
    observeDOM: true // 开启 observe-dom 插件
  })
```

#### observe-image

开启对 wrapper 子元素中图片元素的加载的探测。无论图片的加载成功与否，都会自动调用 BetterScroll 的 refresh 方法来重新计算可滚动的宽度或者高度,对于已经用 CSS 确定图片宽高的场景，不应该使用该插件，因为每次调用 refresh 对性能会有影响。只有在图片的宽度或者高度不确定的情况下，你才需要它。

```js
 import BScroll from '@better-scroll/core'
 import ObserveImage from '@better-scroll/observe-image'
  BScroll.use(ObserveImage)

  new BScroll('.bs-wrapper', {
    //...
    observeImage: true // 开启 observe-image 插件
  })
```