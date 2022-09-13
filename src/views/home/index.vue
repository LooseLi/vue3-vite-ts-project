<template>
  <h1>首页</h1>
  <p>{{ $store.state.count }}</p>
  <img src="@/assets/vue.svg" alt="">
  <div class="box"></div>
  <el-button>测试按钮</el-button>
  <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :size="size" />
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import user from '@/api/user'

const store = useStore()
console.log(store.state.count)

console.log(user)

const value1 = ''
</script>

<style lang="scss" scoped>
h1 {
  color: $color;
}
.box {
  width: 20px;
  height: 20px;
  background: url("@/assets/vue.svg") no-repeat;
}
</style>
