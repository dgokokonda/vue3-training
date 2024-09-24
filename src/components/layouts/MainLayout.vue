<template>
  <div class="wrapper">
    <TheHeader>
      <template #header="{ defaultTitle }">
        <h1 style="color: red; font-weight: bold">{{ defaultTitle || 'TEST' }}</h1>
      </template>
    </TheHeader>
    <ToDoListWrapper />
    <GenerateToDo />
  </div>
</template>
<script setup lang="ts">
import TheHeader from '@/components/elements/Header/TheHeader.vue'
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
