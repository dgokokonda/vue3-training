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
        <button class="text-button" :disabled="!text.length" @click="addText">
          Добавить пункт
        </button>
      </div>
      <div v-show="filterreTodosdByUpperCase.length" class="list">
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
    <div style="color: red" v-else>Список доступен только совершеннолетним</div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, useTemplateRef, nextTick } from 'vue'
import type { TextType, TodosType, CheckboxType, TodoType } from './types/types'
import DeleteIcon from '@/components/elements/Icon/DeleteIcon.vue'

const text = ref<TextType>('')
let todos = ref<TodosType>([])
const isAdult = ref<CheckboxType>(false)
const filterreTodosdByUpperCase = computed(() => {
  return todos.value.map((item) => ({ ...item, name: item.name.toUpperCase() }))
})
const adultText = computed(() => {
  return !isAdult.value ? 'Нет' : 'Да'
})
const label = useTemplateRef('label')
const todoInput = useTemplateRef('todo-input')

onMounted(() => {
  label.value.textContent = 'Подтверждаю, что мне есть 18 лет'
})

function input(e: Event) {
  const target = e.target as HTMLInputElement
  console.log('input', target.value, text.value)
}

async function checkAdult() {
  isAdult.value = !isAdult.value
  if (isAdult.value) {
    text.value = ''
    todos.value = []
    await nextTick()
    if (todoInput) todoInput.value.focus()
  }
}

function addText() {
  if (!text.value.length) return
  todos.value.push({ id: Date.now(), name: text.value })
  text.value = ''
}

function deleteText(item: TodoType) {
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

  .list {
    margin-top: 8px;
  }

  input[type='checkbox'] + label {
    margin-left: 4px;
  }
}
</style>
