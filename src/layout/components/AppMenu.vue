<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
    :collapse="$store.state.isCollapse"
  >
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><location /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        <el-icon><Menu /></el-icon>
        <span>商品列表</span>
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        <el-icon><Menu /></el-icon>
        <span>商品分类</span>
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        <el-icon><Menu /></el-icon>
        <span>商品规格</span>
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        <el-icon><Menu /></el-icon>
        <span>商品评论</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><location /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/order_list">
        <el-icon><Menu /></el-icon>
        <span>订单列表</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><location /></el-icon>
      <span>媒体</span>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><location /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/permission_role">
        <el-icon><Menu /></el-icon>
        <span>角色</span>
      </el-menu-item>
      <el-menu-item index="/permission/permission_admin">
        <el-icon><Menu /></el-icon>
        <span>管理员</span>
      </el-menu-item>
      <el-menu-item index="/permission/permission_rule">
        <el-icon><Menu /></el-icon>
        <span>权限规则</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
