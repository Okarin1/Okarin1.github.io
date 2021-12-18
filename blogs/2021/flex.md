---
title: Flex 布局小记
date: 2021-11-17
sidebar: 'auto'
categories:
 - CSS
tags:
 - Flex布局
---

<!-- more -->

## Flex布局

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![](https://i.loli.net/2021/11/20/dsexJCz8D6r2j73.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

Flex布局练习游戏：[http://flexboxfroggy.com/#zh-cn](http://flexboxfroggy.com/#zh-cn)

Flex布局骰子案例：[https://codepen.io/LandonSchropp/pen/KpzzGo](https://codepen.io/LandonSchropp/pen/KpzzGo)

## 容器的属性

### flex-direction属性

`flex-direction`属性决定主轴的方向（即项目的排列方向）。

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
演示：

<div class="box box-1">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
</div>

### flex-wrap属性

默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行.

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
1. `nowrap`（默认）：不换行。

<div class="box box-2">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
    <div class="box-item">5</div>
    <div class="box-item">6</div>
    <div class="box-item">7</div>
</div>

2. `wrap`：换行，第一行在上方。

<div class="box box-3">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
    <div class="box-item">5</div>
    <div class="box-item">6</div>
    <div class="box-item">7</div>
</div>

3. `wrap-reverse`：换行，第一行在下方。

<div class="box box-4">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
    <div class="box-item">5</div>
    <div class="box-item">6</div>
    <div class="box-item">7</div>
</div>

### flex-flow属性

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row` `nowrap`。

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```
<div class="box box-5">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
    <div class="box-item">5</div>
    <div class="box-item">6</div>
    <div class="box-item">7</div>
</div>

### justify-content属性

`justify-content`属性定义了项目在主轴上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
1. `flex-start`（默认值）：左对齐

<div class="box box-6">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
</div>

2. `flex-end`：右对齐

<div class="box box-7">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
</div>

3. `center`： 居中

<div class="box box-8">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
</div>

4. `space-between`：两端对齐，项目之间的间隔都相等。

<div class="box box-9">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
</div>

5. `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

<div class="box box-10">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
</div>

### align-items属性

`align-items`属性定义项目在交叉轴上如何对齐。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

1. `flex-start`：交叉轴的起点对齐。

<div class="box box-11">
    <div class="box-item">1</div>
    <div class="box-item item-tall">2</div>
    <div class="box-item">3</div>
    <div class="box-item item-tall">4</div>
</div>

2. `flex-end`：交叉轴的终点对齐。

<div class="box box-12">
    <div class="box-item">1</div>
    <div class="box-item item-tall">2</div>
    <div class="box-item">3</div>
    <div class="box-item item-tall">4</div>
</div>

3. `center`：交叉轴的中点对齐。
   
<div class="box box-13">
    <div class="box-item">1</div>
    <div class="box-item item-tall">2</div>
    <div class="box-item">3</div>
    <div class="box-item item-tall">4</div>
</div>

4. `baseline`: 项目的第一行文字的基线对齐。

<div class="box box-14 line">
    <div class="box-item">1</div>
    <div class="box-item item-tall">2</div>
    <div class="box-item">3</div>
    <div class="box-item item-tall">4</div>
</div>

5. stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

<div class="box box-15">
    <div class="box-item">1</div>
    <div class="box-item item-tall">2</div>
    <div class="box-item">3</div>
    <div class="box-item item-tall">4</div>
</div>

### align-content属性

`align-content`属性定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {
   align-content: flex-start | flex-end | center | space-between | space-around | stretch; 
}
```

1. flex-start：交叉轴的起点对齐。

<div class="box box-tall box-16">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
    <div class="box-item">5</div>
    <div class="box-item">6</div>
    <div class="box-item">7</div>
    <div class="box-item">8</div>
    <div class="box-item">9</div>
</div>

2. `flex-end`：与交叉轴的终点对齐。

<div class="box box-tall box-17">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
    <div class="box-item">5</div>
    <div class="box-item">6</div>
    <div class="box-item">7</div>
    <div class="box-item">8</div>
    <div class="box-item">9</div>
</div>

3. `center`：与交叉轴的中点对齐。

<div class="box box-tall box-18">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
    <div class="box-item">5</div>
    <div class="box-item">6</div>
    <div class="box-item">7</div>
    <div class="box-item">8</div>
    <div class="box-item">9</div>
</div>

4. `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。

<div class="box box-tall box-19">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
    <div class="box-item">5</div>
    <div class="box-item">6</div>
    <div class="box-item">7</div>
    <div class="box-item">8</div>
    <div class="box-item">9</div>
</div>

5. `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。

<div class="box box-tall box-20">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
    <div class="box-item">5</div>
    <div class="box-item">6</div>
    <div class="box-item">7</div>
    <div class="box-item">8</div>
    <div class="box-item">9</div>
</div>

6. `stretch`（默认值）：轴线占满整个交叉轴。

<div class="box box-tall box-21">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item">4</div>
    <div class="box-item">5</div>
    <div class="box-item">6</div>
    <div class="box-item">7</div>
    <div class="box-item">8</div>
    <div class="box-item">9</div>
</div>

## 项目的属性

### order属性

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```css
.item {
  order: <integer>; 
}
```
1. 

<div class="box box-22">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
    <div class="box-item order">4<div class="orde">(order:-1)</div></div>
</div>

### flex-grow属性

`flex-grow`属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。
如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

<div class="box box-23">
    <div class="box-item grow">1 <div class="orde">flex-grow: 1</div></div>
    <div class="box-item grow grow-2">2 <div class="orde">flex-grow: 2</div></div>
    <div class="box-item grow">3 <div class="orde">flex-grow: 1</div></div>
</div>

### flex-shrink属性

`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```
如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

<div class="box box-24">
    <div class="box-item shrink">1 <div class="orde">flex-shrink: 0</div></div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
</div>

### flex-basis属性

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

<div class="box box-25">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item">3</div>
</div>

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

### flex属性

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### align-self属性

`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

<div class="box box-26">
    <div class="box-item">1</div>
    <div class="box-item">2</div>
    <div class="box-item end">3<div class="orde">flex-end</div></div>
    <div class="box-item">4</div>
</div>


## 参考

本文参考：[Flex 布局示例](http://static.vgee.cn/static/index.html)


<style>

.box {
    background-color: #f3f4f2;
    width:60%;
    margin: 0 0 25px ;
    display: flex;

}

.box-tall {
    height: 400px;
}
.box-item {
    width: 100px;
    height: 100px;
    line-height: 100px;
    vertical-align: middle;
    margin: 5px!important;
    background-color: #3eaf7c;
    font-size: 50px;
    color: white;
    text-align: center;
}
.item-tall {
    height: 200px;
    line-height: 200px;
}


.box-1 {
    flex-direction: row;
}

.box-2 {
    flex-direction: row;
    flex-wrap: nowrap;
}

.box-3 {
    flex-direction: row;
    flex-wrap: wrap;
}

.box-4 {
    flex-direction: row;
    flex-wrap: wrap-reverse;
}

.box-5 {
    flex-flow: row nowrap;
}

.box-6 {
    justify-content: flex-start;
}
.box-7 {
    justify-content: flex-end;
}
.box-8 {
    justify-content: center;
}
.box-9 {
    justify-content: space-between;
}
.box-10 {
    justify-content: space-around;
}

.box-11 {
    align-items: flex-start;
}
.box-12 {
    align-items: flex-end;
}
.box-13 {
    align-items: center;
}
.box-14 {
    align-items: baseline;
}
.box-14 .box-item{
    font-size: 80px;
    line-height: initial;
    text-decoration: underline;
}
.box-14 .item-tall{
    font-size: 100px;
    line-height: initial;
}
.box-15 {
    align-items: stretch;
}
.box-15 .box-item {
    height: auto;
}

.box-16 {
    flex-wrap: wrap;
    align-content: flex-start;
}
.box-17 {
    flex-wrap: wrap;
    align-content: flex-end;
}
.box-18 {
    flex-wrap: wrap;
    align-content: center;
}
.box-19 {
    flex-wrap: wrap;
    align-content: space-between
}
.box-20 {
    flex-wrap: wrap;
    align-content: space-around;
}
.box-21 {
    flex-wrap: wrap;
    align-content: stretch;
}
.box-21 .box-item {
    height: auto;
}

.box-22 .order {
    order: -1;
}
.box-item div{
    font-size: 14px;
    position: relative;
    top: -150px;
}

.box-23 .box-item{
    flex-grow: 1;
    width: auto;
}
.box-23	.grow-2 {
    flex-grow: 2;
}

.box-24 .box-item {
    width: 200px;
}
.box-24 .shrink{
    flex-shrink: 0;
}

.box-25 .box-item {
    flex-basis: 100px;
    width: 200px; 
}

.box-26 {
    height: 200px;
}
.box-26 .box-item {
    align-self: flex-start;
}
.box-26 .end {
    align-self: flex-end;
}
.orde{
  margin-top:80px!important;
}
</style>
