---
title: Vue.js v-model 双向绑定 和 计算属性
date: 2021-04-09
categories:
 - Vue
tags:
 - Vue
---



# 表单控件绑定&双向数据绑定

## v-model

### 基本用法

#### 多选

```html
<div id='box'>
    <input type='checkbox' v-model='check'>
</div>
```

```js
new Vue({
    el:'#box',
    data:{
        check:true
    }
})
```

通过v-model绑定了一个数组checkgroup，这样实现每个复选框被点击时，Vue会讲该复选框的value值按顺序push到checkgroup中

```html
<div id='box'>
	<input type="checkbox" v-model="checkgroup" value="vue"/>vue
	<input type="checkbox" v-model="checkgroup" value="react"/>react
	<input type="checkbox" v-model="checkgroup" value="jquery"/>jquery
</div>
```

```js
new Vue({
    el:'#box',
    data:{
        checkgroup:[];
    }
})
```



### 单选

```html
<div id='box'>
    <input type="radio" v-model="picked" value="vue" name="aaa"/>vue
	<input type="radio" v-model="picked" value="react" 	name="aaa"/>react
	<input type="radio" v-model="picked" value="jquery" name="aaa"/>jquery
</div>
```

```js
new Vue({
    el:'#box',
    data:{
        picked:""
    }
})
```

### v-model 值绑定

当定义在data中的值，通过v-mofel动态给value绑定值

```HTML
<div id="app">
		<label v-for="item in orHobbies" :for="item">
			<input type="checkbox" :value="item"  :id="item"  v-model="Hobbies">{{item}}
		</label>
		<h2>{{Hobbies}}</h2>
	</div>
```

```JS
		<script src="vue.js"></script>
		<script type="text/javascript">
			const app = new Vue({
				el: '#app',
				data: {
						orHobbies:['足球','乒乓球','网球','奶球'],
						Hobbies:[],
				      }
			})
		</script>
```


### 修饰符

#### .lazy

> 取代 `input` 监听 `change` 事件

```html
<div id='box'>
    <input v-model.lazy='mytext'>
    <!-- 这里的mytext不会实时修改而是在input失去焦点的时候才会修改-->
    {{mytext}} 
</div>
```

```js
new Vue({
    el:'#box',
    data:{
        mytext:''
    }
})
```



### .number

> 输入字符串转为有效的数字

```html
<input type="number" v-model.number="mynumber"/>
{{mynumber}}
```



### .trim

>  输入首尾空格过滤

```html
<input type="text" v-model.trim="myusername"/>
|{{myusername}}|  
```


# 计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：

```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 `message` 的翻转字符串。当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。

所以，对于任何复杂逻辑，你都应当使用**计算属性**。

## 实例

```html
<div id="box">
    {{myname.substring(0,1).toUpperCase() + myname.substring(1)}}

    <p>计算属性：{{getName}}</p>
    <p>计算属性：{{getName}}</p>

    <p>方法：{{getNameMethod()}}</p>
    <p>方法：{{getNameMethod()}}</p>
</div>	
```

```js
var vm =  new Vue({
    el:"#box",
    data:{
        myname:"okarin"
    },
    methods: {
        getNameMethod: function(){
            console.log("getNameMethod")//打印两次
            return this.myname.substring(0,1).toUpperCase() + this.myname.substring(1)
        }
    },
    computed: {
        getName: function(){
            console.log("getName-computed")//打印一次
            return this.myname.substring(0,1).toUpperCase() + this.myname.substring(1)
        }
    },
})
```
**运行结果**
```

Okarin


```
## 计算属性 setter和getter

>计算属性完整写法中有`get`和`set`方法，而一般使用是只使用`get方法`,所以经常省略。

```html

<div id="app">
		<p>{{ fullName }}</p>

	</div>

```

```JS

    const app = new Vue({
        el: '#app',
        data: {
                firstName:'zhou',
                lastName:'wang'
                },
        computed: {
            fullName:{
                set: function(newValue){
                    const names = newValue.split(' ');
                    this.firstName = names[0];
                    this.lastName = names[1];
                },
                get: function(){
                return this.firstName + ' ' + this.lastName
                }

                // fullName: function(){
                // return this.firstName + ' ' + this.lastName
                // }

            }
        }
    })

```

- set方法一般是不常用的,一般只使用只读属性


## 计算缓存 VS methods

1. 计算属性是基于它们的依赖进行缓存的
2. 计算属性只有在它的相关依赖发生改变时才会重新求值



## get() set()

```html
<div id='box'>
    <input type='checkbox' v-model='isAllChecked'>
</div>
```

```js
new Vue({
    el:'#box',
    data:{
        check:false
    },
    computed:{
        isAllChecked:{
            get(){
                //...doSomeThings
                return some //必须要return
            },
            set(newvalue){
                //doSomeThing(newValue)
            }
        }
    }
})
```

