<template>
  <div class="notfound">
    <div class="tip">{{ tip }}</div>
    <NuxtLink class="btn" to="/">{{ btnText }}</NuxtLink>
  </div>
</template>

<script setup>
const tip = ref('你访问的页面出错，点击下方按钮回到首页')
const btnText = ref('回到首页')
</script>

<script>
export default {
  layout: false,

  head() {
    return {
      title: '页面未找到',
    }
  },
}
</script>

<style lang="scss" scoped>
.notfound {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .tip {
    margin-bottom: 50px;
    font-weight: bold;
  }
}
</style>
