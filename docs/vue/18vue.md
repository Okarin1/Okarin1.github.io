---
title: Vue.js 组件访问之子访问父 
date: 2021-04-17
categories:
 - Vue.js
tags:
 - Vue.js 
 - Vue语法
---

# parent

```HTML
<div id="app">
<cpn1></cpn1>
</div>


<template id="myCpn">
<div>
	<h2>这是子组件</h2>
	<button type="button" @click="showParent">查看</button>
</div>
</template>

<script src="vue.js"></script>
<script type="text/javascript">
const cpn1 = Vue.extend({
		template:'#myCpn',
			methods:{
				showParent(){
					console.log(this.$parent.name) //可以访问父级的属性或者方法
				}
			}

	})
	

const app = new Vue({
		el: '#app',
		data: {
			name:'Retr0'
		},
		components:{
			cpn1
		},
		methods:{
			showOK(){
				console.log('OK')
			}
		}
		
	})

</script>
```

# root

访问根组件 `$root` 可以访问Vue实例中的方法或属性

```HTML

<div id="app">
<cpn1></cpn1>
</div>


<template id="myCpn">
<div>
	<h2>这是子组件</h2>
	<button type="button" @click="showParent">查看</button>
</div>
</template>

<script src="vue.js"></script>
<script type="text/javascript">
const cpn1 = Vue.extend({
		template:'#myCpn',
			methods:{
				showParent(){
					console.log(this.$root.name) //可以访问父级的属性或者方法
				}
			}

	})
	

const app = new Vue({
		el: '#app',
		data: {
			name:'Retr0'
		},
		components:{
			cpn1
		},
		methods:{
			showOK(){
				console.log('OK')
			}
		}
		
	})

</script>

```

