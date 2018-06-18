<template>
    <div>
        <h2>这是产品页面</h2>
        <div>
            <el-button @click="startHacking">Start</el-button>
        </div>
        <Carousel />
    </div>
</template>

<script>
import Carousel from './Carousel'

export default {
    mounted() {
        console.log('加载成功')
    },
    methods: {
        startHacking () {
            this.$notify({
                title: 'It works!',
                type: 'success',
                message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                duration: 5000
            })
        }
    },
    components: {
        Carousel
    }
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>
