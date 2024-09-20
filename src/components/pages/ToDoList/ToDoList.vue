<template>
  <div class="list-wrapper">
    <input type="checkbox" id="adult" :value="isAdult" @input="checkAdult" />
    <label for="adult">{{ `Я совершеннолетний: ${!isAdult ? 'Нет' : 'Да'}` }}</label>

    <template v-if="isAdult">
      <h4>Список действий:</h4>
      <div class="control-panel">
        <input
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
      <div v-show="todos.length" class="list">
        <ul
          v-for="(item, i) in todos"
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
import { ref } from 'vue'
import type { TextType, TodosType, CheckboxType, TodoType } from './types/types'
import DeleteIcon from '@/components/elements/Icon/DeleteIcon.vue'

const text = ref<TextType>('')
let todos = ref<TodosType>([])
const isAdult = ref<CheckboxType>(false)

function input(e: Event) {
  const target = e.target as HTMLInputElement
  console.log('input', target.value, text.value)
}

function checkAdult() {
  isAdult.value = !isAdult.value
  if (isAdult.value) {
    text.value = ''
    todos.value = []
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

  h4 {
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
