---
title: tomcat 与 nginx的区别是什么？
date: 2021-11-28
sidebar: 'auto'
categories:
 - blog
tags:
 - Tomcat 
 - Nginx
---

参考：
链接：https://www.zhihu.com/question/32212996/answer/87524617
链接：https://www.zhihu.com/question/32212996/answer/226688632

## Nginx 

一款开源的HTTP服务器软件（当然它也可以作为邮件代理服务器、通用的TCP代理服务器）。

HTTP服务器本质上也是一种应用程序——它通常运行在服务器之上，绑定服务器的IP地址并监听某一个tcp端口来接收并处理HTTP请求，这样客户端（一般来说是IE, Firefox，Chrome这样的浏览器）就能够通过HTTP协议来获取服务器上的网页（HTML格式）、文档（PDF格式）、音频（MP4格式）、视频（MOV格式）等等资源。下图描述的就是这一过程：

![img](https://pica.zhimg.com/50/904696074e077934e601f175913f42fd_720w.jpg?source=1940ef5c)![img](https://pica.zhimg.com/80/904696074e077934e601f175913f42fd_720w.jpg?source=1940ef5c)



不仅仅是Apache HTTP Server和Nginx，绝大多数编程语言所包含的类库中也都实现了简单的HTTP服务器方便开发者使用：

- [HttpServer (Java HTTP Server )](https://link.zhihu.com/?target=https%3A//docs.oracle.com/javase/8/docs/jre/api/net/httpserver/spec/com/sun/net/httpserver/HttpServer.html)
- [Python SimpleHTTPServer](https://link.zhihu.com/?target=https%3A//docs.python.org/2/library/simplehttpserver.html)

使用这些类库能够非常容易的运行一个HTTP服务器，它们都能够通过绑定IP地址并监听tcp端口来提供HTTP服务。



## [Apache Tomcat](https://link.zhihu.com/?target=http%3A//tomcat.apache.org/)

则是Apache基金会下的另外一个项目，与Apache HTTP Server相比，Tomcat能够**动态**的生成资源并返回到客户端。Apache HTTP Server和Nginx都能够将某一个文本文件的内容通过HTTP协议返回到客户端，但是这个文本文件的内容是固定的——也就是说无论何时、任何人访问它得到的内容都是完全相同的，这样的资源我们称之为**静态**资源。动态资源则与之相反，在不同的时间、不同的客户端访问得到的内容是不同的，例如：

- 包含显示当前时间的页面
- 显示当前IP地址的页面

Apache HTTP Server和Nginx本身不支持生成动态页面，但它们可以通过其他模块来支持（例如通过Shell、PHP、Python脚本程序来动态生成内容）。

如果想要使用Java程序来动态生成资源内容，使用这一类HTTP服务器很难做到。

[Java Servlet](https://link.zhihu.com/?target=http%3A//www.tianmaying.com/tutorial/servlet-intro)

技术以及衍生的

[Java Server Pages](https://link.zhihu.com/?target=http%3A//www.tianmaying.com/tutorial/jsp-intro)

技术可以让Java程序也具有处理HTTP请求并且返回内容（由程序动态控制）的能力，Tomcat正是支持运行Servlet/JSP应用程序的容器（Container）:

![img](https://pic1.zhimg.com/50/2651b72ce2170336d10ad17fd020ae7a_720w.jpg?source=1940ef5c)![img](https://pic1.zhimg.com/80/2651b72ce2170336d10ad17fd020ae7a_720w.jpg?source=1940ef5c)

## Tomcat

运行在JVM之上，它和HTTP服务器一样，绑定IP地址并监听TCP端口，同时还包含以下指责：

- 管理Servlet程序的生命周期
- 将URL映射到指定的Servlet进行处理
- 与Servlet程序合作处理HTTP请求——根据HTTP请求生成HttpServletResponse对象并传递给Servlet进行处理，将Servlet中的HttpServletResponse对象生成的内容返回给浏览器

虽然Tomcat也可以认为是HTTP服务器，但通常它仍然会和Nginx配合在一起使用：

- 动静态资源分离——运用Nginx的反向代理功能分发请求：所有动态资源的请求交给Tomcat，而静态资源的请求（例如图片、视频、CSS、JavaScript文件等）则直接由Nginx返回到浏览器，这样能大大减轻Tomcat的压力。
- 负载均衡，当业务压力增大时，可能一个Tomcat的实例不足以处理，那么这时可以启动多个Tomcat实例进行水平扩展，而Nginx的负载均衡功能可以把请求通过算法分发到各个不同的实例进行处理





## 总结

Nginx优点：负载均衡、反向代理、处理静态文件优势。nginx处理静态请求的速度高于apache；

Apache优点：相对于Tomcat服务器来说处理静态文件是它的优势，速度快。Apache是静态解析，适合静态HTML、图片等。

Tomcat：动态解析容器，处理动态请求，是编译JSP\Servlet的容器，Nginx有动态分离机制，静态请求直接就可以通过Nginx处理，动态请求才转发请求到后台交由Tomcat进行处理。

Apache在处理动态有优势，Nginx并发性比较好，CPU内存占用低，如果rewrite频繁，那还是Apache较适合。

反向代理的理解：

反向代理（Reverse Proxy）方式是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，

并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个服务器。


