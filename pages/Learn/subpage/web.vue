<template>
    <div>
        Web
        <button @click="clickHandler">去首页</button>
        <button @click="clickHandler2">去商城</button>
    </div>
</template>
<script>
export default {
    name:'Web',
    methods:{
        clickHandler(){
            this.$router.push("/home")
        },
        clickHandler2(){
            // this.$router.push("/shop/12580")
            this.$router.push({name:"Shop",params:{id:"12306"}})
        }
    }
}
</script>