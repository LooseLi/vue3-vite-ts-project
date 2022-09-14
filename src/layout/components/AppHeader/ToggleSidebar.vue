<template>
  <el-icon @click="$store.commit('setIsCollapse', !$store.state.isCollapse)">
    <div v-show="$store.state.isCollapse">
      <Expand />
    </div>
    <div v-show="!$store.state.isCollapse">
      <Fold />
    </div>
  </el-icon>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
