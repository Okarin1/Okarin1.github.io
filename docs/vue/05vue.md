---
title: Vue.js v-model双向绑定
date: 2021-04-04
categories:
 - Vue
tags:
 - Vue
---

## 双向绑定

### v-model
```html
      <input type="text"  v-model="message">
      <h2>{{message}}</h2>
```

### 双向绑定的原理
通过监听input事件，拿到event.target.value，更新message的值。
```html
  <input type="text"  :value="message" @input="inputChange">
  <h2>{{message}}</h2>
```
```js
  methods:{
          inputChange(event){
            this.message = event.target.value
          }
        }
```

### v-model绑定其他表单

```html
<div id='box'>
	<input type="checkbox" v-model="checkgroup" value="vue"/>vue
	<input type="checkbox" v-model="checkgroup" value="react"/>react
	<input type="checkbox" v-model="checkgroup" value="jquery"/>jquery
</div>
```

```js
new Vue({
    el:'#box',
    data:{
        checkgroup:[];
    }
})
```

### v-model修饰符

1. lazy

取代 `input` 监听 `change` 事件

```html
<div id='box'>
    <input v-model.lazy='mytext'>
    <!-- 这里的mytext不会实时修改而是在input失去焦点的时候才会修改-->
    {{mytext}} 
</div>
```
2. number

输入字符串转为有效的数字

```html
<input type="number" v-model.number="mynumber"/>
{{mynumber}}
```

3. trim

输入首尾空格过滤

```html
<input type="text" v-model.trim="myusername"/>
|{{myusername}}|  
```