---
title: webpack 相关自学笔记
date: 2021-06-12
sidebar: 'auto'
tags:
 - webpack
---

## webpack简介

webpack是一个 模块打包工具，支持所有的打包语法，比如 ES Module、CommonJS、CMD、AMD。初期的webpack是用来模块打包js的，发展到现在，已经可以打包很多种文件类型，比如 css、img 。

## 文件别名

在`webpack.base.conf.js`文件中更改`resolve`下的`alias`里的内容，可以简化文件路径，提高复用性

```js
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'assets': resolve('@/assets'),
      'components': resolve('@/components'),
      'views': resolve('@/views'),
    }
  }
```
