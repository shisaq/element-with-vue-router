<template>
  <div class="block">
    <el-carousel :height="bannerHeight + 'px'">
      <el-carousel-item v-for="(item,index) in carouselImg" :key="index">
        <!-- <img :src="`../src/assets/carousel/${item.name}`" class="bannerImg" /> -->
        <div class="bannerImg" :style="`background-image: url(../src/assets/carousel/${item.name});`"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerHeight: window.innerHeight - 213,
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
  },
  methods: {
    setSize: function () {
      this.bannerHeight = 740 / 2560 * this.screenWidth - 213
      if(this.bannerHeight > 740) this.bannerHeight = 740
      if(this.bannerHeight < 360) this.bannerHeight = 360
    }
  },
  mounted() {
    this.setSize();
    const that = this;
    window.addEventListener('resize', function() {
      that.screenWidth = window.innerWidth;
      that.setSize();
    }, false);
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
