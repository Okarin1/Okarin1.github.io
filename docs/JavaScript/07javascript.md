---
title: JavaScript Web APIs
date: 2021-02-08
categories:
 - JavaScript
tags:
 - JavaScript
---

 ## Web API 

浏览器预留的接口

## DOM简介

处理HTML的编程接口 用来改变页面的内容、结构和样式

### 通过id获取元素

```html

<body>
    <div id="time">2021-10-3</div>
    <script>

        // 1. 因为我们文档页面从上往下加载，所以先得有标签 所以我们script写到标签的下面
        // 2. get 获得 element 元素 by 通过 驼峰命名法 
        // 3. 参数 id是大小写敏感的字符串
        // 4. 返回的是一个元素对象


        var timer = document.getElementById('time');
        console.log(timer); //<div id="time">2021-10-3</div>
        console.log(typeof timer); //object


        // 5. console.dir 打印我们返回的元素对象 更好的查看里面的属性和方法
        console.dir(timer);

    </script>
</body>


```

### 通过标签名获取元素

```html

<body>
    <ul>
        <li>送报少年</li>
        <li>送报少年</li>
        <li>送报少年</li>
        <li>送报少年</li>
    </ul>
    
    <script>
        // 1.返回的是 获取过来元素对象的集合 以伪数组的形式存储的
        var lis = document.getElementsByTagName('li');
        console.log(lis);
        console.log(lis[0]);
        // 2. 我们想要依次打印里面的元素对象我们可以采取遍历的方式
        for (var i = 0; i < lis.length; i++) {
            console.log(lis[i]);
        }
    </script>
</body>

```

:::warning
如果页面中只有一个li 返回的还是伪数组的形式 
如果页面中没有这个元素 返回的是空的伪数组的形式
:::

#### 获取子元素

```html
<body>

    <ol id="ol">
        <li>生僻字</li>
        <li>生僻字</li>
        <li>生僻字</li>
        <li>生僻字</li>

    </ol>

    <script>
       
        //  element.getElementsByTagName('标签名'); 父元素必须是指定的单个元素
        // var ol = document.getElementsByTagName('ol'); // 报错[ol]
        // console.log(ol[0].getElementsByTagName('li'));


        var ol = document.getElementById('ol');
        console.log(ol.getElementsByTagName('li'));
    </script>
</body>

```

:::warning
父元素必须是指定的单个元素
:::

### 通过HTML5的方式获取

#### 根据类名获得某些元素集合 getElementsByClassName()

```js

 // 1. getElementsByClassName 根据类名获得某些元素集合
        var boxs = document.getElementsByClassName('box');
        console.log(boxs);

```

#### 返回指定选择器的第一个元素对象  querySelector() 

```js

// 2. querySelector 返回指定选择器的第一个元素对象  切记 里面的选择器需要加符号 .box  #nav
        var firstBox = document.querySelector('.box');
        console.log(firstBox);
        var nav = document.querySelector('#nav');
        console.log(nav);
        var li = document.querySelector('li');
        console.log(li);

```
:::warning
 切记 里面的选择器需要加符号 .box 类  #nav id
:::

#### 返回指定选择器的所有元素对象集合 querySelectorAll()

```js

// 3. querySelectorAll()返回指定选择器的所有元素对象集合
        var allBox = document.querySelectorAll('.box');
        console.log(allBox);
        var lis = document.querySelectorAll('li');
        console.log(lis);

```

### 获取特殊元素

```js

        // 1.获取body 元素
        var bodyEle = document.body;
        console.log(bodyEle);
        console.dir(bodyEle);
        // 2.获取html 元素
        // var htmlEle = document.html;
        var htmlEle = document.documentElement;
        console.log(htmlEle);

```




