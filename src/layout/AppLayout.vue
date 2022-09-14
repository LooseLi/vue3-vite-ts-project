<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppMenu from './components/AppMenu.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}
.el-aside {
  width: auto;
  background-color: #304156;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
