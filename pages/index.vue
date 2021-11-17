<template>
  <div class="index">
    <div class="item">
      <label>Element Plus: </label>
      <Element />
    </div>

    <div class="item">
      <label>I18n: </label>
      <I18n />
    </div>

    <div class="item">
      <label>Data Fetch: </label>
      <div>{{ data }}</div>
    </div>
  </div>
</template>
<script setup>
import Element from '@/components/Element.vue'
import I18n from '@/components/I18n.vue'

const { data } = await useAsyncData('user', () => $fetch('/api/user'))
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .item {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    label {
      margin-right: 10px;
      font-weight: bold;
      font-size: 20px;
    }
  }
}
</style>
