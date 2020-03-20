import Vue from "vue"
import VueRounter from "vue-router"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import NotFound from "../pages/NotFound"
import Learn from "../pages/Learn"

import Java from "../pages/Learn/subpage/java.vue"
import Web from "../pages/Learn/subpage/web.vue"


Vue.use(VueRounter)

export default new VueRounter({
    // mode:'history',
    // history模式
    linkActiveClass:"active",
    linkExactActiveClass:"exact-active",
    routes:[
        
        {
            path:"/",
            redirect:"/home"
            // 重定向
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/shop/:id",
            name:"Shop",
            props:true,
            component:Shop
        },
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
                    alias:'web01'
                    // 别名
                }
            ]
        },
        {
            path:"*",
            component:NotFound
        },
        
    ]
})