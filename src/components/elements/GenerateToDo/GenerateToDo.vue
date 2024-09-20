<template>
  <div class="generate-todo">
    <h4>
      <b>{{ 'Генерация todo'.toUpperCase() }}</b>
    </h4>
    <p><b>Todo id: </b>{{ todoId }}</p>
    <Button @click="todoId++" :disabled="!todoData" />
    <p v-if="!todoData">Загрузка...</p>
    <pre v-else>{{ todoData }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Todo, AsyncVoidFunc } from './types/types'
import Button from '@/components/elements/Button/Button.vue'

const todoId = ref<number>(1)
const todoData = ref<Todo>(null)

async function fetchData(): AsyncVoidFunc {
  try {
    todoData.value = null
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    todoData.value = await res.json()
  } catch (error) {
    throw new Error('Ошибка генерации todo')
  }
}

fetchData()

watch(todoId, fetchData)
</script>
<style lang="scss" scoped>
.generate-todo {
  margin-top: 24px;
  padding: 24px;
  border-radius: 4px;
  border: 1px dashed white;

  h4 {
    margin-bottom: 24px;
  }

  button {
    margin: 12px 0;
    padding: 8px;
    font-size: 16px;
  }
}
</style>
