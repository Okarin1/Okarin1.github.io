---
title: Vue.js 过滤器 filters 和 混入 Mixins
date: 2021-04-10
categories:
 - Vue.js
tags:
 - Vue.js 
 - Vue语法
---

# filters

Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：**双花括号插值**和 `v-bind` 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 `JavaScript` 表达式的尾部，由“管道”符号指示：

```HTML

<!-- 在双花括号中 -->
{{ item.price | showPrice }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>

```

```JS

filters:{
		showPrice(price){
			return '￥'+price.toFixed(2)
		}
}

```

+过滤器是 JavaScript 函数，因此可以接收参数：

```HTML

   {{ message | filterA('arg1', arg2) }}

```

这里，filterA 被定义为接收三个参数的过滤器函数。其中 message 的值作为第一个参数，普通字符串 'arg1' 作为第二个参数，表达式 arg2 的值作为第三个参数。


# Mixins

- **类型**：`Array`

- **详细**：

  `mixins` 选项接收一个混入对象的数组。这些混入对象可以像正常的实例对象一样包含实例选项，这些选项将会被合并到最终的选项中，使用的是和 `Vue.extend()` 一样的选项合并逻辑。也就是说，如果你的混入包含一个 created 钩子，而创建组件本身也有一个，那么两个函数都会被调用。

  Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。

- **示例**：

  ```html
  <body>
      <div id="box">
          <button @click='getName'>click</button>
      </div>
  </body>
  ```

  ```js
  // 定义一个混入对象
  let myMixin = {
      methods:{
          getName(){
              console.log(1)
          }
      }
  }
  new Vue({
      el:'#box',
      mixins:[myMixin]
  })
  ```

  

- **参考**：[混入](https://cn.vuejs.org/v2/guide/mixins.html)