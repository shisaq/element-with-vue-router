<template>
  <el-row :gutter="24">
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="product in products" :key="product.id" style="margin-bottom: 10px;">
      <ProductCard v-bind:product="product" />
    </el-col>
  </el-row>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  data () {
    return {
      products: [
        {
          name: '封神榜',
          description: '封神榜描述',
          imgSrc: 'fengshenbang.jpg',
          id: 0
        },
        {
          name: '琅琊榜',
          description: '琅琊榜描述',
          imgSrc: 'langyabang.jpg',
          id: 1
        },
        {
          name: '金瓶梅',
          description: '金瓶梅描述',
          imgSrc: 'jinpingmei.jpg',
          id: 2
        },
        {
          name: '笑傲江湖',
          description: '笑傲江湖描述',
          imgSrc: 'xiaoaojianghu.jpg',
          id: 3
        },
        {
          name: '龙珠',
          description: '龙珠描述',
          imgSrc: 'longzhu.jpg',
          id: 4
        }
      ]
    }
  },
  components: {
    ProductCard
  }
}
</script>

<style>
</style>
