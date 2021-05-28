---
title: Vue.js 事件绑定
date: 2021-04-06
categories:
 - Vue.js
tags:
 - Vue.js 
 - Vue语法
---

## 指令 v-on

>Vue使用 `v-on` 指令监听DOM事件，开发者可以将事件代码通过 `v-on` 指令绑定到 DOM 节点上。


### 实例

**HTML**
```HTML
<div id="app">
  <button v-on:click="logInfo()">打印消息(默认消息)</button>
  <br>
  <br>
  <button v-on:click="logInfo('这是一条自定义消息')">打印消息(自定义消息)</button>
  <br>
  <br>
  <button v-on:click="console.log('这是一条控制台消息')">打印消息(控制台消息)</button>
</div>
```
**JS**
```JS
let vm = new Vue({
    el: '#app',
    methods: {
      logInfo (msg) {
        console.log(msg || '这是一条默认消息') 
      }
    }
  })
```
#### 运行结果
![](https://i.loli.net/2021/05/28/CmGL1OydNUJQRcS.png)
![](https://i.loli.net/2021/05/28/AWZQKU4dCX19Vls.png)
![](https://i.loli.net/2021/05/28/oFiwIsOSDYHPCn9.png)
![](https://i.loli.net/2021/05/28/iDO2nW8HTEFgUxp.png)
![](https://i.loli.net/2021/05/28/q6ZTbvfRuxenNVt.png)
![](https://i.loli.net/2021/05/28/peZkUbHN6WTB4M1.png)

## 常见修饰符
* .stop：等同于JavaScript中的event.stopPropagation()，防止事件冒泡
* .prevent：等同于JavaScript中的event.preventDefault()，防止执行预设的行为（如果事件可取消,则取消该事件，而不停止事件的进一步传播）
* .capture：与事件冒泡的方向相反，事件捕获由外到内
* .self：只会触发自己范围内的事件，不包含子元素
* .once：只会触发一次
  

### 实例

**HTML**
```HTML
<div id="app">
  <form @submit="handleSubmit">
    <h2>不使用修饰符时</h2>
    <button type="submit">提交</button>
  </form>

  <form @submit.prevent="handleSubmit">
    <h2>使用.prevent修饰符时</h2>
    <button type="submit">提交</button>
  </form> 
</div>
```
**JS**
```JS
let vm = new Vue({
    el: '#app',
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      handleSubmit () {
        console.log(`submit ${++this.counter} times`)
      }
    }
  })
```
#### 运行结果

![](https://i.loli.net/2021/05/28/3QLHX7GOfNlZbry.png)

![](https://i.loli.net/2021/05/28/oYlLamH58UnpcSZ.png)

#### 总结
不使用.prevent修饰符时，未指定form表单的action时，表单会被提交到当前的URL,对应的表现就是页面重新加载。使用.prevent修饰符时，页面没有被重新加载。

## 按键修饰符

>Vue允许将按键键值作为修饰符来使用，如绑定按键：


```
<input @keyup.enter="submit">
```

* .enter => // enter键
* .tab => // tab键
* .delete (捕获“删除”和“退格”按键) => // 删除键
* .esc => // 取消键
* .space => // 空格键
* .up => // 上
* .down => // 下
* .left => // 左
* .right => // 右

## 组合修饰符
>仅在以下修饰符对应的按键被按下时，才会触发鼠标或键盘事件监听器

```
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">做一些操作</div>
```

* .ctrl
* .alt
* .shift
* .meta

### 实例

**HTML**
```HTML
<div id="app">
  <button  @click="logSingle" >点击此处</button>
</div>
```
**JS**
```JS
let vm = new Vue({
    el: '#app',
    methods: {
      logSingle (event) {
        if (!event.ctrlKey) {
          console.log('点击！')
        } 
		else
		{
			console.log('ctrl+点击！')
		}
     }
```
#### 运行结果
单击时

![](https://i.loli.net/2021/05/28/5lQuq9fYn1FBeJc.png)

ctrl+单击时

![](https://i.loli.net/2021/05/28/hkbi9KOSMfXwGxZ.png)