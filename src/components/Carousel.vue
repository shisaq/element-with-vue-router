<template>
  <div class="block">
    <el-carousel :height="bannerHeight + 'px'">
      <el-carousel-item v-for="(item,index) in carouselImg" :key="index">
        <img :src="`../src/assets/carousel/${item.name}`" class="bannerImg" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerHeight: window.innerHeight,
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
      this.bannerHeight = 740 / 2560 * this.screenWidth
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
  object-fit: cover;
  min-height: 360px;
  min-width: 1400px;
}
</style>
