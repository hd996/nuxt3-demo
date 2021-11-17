<template>
  <div class="layout-default">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss" scoped>
.layout-default {
  main {
    min-height: 400px;
    padding: 50px 20px;
  }
}
</style>
