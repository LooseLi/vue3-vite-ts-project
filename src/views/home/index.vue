<template>
  <h1>首页</h1>
  <p>{{ $store.state.count }}</p>
  <img src="@/assets/vue.svg" alt="">
  <div class="box"></div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import user from '@/api/user'

const store = useStore()
console.log(store.state.count)

console.log(user)
</script>

<style scoped>
.box {
  width: 20px;
  height: 20px;
  background: url("@/assets/vue.svg") no-repeat;
}
</style>
