---
title: 博客添加QQ链接
date: 2021-05-13
sidebar: 'auto'
categories:
 - 博客
tags:
 - 教程
---

<!-- more -->

## 添加在头像下方
在源文件 `config.js`里面的`blogConfig`下面添加如下代码
```
"socialLinks": [     // 信息栏展示社交信息
        { icon: 'reco-qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=201747922&site=qq&menu=yes' },
      ]
```

## 添加在导航条中
在源文件 `config.js`里面的 `nav`标签下 `联系`的`items`里面 添加如下代码：


```sh
{
    "text": "QQ",
    "link": "http://wpa.qq.com/msgrd?v=3&uin=填写你的QQ&site=qq&menu=yes",
    "icon": "reco-qq"
}
```


::: danger
注意：注意与前面的代码用逗号隔开
:::

**例如：**
```
"type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      }, 
      "tag": {
        "location": 3,
        "text": "标签"
      },  //注意这里的逗号
      "socialLinks": [     // 信息栏展示社交信息
        { icon: 'reco-qq', link: 'http://wpa.qq.com/msgrd?v=3&uin=201747922&site=qq&menu=yes' },
      ]
    },

```


## 跳转效果

[点击跳转](http://wpa.qq.com/msgrd?v=3&uin=201747922&site=qq&menu=yes)