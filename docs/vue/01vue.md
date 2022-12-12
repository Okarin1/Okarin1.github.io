---
title: Vue2/Options API 基础指令
date: 2021-03-31
categories:
 - Vue
tags:
 - Vue
---

## 基础指令

### Mustache语法

基础用法
```html
  <h2>{{message}}</h2>
```
配合methods,或者computed使用，也可以配合表达式或者三元运算符使用
```html
  <h2>{{getReverseMessage()}}</h2>
```
```html
  <h2>{{isShow ? "show" : " "}}</h2>
```

### v-once
>用于指定元素或者组件只渲染一次

数据发生变化时，元素或者组件以及子元素都将被视为静态内容跳过。

可以用于性能优化。
```html
  <h2 v-once>{{counter}}</h2>
```

### v-text
跟mustache差不多，但Mustache更灵活

```html
<h2 v-text="counter"></h2>
```

### v-html

用于渲染html

```html
 <div v-html=" message"></div>

```

```js
  message: "<h2>Hello World</h2>",
```

### v-pre
显示原始元素内容
```html
 <h2 v-pre>{{message}}</h2>
```
显示效果
```
{{message}}
```

### v-cloak
这个指令会保持在元素上直到关联组件实例结束编译。

和CSS规则`[v-cloak]{display:none}`一起使用时，可以隐藏未编译的Mustache标签

```html
  <h2 v-cloak>{{message}}</h2>
```

## v-bind 与 v-on
### v-bind
v-bind可以进行属性绑定，动态的决定属性

例如：a标签的href属性，img的src属性

语法糖: `:`
```js
 <a v-bind:href="link">我的博客</a>
 <img :src="imgUrl"></img>
```
 
### v-bind绑定class

对象语法 可以控制值来实现动态绑定
`{'active':boolean}`

```html
 <h2 :class="{'active':isActive}">{{message}}</h2>
```

数组语法
```html
 <h2 :class="['red',red,isActive ? 'active' : '']">{{message}}</h2>
```
### v-bind绑定style

对象语法

```html
 <h2 :style="{color:"red",fontSize:'33px'}">{{message}}</h2>
```
**注意：如果使用cabecase短横线`fint-size`,需要用使用引号`'font-size'`**


数组语法
```html
 <h2 :style="[styleObj1,styleObj2]">{{message}}</h2>
```

### v-bind动态绑定属性名

```html
   <div :[name]="value">{{message}}</div>
```
```js
data() {
          return {
            message: "Hello World",
            name:"foo",
            value:"bar"
          };
```

### v-bind动态绑定一个对象

```html
 <h2 v-bind="info">{{message}}</h2>
```
```js
  info: {
              name: "oakrin",
              age: 18,
              height: 1.88,
            },
```

### v-on 事件绑定
>v-on用于事件交互，比如点击，拖拽，键盘事件等

写法:v-on:监听的事件="methods中的方法"

语法糖：`@`

### v-on 参数传递

```html
<button @click="add">+1</button>
<button @click="add($event,'aaa')">+1</button>
```
```js
  methods:{
    add(e,msg){
      this.count = this.count +1
      console.log(e,msg)
    }
  }
```

#### v-on 修饰符


常见修饰符
* .stop：等同于JavaScript中的event.stopPropagation()，防止事件冒泡
* .prevent：等同于JavaScript中的event.preventDefault()，防止执行预设的行为（如果事件可取消,则取消该事件，而不停止事件的进一步传播）
* .native: 监听组件根元素的原生事件
* .capture：与事件冒泡的方向相反，事件捕获由外到内
* .self：只会触发自己范围内的事件，不包含子元素
* .once：只会触发一次