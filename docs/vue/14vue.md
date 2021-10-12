---
title: Vue.js 全局组件和局部组件
date: 2021-04-13
categories:
 - Vue.js
tags:
 - Vue.js 
 - Vue语法
---

# 组件注册

## 创建组件构造器对象

调用Vue.extend创建一个组件构造器

```HTML

const cpnC = Vue.extend({
				template:
					`<div>
						<h2>Okarin</h2>
						<p>EL PSY CONGROO !!</p>
						 <img src="https://github-readme-stats.vercel.app/api?username=okarin1&show_icons=true" alt="Anurag's GitHub stats">
						 <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=okarin1&layout=compact" alt="Top Langs">
					</div>
					`
			})

```

## 组件名

在注册一个组件的时候，我们始终需要给它一个名字。比如在全局注册的时候我们已经看到了：

```js

Vue.component('my-cpn' , cpnC)

```

该组件名就是 `Vue.component` 的第一个参数。



### 组件名大小写

定义组件名的方式有两种：

#### 使用 kebab-case

```js
Vue.component('my-component-name', { /* ... */ })
```

当使用 kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case，例如 ``。

#### 使用 PascalCase

```js
Vue.component('MyComponentName', { /* ... */ })
```

当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 `` 和 `` 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。

## 使用组件

```HTML

<my-cpn></my-cpn>

```



## 全局注册 语法糖

到目前为止，我们只用过 `Vue.component` 来创建组件：

Vue.component()创建组件

```js
Vue.component('my-component-name', {
  // ... 选项 ...
})
```

这些组件是**全局注册的**。也就是说它们在注册之后可以用在任何新创建的 Vue 根实例 (`new Vue`) 的模板中。比如：

```js
Vue.component('component-a', { /* ... */ })
Vue.component('component-b', { /* ... */ })
Vue.component('component-c', { /* ... */ })

new Vue({ el: '#app' })
<div id="app">
  <component-a></component-a>
  <component-b></component-b>
  <component-c></component-c>
</div>
```

在所有子组件中也是如此，也就是说这三个组件*在各自内部*也都可以相互使用。



## 局部注册

全局注册往往是不够理想的。比如，如果你使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用一个组件了，它仍然会被包含在你最终的构建结果中。这造成了用户下载的 JavaScript 的无谓的增加。


在 `components` 选项中定义你想要使用的组件：

```js
<script src="vue.js"></script>
		<script type="text/javascript">
			const cpnC = Vue.extend({
				template:
					`<div>
						<h2>Okarin</h2>
						<p>EL PSY CONGROO !!</p>
					</div>
					`
			})
			
			const app = new Vue({
				el: '#app1',
				data: {
						name:'Okairn'
				      },
				components:{
					cpn:cpnC
				}
			})
		</script>
```

对于 `components` 对象中的每个属性来说，其属性名就是自定义元素的名字，其属性值就是这个组件的选项对象。

#### 局部组件的使用

```HTML

	<div id="app1">
		<cpn></cpn>
	</div>
	
	<div id="app2">
		<cpn></cpn>
	</div>

```

### 局部注册 语法糖

```js

const app = new Vue({
				el: '#app1',
				data: {
						name:'Okairn'
				      },
				components:{
					cpn:{  //对象
          template:
					`<div>
						<h2>Okarin</h2>
						<p>EL PSY CONGROO !!</p>
					</div>
					`}
				}
			})

```



在上面的实例中，id 为 app2 的 div 不能使用 app1 创建的局部组件。

### 父组件和子组件

:::warning
注意: **局部注册的组件在其子组件中\*不可用\***。例如，如果你希望 `ComponentA` 在 `ComponentB` 中可用，则你需要这样写：
:::


```js
var ComponentA = { /* ... */ }

var ComponentB = {
  /* ... */
  components: {
    'component-a': ComponentA
  },
  // ...
}
```

**示例代码**

```HTML

	<div id="app">
		<cpn2></cpn2>
	</div>

```



```js

const cpnC1 = Vue.extend({   //子组件
							template:
								`<div>
									<h2>Okarin</h2>
									<p>EL PSY CONGROO !!</p>
								</div>
								`
						})
			
			const cpnC2 = Vue.extend({  //父组件
							template: 
								`<div>
									<h2>Retr0</h2>
									<p>EL PSY CONGROO !!</p>
									<cpn1></cpn1>
								</div>
								`,
			          components: {
			            cpn1: cpnC1   //在父组件中注册子组件
			         }
				})
			
			const app = new Vue({
							el: '#app',
							data: {
									name:'Okairn'
							      },
							components:{
								cpn2:cpnC2   //注册父组件
							}
						})
			      
      
```

从而在父组件中调用子组件



或者如果你通过 Babel 和 webpack 使用 ES2015 模块，那么代码看起来更像：

```js
import ComponentA from './ComponentA.vue'

export default {
  components: {

    ComponentA

  },
  // ...
}
```

注意在 ES2015+ 中，在对象中放一个类似 `ComponentA` 的变量名其实是 `ComponentA: ComponentA` 的缩写，即这个变量名同时是：

- 用在模板中的自定义元素的名称
- 包含了这个组件选项的变量名


## 组件抽离

>template模块写法比较麻烦，如果能将其中的HTML分离出来写,然后挂载到对应的组件上,必然结构会变得非常清晰。
- Vue提供了两种方案来定义HTML模块内容:
  * 使用`<script>`标签


```js

<script type="text/x-template" id="myCpn">
			<div>
				<h2>Okarin</h2>
				<p>EL PSY CONGROO !</p>
			</div>
		</script>
		<script src="vue.js"></script>
    <script type="text/javascript">
    const app = new Vue({
							el: '#app',
							data: {
									name:'Okairn'
							      },
							components:{
								cpn1:{
									template:'#myCpn'
								}
							}
						})
			      
		</script>

```

  * 使用`<template>`标签

```js

		<template id="myCpn">
			<div>
				<h2>Okarin</h2>
				<p>EL PSY CONGROO !</p>
			</div>
		</template>

```

