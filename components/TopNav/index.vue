<template>
    <div>
        <router-link to="/home">首页</router-link>
        <!-- <router-link tag="button" to="/home">首页</router-link> -->
        <!-- <router-link to="/shop/12857">商城</router-link> -->
        <router-link :to="{name:'Shop',params:{id:ids}}">商城</router-link>
        <router-link to="/learn">学习</router-link>
    </div>
</template>
<script>
export default {
    name:"TopNav",
    data(){
        return{
            ids:"12580"
        }
    }
}
</script>>