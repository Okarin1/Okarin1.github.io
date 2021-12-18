---
title: SCSS 学习笔记
date: 2021-11-25
sidebar: 'auto'
categories:
 - CSS
tags:
 - SCSS
---


## Sass 变量

变量用于存储一些信息，它可以重复使用。

Sass 变量可以存储以下信息：

- 字符串
- 数字
- 颜色值
- 布尔值
- 列表
- null 值

Sass 变量使用 **$** 符号：

```scss
$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;
```

就可以多次使用：

```scss
body {
	background-color: $bgcolor;
  	color: $textcolor;
  	font-size: $fontsize;
}
```

## Sass 作用域

Sass 变量的作用域只能在当前的层级上有效果

```scss
$myColor: red;

h1 {
  $myColor: green;   // 只在 h1 里头有用，局部作用域
  color: $myColor;
}

p {
  color: $myColor;
}
```

### !global

使用 **!global** 关键词来设置变量是全局的：

```scss
$myColor: red;

h1 {
  $myColor: green !global;  // 全局作用域
  color: $myColor;
}

p {
  color: $myColor;
}
```

## Sass 嵌套规则与属性

Sass 嵌套 CSS 选择器类似于 HTML 的嵌套规则

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

### Sass 嵌套属性

```scss
font: {
  family: Helvetica, sans-serif;
  size: 18px;
  weight: bold;
}

text: {
  align: center;
  transform: lowercase;
  overflow: hidden;
}
```

## Sass @import

Sass 可以帮助我们减少 CSS 重复的代码，节省开发时间。

创建一个 reset.scss 文件：

```
html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}
```

在另一个css里面使用导入（包含文件时不需要指定文件后缀，Sass 会自动添加后缀 .scss）

```scss
@import "reset";

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: red;
}
```
### Sass @mixin 与 @include

* @mixin 指令可以定义一个可以在整个样式表中重复使用的样式。

* @include 指令可以将混入（mixin）引入到文档中。

**创建混入**

```scss
@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}
```

**使用混入**

```scss
.danger {
  @include important-text;
  background-color: green;
}
```

混入中也可以包含混入，如下所示：

```scss
@mixin special-text {
  @include important-text;
  @include link;
  @include special-border;
}
```

### 向混入传递变量

混入可以接收参数。

定义可以接收参数的混入：

```scss
/* 混入接收两个参数 */
@mixin bordered($color, $width) {
  border: $width solid $color;
}

.myArticle {
  @include bordered(blue, 1px);  // 调用混入，并传递两个参数
}

.myNotes {
  @include bordered(red, 2px); // 调用混入，并传递两个参数
}
```

可变参数：

```scss
@mixin box-shadow($shadows...) {
      -moz-box-shadow: $shadows;
      -webkit-box-shadow: $shadows;
      box-shadow: $shadows;
}

.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
```

