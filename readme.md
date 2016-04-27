## AngularJs基础概念的理解

# MVC的理解

* MVC是一种软件架构设计模式(Model-View-Controller,模型-视图-控制器)。
    * 模型（model）中包含应用的数据和数据进行交互的方法。
    * 视图（view）将数据呈现给用户，而不需要知道如何保存对象，只需要知道如何显示它即可。
    * 控制器（Controller）则是二者的桥梁，用来存放二者绑定在一起的业务逻辑。
    
    
 ** 单向的数据绑定 **

    在Rails等传统Web框架中，控制器（Controller）将多个模型中的数据和模板组合在一起形成视图（view），并将其提供给用户，这个组合过程中会产生一个单向视图（view）。如果没有创建任何自定义的JavaScript组件，视图只会体现它渲染时模型暴露出的数据。

** 疑问 **
* Q1：HTML+CSS+JavaScript是不是MVC？如果是的话Model-View-Controller分别是什么？ 
* Q2：如果把Js和css作为HTML的外部引用，这样是不是MVC?   

# AngularJs的双向数据绑定

    当视图(view)中的数据发生变化的时候，作用域下的数据模型(model)也会相应的更新。同样的，无论何时，当数据模型(model)发生变化的时候，视图(view)也会相应的更新。
    


** 原理分析 **

- $scope作为数据模型对象（model object），是视图（view）和（model）的粘合剂。
- $scope对象是一个简单的Javascript对象，其中的属性可以被视图（View）访问，也可以同控制器（Controller）进行交互。
- 如果视图改变了某个值，数据模型会通过脏检查（Dirty Check）检查到这个变化，而数据模型改变了某个值，视图也会依据变化重新渲染。


# NG指令

** ng-app **

    ng-app指令会在启动引导时创建一个$rootScope对象
    
** ng-init **
    
    ng-init指令用来在作用域上初始化变量，这个指令初始化的变量或者对象将加在$rootScope的一个属性上。

## NG自定义指令    