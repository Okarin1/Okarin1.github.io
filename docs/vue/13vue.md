---
title: Vue.js 组件介绍
date: 2021-04-12
categories:
 - Vue.js
tags:
 - Vue.js 
 - Vue语法
---

# 组件介绍

![image-20200214190256593](https://cn.vuejs.org/images/components.png)



## 组件化的意义

扩展 HTML 元素，封装可重用的代码



## 组件注册方式

### 全局组件

> 全局注册的组件可以用在其被注册之后的任何 (通过 `new Vue`) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。

这里有一个 Vue 组件的示例：

```js
Vue.components('navbar',{
    template:`<div>{{myname}}</div>`,//html结构
   	data(){
        return {
            myname:'retr0'
        }
    }
})
```

组件是可复用的 Vue 实例，且带有一个名字：在这个例子中是 `navbar`。我们可以在一个通过 `new Vue` 创建的 Vue 根实例中，把这个组件作为自定义元素来使用：

```html
<div id="box">
    <navbar></navbar>
</div>
```

```js
new Vue({ el: '#box' })
```

因为组件是可复用的 Vue 实例，所以它们与 `new Vue` 接收相同的选项，例如 `data`、`computed`、`watch`、`methods` 以及生命周期钩子等。仅有的例外是像 `el` 这样根实例特有的选项。



### 局部组件

这里有一个局部Vue组件的实例：

```js
new Vue({
    el:'#box',
    components:{
        child1:{
            template:`<div>{{myname}}</div>`,
            data(){
                return {
                    myname:'retr0Child'
                }
            }
        }
    }
})
```



## data必须是一个函数

当我们定义这个 `navbar` 组件时，你可能会发现它的 `data` 并不是像这样直接提供一个对象：

```js
data: {
    myname:'retr0'
}
```

取而代之的是，**一个组件的 `data` 选项必须是一个函数**，因此每个实例可以维护一份被返回对象的独立的拷贝：

```js
data(){
    return {
        myname:'retr0'
    }
}
```


