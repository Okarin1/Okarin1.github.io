---
title: 巧妙的JavaScript时间格式化
date: 2021-11-12
sidebar: 'auto'
categories:
 - JavaScript
tags:
 - JavaScript
---

# 时间格式化

在服务器返回时间时，通常会以时间戳的格式返回。而我们需要显示时间时，我们通常需要对服务器返回的时间戳进行格式化。

## 内置对象 Date()

JS提供了日期对象 Date(),当我们获取到了时间戳，我们可以通过new一个 Date(时间戳*1000) 来将时间戳转换成日期对象，再通过Date的内置函数来获取相应的时间。

```js
var date = new Date(1636700135*1000) //当前时间戳
console.log( date.getFullYear())
```

## 格式化时间
但是，在实际开发中，由于格式化时间是很常用的功能，所以常常进行封装。

### 自己写的的时间格式化

* 手写格式化日期

```js
function formatDate(date, fmt) {
	const dataState = date*1000
	var date = new Date(dataState);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var dates = date.getDate();
	return year + fmt + month + fmt + dates + ' ' + getTimer(date)
	        function getTimer(date) {
	            var time = date
	            var h = time.getHours();
	            h = h < 10 ? '0' + h : h;
	            var m = time.getMinutes();
	            m = m < 10 ? '0' + m : m;
	            var s = time.getSeconds();
	            s = s < 10 ? '0' + s : s;
	            return h + ':' + m + ':' + s;
	        }
};

```
### 巧妙的日期格式化

```js
function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};
```

### 添'0'操作

通过在str前面添0,同时在剪去str长度的元素 

```js
str = ('00' + str).substr(str.length) //9->009->09
```

判断str的是否小于10，是则添0

```js
str = str < 10 ? '0' + str : str 
```