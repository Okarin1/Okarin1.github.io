---
title: Vue.js whtch侦听
date: 2021-04-03
categories:
 - Vue
tags:
 - Vue
---

## 侦听器 Watch

希望在代码逻辑中也希望监听某个数据的变化时，就需要使用侦听器。

```js
  watch:{
    message(newValue,oldValue){
      console.log(newValue,oldValue)
    }
  }
```

```js
  watch:{
    message:{
      handler:function(newValue,oldValue){
        console.log(newValue,oldValue)
      }
    }
  }
```

### 侦听器的配置选项

1. deep属性：深度侦听，侦听对象中的数据。
```js
 watch:{
    info:{
         handler:function(newValue,oldValue){
           console.log(newValue,oldValue)
         },
         deep:true
       }
 }
```
2. immediate属性: 立即执行一次
 ```js
  watch:{
    info:{
         handler:function(newValue,oldValue){
           console.log(newValue,oldValue)
         },
         deep:true,
         immediate:true
       }
  }
```

3. 侦听某一个属性
```js
 watch:{
    "info.name":{
         handler:function(newValue,oldValue){
           console.log(newValue,oldValue)
         },
         deep:true
       }
 }
```




