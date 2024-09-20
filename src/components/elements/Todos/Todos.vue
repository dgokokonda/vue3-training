<template>
  <div class="list">
    <ul
      v-for="(item, i) in filterreTodosdByUpperCase"
      :key="`${item.id}_${i}`"
      :id="String(item.id)"
      class="list__item"
    >
      <li style="display: flex; gap: 16px">
        <span>{{ item.name }}</span>
        <span style="cursor: pointer" @click="deleteText(item)"><DeleteIcon /> </span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { defineProps, computed, defineEmits } from 'vue'
import type { TodosProps, TodoType, TodosEmits } from './types/types'
import DeleteIcon from '@/components/elements/Icon/DeleteIcon.vue'

const { todos = [] } = defineProps<TodosProps>()
const emit = defineEmits<TodosEmits>()
const filterreTodosdByUpperCase = computed(() => {
  return todos.map((item: TodoType) => ({ ...item, name: item.name.toUpperCase() }))
})

function deleteText(item: TodoType): void {
  emit('deleteTodo', item)
}
</script>
<style lang="scss" scoped>
.list {
  margin-top: 8px;
}
</style>
