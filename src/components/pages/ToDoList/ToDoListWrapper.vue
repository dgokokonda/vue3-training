<template>
  <div class="list-wrapper">
    <input type="checkbox" id="adult" :value="isAdult" @input="checkAdult" />
    <label ref="label" for="adult">{{ `Я совершеннолетний: ${adultText}` }}</label>

    <template v-if="isAdult">
      <p ref="todo-title">Список действий:</p>
      <div class="control-panel">
        <input
          ref="todo-input"
          v-model.trim="text"
          type="text"
          @keyup.enter="addText"
          @input="input"
          class="editor"
        />
        <TheButton
          class="text-button"
          button-name="Добавить пункт"
          :disabled="!text.length"
          @click="addText"
        >
        </TheButton>
      </div>
      <TodoList v-show="todos.length" :todos="todos" @deleteTodo="deleteTodo" />
    </template>
    <div style="color: red" v-else>Список доступен только совершеннолетним</div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, useTemplateRef, nextTick } from 'vue'
import type { TextType, TodosType, CheckboxType, TodoType } from './types/types'
import TheButton from '@/components/elements/Button/TheButton.vue'
import TodoList from '@/components/elements/Todos/TodoList.vue'

const text = ref<TextType>('')
let todos = ref<TodosType>([])
const isAdult = ref<CheckboxType>(false)
const adultText = computed<string>(() => {
  return !isAdult.value ? 'Нет' : 'Да'
})
const label = ref<HTMLElement | null>(null)
const todoInput = useTemplateRef<HTMLElement | null>('todo-input')

onMounted(() => {
  if (label?.value) label.value.textContent = 'Подтверждаю, что мне есть 18 лет'
})

function input(e: Event): void {
  const target = e.target as HTMLInputElement
  console.log('input', target.value, text.value)
}

async function checkAdult(): Promise<void> {
  isAdult.value = !isAdult.value
  if (isAdult.value) {
    text.value = ''
    todos.value = []
    await nextTick()
    if (todoInput?.value) todoInput.value.focus()
  }
}

function addText(): void {
  if (!text.value.length) return
  todos.value.push({ id: Date.now(), name: text.value })
  text.value = ''
}

function deleteTodo(item: TodoType): void {
  todos.value = todos.value.filter(({ id }) => item.id !== id)
}
</script>
<style lang="scss" scoped>
.list-wrapper {
  width: 400px;
  margin: 12px;

  & > p {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .control-panel {
    display: flex;
    gap: 8px;
  }

  .text-button {
    height: 40px;
    padding: 8px;
    border-radius: 4px;
    background-color: blueviolet;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: default;
      opacity: 0.6;
    }
  }

  .editor {
    height: 40px;
    width: 250px;
    padding: 8px;
    outline: none;
    border-radius: 4px;
    border: none;
  }

  input[type='checkbox'] + label {
    margin-left: 4px;
  }
}
</style>
