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
<script>
export default {
    name:'Learn'
}
</script>