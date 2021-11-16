---
title: JavaScript ES6新特性
date: 2021-02-12
categories:
 - JavaScript

---
<!-- more -->

# JS ES6新特性

## 全新的变量定义

### let

在下列的代码中，for循环的i会覆盖全局中的i，会导致很严重的问题。

```js
var i = 10;
for(var i = 1;i < 6;i++){
  //do nothing
}
console.log(i) //6
```

ES6推荐使用`let`定义变量，这样就可以实现块级作用域的效果，内部的变量不会影响全局。

```js
var i = 10;
for(let i = 1;i < 6;i++){
  //do nothing
}
console.log(i) //10
```

### const

使用`const`声明一个只读的常量，一旦声明，该常量的值就不能再被改变.

```js
const name = 'Okarin';
name = 'retr0';
console.log(name);//报错
```
因为常量是只读的，不允许修改，强行修改只会导致程序报错，定义对象时，常常使用 `const`。


## 变量的解构赋值

解构赋值的作用是把获取对象中的方法以及赋值给对应变量的过程一次性做完。

```js
const Person = {
    name:'okarin',
    age:21
}

let {name,age,city = "chengdu"} = Person
console.log(name,age,city)//okarin 21 chengdu
console.log(Person)//{ name: 'okarin', age: 21 }

```
在上面的代码中，用let直接定义了变量的集合，同时程序会智能地在等号右侧寻找匹配项，这样可以简化代码，快速操作。
同时对于对象中没有的属性，我们可以自己定义一个属性并赋值，在上面代码中我们自定义了city属性。

:::warning
解构赋值不会改变原来的对象或数组
:::

## 字符串升级

### 通过for循环的方式遍历字符串

```js
let str = '我爱成都!'
for (let s of str){
    console.log(s)
}
```
:::warning
这里用的是of，而不是in。如果用in，则获取的是每个字符对应的下标。
:::

### 模板字符串

模板字符串使用反引号 (\` \`) 来代替普通字符串中的用双引号和单引号,用来进行一些简化的字符串定义,除了可以作为普通字符串使用，还可以用来定义多行字符串，以及在字符串中加入变量和表达式。。模板字符串可以包含特定语法（${expression}）的占位符

```js
let city = "成都";
let words = `欢迎来到${city}`

console.log(words)
```

:::warning
在模版字符串内使用反引号（`）时，需要在它前面加转义符（\）
:::

### 新的的API

* Unicode表示法：大括号包含表示Unicode字符(\u{0xXX}或\u{0XXX})
* String.raw()：返回把字符串所有变量替换且对斜杠进行转义的结果
* String.fromCodePoint()：返回码点对应字符
* codePointAt()：返回字符对应码点(String.fromCodePoint()的逆操作)
* normalize()：把字符的不同表示方法统一为同样形式，返回新字符串(Unicode正规化)
* repeat()：把字符串重复n次，返回新字符串
* matchAll()：返回正则表达式在字符串的所有匹配
* includes()：是否存在指定字符串
* startsWith()：是否存在字符串头部指定字符串
* endsWith()：是否存在字符串尾部指定字符串
 

2017新增

* padStart()：把指定字符串填充到字符串头部，返回新字符串
* padEnd()：把指定字符串填充到字符串尾部，返回新字符串
 

2019新增

* 直接输入U+2028和U+2029：字符串可直接输入行分隔符和段分隔符
* JSON.stringify()改造：可返回不符合UTF-8标准的字符串
* trimStart()：消除字符串头部空格，返回新字符串
* trimEnd()：消除字符串尾部空格，返回新字符串

## 强化后的数组

### 快速构建新数组

1. Array.of()方法可以将参数中的所有值作为元素而形成数组，参数值可以是不同类型，如果参数为空时，则返回空数组。

:::warning
与Array()的区别：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组
:::

2. Array.from()方法可以将类数组对象或可迭代对象转化为数组。
```js
const Person = {
    0:'okarin',
    1:'retr0',
    length:2
}

presonArray = Array.from(Person)
console.log(presonArray); //[ 'okarin', 'retr0' ]
```

### 新的数组方法

* find：查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个元素。
* findIndex：查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。
* fill：将一定范围索引的数组元素内容填充为单个指定的值。
* copyWithin：将一定范围索引的数组元素修改为此数组另一指定范围索引的元素。
* entries：遍历。
* keys：遍历键名。
* values：遍历键值。

### 数组复制

在以前的传统项目中，如果要复制一个数组，大多采用slice方法，现在可以用“…”的方式快速复制一个数组。
```js
listData = [ 'okarin', 'retr0' ]
let newListData = [...listData];
console.log(newListData)//[ 'okarin', 'retr0' ]
```

## 箭头函数

在ES6的语法允许省略function关键字，直接用一个箭头声明一个函数。、

```js
function sayHi(name){
    console.log(`Hi~${name}`);
}

const sayHi = function (name) {
    console.log(`Hi~${name}`);
};

const sayHi = (name) =>{
    console.log(`Hi~${name}`);
}

const sayHi = name =>{
    console.log(`Hi~${name}`); //只有一个参数时可省略括号
}

sayHi('Okarin')
```


