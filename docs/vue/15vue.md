---
title: Vue.js 组件通信 子传父 双向绑定
date: 2021-04-15
categories:
 - Vue.js
tags:
 - 组件通信
---

# 自定义事件

## 事件名

不同于组件和 prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。举个例子，如果触发一个 camelCase 名字的事件：

```js
this.$emit('myEvent')
```

则监听这个名字的 kebab-case 版本是不会有任何效果的：

```js
<!-- 没有效果 -->
<my-component v-on:my-event="doSomething"></my-component>
```

不同于组件和 prop，事件名不会被用作一个 JavaScript 变量名或属性名，所以就没有理由使用 camelCase 或 PascalCase 了。并且 `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成 `v-on:myevent`——导致 `myEvent` 不可能被监听到。

因此，我们推荐你**始终使用 kebab-case 的事件名**。


### 案例

```HTML

<div id="app">
		<cpn1 :my-title="title" :my-info = "info" @item-click = "cpnClick"></cpn1> 
    <!-- 使用kebab-case 的事件名 -->
</div>

		
<template id="myCpn">
	<div>
		<h2>{{myTitle}}</h2>
		<button v-for = "item in myInfo" @click="btnClick(item)">{{item.name}}</button> 
	</div>
</template>
<script src="vue.js"></script>


<script type="text/javascript">
	const cpn1 = Vue.extend({
					template:'#myCpn',
					props:['myTitle','myInfo'],
					methods:{
						btnClick(item){
								this.$emit('item-click',item) //完全匹配监听这个事件所用的名称 与监听事件一致
						}
					}
				})
				

const app = new Vue({
			el: '#app',
			data: {
					title:'OKarin',
					info:[
						{id:'a',name:'手机'},
					  {id:'b',name:'手表'},
						{id:'c',name:'电脑'},
						]
			      },
			components:{
				cpn1
			},
			methods:{
				cpnClick(item){
					console.log(item.name) //打印名称
				}
			}
		})
     
</script>

```



## 自定义组件的`v-model` 双向绑定

> 2.2.0+ 新增

### V-model 语法糖

v-model实现了表单输入的双向绑定

```HTML

 <div id="app">
     <input v-model="price">
 </div>

```

```js

 new Vue({
     el: '#app',
     data: {
          price: ''
     }
 });

```
通过该语句实现price变量与输入值双向绑定,实际上v-model只是一个语法糖，真正的实现是这样的：

```html

<input type="text" 
　　　　　　:value="price" 
　　　　　　@input="price=$event.target.value">

```

以上代码分几个步骤：

1. 将输入框的值绑定到price变量上，这个是单向绑定，意味着改变price变量的值可以改变input的value，但是改变value不能改变price
2. 监听input事件（input输入框都有该事件，当输入内容时自动触发该事件），当输入框输入内容就单向改变price的值
   
这样就实现了双向绑定。

### 父子组件中的双向绑定

```HTML

<div id="app"> 
    <!-- <price-input v-model="price"></price-input> -->

     <!-- 手动实现了v-model双向绑定 -->
     <!-- 3、父组件的input事件被触发，将传来的值赋给父组件的变量price -->
     <!-- 4、父组件value的值绑定到price -->
     <price-input :value="price" @input="onInput"></price-input>
     <p>{{price}}</p>
</div>

```

```js

Vue.component('price-input', {
     // 5、将父组件的value值通过props传递给子组件
     // 1、当有数据输入时触发了该组件的input事件
     template: '<input :value="value" @input="updateVal($event.target.value)" type="text">',
     props: ["value"], 
     methods: {
          updateVal: function(val) {
             // 2、手动触发父组件的input事件并将值传给父组件
             this.$emit('input', val);  
          }
      }
 });
 var app = new Vue({
      el: '#app',
      data: {
          price: ''
      },
      methods: {
           onInput: function(val) {
                this.price = val;
           }
       }
  });

```

- 当有数据输入时触发了该组件的input事件
- 手动触发父组件的input事件并将值传给父组件
- 父组件的input事件被触发，将传来的值赋给父组件的变量price，实现输入框value到父元素的price的单向绑定
- 父组件value的值绑定到price 
- 将父组件的value值通过props传递给子组件，实现了父组件的price到子组件value的单向绑定

#### 案例

```HTML

<div id="app">
  <h2>data:{{num}}</h2>
  <cpn1 :cpnum="num" @numchange = 'numChange'></cpn1>
</div>

		
<template id="myCpn">
	<div>
		<h2>props:{{cpnum}}</h2>
		<h2>cpdata:{{dnum}}</h2>
		<input :value ="dnum" @input="cpnInput"></input>
	</div>
</template>

<script src="vue.js"></script>
<script type="text/javascript">
	const cpn1 = Vue.extend({
					template:'#myCpn',
					props:{
						cpnum:Number
					},
					data(){
						return{
							dnum:this.cpnum
							}
						},
						methods:{
							cpnInput(event){
								this.dnum = event.target.value
								this.$emit('numchange',this.dnum)
							}
						}
				})
				

const app = new Vue({
			el: '#app',
			data: {
				num:1
			},
			components:{
				cpn1
			},
			methods:{
				numChange(value){
					this.num = parseFloat(value)
				}
			}
		})
	      
</script>


```


一个组件上的 `v-model` 默认会利用名为 `value` 的 prop 和名为 `input` 的事件，但是像单选框、复选框等类型的输入控件可能会将 `value` attribute 用于[不同的目的](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Value)。`model` 选项可以用来避免这样的冲突：

```js
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
```

现在在这个组件上使用 `v-model` 的时候：

```html
<base-checkbox v-model="lovingVue"></base-checkbox>
```

这里的 `lovingVue` 的值将会传入这个名为 `checked` 的 prop。同时当 `base-checkbox` 触发一个 `change` 事件并附带一个新的值的时候，这个 `lovingVue` 的属性将会被更新。

注意你仍然需要在组件的 `props` 选项里声明 `checked` 这个 prop。