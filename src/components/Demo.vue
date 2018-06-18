<template>
    <div>
        <Carousel />
        <h2>更多产品</h2>
        <Products />
    </div>
</template>

<script>
import Carousel from './Carousel'
import Products from './Products'

export default {
    mounted() {
        console.log('加载成功')
    },
    methods: {
    },
    components: {
        Carousel,
        Products
    }
}
</script>

<style scoped>
</style>
