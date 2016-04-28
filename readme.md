#AngularJs基础概念的理解
## MVC的理解

* MVC是一种软件架构设计模式(Model-View-Controller,模型-视图-控制器)。
    * 模型（model）中包含应用的数据和数据进行交互的方法。
    * 视图（view）将数据呈现给用户，而不需要知道如何保存对象，只需要知道如何显示它即可。
    * 控制器（Controller）则是二者的桥梁，用来存放二者绑定在一起的业务逻辑。
       
**单向的数据绑定**

    在Rails等传统Web框架中，控制器（Controller）将多个模型中的数据和模板组合在一起形成视图（view），并将其提供给用户，
    这个组合过程中会产生一个单向视图（view）。如果没有创建任何自定义的JavaScript组件，视图只会体现它渲染时模型暴露出的数据。

**疑问**
* Q1：HTML+CSS+JavaScript是不是MVC？如果是的话Model-View-Controller分别是什么？ 
* Q2：如果把Js和css作为HTML的外部引用，这样是不是MVC?   

## AngularJs的双向数据绑定

    当视图(view)中的数据发生变化的时候，作用域下的数据模型(model)也会相应的更新。
    同样的，无论何时，当数据模型(model)发生变化的时候，视图(view)也会相应的更新。
    
**原理分析**

- $scope作为数据模型对象（model object），是视图（view）和（model）的粘合剂。
- $scope对象是一个简单的Javascript对象，其中的属性可以被视图（View）访问，也可以同控制器（Controller）进行交互。
- 如果视图改变了某个值，数据模型会通过脏检查（Dirty Check）检查到这个变化，而数据模型改变了某个值，视图也会依据变化重新渲染。


## NG指令

**ng-app**

    ng-app指令会在启动引导时创建一个$rootScope对象
    
**ng-init**
    
    ng-init指令用来在作用域上初始化变量，这个指令初始化的变量或者对象将加在$rootScope的一个属性上。

## NG自定义指令    

**指令作用域（层级作用域）**

    Dom中每个指令调用时都可能会:

        1. 直接调用相同作用域对象
        2. 从当前作用域对象集成一个新的作用域对象

**图解指令作用域**

![图解](http://www.hubwiz.com/course/54f3ba65e564e50cfccbad4b/img/0006.png)

------
## 模块化建立应用

>分离应用程序的组件到单个文件中，并使用`script`元素在主HTML文件中引用那些文件

**常见方法**

- 将给定类型的组件放一起（控制器在一个文件里，指令在另一个里）
- 相关组件的特定部分（用户管理组件放在一个文件里，内容管理组件放在另一个里）
- 将应用程序中的 HTML标签打散成多个文件中，然后在应用程序运行时当你需要的时候加在片段
- 对于**特别大的应用**，通常为组织（函数或组件）这一级别创建层级文件夹，而其他级别择优多个文件。

### Module 对象成员

`animation(name,factory)`

    支持动画特性    
    
 `config(callback)`

    注册一个在载入时可被用于配置模块的函数
    
`constant(key,value)`

    定义返回常量的服务
       
`controller(name,constructor)`

    创建控制器
      
`directive(name,factory)`

    创建指令
       
`factory(name,provider)`
`provider(name,type)`
`service(name,constructor)`

    创建服务  
    
`filter(name,factory)`

    创建过滤器用于格式化向用户显示的数据
    
`name`

    返回模块名称
      
`run(callback)`
    
    注册一个在载入并配置所有模块后被调用的函数
      
`value(name,value)`

    定义返回常量的服务