---
title: Python实现记录bilibili粉丝数
date: 2021-04-12
sidebar: 'auto'
categories:
 - Python
tags:
 - Python
---

<!-- more -->

## 获取要记录的ID

在浏览器进入bilibili个人界面，链接地址后面的数字即为个人ID

我的地址为[https://space.bilibili.com/23812673](https://space.bilibili.com/23812673)，那么ID即为23812673

## bilibili API

bilibili提供了一个API来记录粉丝数量

https://api.bilibili.com/x/relation/stat?vmid=填入ID

在该链接的 "follower": 下的内容即为粉丝数量

## Python思路

通过Python的 requests 库来对API进行请求，再通过正则表达式来筛选想要的数据，最后通过 Timer 实现按时间刷新数据

## Python代码

```Python
from threading import Timer
import requests
import re


def get_cid():
    r = requests.get(url)
    item = re.findall('"follower":(.*?)}}', str(r.text))  # 正则表达式筛选粉丝数
    follow = int(''.join(item))
    a.append(follow)
    b = a[-1] - a[-2]  # 计算变化数
    if b == 0:
        print("粉丝数没有变化，现有粉丝数 %s 个" % (a[-1]))
    elif b > 0:
        print("粉丝数增加了 %s 个，现有粉丝数 %s 个" % (b, a[-1]))
    elif b < 0:
        print("粉丝数减少了 %s 个，现有粉丝数 %s 个" % (-b, a[-1]))


def loop_fun(fun, second):
    while True:
        timer = Timer(second, fun)
        timer.start()
        timer.join()


if __name__ == '__main__':
    a = [0]
    url = "https://api.bilibili.com/x/relation/stat?vmid=23812673"  # 在这里填入想记录的ID
    loop_fun(get_cid, 1)  # 每秒刷新一次

```

## 总结
是lex事件时弄的无聊的小玩意

