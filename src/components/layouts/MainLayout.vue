<template>
  <div class="wrapper">
    <Header>
      <template #header="{ defaultTitle }">
        <h1 style="color: red; font-weight: bold">{{ defaultTitle || 'TEST' }}</h1>
      </template>
    </Header>
    <ToDoListWrapper />
    <GenerateToDo />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/elements/Header/Header.vue'
import ToDoListWrapper from '@/components/pages/ToDoList/ToDoListWrapper.vue'
import GenerateToDo from '@/components/elements/GenerateToDo/GenerateToDo.vue'
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
