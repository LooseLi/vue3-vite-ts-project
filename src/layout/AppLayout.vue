<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>
        <section class="left">
          <ToggleSidebar class="sidebar" />
          <Breadcrumb />
        </section>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppMenu from './components/AppMenu.vue'
import Breadcrumb from './components/AppHeader/Breadcrumb.vue'
import ToggleSidebar from './components/AppHeader/ToggleSidebar.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #fff;
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
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
  .sidebar {
    margin-right: 12px;
  }
}
</style>
