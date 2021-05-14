---
title: Vue.js 响应式
date: 2021-04-03
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




