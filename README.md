# 路由
## 1.安装与引入
可在创建项目时直接按照，创建项目时直接选择。
也可在项目创建后单独安装：
npm install --save vue-router

创建router文件并在main中引入
```
// main中引入router
import router from './router'

// 可在app中显示
<router-view></router-view>

// 跳转
<router-link to="/home">首页</router-link>
```
## 2.动态路由匹配(路由传递参数)
1.路由配置中添加：
```
{
      path:"/shop/:id",
      name:"Shop",
      props:true,
      component:Shop
}
```
2.跳转传递参数：
`<router-link to="/Shop/12857">商城</router-link>`
(router-link和a标签效果类似，但router-link标签有很多特有属性，使用a标签无法使用，如tag="button",""中写什么标签router-link就会显示为该标签的样式)。
3.读取参数：
`{{ this.$route.params.id }}`。
4.捕获所有路由或404 Not found 路由。
```
{
      path:"*",
      component:NotFound
}
```
## 3.路由嵌套
### 3.1.规则
```
{
      path:"/learn",
      component:Learn,
      children:[
            {
                  path:"java",
                  component:Java
            },
            {
                  path:"web",
                  component:Web,
                  alias:'web01'
                  // 别名
            }
      ]
}
```
### 3.2.注意：路由配置中，不需要给定全部路由，单纯当路径即可，不需要增加"/"
```
children:[
            {
                  path:"java",
                  component:Java
            }
      ]
```
### 3.3.增加二级路由显示位置：
```
<template>
    <div>
        <ul>
            <li>
                <router-link to="/learn/java">Java学习</router-link>
            </li>
            <li>
                <router-link to="/learn/web">Web学习</router-link>
            </li>
        </ul>
        学习: <router-view></router-view>
    </div>
</template>
```
## 4.编程式导航
router.push(location, onComplete?, onAbort?)
router.replace(location, onComplete?, onAbort?)
router.go(n)
```
<button @click="clickHandler">去首页</button>

methods:{
      clickHandler(){
      this.$router.push("/home")
      },
      clickHandler2(){
      // this.$router.push("/shop/12580")
      // 配合命名路由
      this.$router.push({name:"Shop",params:{id:"12306"}})
      }
}
```
## 5.命名路由
```
{
      path:"/shop/:id",
      name:"Shop",
      props:true,
      component:Shop
}

<router-link :to="{name:'Shop',params:{id:ids}}">商城</router-link>

<button @click="clickHandler2">去商城</button>
methods:{
      clickHandler2(){
      this.$router.push({name:"Shop",params:{id:"12306"}})
      }
}
```
## 6.重定向和别名
重定向redirect:
```
{
      path:"/",
      // 重定向
      redirect:"/home"
},
```
别名alias:
```
{
      path:"/learn",
      component:Learn,
      redirect:"/learn/java",
      children:[
            {
                  path:"java",
                  component:Java
            },
            {
                  path:"web",
                  component:Web,
                  // 别名
                  alias:'web01'
            }
      ]
},
```
## 7.路由组件传参
可以使用props传递参数的方案读取路由参数
```
// 路由配置文件中
{
      path:"/shop/:id",
      name:"Shop",
      props:true,
      component:Shop
}

// 页面中
{{ id }}
// 路由传参解耦
props:{
      id:{
      type:[String, Number],
      default:0
      }
}
```
## 8.HTML5 History 模式
hash模式：vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载，当url中会出现#，有点丑
history模式：使用history不会出现#，但是如果通过复制url直接访问会出现404，需要后端配合才能正常使用。
```
// 路由配置文件中
// history模式
// mode:'history',
```
## 9.高亮显示
`<router-link></router-link>`默认会渲染成a标签。那我们使用的时候为什么不直接使用a标签呢，因为router-link中有很多特性，如果使用a标签的话这些特性将无法使用。
如: `<router-link tag="button" to="/home">`首页</router-link>
tag属性，可以让router-link渲染成任意标签。
在tag属性不做设置时，我们在页面里看到router-link是一个a标签，他的class有两个值，分别为：
router-link-exact-active
router-link-active
他们的区别在于exact，exact是精准匹配，使用此方式添加高亮样式，则只有被点击的元素会显示高亮。如果不加exact，则被点击的元素的父元素也会高亮，使用方法和常规通过class添加高亮方法一致，如：
```
.router-link-active{
  color: red;
}
// 或
.router-link-exact-active{
  color: red;
}
```
但是这样写太长了，很麻烦所以有了简便写法，将linkExactActiveClass:"exact-active"添加到路由文件中,使用此方法将写法简化，编写样式时使用exact-active即可。即用active和exact-active来替换router-link-active和router-link-exact-active。
```
// 路由文件中
linkActiveClass:"active",
linkExactActiveClass:"exact-active",

// 
.active{
  color: red;
}
.exact-active{
  color: blue;
}
```
router-link-active：使用此方式添加高亮样式，则被点击的标签的父元素也会高亮。linkActiveClass:"active"用法同上