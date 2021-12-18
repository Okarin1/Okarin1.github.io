---
title: Vue.js mustache 插值操作
date: 2021-04-04
categories:
 - Vue
tags:
 - Vue
---

# 插值绑定

>插值绑定是Vue.js中最常见，最基本的语法，绑定的内容主要有文本插值和HTML插值

## 文本插值

用两个左右花括号将要绑定的变量、值、表达式括住就可以实现

### 实例

**HTML**
```HTML
    <div id="app">
		<h1>{{ title }}</h1>
	</div>
```
**JS**
```JS
let vm = new Vue({
				el: '#app',
				data(){
					return{
						title:'HELLO'
					}
				}
			})
```
#### 运行结果
```
HELLO
```

## v-text

**HTML**
```html
  <div id="app">
		<h1 v-text></h1>
	</div>
```
**JS**
```JS
let vm = new Vue({
				el: '#app',
				data:{
						title:'HELLO'
				}
			})
```
#### 运行结果
```
HELLO
```


## HTML插值

HTML插值可以动态渲染DOM节点

#### 实例

**CSS**
```CSS
<style>
  .align-center {
    text-align: center;
  }
</style>
```
**HTML**
```HTML
<div id="app" style="width: 800px;margin: 0 auto;">
  <div>{{ blog }}</div>
  <hr>
  <div v-html="blog"></div>
</div>
```
**JS**
```JS
let vm = new Vue({
    el: '#app',
    data () {
      return {
        blog: `<h2 class="align-center">送报少年</h2>
          <p class="align-center">浮云柳絮无根蒂，天地阔远随飞扬。</p>`
      }
    }
  })
```
#### 运行结果
```
<h2 class="align-center">送报少年</h2> <p class="align-center">浮云柳絮无根蒂，天地阔远随飞扬。</p>

                                    送报少年
                        浮云柳絮无根蒂，天地阔远随飞扬。
```

可以看到，文本插值中的代码被解释为节点的文本内容，而HTML插值中的代码被渲染为视图节点。

# 插值操作 其他指令的使用

## v-once

> 不能继续用DOM渲染更改

## v-pre

>直接显示里面的内容


```html
  <div id="app">
		<h1 v-pre>{{ title }}</h1>
	</div>
```

```JS
let vm = new Vue({
				el: '#app',
				data:{
						title:'HELLO'
				}
			})
```

#### 运行结果

```
{{ title }}

```

## v-cloak

>渲染的时候会删除这个指令（属性），用于解决渲染过长的显示异常问题。

**案例**

```css

<style>
[v-cloak]{
  display:none;
}
</style>

```


```html
  <div id="app" v-cloak>
		<h1>{{ title }}</h1>
	</div>
```


```JS
setTimeout(function(){
let vm = new Vue({
				el: '#app',
				data:{
						title:'HELLO'
				}
			})
},1000)
```