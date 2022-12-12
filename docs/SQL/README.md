---
title: MySQL数据库操作
date: 2022-12-12
categories:
 - SQL

---
<!-- more -->

## 数据库创建

```sql
CREATE DATABASE [IF NOT EXSTS] db_name 
    [create_spcification]

[DEFAULT] CHARACTER SET charset_name
[DEFAULT] COLLATE collation_name
```

CHARACTER SET：指定数据库采用的字符集，如果不指定，默认为utf8

COLLATE：指定数据库字符集的校对规则(utf8_bin`区分大小写`、默认为utf8_general_ci`不区分大小写`)

### 实例
1. 创建一个名称为 db_01 的数据库
```sql
CREATE DATABASE db_01
```
2. 删除数据库db_01
```sql
DROP DATABASE db_01
```
3. 创建一个使用utf8字符集的db_02数据库
```sql
CREATE DATABASE db_02 CHARACTER SET utf8
```
4. 创建一个使用utf8字符集，并带校对规则的db_03数据库
```sql
CREATE DATABASE db_03 CHARACTER SET utf8 COLLATE utf8_bin
```

### 校对规则

**utf8_general_ci** 不区分大小写 （默认）

**utf8_bin** 区分大小写

如果表没有指定校验规则，那么会以数据库的校验规则为准


## 数据库查看删除

```sql
显示数据库：
SHOW DATABASES

显示数据库创建语句：
SHOW CREATE DATABASE db_name

数据库删除
DROP DATABASE [IF EXISTS] db_name
```

### 实例
1. 查看当前服务器中的所有数据库
```sql
SHOW DATABASES
```
2. 查看db_01数据库的定义信息
```sql
SHOW CREATE DATABASE db_01
```
3. 删除db_01数据库
```sql
DROP DATABASE db_01
```


