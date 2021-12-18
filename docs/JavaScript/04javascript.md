---
title: JavaScript 函数进阶与作用域
date: 2021-02-05
categories:
 - JavaScript
tags:
 - arguments
---

<!-- more -->
## 函数进阶

### arguments的使用

>arguments 存储了所有实参

```js

         // arguments 的使用  只有函数才有 arguments对象  而且是每个函数都内置好了这个arguments
        function fn() {
            // console.log(arguments); // 里面存储了所有传递过来的实参  arguments = [1,2,3]
            // console.log(arguments.length);
            // console.log(arguments[2]);
            // 我们可以按照数组的方式遍历arguments
            for (var i = 0; i < arguments.length; i++) {
                console.log(arguments[i]);

            }
        }
        fn(1, 2, 3);
        fn(1, 2, 3, 4, 5);
        // 伪数组 并不是真正意义上的数组
        // 1. 具有数组的 length 属性
        // 2. 按照索引的方式进行存储的
        // 3. 它没有真正数组的一些方法 pop()  push() 等等

```

### 函数案例

1. 利用函数求任意个数的最大值

```js

 // 利用函数求任意个数的最大值
        function getMax() { // arguments = [1,2,3]
            var max = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                if (arguments[i] > max) {
                    max = arguments[i];
                }
            }
            return max;
        }
        console.log(getMax(1, 2, 3));
        console.log(getMax(1, 2, 3, 4, 5));
        console.log(getMax(11, 2, 34, 444, 5, 100));

```
2. 利用函数翻转任意数组

```js

// 利用函数翻转任意数组 reverse 翻转
        function reverse(arr) {
            var newArr = [];
            for (var i = arr.length - 1; i >= 0; i--) {
                newArr[newArr.length] = arr[i];
            }
            return newArr;
        }
        var arr1 = reverse([1, 3, 4, 6, 9]);
        console.log(arr1);
        var arr2 = reverse(['red', 'pink', 'blue']);
        console.log(arr2);

```

3. 利用函数冒泡排序 sort 排序

```js
 // 利用函数冒泡排序 sort 排序
        function sort(arr) {
            for (var i = 0; i < arr.length - 1; i++) {
                for (var j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        }
        var arr1 = sort([1, 4, 2, 9]);
        console.log(arr1);
        var arr2 = sort([11, 7, 22, 999]);
        console.log(arr2);
```


### 函数调用另一个函数

函数是可以相互调用的

```js

// 函数是可以相互调用的
        // function fn1() {
        //     console.log(11);
        //     fn2(); // 在fn1 函数里面调用了 fn2 函数
        // }
        // fn1();

        // function fn2() {
        //     console.log(22);

        // }

        function fn1() {
            console.log(111);
            fn2();
            console.log('fn1');
        }

        function fn2() {
            console.log(222);
            console.log('fn2');
        }
        fn1();

```
1. 用户输入年份，输出当前年份2月份的天数

```js

// 用户输入年份，输出当前年份2月份的天数
        function backDay() {
            var year = prompt('请您输入年份:');
            if (isRunYear(year)) { // 调用函数需要加小括号
                alert('当前年份是闰年2月份有29天');
            } else {
                alert('当前年份是平年2月份有28天');
            }
        }
        backDay();


        // 判断是否为闰年的函数
        function isRunYear(year) {
            // 如果是闰年我们返回 true  否则 返回 false 
            var flag = false;
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                flag = true;
            }
            return flag;
        }

```

### 函数另一种声明方式

匿名函数

```js
        // 函数的2中声明方式
        // 1. 利用函数关键字自定义函数(命名函数)
        function fn() {

        }
        fn();
        // 2. 函数表达式(匿名函数) 
        // var 变量名 = function() {};
        var fun = function(aru) {
            console.log('我是函数表达式');
            console.log(aru);

        }
        fun('hi~~');
        // (1) fun是变量名 不是函数名  
        // (2) 函数表达式声明方式跟声明变量差不多，只不过变量里面存的是值 而 函数表达式里面存的是函数
        // (3) 函数表达式也可以进行传递参数   

```

## 作用域

>作用域：代码名字（变量）在某个范围内起作用和效果 目的是为了提高程序的可靠性更重要的是减少命名冲突

```js

        // 1.JavaScript作用域 ： 就是代码名字（变量）在某个范围内起作用和效果 目的是为了提高程序的可靠性更重要的是减少命名冲突
        // 2. js的作用域（es6）之前 ： 全局作用域   局部作用域 
        // 3. 全局作用域： 整个script标签 或者是一个单独的js文件
        var num = 10;
        var num = 30;
        console.log(num);

        // 4. 局部作用域（函数作用域） 在函数内部就是局部作用域 这个代码的名字只在函数内部起效果和作用
        function fn() {
            // 局部作用域
            var num = 20;
            console.log(num);

        }
        fn();

```


### 变量的作用域

#### 全局变量

* 在全局作用域下的变量 在全局下都可以使用

```js

// 1. 全局变量： 在全局作用域下的变量 在全局下都可以使用
        // 注意 如果在函数内部 没有声明直接赋值的变量也属于全局变量
        var num = 10; // num就是一个全局变量
        console.log(num);

        function fn() {
            console.log(num);

        }
        fn();
        // console.log(aru);

```
::: warning
注意 如果在函数内部 没有声明直接赋值的变量也属于全局变量
:::


#### 局部变量

* 在局部作用域下的变量   后者在函数内部的变量就是 局部变量

```js

        // 2. 局部变量   在局部作用域下的变量   后者在函数内部的变量就是 局部变量
        function fun(aru) {
            var num1 = 10; // num1就是局部变量 只能在函数内部使用
            num2 = 20;
        }
        fun();
        // console.log(num1);
        // console.log(num2);
        

```

::: warning
注意： 函数的形参也可以看做是局部变量
:::


***从执行效率来看全局变量和局部变量***

* 全局变量只有浏览器关闭的时候才会销毁，比较占内存资源
* 局部变量 当我们程序执行完毕就会销毁， 比较节约内存资源

### 作用域链

* 作用域链 ：内部函数访问外部函数的变量，采取的是链式查找的方式来决定取那个值 这种结构我们称为作用域链   就近原则

```js

        var num = 10;

        function fn() { // 外部函数
            var num = 20;

            function fun() { // 内部函数
                console.log(num);

            }
            fun();
        }
        fn();

```

```js

 // 案例1 ： 结果是几？
        function f1() {
            var num = 123;

            function f2() {
                var num = 0;
                console.log(num); // 站在目标出发，一层一层的往外查找
            }
            f2();
        }
        var num = 456;
        f1();
        // 案例2 ：结果是几？
        var a = 1;

        function fn1() {
            var a = 2;
            var b = '22';
            fn2();

            function fn2() {
                var a = 3;
                fn3();

                function fn3() {
                    var a = 4;
                    console.log(a); //a的值 ?
                    console.log(b); //b的值 ?
                }
            }
        }
        fn1();

```
