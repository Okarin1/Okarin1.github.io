---
title: JavaScript 数组和函数
date: 2021-02-04
categories:
 - JavaScript
tags:
 - JavaScript
---

## 数组

 > 数组(Array) ：就是一组数据的集合 存储在单个变量下 

### 数组的创建

```js
        //  利用new 创建数组
        var arr = new Array(); // 创建了一个空的数组
        //  利用数组字面量创建数组 []
        var arr = []; // 创建了一个空的数组
        var arr1 = [1, 2, 'hello', true];
        // 数组里面的数据一定用逗号分隔
```

### 数组的索引

```js
        var arr2 = ['迪丽热巴', '古丽扎娜', '佟丽丫丫'];
        console.log(arr2[0]);
        console.log(arr2[1]);
        console.log(arr2[2]);
        console.log(arr2[3]); // 因为没有这个数组元素 所以输出的结果是 undefined
```

### 数组的遍历

* 遍历数组：就是把数组的元素从头到尾访问一次

```js
    // 遍历数组：就是把数组的元素从头到尾访问一次
        var arr = ['red', 'green', 'blue'];
        for (var i = 0; i < 3; i++) {
            console.log(arr[i]);
        }
        // 1. 因为我们的数组索引号从0开始 ，所以 i 必须从 0开始  i < 3
        // 2. 输出的时候 arr[i]  i 计数器当索引号来用
```
#### 数组的长度

* 数组长度 数组名.length

```js
        // 数组长度 数组名.length
        var arr = ['关羽', '张飞', '马超', '赵云', '黄忠', '刘备', '姜维', 'pink'];
        for (var i = 0; i < 7; i++) {
            console.log(arr[i]);
        }
        console.log(arr.length);
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
        // 1. 数组的长度是元素个数  不要跟索引号混淆
        // 2. arr.length 动态监测数组元素的个数
```

* 求数组里面所有元素的和以及平均值

```js
        // 1. 求数组 [2,6,1,7, 4] 里面所有元素的和以及平均值。
        // (1)声明一个求和变量 sum。
        // (2)遍历这个数组，把里面每个数组元素加到 sum 里面。
        // (3)用求和变量 sum 除以数组的长度就可以得到数组的平均值。
        var arr = [2, 6, 1, 7, 4];
        var sum = 0;
        var average = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i]; // 我们加的是数组元素 arr[i] 不是计数器 i
        }
        average = sum / arr.length;
        console.log(sum, average); // 想要输出多个变量，用逗号分隔即可
```

* 求数组里面所有元素的最大值

```js

        // 求数组[2,6,1,77,52,25,7]中的最大值
        // 声明一个保存最大元素的变量 max。
        // 默认最大值可以取数组中的第一个元素。
        // 遍历这个数组，把里面每个数组元素和 max 相比较。
        // 如果这个数组元素大于max 就把这个数组元素存到 max 里面，否则继续下一轮比较。
        // 最后输出这个 max

        var arr = [2, 6, 1, 77, 52, 25, 7, 99];
        var max = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        console.log('该数组里面的最大值是：' + max);
```
* 将数组转换为字符串

```js
        // 将数组 ['red', 'green', 'blue', 'pink'] 转换为字符串，并且用 | 或其他符号分割
        // 1.需要一个新变量用于存放转换完的字符串 str。
        // 2.遍历原来的数组，分别把里面数据取出来，加到字符串里面。
        // 3.同时在后面多加一个分隔符
        var arr = ['red', 'green', 'blue', 'pink'];
        var str = '';
        var sep = '*';
        for (var i = 0; i < arr.length; i++) {
            str += arr[i] + sep;
        }
        console.log(str);


        //利用数组的.join函数
        var str = arr.join('|')
        console.log(str)

```

### 新增数组元素

* 追加和替换
  
```js
        // 1. 新增数组元素 修改length长度 
        var arr = ['red', 'green', 'blue'];
        console.log(arr.length);
        arr.length = 5; // 把我们数组的长度修改为了 5  里面应该有5个元素 
        console.log(arr);
        console.log(arr[3]); // undefined
        console.log(arr[4]); // undefined

        // 2. 新增数组元素 修改索引号 追加数组元素
        var arr1 = ['red', 'green', 'blue'];
        arr1[3] = 'pink';
        console.log(arr1);
        arr1[4] = 'hotpink';
        console.log(arr1);
        arr1[0] = 'yellow'; // 这里是替换原来的数组元素
        console.log(arr1);
        arr1 = '有点意思';
        console.log(arr1); // 不要直接给 数组名赋值 否则里面的数组元素都没有了
```
* 循环追加

```js
        // 新建一个数组，里面存放10个整数（ 1~10）
        // 核心原理：使用循环来追加数组。
        // 1、声明一个空数组 arr。
        // 2、循环中的计数器 i  可以作为数组元素存入。
        // 3、由于数组的索引号是从0开始的， 因此计数器从 0 开始更合适，存入的数组元素要+1。
        var arr = [];
        for (var i = 0; i < 100; i++) {
            // arr = i; 不要直接给数组名赋值 否则以前的元素都没了
            arr[i] = i + 1;
        }
        console.log(arr);
```
### 筛选数组

1. 大于等于 10 的元素选出来，放入新数组

```js
        // 将数组 [2, 0, 6, 1, 77, 0, 52, 0, 25, 7] 中大于等于 10 的元素选出来，放入新数组。
        // 1、声明一个新的数组用于存放新数据newArr。
        // 2、遍历原来的旧数组， 找出大于等于 10 的元素。
        // 3、依次追加给新数组 newArr。
        // 方法1
        var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var newArr = [];
        var j = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= 10) {
                // 新数组索引号应该从0开始 依次递增
                newArr[j] = arr[i];
                j++;
            }
        }
        console.log(newArr);
        // 方法2 
        var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var newArr = [];
        // 刚开始 newArr.length 就是 0
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= 10) {
                // 新数组索引号应该从0开始 依次递增
                newArr[newArr.length] = arr[i];
            }
        }
        console.log(newArr);
```
2. 删除指定数组元素

```js
        // 将数组[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]中的 0 去掉后，形成一个不包含 0 的新数组。
        // 1、需要一个新数组用于存放筛选之后的数据。
        // 2、遍历原来的数组， 把不是 0 的数据添加到新数组里面(此时要注意采用数组名 + 索引的格式接收数据)。
        // 3、新数组里面的个数， 用 length 不断累加。
        var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                newArr[newArr.length] = arr[i];
            }
        }
        console.log(newArr);
```

3. 数组翻转

```js
    var arr = ['red', 'green', 'blue', 'pink'];
	var newArr = [];
	 for (var i = arr.length - 1; i >= 0; i-- ) {
	        newArr[newArr.length] = arr[i];
		}
	console.log(newArr);   

```

4. 数组中交换两个元素

```js
var arr = ['red', 'green', 'blue', 'pink'];
	var temp = arr[0];
	arr[0] = arr[1];
	arr[1] = temp		
	

	console.log(arr);   

```

5. 冒泡排序

```js

  // 冒泡排序
        // var arr = [5, 4, 3, 2, 1];
        var arr = [4, 1, 2, 3, 5];
        for (var i = 0; i <= arr.length - 1; i++) { // 外层循环管趟数 
            for (var j = 0; j <= arr.length - i - 1; j++) { // 里面的循环管 每一趟的交换次数
                // 内部交换2个变量的值 前一个和后面一个数组元素相比较
                if (arr[j] < arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }

            }
        }
        console.log(arr);

```

## 函数

>函数就是封装了一段可以被重复执行调用的代码块 目的： 就是让大量代码重复使用

```js
 // 1. 求 1~100的累加和
        var sum = 0;
        for (var i = 1; i <= 100; i++) {
            sum += i;
        }
        console.log(sum);

        // 2. 求 10~50的累加和
        var sum = 0;
        for (var i = 10; i <= 50; i++) {
            sum += i;
        }
        console.log(sum);

        // 3. 函数就是封装了一段可以被重复执行调用的代码块 目的： 就是让大量代码重复使用
        function getSum(num1, num2) {
            var sum = 0;
            for (var i = num1; i <= num2; i++) {
                sum += i;
            }
            console.log(sum);
        }
        getSum(1, 100);
        getSum(10, 50);
        getSum(1, 1000);
```
### 函数的使用

函数使用分为两步： 声明函数 和 调用函数

#### 声明函数

```js

        
        // 1. 声明函数
        // function 函数名() {
        //     // 函数体
        // }
        function sayHi() {
            console.log('hi~~');

        }
        // (1) function 声明函数的关键字 全部小写
        // (2) 函数是做某件事情，函数名一般是动词 sayHi 
        // (3) 函数不调用自己不执行

        var sayHi = function(){
            console.log('hi~~');
        }
    </script>

```
#### 调用函数 

```js

        // 2. 调用函数
        // 函数名();
        sayHi();
        // 调用函数的时候千万不要忘记加小括号

```

### 函数的封装

* 求累加和
```js

function getSum() {
            var sum = 0;
            for (var i = 0; i <= 100; i++) {
                sum += i;
            }
            console.log(sum);
        }
        getSum();

```

### 函数的参数

* 形参和实参

```js
        // 1. 函数可以重复相同的代码
        // function cook() {
        //     console.log('酸辣土豆丝');

        // }
        // cook();
        // cook();
        // 2. 我们可以利用函数的参数实现函数重复不同的代码
        // function 函数名(形参1,形参2...) { // 在声明函数的小括号里面是 形参 （形式上的参数）

        // }
        // 函数名(实参1,实参2...); // 在函数调用的小括号里面是实参（实际的参数）
        // 3. 形参和实参的执行过程
        function cook(aru) { // 形参是接受实参的  aru = '酸辣土豆丝' 形参类似于一个变量
            console.log(aru);

        }
        cook('酸辣土豆丝');
        cook('大肘子');
        // 4. 函数的参数可以有，也可以没有个数不限

```
1. 求任意两数之和和求任意两数之间的和
 
```js

        // 1. 利用函数求任意两个数的和
        function getSum(num1, num2) {
            console.log(num1 + num2);

        }
        getSum(1, 3);
        getSum(3, 8);
        // 2. 利用函数求任意两个数之间的和
        function getSums(start, end) {
            var sum = 0;
            for (var i = start; i <= end; i++) {
                sum += i;
            }
            console.log(sum);

        }
        getSums(1, 100);
        getSums(1, 10);
        // 3. 注意点
        // (1) 多个参数之间用逗号隔开
        // (2) 形参可以看做是不用声明的变量

```

* 形参和实参个数匹配问题

```js

        // 函数形参实参个数匹配
        function getSum(num1, num2) {
            console.log(num1 + num2);

        }
        // 1. 如果实参的个数和形参的个数一致 则正常输出结果
        getSum(1, 2);
        // 2. 如果实参的个数多于形参的个数  会取到形参的个数 
        getSum(1, 2, 3);
        // 3. 如果实参的个数小于形参的个数  多于的形参定义为undefined  最终的结果就是 NaN
        // 形参可以看做是不用声明的变量  num2 是一个变量但是没有接受值  结果就是undefined 
        getSum(1); // NaN
        // 建议 我们尽量让实参的个数和形参相匹配

```

### 函数的返回值

```js

        // 1. 函数的返回值格式
        // function 函数名() {
        //     return 需要返回的结果;
        // }
        // 函数名();


        // (1) 函数只是实现某种功能，最终的结果需要返回给函数的调用者函数名() 通过return 实现的
        // (2) 只要函数遇到return 就把后面的结果 返回给函数的调用者  函数名() = return后面的结果

        // 2. 代码验证
        function getResult() {
            return 666;
        }
        getResult(); // getResult()   = 666
        console.log(getResult());

        // 3. 求任意两个数的和
        function getSum(num1, num2) {
            return num1 + num2;
        }
        console.log(getSum(1, 2));

```

1. 利用函数 求两个数的最大值

```js

 function getMax(num1, num2) {

            // if (num1 > num2) {
            //     return num1;
            // } else {
            //     return num2;
            // }

            return num1 > num2 ? num1 : num2; //使用三元运算符更为简洁
        }
        console.log(getMax(1, 3));
        console.log(getMax(11, 3));

```

2. 利用函数求数组中的最大数值
   
```js
        // 利用函数求数组 [5,2,99,101,67,77] 中的最大数值。
        function getArrMax(arr) { // arr 接受一个数组  arr =  [5,2,99,101,67,77]
            var max = arr[0];
            for (var i = 1; i <= arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        }
        // getArrMax([5, 2, 99, 101, 67, 77]); // 实参是一个数组送过去
        // 在我们实际开发里面，我们经常用一个变量来接受 函数的返回结果 使用更简单
        // var re = getArrMax([5, 2, 99, 101, 67, 77]);
        var re = getArrMax([3, 77, 44, 99, 143]);
        console.log(re);

```

### 函数的终止

```js
        // 函数返回值注意事项
        // 1. return 终止函数
        function getSum(num1, num2) {
            return num1 + num2; // return 后面的代码不会被执行
            alert('我是不会被执行的哦！')
        }
        console.log(getSum(1, 2));
        // 2. return 只能返回一个值
        function fn(num1, num2) {
            return num1, num2; // 返回的结果是最后一个值
        }
        console.log(fn(1, 2));

        // 3.  我们求任意两个数的 加减乘数结果
        function getResult(num1, num2) {
            return [num1 + num2, num1 - num2, num1 * num2, num1 / num2];//用数组返回多个数据
        }
        var re = getResult(1, 2); // 返回的是一个数组
        console.log(re);

        // 4. 我们的函数如果有return 则返回的是 return 后面的值，如果函数么有 return 则返回undefined
        function fun1() {
            return 666;
        }
        console.log(fun1()); // 返回 666
        function fun2() {

        }
        console.log(fun2()); // 函数返回的结果是 undefined

```

