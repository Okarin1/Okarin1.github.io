---
title: Vue.js 计算属性
date: 2021-04-02
categories:
 - Vue
tags:
 - Vue
---


## 计算属性

在模板中可以直接通过插值语法显示一些data中的数据。但在某些情况下，需要对数据转化起来进行显示。为了不使模板臃肿和难以维护。于是就可以将逻辑抽离出去。抽取到methods或者计算属性中。

>对于任何包含响应式数据的复杂逻辑，你都应该使用计算属性。计算属性将被混入到组件实例中。所有的getter和setter的this上下文自动地绑定为组件实例。

```html
    <template id="my-app">
      <h2>{{getFullName()}}</h2>
      <h2>{{fullName}}</h2>
      <h2>{{getReverseMessage()}}</h2>
      <h2>{{reverseMeassage}}</h2>
    </template>
```

```js
data() {
          return {
            message: "Hello World",
            firstName: "kobe",
            lastName: "Bryant",
            message: "Hello World",
          };
        },
methods: {
  getFullName() {
    return this.firstName + this.lastName;
  },
  getReverseMessage() {
    return this.message.split(" ").reverse().join(" ");
  },
},
computed: {
  fullName() {
    return this.firstName + this.lastName;
  },
  reverseMeassage() {
    return this.message.split(" ").reverse().join(" ");
  },
},
```

### 计算属性的性能提升
1. 计算属性是有缓存的，当多次使用计算属性时，计算属性中的运算只会执行一次。
2. 计算属性只有在它的相关依赖发生改变时才会重新求值

### 计算属性的 getter 与 setter

```js
  fullName:{
          set: function(newValue){
              const names = newValue.split(' ');
              this.firstName = names[0];
              this.lastName = names[1];
          },
          get: function(){
          return this.firstName + ' ' + this.lastName
          }

          // fullName: function(){
          // return this.firstName + ' ' + this.lastName
          // }

            }
```
>Vue会对计算属性的类型进行判断，如果计算属性是一个函数，那么就会使用bind重新绑定this，然后返回一个新的函数。所以计算属性看起来像是一个函数。
