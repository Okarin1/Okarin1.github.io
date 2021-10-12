---
title: Vue.js  v-for 列表渲染
date: 2021-04-08
categories:
 - Vue.js
tags:
 - Vue.js 
 - Vue语法
---


# 列表渲染

## v-for

- **预期**：`Array | Object | number | string | Iterable (2.6 新增)`

- **用法**：

  基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 `alias in expression` ，为当前遍历的元素提供别名：

  ```html
  <div v-for="item in items">
    {{ item.text }}
  </div>
  ```

  另外也可以为数组索引指定别名 (或者用于对象的键)：

  ```html
  <div v-for="(item, index) in items"></div>
  <div v-for="(val, key) in object"></div>
  <div v-for="(val, name, index) in object"></div>
  ```


```html
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<div id="app">
		<p v-for="(a,b,c) in info">{{c+1}}. {{b}} : {{a}}</p> 
    <!-- 值，键，索引 -->
	</div>
		<script src="vue.js"></script>
		<script type="text/javascript">
			const app = new Vue({
				el: '#app',
				data: {
						info:{
							name:'zhou',
							age:18
						}
				      },
				
			})
		</script>
	</body>

```

## v-for 使用和添加 key

  `v-for` 的默认行为会尝试原地修改元素而不是移动它们。要强制其重新排序元素，你需要用特殊属性 `key` 来提供一个排序提示，从而更高效的更新虚拟DOM：

  ```html
  <div v-for="item in items" :key="item.id">
    {{ item.text }}
  </div>
  ```


  从 2.6 起，`v-for` 也可以在实现了[可迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)的值上使用，包括原生的 `Map` 和 `Set`。不过应该注意的是 Vue 2.x 目前并不支持可响应的 `Map` 和 `Set` 值，所以无法自动探测变更。

  当和 `v-if` 一起使用时，`v-for` 的优先级比 `v-if` 更高。详见[列表渲染教程](https://cn.vuejs.org/v2/guide/list.html#v-for-with-v-if)

  `v-for` 的详细用法可以通过以下链接查看教程详细说明。

- **参考**：

  - [列表渲染](https://cn.vuejs.org/v2/guide/list.html)
  - [key](https://cn.vuejs.org/v2/guide/list.html#key)


1. 跟踪每个节点的身份，从而重用和重新排序现有元素

2. 理想的 key 值是每项都有的且唯一的 id。 data.id



## 数组更新检测 响应式

1. 使用以下方法操作数组，可以检测变动：

   - push() 追加元素 可以追加多个元素 
      
      `push('a','b','c')`
      
   - pop() 删除最后一个元素
   - shift() 删除首个元素
   - unshift() 在首部添加元素 可以添加多个元素 

      `unshift('a','b','c')`

   - splice() 从自定义位置删除,添加或替换元素
     - 删除元素：第二个参数传入你要删除几个元素（如果没传，就删除后面所有） splice(2,3)
     - 替换元素：第二个参数，表示我们要替换几个元素，后面是用于替换前面的元素 splice(2,3,'m','n','l')
     - 添加元素：第二个参数为0时，从开始位置添加元素 splice(2,0,'a','b','c')
  
      `splice(index,chick,items)`

   - sort() 排序 
   - reverse() 反转

2.  使用以下方法操作数组，无法检测到变动

   - filter()
   - concat()
   - slice() 
   - map()
   - 新数组替换旧数组
   - 通过索引值改变数组元素

3. 不能检测以下变动的数组

   ```js
   vm.items[indexOfItem] = newValue//是无法渲染页面的
   ```

   解决方案

   1. Vue.set(example1.items, indexOfItem, newValue)    

   2. splice

      ```js
      vm.items.splice(indexOfItem,1,newValue)
      ```

## v-for 案例

* 不使用排他思想进行点击变色

```html
<style>
 .names{
	 color: red;
 }
</style>

</head>
<body>
<div id="app">
  <div>
    <ul>
      <li :class="{names: currentIndex === index }" 
			@click="btnClick(index)" 
			v-for="name, index in names">{{ name }}</li>
    </ul>
  </div>
```

```js
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="text/javascript">
  let vm = new Vue({
    el: '#app',
    data () {
      return {
        names:['okarin','haruka','miyu'],
		currentIndex:0
      }
    },
	methods:{
		btnClick:function(index){
			this.currentIndex = index
		}
	}
  })
</script>
</body>

```


### 购物车案例

```html

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<link rel="stylesheet"  href ="style.css" >
		
	<style type="text/css">
		table{
					border: 1px solid #E9E9E9;
					border-collapse: collapse;
					border-spacing: 0;
				}
		th,td {
					padding: 8px 16px;
					border: 1px solid #E9E9E9;
					text-align: left;
				}
		th {
					background-color: #F7F7F7;
					color: #5C6B77;
					font-weight: 600;
			}
	</style>
	</head>
	<div id="app">
		<div v-if="books.length">
		<table>
			<thead>
				<tr>
					<th></th>
					<th>书籍名称</th>
					<th>出版日期</th>
					<th>价格</th>
					<th>购买数量</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item,index in books">
					<td>{{item.id}}</td>
					<td>{{item.name}}</td>
					<td>{{item.date}}</td>	
					<td>{{item.price | showPrice}}</td>
					<td> 
					<button type="button" @click="decrement(index)" v-bind:disabled="item.count <= 1">-</button>
					{{item.count}}
					<button type="button" @click="increment(index)">+</button>
					</td>
					<td><button type="button" @click="removeHandle(index)">移除</button></td>
				</tr>
			</tbody>
		</table>
		<h2>总价格：{{totalPrice | showPrice}}</h2>
		</div>
		<h2 v-else>购物车为空</h2>
	</div>
		<script src="vue.js"></script>
		<script type="text/javascript">
			const app = new Vue({
				el: '#app',
				data: {
						books:[
							{
								id:1,
								name:'《Android项目开发》',
								date: '2002-2',
								price:85.00,
								count:1
							},
							{
								id:2,
								name:'《Vue.js开发指南》',
								date: '2004-2',
								price:92.00,
								count:1
							},
							{
								id:3,
								name:'《Python程序设计》',
								date: '2005-2',
								price:65.00,
								count:1
							},
							{
								id:4,
								name:'《HTML5+CSS3+JavaScript从入门到精通》',
								date: '2006-2',
								price:95.00,
								count:1
							},
							
						],
						
				      },
				methods:{
						// getFinalPrice:function(price){
						// 	return '￥'+price.toFixed(2)
						//    },
						increment(index){
							this.books[index].count++
							// console.log('increment',index)
						},
						decrement(index){
							this.books[index].count--
							// console.log('decrement',index)
						},
						removeHandle(index){
							this.books.splice(index,1) 
						 }
				},
				computed:{
					totalPrice() {
						let totalPrice = 0
						for(let i = 0 ; i < this.books.length; i++){
							totalPrice += this.books[i].price * this.books[i].count
						}
						return totalPrice
					}
				},
				filters:{
						showPrice(price){
							return '￥'+price.toFixed(2)
						}
				}
				
			})
		</script>
	</body>
</html>

```