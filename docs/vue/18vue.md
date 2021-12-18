---
title: Vue.js slot-插槽
date: 2021-04-23
categories:
 - Vue
tags:
 - Vue
---

# 组件的插槽

>是为了让我们封装的组件更加具有扩展性，让使用者可以决定组件内部的一些内容到底展示什么。

## 基本使用

```html

<template id="myCpn">
		<div>
			<h2>这是子组件</h2>
			<slot></slot>
			<h2>这是子组件</h2>
		</div>
	</template>

<div id="app">
		<cpn><h1>插槽测试</h1></cpn>
</div>

```

## 实例

```HTML

<div id="app">
		<cpn><h1>插槽测试标题</h1></cpn>
		<cpn><p>插槽测试文字</p></cpn>
		<cpn><input type="" name="" id="" value="" placeholder="插槽测试输入框" /></cpn>
	</div>

		
	<template id="myCpn">
		<div>
			<h2>这是子组件</h2>
			<slot></slot>
			<button type="button">查看</button>
		</div>
	</template>
		
			<script src="vue.js"></script>
			<script type="text/javascript">
				const cpn = Vue.extend({
								template:'#myCpn',
							})
							
	
				const app = new Vue({
								el: '#app',
								data: {
									name:'Retr0'
								},
								components:{
									cpn
								},		
							})
							
		</script>

```



## 具名插槽


- **Props**：

  - `name` - string，用于命名插槽。

- **Usage**：

  `` 元素作为组件模板之中的内容分发插槽。`` 元素自身将被替换。

  详细用法，请参考下面教程的链接。

- **参考**：[通过插槽分发内容](https://cn.vuejs.org/v2/guide/components.html#通过插槽分发内容)


### slot='val'

```html
<div id='box'>
    <child>
        <div slot='b'>标题</div> 
				<!-- 将name为b的插槽内容替换 -->
    </child>
</div>
```

```js
Vue.component("child",{
    template:`
		<div>
			<slot name='a'></slot>
			<slot name='b'></slot> //该插槽会被替换
			<slot name='c'></slot>
		</div>
	`,
})
```




### v-slot

```html
<div id='box'>
    <template v-slot:b><div slot='b'>标题</div> </template>
						<!-- 将name为b的插槽内容替换 -->
</div>
```

```js
Vue.component("child",{
    template:`
		<div>
			<slot name='a'></slot>
			<slot name='b'></slot> //该插槽会被替换
			<slot name='c'></slot>
		</div>
	`,
})
```
## 作用域插槽 

父组件替换插槽的标签，但是内容由子组件提供。

```HTML

	<div id="app">
		
		<cpn></cpn>
	
		<cpn>
			<template slot-scope = "cpn2"> 
				<!-- 通过slot-scope 获取子组件中的数据 -->
				<span>{{cpn2.data.join(' ')}}</span>
			</template>
		</cpn>

	</div>

		
<template id="myCpn">
<div>
<slot :data = "PLanguages"> 
	<ul>
		<li v-for="item in PLanguages">
			{{item}}
		</li>
  </ul>
</slot>
</div>
</template>

<script src="vue.js"></script>
<script type="text/javascript">
const cpn = Vue.extend({
				template:'#myCpn',
				data(){
					return{
						PLanguages:['Java','Python','C#','JavaScript']
					}
				}
			})
			

const app = new Vue({
				el: '#app',
				data: {
					name:'Retr0'
				},
				components:{
					cpn
				},		
			})
			
</script>

```


## slot抽屉效果

```html
<div id='box'>
    <child>
    	 <button @click='isshow=!isshow'>显示/隐藏</button>
    </child>
    <slidebar v-show='isshow'></slidebar>
</div>
```

```js
Vue.component('child',{
    template:`
		<div>
			<slot></slot>
		</div>
	`
})
Vue.component('slidebar',{
    template:`
		<ul>
			....
		</ul>
	`
})
new Vue({
	el:'@#box',
    data:{
        isshow:false
    }
})
```

