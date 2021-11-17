<template>
  <div class="btn">
    <el-button @click="hello">Hello</el-button>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus/lib'
const hello = () => ElMessage.info('hello world')
</script>

<style lang="scss" scoped></style>
