#Git常用命令 

```
/* 获取所有分支信息 (红色代表远程分支) */
git branch -a 

/* 删除本地分支 dev */
git branch -d dev

/* 获取远程分支dev 并命名本地版本为dev */
git checkout -b dev origin/dev
```