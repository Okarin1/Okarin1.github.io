---
title: JavaScript 预解析与对象
date: 2021-02-06
categories:
 - JavaScript
tags:
 - JavaScript
---

## 预解析

* js引擎运行js 分为两步：  预解析  代码执行
  
1. 预解析 js引擎会把js 里面所有的 var  还有 function 提升到当前作用域的最前面
2. 代码执行  按照代码书写的顺序从上往下执行

* 预解析分为 变量预解析（变量提升） 和 函数预解析（函数提升）
  
1. 变量提升 就是把所有的变量声明提升到当前的作用域最前面  不提升赋值操作
2. 函数提升 就是把所有的函数声明提升到当前作用域的最前面  不调用函数


```js

        // 1问  
        console.log(num);//报错



        // 2问
        console.log(num); // undefined  坑 1
        var num = 10;
        // 相当于执行了以下代码
        // var num;
        // console.log(num);
        // num = 10;



        // 3问  
        function fn() {
            console.log(11);
        }
        fn();




        // 4问
        fun(); // 报错  坑2 
        var fun = function() {
                console.log(22);

            }
            // 函数表达式 调用必须写在函数表达式的下面


            // 相当于执行了以下代码
            // var fun;
            // fun();
            // fun = function() {
            //         console.log(22);

        //     }

        // 1. js引擎运行js 分为两步：  预解析  代码执行
        // (1). 预解析 js引擎会把js 里面所有的 var  还有 function 提升到当前作用域的最前面
        // (2). 代码执行  按照代码书写的顺序从上往下执行


        // 2. 预解析分为 变量预解析（变量提升） 和 函数预解析（函数提升）
        // (1) 变量提升 就是把所有的变量声明提升到当前的作用域最前面  不提升赋值操作
        // (2) 函数提升 就是把所有的函数声明提升到当前作用域的最前面  不调用函数

```

### 预解析案例

* 案例1

```js
        
        var num = 10;
        fun();

        function fun() {
            console.log(num);
            var num = 20;
        }
        // 相当于执行了以下操作
        var num;

        function fun() {
            var num;
            console.log(num);
            num = 20;
        }
        num = 10;
        fun();

```

* 案例2

```js

    var a = 18;
        f1();

        function f1() {
            var b = 9;
            console.log(a);
            console.log(b);
            var a = '123';
        }
        // 相当于以下代码
        var a;

        function f1() {
            var b;
            var a;
            b = 9;
            console.log(a);
            console.log(b);
            a = '123';
        }
        a = 18;
        f1();

```

* 案例3

```js

// 案例4
        f1();
        console.log(c);
        console.log(b);
        console.log(a);

        function f1() {
            var a = b = c = 9;
            console.log(a);
            console.log(b);
            console.log(c);
        }
        // 相当于以下代码
        function f1() {
            var a;
            a = b = c = 9;
            // 相当于 var  a  = 9; b = 9; c = 9; b 和 c 直接赋值 没有var 声明 当 全局变量看
            // 集体声明  var a = 9, b = 9, c = 9;
            console.log(a);  //9
            console.log(b);  //9
            console.log(c);  //9
        }
            f1();
            console.log(c);  //9
            console.log(b);  //9
            console.log(a);  //报错

```

## 对象

### 创建对象

* 对象里面的属性或者方法我们采取键值对的形式  键 属性名 ： 值  属性值 
* 多个属性或者方法中间用逗号隔开的
* 方法冒号后面跟的是一个匿名函数

#### 利用字面量创建对象

```js

 // var obj = {};  // 创建了一个空的对象 
        var obj = {
                uname: '张三疯',
                age: 18,
                sex: '男',
                sayHi: function() {
                    console.log('hi~');

                }
            }

```
### 使用对象

```js

        // (1). 调用对象的属性 我们采取 对象名.属性名 . 我们理解为 的
        console.log(obj.uname);
        // (2). 调用属性还有一种方法 对象名['属性名']
        console.log(obj['age']);
        // (3) 调用对象的方法 sayHi   对象名.方法名() 千万别忘记添加小括号
        obj.sayHi();

```

#### 变量、属性、函数、方法的区别

```js

        // 1.变量和属性的相同点 他们都是用来存储数据的 
        var num = 10;
        var obj = {
            age: 18,
            fn: function() {

            }
        }

        function fn() {

        }
        console.log(obj.age);
        // console.log(age);

        // 变量 单独声明并赋值  使用的时候直接写变量名 单独存在
        // 属性 在对象里面的不需要声明的 使用的时候必须是 对象.属性
        // 2. 函数和方法的相同点 都是实现某种功能  做某件事
        // 函数是单独声明 并且调用的 函数名() 单独存在的
        // 方法 在对象里面 调用的时候 对象.方法()

```

### 利用new Object创建对象

```js

 // 利用 new Object 创建对象
        var obj = new Object(); // 创建了一个空的对象
        obj.uname = '张三疯';
        obj.age = 18;
        obj.sex = '男';
        obj.sayHi = function() {
                console.log('hi~');

            }
            // (1) 利用 等号 = 赋值的方法 添加对象的属性和方法
            // (2) 每个属性和方法之间用 分号结束
        console.log(obj.uname);
        console.log(obj['sex']);
        obj.sayHi();

```

::: warning
利用 等号 = 赋值的方法 添加对象的属性和方法
每个属性和方法之间用 分号结束
:::

### 利用构造函数创建对象

* 创建多个对象

```js

// 我们需要创建四大天王的对象  相同的属性： 名字 年龄 性别  相同的方法： 唱歌
        // 构造函数的语法格式
        // function 构造函数名() {
        //     this.属性 = 值;
        //     this.方法 = function() {}
        // }
        // new 构造函数名();
        function Star(uname, age, sex) {
            this.name = uname;
            this.age = age;
            this.sex = sex;
            this.sing = function(sang) {
                console.log(sang);

            }
        }
        var ldh = new Star('刘德华', 18, '男'); // 调用函数返回的是一个对象
        // console.log(typeof ldh);
        console.log(ldh.name);
        console.log(ldh['sex']);
        ldh.sing('冰雨');
        var zxy = new Star('张学友', 19, '男');
        console.log(zxy.name);
        console.log(zxy.age);
        zxy.sing('李香兰')

```

::: warning
1. 构造函数名字首字母要大写
2. 构造函数不需要return 就可以返回结果
3. 调用构造函数 必须使用 new
4. 只要调用函数就创建一个对象
5. 属性和方法前面必须添加 this
:::

###  new关键字执行过程

1. new 构造函数可以在内存中创建了一个空的对象 
2. this 就会指向刚才创建的空对象
3. 执行构造函数里面的代码 给这个空对象添加属性和方法
4. 返回这个对象

### 遍历对象

* for in  遍历对象

```js

        // 遍历对象 
        var obj = {
                name: 'pink老师',
                age: 18,
                sex: '男',
                fn: function() {}
            }
            // console.log(obj.name);
            // console.log(obj.age);
            // console.log(obj.sex);
            // for in 遍历我们的对象
            // for (变量 in 对象) {

        // }
        for (var k in obj) {
            console.log(k); // k 变量 输出  得到的是 属性名
            console.log(obj[k]); // obj[k] 得到是 属性值

        }
        // 我们使用 for in 里面的变量 我们喜欢写 k  或者  key

```

