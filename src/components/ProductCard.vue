<template>
    <el-card :body-style="{ padding: '0px'}" shadow="hover">
      <img :src="`../src/assets/products/${product.imgSrc}`" class="image">
      <div style="padding: 10px;">
        <span>{{product.name}}</span>
        <div class="bottom clearfix">
          <span class="description">{{ product.description }}</span>
          <ProductDetail v-bind="product" />
        </div>
      </div>
    </el-card>
</template>

<script>
import ProductDetail from './ProductDetail'

export default {
  props: ['product'],
  data () {
    return {
      currentDate: new Date()
    };
  },
  components: {
    ProductDetail
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
