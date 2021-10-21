---
title: Vue.js Vuex
date: 2021-07-11
categories:
 - Vue.js
tags:
 - Vuex
---

## Vuex的核心概念

![](https://i.loli.net/2021/10/19/qxPoLCmrXiI8R5J.png)

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。他可以方便实现组件之间的数据共享。

![](https://i.loli.net/2021/10/19/zvbHWM6laQmLCNx.png)

## State

`state` 提供唯一的数据资源,所有的共享的数据都要统一放到`store` 中的`state`中进行存储.

### 组件中访问state第一种方式

```js
this.$store.state.全局数据名称
```

### 组件中访问state第二种方式

>从vuex中按需求导入mapState函数`import {mapState} from 'vuex'`
通过刚才导入的mapState函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性`computed :{ ...mapState(['count']) }`

## Mutation

`mutation`用于变更`store`中的数据
1. 只能通过mutation更Store数据，不可以直接操作Store中的数据。
2. 通过这种方式虽然操作起来稍微繁琐一些,但是可以集中监控所有数据的变化。

### 触发Mutations的第一种方式

`this.$store.commit()`

```js
//store.js中定义mutations
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
   add(state) {
   //更改状态
    state.count++
   }
  }
})
//组件中接收触犯mutations
methods: {
    add() {
      this.$store.commit('add')
    },

  },

//mutations可以传递参数
 mutations: {
   add2(state,step) {
    state.count += step
   }
  }
//触发带参数的mutation
methods: {
    add() {
      this.$store.commit('add',3)
    },

  }
```

### 触发Mutations的第二种方式：

**通过以函数映射的方式**

>1. 从vuex中按需求导入mapState函数
`import {mapMutations} from 'vuex'`
通过刚才导入的mapState函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性
>2. 将指定的mutations函数,映射为当前组件的methods函数
`methods:{ ...mapMutations(['add']) }`

## action

**用于处理异步任务**

如果通过异步操作变更数据，必须通过`Action`,而不能使用`Mutation`,但是在`Action`中还是要通过触发
`Mutation`的方式间接变更数据。

### 触发Actions的第一种方式

`this.$store.dispatch`

```js
//定义store.js 中定义action
  actions: {
    addAsync(context) {
      setTimeout(()=> {
        context.commit('add')
      },1000)
    }
  }

//在事件方法中通过dispatch触发action
add () {
    //  触发action
    this.$store.dispatch('addAsync')
  }
```

### 触发异步任务携带参数

```js
  mutations: {
   add(state,step) {
    state.count += step
   }
  },
  actions: {
    addAsync(context,step) {
      setTimeout(()=> {
        context.commit('add',step)
      },1000)
    }
  }
//触发action
add () {
    this.$store.dispatch('addAsync',5)
  }

```

### 触发Actions的第二种方式

**通过以函数映射的方式:**

>1. 从vuex中按需求导入mapState函数
`import {maptActions} from 'vuex'`
通过刚才导入的mapState函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性
>2. 将指定的mutations函数,映射为当前组件的methods函数
`methods:{ ...maptActions(['addAsync']) }`


## getter

Getter于对Store中的数据进行加工处理形成新的数据。他不会修改state中的原始数据起到的是包装数据的作用

1. Getter 可以对Store中已有的数据加工处理之后形成新的数据,类似Vue的计算属性。
2. Store 中数据发生变化，Getter 的数据也会跟着变化。

### 调用getters第一种方式

`this.$store.getters.名字`

```js
//组件中调用
 {{$store.getters.showNum}}
 //store.js中定义
   getters: {
    showNum (state){
      return `当前最新的数据${state.count}`
    }
  }
```
### 通过以函数映射的方式

>1. 从vuex中按需求导入mapState函数
`import {maptGetters} from 'vuex'`
通过刚才导入的mapState函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性
>2. 将指定的mutations函数,映射为当前组件的methods函数
`computed :{ ...maptGetters(['showNum']) }`

