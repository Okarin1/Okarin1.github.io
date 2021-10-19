---
title: Python实现网易云昵称报时以及在手机上部署
date: 2021-09-27
sidebar: 'auto'
categories:
 - blog
tags:
 - Python 
---

<!-- more -->

## 写在前面
>项目地址: [https://github.com/okarin1/netease-python](https://github.com/okarin1/netease-python) 



## 思路

### 获取网易云接口

在网上寻找到了搭建网易云API的教程，于是搭建了一个网易云API。

[API地址](https://netease-cloud-music-api-okarin1.vercel.app/)

[官方文档](https://neteasecloudmusicapi.vercel.app/#/)

其中登录的接口为：/login/cellphone?phone=xxx&password=yyy 

更新信息的接口为：/user/update?

### python思路

通过Python的 requests 库来对API进行请求登录，通过 time 库生成时间昵称，再通过requests 库来对API进行请求更新头像，最后通过 apscheduler 实现按时间进行请求。

## 实现

### 请求登录

```python

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                  'Chrome/86.0.4240.111 Safari/537.36 '
}  # 请求头

session = HTMLSession()


def login(u, p):
    url = 'https://netease-cloud-music-api-okarin1.vercel.app/login/cellphone'  # 网易云手机登录接口

    data = {
        'phone': u,
        'password': p
    }
    res = session.get(url, headers=headers, params=data)
    return res.text


```

### 时间昵称

```python
def generate_time_name():
    # time.strftime('%Y{y}%m{m}%d{d} %H{h}%M{f}%S{s}').format(y='年', m='月', d='日', h='时', f='分', s='秒')
    now = time.strftime('%H{h}%M{f}').format(y='年',m='月',d='日',h='時',f='分',s='秒')
    return now
```

### 上传昵称

```python
def upload_name_job(prefix):
    url = 'https://netease-cloud-music-api-okarin1.vercel.app/user/update?nickname='  # 网易云更换名字接口
    upname = prefix + name.generate_time_name()
    print(upname)
    namecode = session.get(str(url + upname), headers=headers)

    """
    更改名字接口仅在登录后生效
    更改成功返回值为：code:200
    """

    code = namecode.json()  # 将返回值转换为字典
    if code['code'] == 200:
        print("Succeed")
    else:
        print("fail")

```

### 定时上传

```python

    scheduler = BlockingScheduler()  # 定时任务
    now = datetime.now()
    scheduler.add_job(
        upload_name_job,
        'interval',
        minutes=1,
        args=[prefix],  # 不能使用upload_name_job(prefix)传递参数
        start_date=now.replace(second=0, microsecond=0),
    )
    scheduler.start()
```

## 在手机上部署

Termux 是一个高级终端，借助 Termux 可以在手机上实现终端操作。

### 在Termux上部署：


* 更新源

`pkg update`
`pkg upgrade`

* 安装 python

`pkg install python`

* 安装 git
  
`pkg install git`


* 克隆项目到本地

`git clone https://github.com/okarin1/netease-python.git && cd netease-python`

这里可能要很久，有条件可以爬山

* 更新pip

`pip install –-upgrade pip`

* 安装一些依赖，很关键 不然安装lxml库会报错

`pip install wheel`

`pkg install libxml2`

`pkg install libxslt`

* 安装项目需要的库

`pip install -r requirements.txt`

* 运行

`python time_name.py`


接下来输入手机号和密码以及前缀就可以运行了，因为网易云不允许重复名字，所以有前缀。
::: danger
注意：不要取"现在",因为重复了！
:::

## 写在后面 

因为在网易云上面发现了一个每天换名字的人，觉得很有意思就写了这个东西。感谢[ikws4](https://github.com/ikws4) 大佬的详细指导。