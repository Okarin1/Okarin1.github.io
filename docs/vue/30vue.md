---
title: Vue.js vuecli 脚手架
date: 2021-04-29
categories:
 - Vue.js
tags:
 - Vue.js 
 - Vue语法
---


# Vue CLI 脚手架

## 什么是脚手架

>脚手架是一个基于 Vue.js 进行快速开发的完整系统

## 脚手架的依赖

- webpack 打包工具
- node.js
- npm 包管理工具

## 安装

```sh

npm install -g @vue/cli

```

# Vue CLI 2


##  拉取 Vue CLI 2 的模板

安装一个桥接工具

```sh

npm install -g @vue/cli-init
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
vue init webpack my-project

```

## Vue CLI 2 初始化项目 <Badge text="old" type="warning"/>

```sh

vue init webpack my-project

```

:::danger 注意！
 项目名不要以中文命名
:::

- my-project 是项目文件夹名字
- Project name: 项目名字
- Project description: 项目描述
- Author:作者 会读取默认的git作者
- Runtime + Compiler/Runtime-only: 用哪一个来构建 默认用第一个/开发时一般选择第二个，运行效率更高
- Install vue-router:安装路由 Y
- use ESlint to lint your code? : 是否限制JS代码规范 N
- set up unit tests? ：单元测试 N
- setup e2e tests with Nightwatch? end to end(端到端测试) N
- npm and yarn 包管理工具
  
## Vue CLI 2 目录

### 文件结构细分

![](https://i.loli.net/2021/10/17/nvKd3wLqCQy9AkT.png)

* **build——[webpack配置]**

build文件主要是webpack的配置，主要启动文件是dev-server.js，当我们输入npm run dev首先启动的就是dev-server.js，它会去检查node及npm版本，加载配置文件，启动服务。
  
![](https://i.loli.net/2021/10/17/RkMmVHACgrPzd4N.png)

* **config——[vue项目配置]**
   
config文件主要是项目相关配置，我们常用的就是当端口冲突时配置监听端口，打包输出路径及命名等

![](https://i.loli.net/2021/10/17/douyNnWfs49HqVJ.png)

* **node_modules——[依赖包]**
  
node_modules里面是项目依赖包，其中包括很多基础依赖，自己也可以根据需要安装其他依赖。安装方法为打开cmd，进入项目目录，输入npm install [依赖包名称],回车。

* **src——[项目核心文件]**
  
项目核心文件放置写的代码

* **index.html——[主页]**
  
index.html如其他html一样，但一般只定义一个空的根节点，在main.js里面定义的实例将挂载在根节点下，内容都通过vue组件来填充

* **App.vue——[根组件]**
  
一个vue页面通常由三部分组成:模板(template)、js(script)、样式(style)

* **main.js——[入口文件]**
  
main.js主要是引入vue框架，根组件及路由设置，并且定义vue实例

* **router——[路由配置]**
  
router文件夹下，有一个index.js，即为路由配置文件

## Runtime + Compiler 和 Runtime-only 的区别

* Runtime + Compiler

![](https://i.loli.net/2021/10/17/fbQwAOj7vNCqtpY.png)



* Runtime-only

![](https://i.loli.net/2021/10/17/7PrtolJ5NLk9xXy.png)


vue对template的解析方式：template  ->  ast  ->  render  -> 虚拟dom  ->真实dom，

需要经过5步才可以把内容展示给用户，使用runtime-only则会省略前面2步，直接render  -> 虚拟dom  ->真实dom



# Vue CLI 3

## Vue CLI 3 初始化项目 <Badge text="new" type="tip"/>

```sh

vue create my-project

```

- **please pick a preset(选择配置)**

default(babel,eslint) （默认配置）

Manually select features （手动配置）选择手动配置

check the features needed for your project:（空格选择下面内容，回车进入）

- Babel （ES6转ES5）
- TypeScript
- Progressive Web App (PWA) Support （先进的开发，包括推送通知，本地存储等）
- Router （路由）
- Vuex
- CSS Pre-processors （css预处理器）
- Linter / Formatter （ESLint，强制代码格式）
- Unit Testing （单元测试）
- E2E Testing （端到端测试）
