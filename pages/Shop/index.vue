<template>
    <div>
        Shop:
        <!-- {{ this.$route.params.id }} -->
        {{ id }}
    </div>
</template>
<script>
export default {
    name:'Shop',
    // 路由传参解耦
    props:{
        id:{
            type:[String, Number],
            default:0
        }
    }
}
</script>