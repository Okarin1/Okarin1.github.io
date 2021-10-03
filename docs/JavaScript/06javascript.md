---
title: JavaScript 内置对象和数据类型
date: 2021-02-07
categories:
 - JavaScript
tags:
 - JavaScript
---

## 内置对象

js语言自带的一些对象 Math String Date Array 等

## 查阅文档

### MDN W3C

MDN: [https://developer.mozilla.org](https://developer.mozilla.org/zh-CN/docs/Web)

## Math 数学对象

Math数学对象 不是一个构造函数 ，所以我们不需要new 来调用 而是直接使用里面的属性和方法即可

```js

        console.log(Math.PI); // 一个属性 圆周率
        console.log(Math.max(1, 99, 3)); // 99
        console.log(Math.max(-1, -10)); // -1
        console.log(Math.max(1, 99, '送报少年')); // NaN
        console.log(Math.max()); // -Infinity 没有参数

```
### 封装数学对象

```js

 var myMath = {
            PI: 3.141592653,
            max: function() {
                var max = arguments[0];
                for (var i = 1; i < arguments.length; i++) {
                    if (arguments[i] > max) {
                        max = arguments[i];
                    }
                }
                return max;
            },
            min: function() {
                var min = arguments[0];
                for (var i = 1; i < arguments.length; i++) {
                    if (arguments[i] < min) {
                        min = arguments[i];
                    }
                }
                return min;
            }
        }
        console.log(myMath.PI);
        console.log(myMath.max(1, 5, 9));
        console.log(myMath.min(1, 5, 9));

```

### 常用 Math方法

#### 绝对值方法 Math.abs()

* Math.abs()

```js

        // 1.绝对值方法
        console.log(Math.abs(1)); // 1
        console.log(Math.abs(-1)); // 1
        console.log(Math.abs('-1')); // 隐式转换 会把字符串型 -1 转换为数字型
        console.log(Math.abs('pink')); // NaN 

```

#### 取整方法

##### 向下取整 Math.floor()

```js

        // (1) Math.floor()   地板 向下取整  往最小了取值
        console.log(Math.floor(1.1)); // 1
        console.log(Math.floor(1.9)); // 1

```
##### 向上取整 Math.ceil()

```js
        //(2) Math.ceil()   ceil 天花板 向上取整  往最大了取值
        console.log(Math.ceil(1.1)); // 2
        console.log(Math.ceil(1.9)); // 2

```

##### 四舍五入 Math.round()

```js

        // (3) Math.round()   四舍五入  其他数字都是四舍五入，但是 .5 特殊 它往大了取  
        console.log(Math.round(1.1)); // 1
        console.log(Math.round(1.5)); // 2
        console.log(Math.round(1.9)); // 2
        console.log(Math.round(-1.1)); // -1
        console.log(Math.round(-1.5)); // 这个结果是 -1

```

* 随机数 Math.random()

```js

        // 1.Math对象随机数方法   random() 返回一个随机的小数  0 =< x < 1
        // 2. 这个方法里面不跟参数
        // 3. 代码验证 
        console.log(Math.random());

        // 4. 我们想要得到两个数之间的随机整数 并且 包含这2个整数
        // Math.floor(Math.random() * (max - min + 1)) + min;
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        console.log(getRandom(1, 10));

        // 5. 随机点名  
        var arr = ['blue', 'red', 'yellow', 'green', 'black', 'pink'];
        // console.log(arr[0]);
        console.log(arr[getRandom(0, arr.length - 1)]);

```

* 猜数字游戏

```js

        // 猜数字游戏
        // 1.随机生成一个1~10 的整数  我们需要用到 Math.random() 方法。
        // 2.需要一直猜到正确为止，所以需要一直循环。
        // 3.while 循环更简单
        // 4.核心算法：使用 if  else if 多分支语句来判断大于、小于、等于。
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var random = getRandom(1, 10);
        while (true) { // 死循环
            var num = prompt('你来猜？ 输入1~10之间的一个数字');
            if (num > random) {
                alert('你猜大了');
            } else if (num < random) {
                alert('你猜小了');
            } else {
                alert('你好帅哦，猜对了');
                break; // 退出整个循环结束程序
            }

        }

```
## Date() 日期对象

Date() 日期对象  是一个构造函数 必须使用new 来调用创建我们的日期对象

```js

        // Date() 日期对象  是一个构造函数 必须使用new 来调用创建我们的日期对象
        var arr = new Array(); // 创建一个数组对象
        var obj = new Object(); // 创建了一个对象实例
        // 1. 使用Date  如果没有参数 返回当前系统的当前时间
        var date = new Date();
        console.log(date);
        // 2. 参数常用的写法  数字型  2019, 10, 01  或者是 字符串型 '2019-10-1 8:8:8'
        var date1 = new Date(2019, 10, 1);
        console.log(date1); // 返回的是 11月 不是 10月 
        var date2 = new Date('2019-10-1 8:8:8');
        console.log(date2);

```

### 日期格式化

| 方法名            | 说明         |
|----------------|------------|
| getFullYear()  | 获取当年       |
| getMonth()     | 获取当月(0-11) |
| getDate()      | 获取当天日期     |
| getDay()       | 获取星期几(周日返回0) |
| getHours()     | 获取当前小时     |
| getMinutes()   | 获取当前分钟     |
| getSeconds()   | 获取当前秒钟     |

::: warning
注意：月份返回的月份小1个月,需要月份+1；周一返回的是 1 周六返回的是 6 但是 周日返回的是 0
:::


* 格式化日期 年月日 

```js

        // 格式化日期 年月日 
        var date = new Date();
        console.log(date.getFullYear()); // 返回当前日期的年  2019
        console.log(date.getMonth() + 1); // 月份 返回的月份小1个月   记得月份+1 呦
        console.log(date.getDate()); // 返回的是 几号
        console.log(date.getDay()); // 3  周一返回的是 1 周六返回的是 6 但是 周日返回的是 0



        // 2021年 10月 3日 星期日
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dates = date.getDate();
        var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        var day = date.getDay();
        console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);

```

* 格式化日期 时分秒

```js

        // 格式化日期 时分秒
        var date = new Date();
        console.log(date.getHours()); // 时
        console.log(date.getMinutes()); // 分
        console.log(date.getSeconds()); // 秒


        // 要求封装一个函数返回当前的时分秒 格式 08:08:08

        function getTimer() {
            var time = new Date();
            var h = time.getHours();
            h = h < 10 ? '0' + h : h;
            var m = time.getMinutes();
            m = m < 10 ? '0' + m : m;
            var s = time.getSeconds();
            s = s < 10 ? '0' + s : s;
            return h + ':' + m + ':' + s;
        }
        console.log(getTimer());

```

### 获取日期总的毫秒形式

获得Date总的毫秒数(时间戳) 距离1970年1月1号过了多少毫秒数；

```js

        // 1. 通过 valueOf()  getTime()
        var date = new Date();
        console.log(date.valueOf()); // 就是 我们现在时间 距离1970.1.1 总的毫秒数
        console.log(date.getTime());


        // 2. 简单的写法 (最常用的写法)
        var date1 = +new Date(); // +new Date()  返回的就是总的毫秒数
        console.log(date1);

        // 3. H5 新增的 获得总的毫秒数
        console.log(Date.now());

```

#### 案例：倒计时

```js

        // 倒计时效果
        // 1.核心算法：输入的时间减去现在的时间就是剩余的时间，即倒计时 ，但是不能拿着时分秒相减，比如 05 分减去25分，结果会是负数的。
        // 2.用时间戳来做。用户输入时间总的毫秒数减去现在时间的总的毫秒数，得到的就是剩余时间的毫秒数。
        // 3.把剩余时间总的毫秒数转换为天、时、分、秒 （时间戳转换为时分秒）
        // 转换公式如下： 
        //  d = parseInt(总秒数/ 60/60 /24);    //  计算天数
        //  h = parseInt(总秒数/ 60/60 %24)   //   计算小时
        //  m = parseInt(总秒数 /60 %60 );     //   计算分数
        //  s = parseInt(总秒数%60);            //   计算当前秒数
        function countDown(time) {
            var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
            var inputTime = +new Date(time); // 返回的是用户输入时间总的毫秒数
            var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数 
            var d = parseInt(times / 60 / 60 / 24); // 天
            d = d < 10 ? '0' + d : d;
            var h = parseInt(times / 60 / 60 % 24); //时
            h = h < 10 ? '0' + h : h;
            var m = parseInt(times / 60 % 60); // 分
            m = m < 10 ? '0' + m : m;
            var s = parseInt(times % 60); // 当前的秒
            s = s < 10 ? '0' + s : s;
            return d + '天' + h + '时' + m + '分' + s + '秒';
        }
        console.log(countDown('2019-5-1 18:00:00'));
        var date = new Date();
        console.log(date);

```

## Array 数组对象

### 创建数组的两种方式

```js

        // 1. 利用数组字面量
        var arr = [1, 2, 3];
        console.log(arr[0]);

        // 2. 利用new Array()
        // var arr1 = new Array();  // 创建了一个空的数组
        // var arr1 = new Array(2);  // 这个2 表示 数组的长度为 2  里面有2个空的数组元素 
        var arr1 = new Array(2, 3); // 等价于 [2,3]  这样写表示 里面有2个数组元素 是 2和3
        console.log(arr1);

```

### 检测是否为数组  instanceof

```js

        // 检测是否为数组
        // (1) instanceof  运算符 它可以用来检测是否为数组
        var arr = [];
        var obj = {};
        console.log(arr instanceof Array); // true
        console.log(obj instanceof Array); // false
        // (2) Array.isArray(参数);  H5新增的方法  ie9以上版本支持
        console.log(Array.isArray(arr)); // true
        console.log(Array.isArray(obj)); // false

```
### 添加删除数组元素

#### 末尾添加元素 push() 

 push() 在数组的末尾 添加一个或者多个数组元素   push  推

 ```js

    var arr = [1, 2, 3];
    // arr.push(4, 'pink');
    console.log(arr.push(4, 'pink')); // 5 返回新数组长度
    console.log(arr);

 ```


* push 是可以给数组追加新的元素
* push() 参数直接写 数组元素就可以了
* push完毕之后，返回的结果是 新数组的长度 
* 原数组也会发生变化

####  开头添加元素 unshift() 

unshift() 在我们数组的开头 添加一个或者多个数组元素

```js

    var arr = [1, 2, 3];
    console.log(arr.unshift('red', 'purple'));//  返回新数组长度
    console.log(arr);

```

* unshift 是可以给数组前面追加新的元素
* unshift() 参数直接写 数组元素就可以了
* unshift 完毕之后，返回的结果是 新数组的长度 
* 原数组也会发生变化

#### 删除末尾元素 pop()

pop() 它可以删除数组的最后一个元素 

```js

    var arr = [1, 2, 3];
    console.log(arr.pop());// 3  返回的结果是 删除的那个元素 
    console.log(arr);

```
* pop是可以删除数组的最后一个元素 记住一次只能删除一个元素
* pop() 没有参数
* pop完毕之后，返回的结果是 删除的那个元素 
* 原数组也会发生变化


#### 删除开头元素 shift() 

shift() 可以删除数组的第一个元素  

```js

    var arr = [1, 2, 3];
    console.log(arr.shift());// 1  返回的结果是 删除的那个元素 
    console.log(arr);

```

* shift是可以删除数组的第一个元素 记住一次只能删除一个元素
* shift() 没有参数
* shift完毕之后，返回的结果是 删除的那个元素 
* 原数组也会发生变化

#### 案例

1. 筛选数组

```js

 // 有一个包含工资的数组[1500, 1200, 2000, 2100, 1800]，要求把数组中工资超过2000的删除，剩余的放到新数组里面
        var arr = [1500, 1200, 2000, 2100, 1800];
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < 2000) {
                // newArr[newArr.length] = arr[i];
                newArr.push(arr[i]);
            }
        }
        console.log(newArr);

```

### 数组排序

#### reverse() 翻转数组

```js

        // 1. 翻转数组
        var arr = ['pink', 'red', 'blue'];
        arr.reverse();
        console.log(arr);

```

#### sort() 数组排序

```js

        // 2. 数组排序（冒泡排序）
        var arr1 = [13, 4, 77, 1, 7];
        arr1.sort()；

        arr1.sort(function(a, b) {
            //  return a - b; 升序的顺序排列
            return b - a; // 降序的顺序排列
        });

        console.log(arr1);

```


#### indexOf() 返回索引

返回数组元素索引号方法  indexOf(数组元素)  作用就是返回该数组元素的索引号 从前面开始查找

```js

        // var arr = ['red', 'green', 'blue', 'pink', 'blue'];
        var arr = ['red', 'green', 'pink'];
        console.log(arr.indexOf('blue'));

```

::: warning
只返回第一个满足条件的索引号 
如果在该数组里面找不到元素，则返回的是 -1  
:::

#### lastIndexOf(数组元素) 返回索引 从后面开始查找

lastIndexOf(数组元素)  作用就是返回该数组元素的索引号 从后面开始查找

```js

      var arr = ['red', 'green', 'blue', 'pink', 'blue'];
      console.log(arr.lastIndexOf('blue')); // 4

```
##### 利用 indexOf() 数组去重 

```js

// 数组去重 ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'] 要求去除数组中重复的元素。
        // 1.目标： 把旧数组里面不重复的元素选取出来放到新数组中， 重复的元素只保留一个， 放到新数组中去重。
        // 2.核心算法： 我们遍历旧数组， 然后拿着旧数组元素去查询新数组， 如果该元素在新数组里面没有出现过， 我们就添加， 否则不添加。
        // 3.我们怎么知道该元素没有存在？ 利用 新数组.indexOf(数组元素) 如果返回时 - 1 就说明 新数组里面没有改元素
        // 封装一个 去重的函数 unique 独一无二的 
        function unique(arr) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (newArr.indexOf(arr[i]) === -1) {
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        }
        // var demo = unique(['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'])
        var demo = unique(['blue', 'green', 'blue'])
        console.log(demo);

```

### 数组转换为字符串

#### toString() 

toString(): 把数组转换成字符串，逗号分隔每一项 

```js

     // 数组转换为字符串 
     // 1. toString() 将我们的数组转换为字符串
     var arr = [1, 2, 3];
     console.log(arr.toString()); // 1,2,3

```

#### join(分隔符)

```js

     // 2. join(分隔符) 
     var arr1 = ['green', 'blue', 'pink'];
     console.log(arr1.join()); // green,blue,pink
     console.log(arr1.join('-')); // green-blue-pink
     console.log(arr1.join('&')); // green&blue&pink

```


## 基本包装类型 

基本包装类型：  就是把简单数据类型 包装成为了 复杂数据类型 

```js

var str = 'andy';
        console.log(str.length);
        // 对象 才有 属性和方法   复杂数据类型才有 属性和方法 
        // 简单数据类型为什么会有length 属性呢？ 
        // 基本包装类型：  就是把简单数据类型 包装成为了 复杂数据类型 
        // (1) 把简单数据类型包装为复杂数据类型 
        var temp = new String('andy');
        // (2) 把临时变量的值 给 str
        str = temp;
        // (3) 销毁这个临时变量
        temp = null;
    </script>

```

### 字符串对象

###  字符串的不可变性

```js

     var str = 'andy';
        console.log(str);
        str = 'red';
        console.log(str);
        // 因为我们字符串的不可变所以不要大量的拼接字符串
        var str = '';
        for (var i = 1; i <= 1000000000; i++) {
            str += i;
        }
        console.log(str);

```

### 返回字符串位置

```js

// 字符串对象  根据字符返回位置  str.indexOf('要查找的字符', [起始的位置])
        var str = '改革春风吹满地，春天来了';
        console.log(str.indexOf('春')); //2
        console.log(str.indexOf('春', 3)); // 从索引号是 3的位置开始往后查找

```
#### 查找字符串中所有 o 出现的位置以及次数


```js

// 查找字符串"abcoefoxyozzopp"中所有o出现的位置以及次数
        // 核心算法：先查找第一个o出现的位置
        // 然后 只要indexOf 返回的结果不是 -1 就继续往后查找
        // 因为indexOf 只能查找到第一个，所以后面的查找，一定是当前索引加1，从而继续查找
        var str = "oabcoefoxyozzopp";
        var index = str.indexOf('o');
        var num = 0;
        // console.log(index);
        while (index !== -1) {
            console.log(index);
            num++;
            index = str.indexOf('o', index + 1);
        }
        console.log('o出现的次数是: ' + num);
```

### 根据位置返回字符 charAt(index)

```js

        // 根据位置返回字符
        // 1. charAt(index) 根据位置返回字符
        var str = 'andy';
        console.log(str.charAt(3));
        // 遍历所有的字符
        for (var i = 0; i < str.length; i++) {
            console.log(str.charAt(i));
        }
        // 2. charCodeAt(index)  返回相应索引号的字符ASCII值 目的： 判断用户按下了那个键 
        console.log(str.charCodeAt(0)); // 97
        // 3. str[index] H5 新增的
        console.log(str[0]); // a

```

#### 判断一个字符串中出现次数最多的字符，并统计其次数。


```js

// 有一个对象 来判断是否有该属性 对象['属性名']
        var o = {
            age: 18
        }
        if (o['sex']) {
            console.log('里面有该属性');

        } else {
            console.log('没有该属性');

        }

        //  判断一个字符串 'abcoefoxyozzopp' 中出现次数最多的字符，并统计其次数。
        // o.a = 1
        // o.b = 1
        // o.c = 1
        // o.o = 4
        // 核心算法：利用 charAt(） 遍历这个字符串
        // 把每个字符都存储给对象， 如果对象没有该属性，就为1，如果存在了就 +1
        // 遍历对象，得到最大值和该字符
        var str = 'abcoefoxyozzopp';
        var o = {};
        for (var i = 0; i < str.length; i++) {
            var chars = str.charAt(i); // chars 是 字符串的每一个字符
            if (o[chars]) { // o[chars] 得到的是属性值
                o[chars]++;
            } else {
                o[chars] = 1;
            }
        }
        console.log(o);
        // 2. 遍历对象
        var max = 0;
        var ch = '';
        for (var k in o) {
            // k 得到是 属性名
            // o[k] 得到的是属性值
            if (o[k] > max) {
                max = o[k];
                ch = k;
            }
        }
        console.log(max);
        console.log('最多的字符是' + ch);
    </script>

```

### 字符串操作方法

#### concat('字符串1','字符串2'....)

```js

 var str = 'andy';
        console.log(str.concat('red'));


```

#### substr('截取的起始位置', '截取几个字符');

```js

  var str1 = '改革春风吹满地';
        console.log(str1.substr(2, 2)); // 第一个2 是索引号的2 从第几个开始  第二个2 是取几个字符 春风

```

#### 替换字符串 

替换字符 replace('被替换的字符', '替换为的字符')  它只会替换第一个字符

```js

// 1. 替换字符 replace('被替换的字符', '替换为的字符')  它只会替换第一个字符
        var str = 'andyandy';
        console.log(str.replace('a', 'b'));
        // 有一个字符串 'abcoefoxyozzopp'  要求把里面所有的 o 替换为 *
        var str1 = 'abcoefoxyozzopp';
        while (str1.indexOf('o') !== -1) {
            str1 = str1.replace('o', '*');
        }
        console.log(str1);

```

#### 字符串转换为数组

字符转换为数组 split('分隔符')    前面我们学过 join 把数组转换为字符串

```js

        // 2. 字符转换为数组 split('分隔符')    前面我们学过 join 把数组转换为字符串
        var str2 = 'red, pink, blue';
        console.log(str2.split(','));
        var str3 = 'red&pink&blue';
        console.log(str3.split('&'));

```

## 简单类型和复杂类型

* 简单类型：基本数据类型和值类型 strng number boolean undefined null
* 复杂类型：引用类型

### 简单数据类型 null

简单数据类型是存放在栈里面 里面直接开辟一个空间存放的是值

返回的是一个空的对象  object 

```js


    var timer = null;
    console.log(typeof timer);

    // 如果有个变量我们以后打算存储为对象，暂时没想好放啥， 这个时候就给 null 


```

### 复杂数据类型

首先在栈里面存放地址 十六进制表示  然后这个地址指向堆里面的数据


### 简单类型传参

```js

// 简单数据类型传参
        function fn(a) {
            a++;
            console.log(a);
        }
        var x = 10;
        fn(x);
        console.log(x);

        //直接给值 互不影响

```

### 复杂类型传参

```js

  // 复杂数据类型传参
        function Person(name) {
            this.name = name;
        }

        function f1(x) { // x = p
            console.log(x.name); // 2. 这个输出什么 ?  刘德华   
            x.name = "张学友";
            console.log(x.name); // 3. 这个输出什么 ?   张学友
        }
        var p = new Person("刘德华");
        console.log(p.name); // 1. 这个输出什么 ?   刘德华 
        f1(p);
        console.log(p.name); // 4. 这个输出什么 ?   张学友
       //共用地址 会影响
```

