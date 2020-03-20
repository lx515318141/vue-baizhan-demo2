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
    props:{
        id:{
            type:[String, Number],
            default:0
        }
    }
}
</script>