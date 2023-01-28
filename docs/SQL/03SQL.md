---
title: MySQL 单表查询
date: 2023-01-01
categories:
 - SQL

---
<!-- more -->

## 基本用法
```sql
 SELECT [DISTINCT] * | {column1,column2....} 
 FROM table_name
```
### 实例

1.查询表中所有学生的信息
```sql
SELECT * FROM student
```

2.查询表中所有学生的姓名和对应的英语成绩
```sql
SELECT `name`,english 
FROM student
```

3.过滤表中重复数据
```sql
SELECT DISTINCT * FROM student
```

**【DISTINCT】：要查询的字段每一个都相同，才会去重**

## 表达式运算

```sql
SELECT * | {column1|expression,column2|expression...}
FROM table_name
```

### 运算符
>比较运算符
 * 大于 `>`，小于 `<`，大于(小于)等于`>=` `<=` ，不等于`<>` `!=`
 * 在某一区间（包含边界）：`BETWEEN...AND...`
 * 在列表中的值：`IN(SET)`
 * 模糊查询：`LIKE`,`NOT LIKE`
>逻辑运算符
* 多个条件同时成立：`and`
* 多个条件任一成立：`or`
* 不成立：`not` 例：`where not(salary>3000)`

### 实例

1.统计每个学生的总分
```sql
SELECT `name`,(chinese+english+math)
FROM student
```

2.统计每个学生总分加10分的情况
```sql
SELECT `name`,(chinese+english+math+10) 
FROM student
```
3.查询名字为小明的学生的成绩
```sql
SELECT * FROM student
WHERE `name` = '小明'
```

4.查询总分大于200分的所有同学
```sql
SELECT `name` FROM student
WHERE (chinese+english+math) > 200
```
5.查询数学成绩大于60，并且语文成绩大于80的学生成绩
```sql
SELECT * FROM student
WHERE math > 60 AND chinese > 80
```
6.查询英语成绩大于语文成绩的学生信息
```sql
SELECT * FROM student
WHERE english > chinese
```
7.查询总分大于200分，并且数学成绩小于语文成绩，并且姓小的学生
```sql
SELECT * FROM student
WHERE (chinese+english+math)>200 AND math<chinese AND `name` LIKE '小%'
```


## 别名

```sql
SELECT  column_name AS other_name 
FROM table_name
```
注：可以省略AS，但要空格


### 实例
1.使用别名表示学生分数
```sql
SELECT `name`,(chinese+english+math) as total
FROM student
```
```sql
SELECT `name`,(chinese+english+math) total
FROM student
```

## 排序
```sql
SELECT column1,column2,column3...
FROM table_name
order by column asc|desc
```
升序：asc 默认，降序：desc

### 实例

1.按数学成绩升序显示
```sql
SELECT * FROM student
ORDER BY math
```
2.按总分成绩降序显示
```sql
SELECT * ,(chinese+english+math) total FROM student
ORDER BY total desc
```
3.对姓小的学生总分降序排序
```sql
SELECT * ,(chinese+english+math) total FROM student
WHERE `name` LIKE '小%'		
ORDER BY total desc
```****