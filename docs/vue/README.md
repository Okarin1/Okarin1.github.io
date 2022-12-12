---
title: Vue 的一些笔记
date: 2021-03-29
categories:
 - Vue
tags:
 - Vue
---

## 引入
>CDN 引入


  
## Vue2实例

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
```

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例</title>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
</head>
<body>
<div id="app">
  <p>{{ message }}</p>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
</script>
</body>
</html>
```


## Vue3实例

```html
<script src="https://unpkg.com/vue@next"></script>
```

```html
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">
      
  </div>
  <script src="https://unpkg.com/vue@next"></script>
  <script>
    const okarin = {
      template:'<h2>HelloWorld</h2>'
    }
    const app = Vue.createApp(okarin);
    app.mount("#app")
  </script>
</body>
</html>
```