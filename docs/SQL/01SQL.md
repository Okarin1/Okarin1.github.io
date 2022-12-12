---
title: MySQL数据类型
date: 2022-12-12
categories:
 - SQL

---
<!-- more -->

## 数值类型

### 整形
- tinyint [1个字节]
- smallint [2个字节]
- mediumint [3个字节]
- int [4个字节]
- bigint[8个字节]

### 小数类型
- float [单精度 4个字节]
- double [双精度 8个字节]
- decimal[M,D][大小不确定]

## 文本类型
- char 0-255
- varchar 0-65535 [0~2^16-1]
- text 0~2^16-1
- longtext 0~2^32-1

## 进制数据类型
- blob [0~2^16-1]
- longblob [0~2^32-1]

## 日期类型
- date [日期年月日]
- time [时分秒]
- datetime [年月日时分秒] 
- timestamp [时间戳]

