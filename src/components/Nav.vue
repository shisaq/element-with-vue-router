<template>
  <el-row>
    <el-col class="logo-section">
      <img src="../assets/logo.png" class="logo">
    </el-col>
    <el-col class="nav-bar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router @select="handleSelect">
        <el-menu-item index="/">产品介绍</el-menu-item>
        <el-menu-item index="/about">关于我们</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.logo-section {
  width: 50px;
  margin-right: 20px;
}

.logo {
  height: 50px;
  width: 50px;
  padding-top: 5px;
}

.nav-bar {
  width: calc(100% - 70px);
}
</style>
