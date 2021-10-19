---
title: Vue.js vue-router 路由
date: 2021-04-29
categories:
 - Vue.js
tags:
 - Vue.js 
 - Vue Router
---

# vue-router

## 起步

**Home.vue**

``` HTML
<template>
  <div>
    <h1>Home</h1>
  </div>
</template>
```
**App.vue**

```HTML
<template>
  <div id="app">
    <router-link to = "/home"  replace>首页</router-link>
    <router-view></router-view>
  </div>
</template>
```

**index.js**

```js
import Home  from "../components/User";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    }
  ]
})
```

## 路由重定向

使用`redirect`默认将Home设为首页

***index.js***

```js
routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    }
  ]
```

## Hash与History模式

![](https://i.loli.net/2021/10/17/EJtjcuNepqRUar7.png)

* vue-router默认hash模式, ur使用 # 后面定位路由，对seo不利，设置history,就可以使用普通的url模式

* history模式即普通url模式，这种模式充分利用history.pushState API来完成URL跳转而无须重新加载页面

### 修改为history模式

```js
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    }
  ],
  mode:'history' //加入属性history
})
```

## router-link

```html
 <router-link to = "/home"  replace>首页</router-link>
```

### router-link 其他属性

* **tag**

tag属性可以更改router-link的渲染的组件

```html
 <router-link to = "/home" tag="button">首页</router-link>
```
* **replace**

设置不能返回

```html
 <router-link to = "/home" tag="button" replace>首页</router-link>
```

* **router-link-active**

路由匹配成功时，会自动给当前元素设置一个`router-link-active`的class

例如设置点击变色

``` css
.router-link-active{
  color: cornflowerblue;
}
```

### 通过代码跳转路由

通过`$router.push`跳转

**HTML**
```HTML
 <button @click = "homeClick">首页</button>
```
**JS**
```js
methods:{
    homeClick(){
      this.$router.push('/home').catch(err=>{err})
    }
}
```
## 动态路由

可以接收参数数据的路由形式，路由地址的一部分是会发生变化的

### 1. 通过`$route.params`传递参数

***App.vue***

**HTML**
```HTML
<router-link :to = "'/user/'+userId"  replace>我</router-link>
<router-view :my-name="userId"></router-view>
```
**JS**
```JS
data(){
    return{
      userId:'Okarin'
    }
  }
```

***User.vue***

**HTML**
```HTML
<template>
  <div>
    <h3>{{userId}} is my name</h3>
  </div>
</template>
```
**JS**
```JS
  computed:{
    userId(){
      return this.$route.params.userId
    }
  }
```

***index.js***
```js
{
      path:'/user/:userId', //:后面接参数名字
      name:'user',
      component:User
    }
```
### 2. 通过`props`属性传递

***App.vue***

**HTML**
```HTML
<router-view :my-name="userId"></router-view> 
```
**JS**
```JS
data(){
    return{
      userId:'Okarin'
    }
  }
```
***User.vue***

**HTML**
```HTML
<template>
  <div>
    <h1> Hello {{myName}}! </h1>
  </div>
</template>
```
**JS**
```JS
  props:{
    myName:{
      type:String,
      dafult:'Retr0',
      required:true
    }
```

***index.js***
```js
{
      path:'/user/:userId', //:后面接参数名字
      name:'user',
      component:User
    }
```

### 3. 通过`query`属性传递

***App.vue***

**HTML**
```HTML
 <router-link :to ="{path:'/profile',query:{name:'Okarin',age:'18',words:'EL PSY CONGROO!' } }" replace>个人</router-link>
```

***Profile.vue***

**HTML**
```HTML
<template>
  <div>
    <h1>{{profileInfo.name}}</h1>
    <h2>Age: {{profileInfo.age}}</h2>
    <h3>{{profileInfo.words}}</h3>
  </div>
</template>

```
**JS**
```JS
  computed:{
    profileInfo(){
      return this.$route.query
    }
  }
```

### 通过代码跳转传递参数

***App.vue***

**HTML**
```HTML
<button @click = "profileClick">我的</button>
```
**JS**
```JS
    profileClick() {
      this.$router.push({
        path:'/profile',
        query:{
          name:'retr0',
          age:'19',
          words:'let us coding!' }
      })
    }
```



## 路由懒加载

分组件打包js

***index.js***

```js
const Home = () => import( "../components/Home");
// import Home  from "../components/User"; 对比
```
## 嵌套路由

***index.js***

```js
{
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/',
          redirect:'news'
        },
        {
          path:'news',
          component:HomeNews
        },
        {
          path:'message',
          component:HomeMessage
        }
      ]
    }
```
***Home.vue***

**HTML**
```html
<template>
  <div>
    <h1>Home</h1>
    <router-link to = "/home/news">新闻</router-link>
    <router-link to = "/home/message">消息</router-link>
    <router-view/>
  </div>
</template>
```
## 全局导航守卫

可以用来做用户在没有登录注册时的拦截
使用 `router.beforeEach`（前置钩子函数） 注册一个全局前置守卫：

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```
每个守卫方法接收三个参数：

- to: Route: 即将要进入的目标 路由对象
- from: Route: 当前导航正要离开的路由
- next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

### 设置网页标题

***index.js***
```js
{
      path:'/about',
      meta:{
        title:'关于'
      },             //使用meta元数据
      name:'about',
      component:About
    }


router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

```
### 全局守卫补充

- afterEach(后置钩子)


### 组件中的守卫


- beforeRouteEnter
- beforeRouteUpdate 
- beforeRouteLeave

```js
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```


## vue router 与 keep-alive

使用$route.meta的keepAlive属性：

```HTML
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
```

需要在router中设置router的元信息meta：

```JS
//...router.js
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
  ]
})
```

**使用效果**

以上面router的代码为例：

```HTML
<!-- Page1页面 -->
<template>
  <div class="hello">
    <h1>Vue</h1>
    <h2>{{msg}}</h2>
    <input placeholder="输入框"></input>
  </div>
</template>
```

```HTML
<!-- Hello页面 -->
<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>
```

(1) 在Page1页面输入框输入“asd”，然后手动跳转到Hello页面；

(2) 回到Page1页面发现之前输入的"asd"依然保留，说明页面信息成功保存在内存中；

![](https://i.loli.net/2021/10/18/FTSl2NjJZBuRcCa.png )
<center>进入Page1页面，并输入"asd"</center>

![](https://i.loli.net/2021/10/18/w6ZTFBEfuhnYDcJ.png)
<center>跳转到Hello</center>

![](https://i.loli.net/2021/10/18/FTSl2NjJZBuRcCa.png)
<center>返回Page1页面，输入框数据会被保留</center>

<big>**当然，也可以通过动态设置route.meta的keepAlive属性来实现其他需求**</big>

首页是A页面
B页面跳转到A，A页面需要缓存
C页面跳转到A，A页面不需要被缓存
思路是在每个路由的`beforeRouteLeave(to, from, next)`钩子中设置`to.meta.keepAlive`：

**A的路由：**

```JS
{
    path: '/',
    name: 'A',
    component: A,
    meta: {
        keepAlive: true // 需要被缓存
    }
}
export default {
    data() {
        return {};
    },
    methods: {},
    beforeRouteLeave(to, from, next) {
         // 设置下一个路由的 meta
        to.meta.keepAlive = true;  // B 跳转到 A 时，让 A 缓存，即不刷新
        next();
    }
};
export default {
    data() {
        return {};
    },
    methods: {},
    beforeRouteLeave(to, from, next) {
        // 设置下一个路由的 meta
        to.meta.keepAlive = false; // C 跳转到 A 时让 A 不缓存，即刷新
        next();
    }
};

```
