<template>
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <img :src="`../src/assets/products/${product.imgSrc}`" class="image">
      <div style="padding: 10px;">
        <span>{{product.name}}</span>
        <div class="bottom clearfix">
          <span class="description">{{ product.description }}</span>
          <el-button type="text" class="button">查看</el-button>
        </div>
      </div>
    </el-card>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      currentDate: new Date()
    };
  }
}
</script>

<style>
.description {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
