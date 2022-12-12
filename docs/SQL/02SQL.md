---
title: MySQL表操作
date: 2022-12-12
categories:
 - SQL

---
<!-- more -->

## 创建表

```sql
CREATE TABLE table_name
(
  field1 datatype,
  field2 datatype,
  field3 datatype
)character set 字符集 collate 校对规则 engine 引擎
```

### 实例
1. 创建一个user表，列名id、name、password、birthday，指定字符集utf8，区分大小写。
```sql
CREATE TABLE `user`(
	id INT,
	`name` VARCHAR(255),
	`password` VARCHAR(255),
	 birthday DATE)
	CHARACTER SET utf8 COLLATE utf8_bin ENGINE INNODB
```
2. 创建一个员工表,选用适当的数据类型
```sql
CREATE TABLE `emp`(
	id INT,
	`name` VARCHAR(32),
	 sex CHAR(1),
	 birthday DATE,
	 entry_time DATETIME,
	 job VARCHAR(32),
	 salary DOUBLE,
	 `resume` TEXT)
	CHARACTER SET utf8 COLLATE utf8_bin ENGINE INNODB
```

## 修改表
```sql
添加字段：
ALTER TABLE table_name 
ADD (column datatype)

修改字段：
ALTER TABLE table_name 
MODIFY(column datatype)

删除字段：
ALTER TABLE table_name 
DROP(column datatype)

修改表名：
RENAME TABLE table_name TO new_name
```

### 实例
1. 在员工表resume后面添加img字段，varchar类型
```sql
ALTER TABLE emp 
ADD img VARCHAR(32) NOT NULL DEFAULT ''
AFTER `resume`
```
2. 修改job字段,使其长度为60
```sql
ALTER TABLE emp 
MODIFY job VARCHAR(60)
```
3. 删除sex列
```sql
ALTER TABLE emp 
DROP sex
```
4.修改表名为employee
```sql
RENAME TABLE emp TO employee
```
5.修改字符集为utf8
```sql
ALTER TABLE employee
CHARACTER SET utf8
```
6.修改列名name为user_name
```sql
ALTER TABLE employee 
CHANGE NAME user_name VARCHAR(32) NOT NULL DEFAULT ''
```