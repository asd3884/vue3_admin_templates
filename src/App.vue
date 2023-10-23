<template>
  <div class="app">
    <h1>测试API接口统一管理</h1>
    <svgIcon name="love" color="pink"></svgIcon>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { onMounted } from 'vue'
import { reqLogin } from './api/user'
//组件挂载完毕测试发送一个请求

onMounted(() => {
  reqLogin({ username: 'admin', password: '111111' })
})
</script>
<style scoped lang="scss">
div {
  h1 {
    color: $colors;
  }
}
</style>
