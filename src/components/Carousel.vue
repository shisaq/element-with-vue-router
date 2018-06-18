<template>
  <div class="block">
    <el-carousel :height="bannerHeight + 'px'">
      <el-carousel-item v-for="(item, index) in carouselImg" :key="index">
        <div class="bannerImg" :style="`background-image: url(../src/assets/carousel/${item.name});`"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerHeight: window.innerHeight / 2,
      carouselImg: [
        {
          name: '1.jpg',
          id: 0
        },
        {
          name: '2.jpg',
          id: 0
        },
        {
          name: '3.jpg',
          id: 0
        },
        {
          name: '4.jpg',
          id: 0
        }
      ]
    }
  }
}
</script>

<style>
.bannerImg {
  width: 100%;
  height: inherit;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 360px;
  min-width: 1400px;
}
</style>
