---
title: Vue2/Options API 条件渲染和列表渲染渲染
date: 2021-04-01
categories:
 - Vue
tags:
 - DOM
---

## 条件渲染

### v-if v-else v-else-if

>条件为true时，才会被渲染出来

渲染原理：当条件为false时，判断的内容完全不会被渲染或者会被销毁掉；当条件为true时，才会完全渲染条件块中的内容。

#### v-show

渲染原理：当条件为false时,将元素设置为`display:none`；

**v-show不支持template，v-show也不可以和v-else一起使用。**


## 列表渲染

### v-for 遍历数组
```html
  <ul>
    <li v-for="(item,index) in arr">{{index+1}}.{{item}}</li>
  </ul>
```
```js
 data() {
          return {
            arr:["abc","cba","nba"]
          };
      }
```

#### v-for 遍历对象

```html
 <li v-for="(value,key,index) in obj">{{index+1}}.{{key}}:{{value}}</li>
```
```js
 data() {
          return {
            obj: {name:"okarin",age:18,height:1.88}
          };
        }
```

### v-for与template

类似微信小程序的block，页面不会渲染，优化性能

### v-for 数组更新检测

Vue 会将被侦听的数组的变更方法进行包裹，所以他们也会触发视图更新。
包括直接修改数组的方法:`push()`、`pop()`、`shift()`、`unshift()`、`splice()`、`sort()`、`reverse()`。
替换数组的方法 `filter()`、`concat()`、`slice()`

### v-for的key 与 diff算法

主要是用于提升性能，详见[深入理解Vue中的key与diff算法](http://okarin.cn/blogs/2022/vue_key.html)
