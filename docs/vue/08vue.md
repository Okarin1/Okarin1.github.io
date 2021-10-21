---
title: Vue.js v-if v-show 条件渲染
date: 2021-04-07
categories:
 - Vue.js
tags:
 - Vue指令
---

# 条件渲染

## v-if

> 动态创建和删除

- **用法**：

  根据表达式的值的 [truthiness](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy) 来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 ` ，将提出它的内容作为条件块。

  当条件变化时该指令触发过渡效果。

  当和 `v-if` 一起使用时，`v-for` 的优先级比 `v-if` 更高。详见[列表渲染教程](https://cn.vuejs.org/v2/guide/list.html#v-for-with-v-if)

- **参考**：[条件渲染 - v-if](https://cn.vuejs.org/v2/guide/conditional.html)

```html
<div id="box">
    <div v-if="datalist.length">
        <ul>
            <li v-for='data in datalist'>
                {{data}}
            </li>
        </ul>
    </div>
</div>
```



## v-else

- **不需要表达式**

- **限制**：前一兄弟元素必须有 `v-if` 或 `v-else-if`。

- **用法**：

  为 `v-if` 或者 `v-else-if` 添加“else 块”。

  **可以用于购物车空空如也和有数据的状态切换**

  ```html
  <div v-if="Math.random() > 0.5">
      Now you see me
  </div>
  <div v-else>
      Now you don't
  </div>
  ```

- **参考**：[条件渲染 - v-else](https://cn.vuejs.org/v2/guide/conditional.html#v-else)

### v-if 与 v-else 表单input小问题

```html
<div id="app">
		<span v-if="isName">
			<label>账号登录</label>
			<input id="name" value="" placeholder="请输入账号" />
		</span>
		<span v-else>
			<label>邮箱登录</label>
			<input id="email" value="" placeholder="请输入邮箱" />
		</span>
		<button type="button" @click="isName = !isName">切换登录</button>
		
	</div>

```

```JS
		<script src="vue.js"></script>
		<script type="text/javascript">
			const app = new Vue({
				el: '#app',
				data: {
						isName:true
				      },
			})
		</script>

```
**原因**

当使用v-if进行切换时，已经输入的内容不会被清除。这是因为Vue在进行DOM渲染时，用于性能考虑.会尽可能的复用已经存在的元素，而不是重新创建新的元素。在上面的案例中, Vue内部会发现原来的input元表不再使用,直接作为else中的input来使用了。

**解决办法**

使用`key`属性

```html

			<label>账号登录</label>
			<input id="name" value="" placeholder="请输入账号"  key="name"/>

			<label>邮箱登录</label>
			<input id="email" value="" placeholder="请输入邮箱" key="email" />

```


## v-else-if

> 2.1.0 新增

- **类型**：`any`

- **限制**：前一兄弟元素必须有 `v-if` 或 `v-else-if`。

- **用法**：

  表示 `v-if` 的 “else if 块”。可以链式调用。

  **可以用于购物车的状态**

  ```html
  <div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>
  ```

- **参考**：[条件渲染 - v-else-if](https://cn.vuejs.org/v2/guide/conditional.html#v-else-if)



## template v-if

### [在元素上使用 `v-if` 条件渲染分组](https://cn.vuejs.org/v2/guide/conditional.html#在-lt-template-gt-元素上使用-v-if-条件渲染分组)

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 ` 元素当做不可见的包裹元素，并在上面使用 `v-if`。最终的渲染结果将不包含 ` 元素。

```html
<template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</template>
```



## v-show

- **预期**：`any`

- **用法**：

  根据表达式之真假值，切换元素的 `display` CSS 属性。

  当条件变化时该指令触发过渡效果。

- **参考**：[条件渲染 - v-show](https://cn.vuejs.org/v2/guide/conditional.html#v-show)


## v-if vs v-show

- v-if: 当条件为false时， 包含v-if指令的元素，根本就不会存在dom中
- v-show:当条件为false时，v-show只是给我们的元素添加一个行内样式: display: none
- 当切换频率高时使用v-show

