---
title: JavaScript Promise的使用
date: 2021-10-19
sidebar: 'auto'
categories:
 - JavaScript
tags:
 - Promise
---

# Promise <Badge text="ES6新增" type="tip"/>

Promise 是异步编程的一种解决方案，对异步请求进行封装

## 应用场景

异步操作，如网络请求 容易出现回调地狱，使用Promise来解决

## 基本语法

```js
		new Promise((resolve,reject) =>{
			setTimeout(() =>{
				resolve('succeed') //成功的时候调用
        reject('error')  //失败时调用
			},1000)
		}).then(() =>{           //成功之后执行
			console.log('Retr0')
			
			return new Promise((resolve,reject) =>{ //第二次调用
				setTimeout(() =>{
				resolve()
				},1000)
			}).then(() =>{
			console.log('Hello Vue.js')
			})
		})

```

## resolve 和 reject

```js
new Promise((resolve,reject) =>{
			setTimeout(() =>{
				resolve('succeed') //成功的时候调用
        reject('error')    //失败的时候调用
			},1000)
		}).then((resolve) =>{           //成功之后执行
			console.log(resolve)
		}).catch((err) =>{             //失败之后执行
			console.log(err)
		})
```

## Promise 三种状态

- pending: 等待状态,比如正在进行网络请求,或者定时器没有到时间
- fulfill: 满足状态，当主动回调resolve时，就处于该状态，并且会回调.then()
- reject: 拒绝状态，当主动回调reject时，就处于该状态，并且会回调.catch()

## Promise 链式调用

```js
	new Promise((resolve,reject) =>{
				setTimeout(() =>{
					resolve('aaa')  //可选参数
				},1000)
			}).then(res => {
	      console.log(res,'第一次处理');
	      return Promise.resolve(res + '111')
	    }).then(res => {
	      console.log(res,'第二次处理');
	      return Promise.resolve(res + '222')
	    }).then(res => {
	      console.log(res,'第三次处理');
	    })
```
可简写为

```js
	new Promise((resolve,reject) =>{
				setTimeout(() =>{
					resolve('aaa')  //可选参数
				},1000)
			}).then(res => {
	      console.log(res,'第一次处理');
	      return res + '111'
	    }).then(res => {
	      console.log(res,'第二次处理');
	      return res + '222'
	    }).then(res => {
	      console.log(res,'第三次处理');
	    })
```
## Promise 的 all 方法

对多个网络请求进行包装

语法 `Promise.all([])` 

```js
Promise.all([
  new Promise((resolve,reject) =>{
    $ajsx({
      url:'url1',
      success:function(data){
        resolve(data)
      }
    })
  }),
  new Promise((resolve,reject) =>{
    $ajsx({
      url:'url2',
      success:function(data){
        resolve(data)
      }
    })
  })
]).then(results =>{
  console.log(results[0]); //同时拿到两个网络请求返回的结果
  console.log(results[1]);
})
```
## 手写简单Promise

```js

// 三个常量用于表示状态
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    const that = this
    this.state = PENDING

    // value 变量用于保存 resolve 或者 reject 中传入的值
    this.value = null

    // 用于保存 then 中的回调，因为当执行完 Promise 时状态可能还是等待中，这时候应该把 then 中的回调保存起来用于状态改变时使用
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []


    function resolve(value) {
         // 首先两个函数都得判断当前状态是否为等待中
        if(that.state === PENDING) {
            that.state = RESOLVED
            that.value = value

            // 遍历回调数组并执行
            that.resolvedCallbacks.map(cb=>cb(that.value))
        }
    }
    function reject(value) {
        if(that.state === PENDING) {
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb=>cb(that.value))
        }
    }

    // 完成以上两个函数以后，我们就该实现如何执行 Promise 中传入的函数了
    try {
        fn(resolve,reject)
    }cach(e){
        reject(e)
    }
}

// 最后我们来实现较为复杂的 then 函数
MyPromise.prototype.then = function(onFulfilled,onRejected){
  const that = this

  // 判断两个参数是否为函数类型，因为这两个参数是可选参数
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v
  onRejected = typeof onRejected === 'function' ? onRejected : e=>throw e

  // 当状态不是等待态时，就去执行相对应的函数。如果状态是等待态的话，就往回调函数中 push 函数
  if(this.state === PENDING) {
      this.resolvedCallbacks.push(onFulfilled)
      this.rejectedCallbacks.push(onRejected)
  }
  if(this.state === RESOLVED) {
      onFulfilled(that.value)
  }
  if(this.state === REJECTED) {
      onRejected(that.value)
  }
}

```