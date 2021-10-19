---
title: Vue.js keep-alive
date: 2021-04-22
categories:
 - Vue.js
tags:
 - Vue.js 
 - Vue语法
---

# keep-alive

`<keep-alive>`是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。

>`<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 `<transition>` 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。

**prop:**

- include: 字符串或正则表达式。只有匹配的组件会被缓存。
- exclude: 字符串或正则表达式。任何匹配的组件都不会被缓存。
  
## 常见用法

```js
// 组件
export default {
  name: 'test-keep-alive',
  data () {
    return {
        includedComponents: "test-keep-alive"
    }
  }
}
```

```HTML
<keep-alive include="test-keep-alive">
  <!-- 将缓存name为test-keep-alive的组件 -->
  <component></component>
</keep-alive>

<keep-alive include="a,b">
  <!-- 将缓存name为a或者b的组件，结合动态组件使用 -->
  <component :is="view"></component>
</keep-alive>

<!-- 使用正则表达式，需使用v-bind -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 动态判断 -->
<keep-alive :include="includedComponents">
  <router-view></router-view>
</keep-alive>

<keep-alive exclude="test-keep-alive">
  <!-- 将不缓存name为test-keep-alive的组件 -->
  <component></component>
</keep-alive>
```




### keep-alive生命周期钩子函数：activated、deactivated

使用`<keep-alive>`会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在activated阶段获取数据，承担原来created钩子中获取数据的任务。