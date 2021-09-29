---
title: JavaScript 数据类型
date: 2021-02-01
categories:
 - JavaScript
tags:
 - JavaScript　
 - js类型转换
---

## JavaScript初体验

1、HTML是网页的结构，CSS是网页的外观，而JavaScript是页面的行为。

2、HTML页面是静态的（只供浏览），平常我们所见到的各种网页特效就是使用JavaScript实现的。

```html

title>Document</title>
    <style></style>
    <!-- 2.内嵌式的js -->
    <script>
         alert('送报少年');
    </script>
    <!-- 3. 外部js script 双标签 -->
    <script src="my.js"></script>
</head>

<body>
    <!-- 1. 行内式的js 直接写到元素的内部  -->
    input type="button" value="点击" onclick="alert('送报少年')"
</body>


```

## js注释

```
        // 1. 单行注释  ctrl + /
        /* 2. 多行注释  默认的快捷键 shift +  alt  + a
              多行注释  
        */
```

## js输入输出语句

```js

        // 这是一个输入框
        prompt('请输入您的年龄');
        // alert 弹出警示框 输出的 展示给用户的
        alert('计算的结果是');
        // console 控制台输出 给程序员测试用的  
        console.log('我是程序员能看到的');

```

## js变量

```js
        // 1. 声明了一个age 的变量 
        var age;
        // 2. 赋值  把值存入这个变量中
        age = 18;
        // 3. 输出结果 
        console.log(age);
        // 4. 变量的初始化 
        var myname = '送报少年';
        console.log(myname);
```
### 命名规范

关键字 不能作为变量名如 var for  while if

尽量不要直接使用name 作为变量名

严格区分大小写：

```js

    var app = 10;
    var App = 100;
    console.log(app);
    console.log(App);

```

### js变量实例

交换两个变量值

```js

        // js 是编程语言有很强的逻辑性在里面： 实现这个要求的思路 先怎么做后怎么做 
        // 1. 我们需要一个临时变量帮我们
        // 2. 把apple1 给我们的临时变量 temp 
        // 3. 把apple2 里面的苹果给 apple1 
        // 4. 把临时变量里面的值 给 apple2 
        var temp; // 声明了一个临时变量为空
        var apple1 = '青苹果';
        var apple2 = '红苹果';
        temp = apple1; // 把右边给左边
        apple1 = apple2;
        apple2 = temp;
        console.log(apple1);
        console.log(apple2);


```

### 变量的数据类型


基本数据类型包括以下3种：

* 数字型（Number型）：如整型84，浮点型3.14；
* 字符串型（String型）：如 "送报少年"；
* 布尔型（Boolean型）：true或fasle；
  
特殊数据类型有3种：

* 空值（null型）；
* 未定义值（undefined型）；
* 转义字符；




```js

    // var num; // 这里的num 我们是不确定属于哪种数据类型的
        var num = 10; // num 属于数字型 
        // js 的变量数据类型是只有程序在运行过程中，根据等号右边的值来确定的
        var str = 'pink'; // str 字符串型
        // js是动态语言 变量的数据类型是可以变化的
        var x = 10; // x 是数字型 
        x = 'pink'; // x 字符串型

```
## 运算符

JavaScript的运算符按运算符类型可以分为以下5种：

* 算术运算符；

* 比较运算符；

* 赋值运算符；

* 逻辑运算符；

* 条件运算符；
  
### typeof运算符
typeof运算符用于返回它的操作数当前所容纳的数据的类型，这对于判断一个变量是否已被定义特别有用。

```js
typeof(1) //返回值是number
typeof("javascript") //返回值是string
```

## 类型转换

#### 转换为字符型

* 把数字型转换为字符串型 变量.toString()
```js
        var num = 10;
        var str = num.toString();
        console.log(str);
        console.log(typeof str);
```
* 利用String(变量)
  
```js
        var str = String(num);
		console.log(str);
		console.log(typeof str);
```
* 利用 + 拼接字符串的方法实现转换效果 隐式转换

```js
        var str = num + '';
		console.log(str);
		console.log(typeof str);
```

#### 转换为数字型

* parseInt(变量)  可以把 字符型的转换为数字型 得到是整数
```js
        console.log(parseInt('3.14')); // 3 取整
        console.log(parseInt('3.94')); // 3 取整
        console.log(parseInt('120px')); // 120 会去到这个px单位
        console.log(parseInt('rem120px')); // NaN
```
* parseFloat(变量) 可以把 字符型的转换为数字型 得到是小数 浮点数
  
```js
        console.log(parseFloat('3.14')); // 3.14
        console.log(parseFloat('120px')); // 120 会去掉这个px单位
        console.log(parseFloat('rem120px')); // NaN
```
* 利用 Number(变量) 

```js
        var str = '123';
        console.log(Number(str));
        console.log(Number('12'));
```
*  利用算数运算 -  *  /  隐式转换

```js
        console.log('12' - 0); // 12
        console.log('123' - '120');//3
        console.log('123' * 1);//123
```

#### 转换为布尔型

```js
        console.log(Boolean('')); // false
        console.log(Boolean(0)); // false
        console.log(Boolean(NaN)); // false
        console.log(Boolean(null)); // false
        console.log(Boolean(undefined)); // false
        console.log('------------------------------');
        console.log(Boolean('123'));//true
        console.log(Boolean('你好吗'));//true
        console.log(Boolean('我很好'));//true

```

