---
title: Vue.js 组件化
date: 2021-04-05
categories:
 - Vue
tags:
 - Vue

---

## 组件化

### 父子组件传值
>使用props进行传值

1. 使用字符串数组

```js
props:["title","content"]
```
2. 对象类型,可以对传入的值的进行限制

```js
props:{
  title: String,
  content:{
    type:String,  //类型
    required:true, //必传
    default:"123" //默认
  }
}

```

可以使用type、require、default来限制传入的值。

如果传入的值是**对象或者数组**，那么默认值必须从一个**工厂函数**获取。

```js
    props: {
      type: Object,//Array
      // 对象或数组默认值必须从一个工厂函数获取 不然会报错
      default() {
        return { message: 'hello' }
      }
    },
```

这是为了防止在多次使用组件时，使用同一个对象。

### Prop的大小写命名

在 HTML 中的标签的大小写是不敏感的，所以浏览器会将所有的大写字符解释为小写字符。
所以在使用时要使用短横线连接。