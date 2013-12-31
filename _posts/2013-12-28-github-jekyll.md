---
layout:     post
title:      使用 Github 和 Jekyll 发表博客
category:   
tags: 
description: 
---

{{ page.title }}
================ 


## Linux 命令

以下是在 Linux 系统下的 bash 命令语句:

### 复制库到本地磁盘

从 github 将项目 (project) 复制 (fork) 到本地磁盘中,基本格式是:

> git clone git@github.com:USERNAME/USERNAME.github.com.git TARGETED_FILE

其中,TARGETED_FILE 通常是以 USERNAME.github.com.git 作为存放目录,比如我一般是放在 /home/william/williamlfang.github.com. 

> git clone git@github.com:williamlfang/williamlfang.github.com.git williamlfang.github.com

*注意* 这里我引用的是如下的模板设计:
> git clone git@github.com:pala/pala.github.com.git

当然,对于一个 project, 也可以直接以其项目命名.

###  更改项目文件

对于修改的文件,如果想要将其上传到 Github 空间存储,需要经过如下几个步骤

    ------------------------------------------------------------------------------
    ## williamlfang.github.com
    ------------------------------------------------------------------------------
    cd /home/william/williamlfang.github.com
    git add . -A           # 上传全部文件 */
    git commit -m ""       #  加上注解说明有助于日后维护
    
    git remote rm origin   # 删除历史保存
    git remote add origin git@github.com:williamlfang/williamlfang.github.com.git
                           # williamlfang.github.com
    git push origin master
    
    jekyll --server        # 在本地文件预览效果, 可打开: 127.0.0.1:4000
    
    
    ------------------------------------------------------------------------------
    ## williamlfang.github.com/blogs
    ------------------------------------------------------------------------------
    cd /home/william/williamlfang.github.com
    git add . -A           # 上传全部文件 */
    git commit -m ""       #  加上注解说明有助于日后维护
    
    git remote rm origin   # 删除历史保存
    git remote add origin git@github.com:williamlfang/blogs.git
                           # williamlfang.github.com/blogs
    git push origin master
    
    jekyll --server        # 在本地文件预览效果, 可打开: 127.0.0.1:4000

以下是纯净版:

    cd /home/william/williamlfang.github.com
    git add . -A           
    git commit -m ""       
    
    git remote rm origin   
    git remote add origin git@github.com:williamlfang/williamlfang.github.com.git
    git push origin master
    
    jekyll --server  
    





