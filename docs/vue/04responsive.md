---
title: Vue.js 响应式
date: 2021-04-03
categories:
 - Vue.js
tags:
 - Vue.js
---

## 数据响应式原理

>一方面指衍生数据和元数据之间的响应，一方面指视图与数据之间的绑定。

## Vue.js数据链

>Vue实例提供 computed 计算属性，来生成衍生数据对象。虽然计算属性以 `函数` 形式声明，却不接受参数，只能以 `属性` 的方式调用。

>计算属性的 this 对象指向Vue实例，可以用来获得实例上已挂载的`可见属性`。


##### 实例

**HTML**

```html
<div id="app">
			<p><strong class="data-lable">A</strong><input type="text" v-model.number =  "a"></p>
			<p><strong class="data-lable">B</strong><input type="text" v-model.number =  "b"></p>
			<p><strong class="data-lable">C=A*2+2</strong>{{ c }}</p>
			<p><strong class="data-lable">D=A+B*2</strong>{{ d }}</p>
		</div>
```

JS

```js
let vm = new Vue({
				el:'#app',
				data:{
					a:3,
					b:4
				},
				computed:{
					c(){
						return this.a*2+2
					},
					d(){
						return this.a+this.b*2
					},
				}
			})
```

## 计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：

```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 `message` 的翻转字符串。当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。

所以，对于任何复杂逻辑，你都应当使用**计算属性**。

## 实例

```html
<div id="box">
    {{myname.substring(0,1).toUpperCase() + myname.substring(1)}}

    <p>计算属性：{{getName}}</p>
    <p>计算属性：{{getName}}</p>

    <p>方法：{{getNameMethod()}}</p>
    <p>方法：{{getNameMethod()}}</p>
</div>	
```

```js
var vm =  new Vue({
    el:"#box",
    data:{
        myname:"Okarin"
    },
    methods: {
        getNameMethod(){
            console.log("getNameMethod")
            return this.myname.substring(0,1).toUpperCase() + this.myname.substring(1)
        }
    },
    computed: {
        getName(){
            console.log("getName-computed")
            return this.myname.substring(0,1).toUpperCase() + this.myname.substring(1)
        }
    },
})
```



## 计算缓存 VS methods

1. 计算属性是基于它们的依赖进行缓存的
2. 计算属性只有在它的相关依赖发生改变时才会重新求值



## get() set()

```html
<div id='box'>
    <input type='checkbox' v-model='isAllChecked'>
</div>
```

```js
new Vue({
    el:'#box',
    data:{
        check:false
    },
    computed:{
        isAllChecked:{
            get(){
                //...doSomeThings
                return some //必须要return
            },
            set(newvalue){
                //doSomeThing(newValue)
            }
        }
    }
})
```




