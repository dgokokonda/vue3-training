<template>
  <div class="wrapper">
    <Header />
    <ToDoList />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/elements/Header/Header.vue'
import ToDoList from '@/components/pages/ToDoList/ToDoList.vue'
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
}
</style>
