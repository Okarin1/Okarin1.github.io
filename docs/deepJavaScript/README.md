---
title: JavaScript 进阶学习笔记
date: 2021-12-02
categories:
 - JavaScript
tags:
 - JavaScript
sticky: 3
---

<!-- more -->

## JavaScript 在浏览器是如何被执行的？

### 浏览器下载资源

![](https://i.loli.net/2021/12/02/e7HWC1xYyEBi4nU.png)

域名经过解析变成ip地址（服务器地址），服务器就会返回一个index.html文件，浏览器解析html时会下载对应的资源。

### 浏览器内核

![](https://i.loli.net/2021/12/02/2tKqDLuvnU1SCxz.png)

**浏览器内核**指的是浏览器的**排版引擎**（layout engine），又称**浏览器引擎**，**页面渲染引擎**，**样版引擎**。



#### 浏览器渲染过程



![](https://i.loli.net/2021/12/02/5WjPIVgvqtOsmhu.png)

浏览器下载HTML文件之后进行解析，通过**HTML解析器**（ HTML Parser） 和 **CSS解析器**（ CSS Parser ）对 HTML 和 CSS 进行解析,形成 **DOM树**（DOM Tree）和**CSS规则** （CSS Tree），结合在一起生成一棵 **渲染树**（Render Tree）,再通过**布局引擎**（Layout）对渲染树进行操作（比如不同设备的宽度问题）。有了最终的渲染树就会进行 **绘制**（Painting）,最后进行展示（Display）。

在这个过程中，JS可以对DOM进行操作，会由**JavaScript 引擎**来对JS代码进行解析。



### JavaScript 引擎

![](https://i.loli.net/2021/12/02/MEHvufZnbq7Uroc.png)

**JavaScript引擎**会把JavaScript代码转换为机器可以执行的**机器语言**。

![](https://i.loli.net/2021/12/02/Afkg5QqyTn6DUcL.png)



#### 浏览器引擎和 JS 引擎的关系

![image-20211202173611546](https://s2.loli.net/2022/02/07/14jgMnamkviFTWf.png)

#### V8引擎

![](https://i.loli.net/2021/12/02/GjsvhYmbrWuZAeN.png)

##### V8引擎架构

[V8引擎详细的解析执行过程](https://zhuanlan.zhihu.com/p/111386872/)

![image-20211202174329105](https://s2.loli.net/2022/02/07/UyBgsbH1iVDhXkW.png)

**V8引擎**对JavaScript源代码进行**解析**，进行词法分析（生成tokens，包含type，value等）和语法分析，然后生成 **抽象语法树**（AST）,然后通过 **字节码解释器**（Ignition）将抽象语法树转换成 **字节码**（bytecode）（因为JS运行环境是不一定的，不同的环境可能拥有不同的CPU，能执行的机器指令是有区别的，所以转换成能跨平台的字节码，然后转换成汇编语言，最后再转换成不同平台的机器码）。**而对于多次执行的JS代码**，会通过**优化编译器**（TurboFan）来生成 **优化后的机器码**，直接进行执行，来提升性能。（而当函数执行操作不一致时，通过 **动态反优化** （ Deoptimization） 重新转换成字节码，所以对应参数传值性能更高，如TS）。



![image-20211202181114208](https://s2.loli.net/2022/02/07/Pp9X83diNyvkFOQ.png)

##### V8引擎的解析图（官方）

![](https://i.loli.net/2021/12/03/EFZ6eqwcj4kf73n.png)

**内核**（Blink）遇到  **JS** 会下载下来传递给 JS 引擎，Stream获取到源码并进行编码转换，然后 **扫描器**（Scanners）会进行词法分析和语法分析。

**预解析**（PreParser）：有些代码不运行，没有必要转化成AST树，会简单对这些代码进行预解析。

![](https://i.loli.net/2021/12/03/lKqg1YVX24nriUx.png)

### JS执行过程

#### GlobalObject (GO)

在执行JS代码时，进行解析生成**AST**的阶段，会创建一个**GlobalObject**（比如全局的String,Date,Number，setTimeout以及全局**var**等）

![](https://i.loli.net/2021/12/03/ZPXvhrWqT1dsnAb.png)

在这个阶段，会把定义的全局对象进行赋值为**undefined**.

![](https://i.loli.net/2021/12/03/b9yBY6VGMglFp4S.png)

#### 执行上下文栈

为了执行代码，V8引擎会有一个**执行上下文栈**（Execution Context Stack ）（ECStack）(函数调用栈)，所有的函数执行都要被加载到ECStack里面进行执行。

#### 全局执行上下文

为了全局代码能够正常执行，需要创建**全局执行上下文**（Global Execution Context ）(GEC)，会把全局执行上下文 放到 执行上下文栈 里面执行。

![](https://i.loli.net/2021/12/03/T7g8uf1ViIsdl3Z.png)

![](https://i.loli.net/2021/12/03/4UbM9vhZBeDIS1m.png)



##### Variable Object（VO）

VO可以看作指向GO对象，开始执行代码时会在VO中进行查找，会对应在GO中进行查找替换。

 

#### 全局代码执行过程（函数）

在编译过程中，在GO中普通的变量（如name）会赋值为`undefined`，而遇到**函数**时，也会生成一个属性，但**不会赋值**，而是另外创建一个**内存空间**来存储函数，会创建一个对象（**函数对象**），会保存一个**父级作用域**以及**函数的执行体**（代码块）。

**所以，函数的作用域是在编译时就确定了，跟函数在哪里被调用无关**

![](https://i.loli.net/2021/12/03/nmOihkMtfXube4Z.png)

在执行遇到函数时，在VO中查询，对应在GO中找到这个函数，会找到对应的内存空间。会在 **ECStack** 里面创建一个 **函数执行上下文** （**FEC**），在 FEC 里面存在一个 **AO** 活跃对象（Activation Object），会把函数里面的变量赋值为`undefined`

在函数执行时会在FEC里面的 **VO**+**父级作用域中** 查询，对应在**AO+父级作用域**中找到进行操作。

![](https://i.loli.net/2021/12/03/K6xUYtRPO3Z2krC.png)



**同时**：当查找一个变量时，真实的查找路径时沿着作用域链来一层一层查找。

当函数完毕之后会函数执行上下文弹出栈，销毁掉FEC。

### 环境变量和记录

#### 早期版本

![](https://i.loli.net/2021/12/03/qbYlESxjmOkdrJg.png)

#### 新版

![](https://i.loli.net/2021/12/03/JwkZHaKWFISpNP5.png)



VO => VE  
