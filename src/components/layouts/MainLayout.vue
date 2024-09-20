<template>
  <div class="wrapper">
    <Header />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/elements/Header/Header.vue'
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;
  box-sizing: border-box;

  h1 {
    font-size: 16px;
    line-height: 20px;
    color: red;
  }
}
</style>
