---
title: JavaScript 循环
date: 2021-02-03
categories:
 - JavaScript

---

<!-- more -->
## for 循环

```js
        // 1. for 重复执行某些代码， 通常跟计数有关系


        // 2. for 语法结构
        // for (初始化变量; 条件表达式; 操作表达式) {
        //     // 循环体
        // }


        // 3. 初始化变量 就是用var 声明的一个普通变量， 通常用于作为计数器使用 

        // 4. 条件表达式 就是用来决定每一次循环是否继续执行 就是终止的条件

        // 5. 操作表达式 是每次循环最后执行的代码 经常用于我们计数器变量进行更新（递增或者递减）
        // 6. 代码体验 我们重复打印100局 Hello world
        for (var i = 1; i <= 100; i++) {
            console.log('Hello world!');
        }

```

### for循环执行过程

```js
        // for 循环的执行过程
        for (var i = 1; i <= 100; i++) {
            console.log('你好');
        }
        // 1. 首先执行里面的计数器变量  var i = 1 .但是这句话在for 里面只执行一次  index
        // 2. 去 i <= 100 来判断是否满足条件， 如果满足条件  就去执行 循环体  不满足条件退出循环 
        // 3. 最后去执行 i++   i++是单独写的代码 递增  第一轮结束 
        // 4. 接着去执行 i <= 100 如果满足条件  就去执行 循环体  不满足条件退出循环   第二轮
```

### for循环输出不同内容
```js
 // for 循环可以重复执行不同的代码  因为我们有计数器变量 i 的存在 i每次循环值都会变化
        // 我们想要输出1个人 1~100岁
        // for (var i = 1; i <= 100; i++) {
        //     console.log('这个人今年' + i + '岁了');

        // }
        for (var i = 1; i <= 100; i++) {
            if (i == 1) {
                console.log('这个人今年1岁了，他出生了');
            } else if (i == 100) {
                console.log('这个人今年100岁了，他死了');
            } else {
                console.log('这个人今年' + i + '岁了');

            }
        }
```

### for 循环重复操作

1. 输出1-100的累加和

```js

  var sum = 0; // 求和 的变量
        for (var i = 1; i <= 100; i++) {
            // sum = sum + i;
            sum += i;
        }
        console.log(sum);

```

2. 求1-100之间所有数的平均值

```js
//  求1-100之间所有数的平均值   需要一个 sum 和的变量 还需要一个平均值 average 变量
        var sum = 0;
        var average = 0;
        for (var i = 1; i <= 100; i++) {
            sum = sum + i;
        }
        average = sum / 100;
        console.log(average);
```

3. 求1-100之间所有偶数和奇数的和

```js
//求1-100之间所有偶数和奇数的和   我们需要一个偶数的和变量 even  还需要一个奇数 odd
        var even = 0;
        var odd = 0;
        for (var i = 1; i <= 100; i++) {
            if (i % 2 == 0) {
                even = even + i;
            } else {
                odd = odd + i;
            }
        }
        console.log('1~100 之间所有的偶数和是' + even);
        console.log('1~100 之间所有的奇数和是' + odd);

```

4. 求1-100之间所有能被3整除的数字的和   

```js
var result = 0;
        for (var i = 1; i <= 100; i++) {
            if (i % 3 == 0) {
                // result = result + i;
                result += i;
            }
        }
        console.log('1~100之间能够被3整数的数字的和是：' + result);
```
5.学生成绩

```js
        // 弹出输入框输入总的班级人数(num)
        // 依次输入学生的成绩（ 保存起来 score）， 此时我们需要用到
        // for 循环， 弹出的次数跟班级总人数有关系 条件表达式 i <= num
        // 进行业务处理: 计算成绩。 先求总成绩（ sum）， 之后求平均成绩（ average）
        // 弹出结果
        var num = prompt('请输入班级的总人数:'); // num 总的班级人数
        var sum = 0; // 求和的变量
        var average = 0; // 求平均值的变量
        for (var i = 1; i <= num; i++) {
            var score = prompt('请您输入第' + i + '个学生成绩');
            // 因为从prompt取过来的数据是 字符串型的需要转换为数字型
            sum = sum + parseFloat(score);
        }
        average = sum / num;
        alert('班级总的成绩是' + sum);
        alert('班级平均分是：' + average);

```

###　for循环追加字符串

```js
    // 一行打印五个星星 
        // console.log('★★★★★');
        // for (var i = 1; i <= 5; i++) {
        //     console.log('★');

        // }
        // var str = '';
        // for (var i = 1; i <= 5; i++) {
        //     str = str + '★';
        // }
        // console.log(str);
        var num = prompt('请输入星星的个数');
        var str = '';
        for (var i = 1; i <= num; i++) {
            str = str + '★'
        }
        console.log(str);
```

### 双重for循环

1. 打印五行五列星星

```js
	var sum = '';
	for (var i = 1 ;i <= 5; i++){
		 for(var j = 1;j<=5 ;j++){
			 sum = sum + '★'
		 }
		 sum = sum + '\n'
	}
	 console.log(sum);
```
2. 打印倒三角星星

```js
// 打印倒三角形案例
        var str = '';
        for (var i = 1; i <= 10; i++) { // 外层循环控制行数
            for (var j = i; j <= 10; j++) { // 里层循环打印的个数不一样  j = i
                str = str + '★';
            }
            str += '\n';
        }
        console.log(str);
```

3. 打印正三角形星星

```js
 var str = '';
        for (var i = 1; i <= 10; i++) { // 外层循环控制行数
            for (var j = 1; j <= i; j++) { // 里层循环打印的个数不一样  j <= i
                str = str + '★';
            }
            str += '\n';
        }
        console.log(str);
```

4. 九九乘法表

```js
        var str = '';
        for (var i = 1; i <= 9; i++) { // 外层循环控制行数
            for (var j = 1; j <= i; j++) { // 里层循环打印的个数不一样  j = i
                str += j + '*' + i +'='+i*j + '\t';
            }
            str += '\n';
        }
        console.log(str);
```

## while循环

```js
        // 1. while 循环语法结构  while 当...的时候
        // while (条件表达式) {
        //     // 循环体
        // }
        // 2. 执行思路  当条件表达式结果为true 则执行循环体 否则 退出循环
        // 3. 代码验证
        var num = 1;
        while (num <= 100) {
            console.log('Hello');
            num++;
        }
        // 4. 里面应该也有计数器 初始化变量
        // 5. 里面应该也有操作表达式  完成计数器的更新 防止死循环
```
```js
        // while循环案例
        // 1. 打印人的一生，从1岁到100岁
        var i = 1;
        while (i <= 100) {
            console.log('这个人今年' + i + '岁了');
            i++;
        }
        // 2. 计算 1 ~ 100 之间所有整数的和
        var sum = 0;
        var j = 1;
        while (j <= 100) {
            sum += j;
            j++
        }
        console.log(sum);

        // 3. 弹出一个提示框， 你爱我吗？  如果输入我爱你，就提示结束，否则，一直询问。
        var message = prompt('你爱我吗?');
        while (message !== '我爱你') {
            message = prompt('你爱我吗?');
        }
        alert('我也爱你啊！');
```

## do while 循环 

```js
    // 1.do while 循环 语法结构
        do {
            // 循环体
        } while (条件表达式)
        // 2.  执行思路 跟while不同的地方在于 do while 先执行一次循环体 在判断条件 如果条件表达式结果为真，则继续执行循环体，否则退出循环
        // 3. 代码验证
        var i = 1;
        do {
            console.log('how are you?');
            i++;
        } while (i <= 100)
        // 4. 我们的do while 循环体至少执行一次

```

```js

        // while循环案例

        // 1. 打印人的一生，从1岁到100岁
        var i = 1;
        do {
            console.log('这个人今年' + i + '岁了');
            i++;
        } while (i <= 100)
        // 2. 计算 1 ~ 100 之间所有整数的和
        var sum = 0;
        var j = 1;
        do {
            sum += j;
            j++;
        } while (j <= 100)
        console.log(sum);

        // 3. 弹出一个提示框， 你爱我吗？  如果输入我爱你，就提示结束，否则，一直询问。
        do {
            var message = prompt('你爱我吗?');
        } while (message !== '我爱你')
        alert('我也爱你啊');
```

## continue 与 break 关键字

* continue 


```js
    // continue 关键字   退出本次（当前次的循环）  继续执行剩余次数循环
        for (var i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; // 只要遇见 continue就退出本次循环 直接跳到 i++
            }
            console.log('我正在吃第' + i + '个包子');

        }
        // 1. 求1~100 之间， 除了能被7整除之外的整数和 
        var sum = 0;
        for (var i = 1; i <= 100; i++) {
            if (i % 7 == 0) {
                continue;
            }
            sum += i;
        }
        console.log(sum);

```

* break

```js
 // break 退出整个循环
        for (var i = 1; i <= 5; i++) {
            if (i == 3) {
                break;
            }
            console.log('我正在吃第' + i + '个包子');

        }
```