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

## 添加
```sql
INSERT INTO table_name [(column)]
VALUES (value)
```

### 实例
1. 添加两条数据到goods表
```sql
INSERT INTO goods (id,goods_name,price) 
VALUES(01,'小米13',3999)

INSERT INTO goods (id,goods_name,price) 
VALUES(02,'iPhone13',6999)
```
### INSERT 补充

- 插入的数据应与字段的数据类型相同
- 数据长度应该在列的规定范围之内
- 数据位置必须与被插入的列排列位置相对应
- 字符和日期数据类型应该包含在单引号中
- 列可以插入空值，前提是该字段允许为空
- 给所有字段添加数据，可以不写字段名称

## 更新
```sql
UPDATE tab_name
SET col_name = expr1
 [WHERE where_definition]
```
### 实例
1. 把所有员工的薪水修改为5000
```sql
UPDATE employee SET salary = 5000
```
2. 将张三的薪水修改为4000元
```sql
UPDATE employee
SET salary = 4000
WHERE `user_name` = '张三'
```
3.将张三的工资增加1000元，同时修改工作为设计师
```sql
UPDATE employee
SET salary = salary + 1000,job = '设计师'
WHERE `user_name` = '张三'
```

## 删除
```sql
DELETE FROM tb_name
[WHERE where_definition]
```

### 实例
1. 删除员工表中为李四的记录
```sql
DELETE FROM employee
WHERE user_name = '李四'
```
2. 删除表中所有记录
```sql
DELETE FROM employee
```
### DELETE 补充
- 不带where条件会删除所有记录
- 不能删除某个字段的值，可以update为空值
- 只能删除记录，不删除表本身，可使用drop删除表