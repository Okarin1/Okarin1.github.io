---
title: Vue.js 起步
date: 2021-04-02
categories:
 - Vue
tags:
 - Vue
---


## Vue.js实例


> 每个 Vue 应用都需要通过实例化 Vue 来实现。语法格式如下：

##### 语法

```
var vm = new Vue({
  // 选项
}
```

##### 实例

**HTML**

```html
<div id="App">
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>{{details()}}</h1>
</div>
```

**JS**

```js
var vm = new Vue({
        el: '#App',
        data: {
            site: "送报少年",
            url: "okarin.cn"
        },
        methods: {
            details: function() {
                return  this.site + " - EL PSY CONGROO!";
            }
        }
    })
```
运行结果

```
site : 送报少年
url : okarin.cn
送报少年 - EL PSY CONGROO!！
```

>可以看到在 Vue 构造器中有一个el 参数，它是 DOM 元素中的 id。在上面实例中 id 为 App，在 div 元素中：

```html
<div id="App">
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>{{details()}}</h1>
</div>
```

其中data 用于定义属性，实例中有两个属性分别为：site、url

methods 用于定义的函数，可以通过 return 来返回函数值。

{{ }} 用于输出对象属性和函数返回值。

