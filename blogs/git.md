#Git常用命令 

下载本计划代码
```
git clone https://github.com/SnowWinterMaye/xiaobaoshowtest.git
```

创建自己的分支
```
git checkout mybranchname
```


获取所有分支信息 (红色代表远程分支)
```
git branch -a
```

删除本地分支 dev
```
git branch -d dev
```

获取远程分支dev 并命名本地版本为dev
```
git checkout -b dev origin/dev
```

合并分支dev 到当前分支（master).之后需要解决冲突
```
git merge dev
```