---
title: Vue.js  v-bind 属性绑定
date: 2021-04-05
categories:
 - Vue
tags:
 - Vue

---

## 动态绑定指令v-bind

>DOM节点的基本属性可以用指令 `v-bind` 进行绑定

### 实例

**HTML**
```HTML
<div id="app" style="margin-left: 300px;">
  <h1 v-bind:title="title">模型</h1>
</div>
```
>同时 `v-bind` 可以省略不写，语法糖 ：

**HTML**
```HTML
<div id="app" style="margin-left: 300px;">
  <h1 :title="title">模型</h1>
</div>
```

**JS**
```JS
let vm = new Vue({
    el: '#app',
    data () {
      return {
        title: '危险勿触'
      }
    }
  })
```
#### 运行结果

![](https://i.loli.net/2021/05/26/T6WnY8GsU4rQyqO.png)

#### 总结
属性可以绑定变量，表达式，执行函数等内容，不过最终的结果都应该满足属性自身的约束。



## 类名绑定

::: theorem 类名和样式绑定

由于类名`class`和样式`style`在节点属性中是两个比较奇怪的存在(虽然它们可接受的类型都是字符串，但类名实际上是由数组拼接而成，而样式是由对象键值对拼接而成)，所以 Vue 在绑定类名和样式时也采用不一样的机制。

::: right
来自 《Vue.js从入门到项目实践》
:::


### 实例

**HTML**
```HTML
<style>
  .color-blue { color: royalblue; }
  .size-36 { font-size: 36px; }
  .style-italic { font-style: italic; }
</style>
<div id="app">
  <p class="color-blue size-36 style-italic">不要温顺的走进那个良夜</p>
  <p :class="classStr">不要温顺的走进那个良夜</p>
  <p :class="classArr">不要温顺的走进那个良夜</p>
  <p :class="classObj1">不要温顺的走进那个良夜</p>
  <p :class="classObj2">不要温顺的走进那个良夜</p>
</div>
```
**JS**
```JS
let vm = new Vue({
    el: '#app',
    data () {
      return {
        classStr: 'color-blue size-36 ', // 字符串
        classArr: ['size-36', 'style-italic'], // 数组
        classObj1: { // 对象，绑定类名
          'color-blue': true,
          'size-36': true,
          'style-italic':0
        },
        classObj2: { // 对象，未绑定类名
          'color-blue': 0,
          'size-36': true,
          'style-italic': 1
        }
      }
    }
  })
```
#### 运行结果
![](https://i.loli.net/2021/05/26/7936K4EIRUoeTp2.png)

#### 总结
>在使用对象绑定类名时，应将类名作为对象键名，当键名被判定为真时，类名将会被绑定到节点上。

#### 拓展
在js中，当变量值为 `undefind`、`null`、`值为0的数字`、`空字符串`时，也会被判定为假，除一般值外，`[]`、`{}`、`-1`、`-0.1`也会被判定为真。

#### 类名绑定实例 通过按钮切换颜色

```html

<style>
  .blue{
	  color: royalblue;
  }
  .red{
	  color: red; 
  }
</style>
<div id="app">
  
  <!-- <p v-bind:class="{blue: isBlue, red: isRed}">不要温顺的走进那个良夜</p> -->
  <p v-bind:class="getClasses()">不要温顺的走进那个良夜</p>
  <button type="button" v-on:click="btnClick">切换</button>
  
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="text/javascript">
  let vm = new Vue({
    el: '#app',
    data () {
      return {
		isBlue: true,
		isRed: false
      }
    },
	methods:{
		btnClick:function(){
			this.isBlue = !this.isBlue;
			this.isRed = !this.isRed;
		},
    getClasses:function(){
			return{
			blue: this.isBlue, 
			red: this.isRed,
			}
		}
	}
	
  })
</script>
</body>
</html>

```



## 样式绑定

### 实例

**HTML**
```HTML
<div id="app">
  <p style="color: gray;font-size: 36px;font-style: italic;">Hello World!</p>
  <p :style="styleStr">Hello World!</p>
  <p :style="styleObj1">Hello World!</p>
  <p :style="styleObj2">Hello World!</p>
  <p :style="{ 'font-size' : '36px', color : 'gray' }"> Hello World! </p>
  <p :style="{ fontSize : finalSize, color : finalSize }"> Hello World! </p>
  <!-- 加单引号 -->
</div>
```
**JS**
```JS
let vm = new Vue({
    el: '#app',
    data () {
      return {
        styleStr: 'color: red;font-size: 36px;font-style: italic;', // 拼接字符串
        styleObj1: { // 对象，绑定样式
          'color': 'gray' ,
          'font-size': '36px',
          'font-style': 'italic'
        },
        styleObj2: { // 对象，未绑定样式
          'color':'blue',
          'font-size': '36px' ,
          'font-style':'italic' 
        }
        finalSize:'100px',
        finalColor:'red',
      }
    }
  })
```
#### 运行结果
![](https://i.loli.net/2021/05/26/W3NykJ5pY8BESX1.png)






