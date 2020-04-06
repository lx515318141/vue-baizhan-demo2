# 路由
## 1.基础引入
## 2.动态路由匹配(路由传递参数)
      1.路由配置中添加：path:"/Shop/:id"。
      2.跳转传递参数：<router-link to="/Shop/12857">商城</router-link>(router-link和a标签效果类似，但router-link标签有很多特有属性，使用a标签无法使用，如tag="button",""中写什么标签router-link就会显示为该标签的样式)。
      3.读取参数：{{ this.$route.params.id }}。
      4.捕获所有路由或404 Not found 路由。
## 3.路由嵌套
      1.规则
            children:[
               {
                  path:"java",
                  component:Java
               },
               {
                  path:"web",
                  component:Web
               }
            ]
      2.注意：路由配置中，不需要给定全部路由，单纯当路径即可，不需要增加"/"
      3.增加二级路由显示位置：<router-view></router-view>
## 4.编程式导航
      router.push(location, onComplete?, onAbort?)
      router.replace(location, onComplete?, onAbort?)
      router.go(n)
## 5.命名路由
      {
            path:"/shop/:id",
            name:"Shop",
            props:true,
            component:Shop
      },
## 6.重定向和别名
      重定向redirect:
      别名alias:
## 7.路由组件传参
      props:true
      可以使用props传递参数的方案读取路由参数
## 8.HTML5 History 模式
      hash模式：vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载，当url中会出现#，有点丑
      history模式：使用history不会出现#，但是如果直接复制url访问会出现404，需要后端配合才能正常使用。
## 9.高亮显示
      router-link-exact-active：exact是精准匹配，使用此方式添加高亮样式，则只有被点击的元素会显示高亮。将linkExactActiveClass:"exact-active"添加到路由文件中,使用此方法将写法简化，编写样式时使用exact-active即可。
      router-link-active：使用此方式添加高亮样式，则被点击的标签的父元素也会高亮。linkActiveClass:"active"用法同上