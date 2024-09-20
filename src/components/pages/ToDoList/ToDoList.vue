<template>
  <div class="list-wrapper">
    <h4>Список действий:</h4>
    <div class="control-panel">
      <input v-model.trim="text" type="text" @keyup.enter="addText" @input="input" class="editor" />
      <button class="text-button" :disabled="!text.length" @click="addText">Добавить пункт</button>
    </div>
    <div class="list">{{ `Количество пунктов: ${todos.length}. Реактивный текст: ${text}` }}</div>
    <input type="checkbox" id="adult" :value="isAdult" @input="checkAdult" />
    <label for="adult">{{ `Я совершеннолетний: ${!isAdult ? 'Нет' : 'Да'}` }}</label>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { TextType, TodosType, CheckboxType } from './types/types'
const text = ref<TextType>('')
const todos = reactive<TodosType>([])
const isAdult = ref<CheckboxType>(false)

function input(e) {
  console.log('input', e.target.value, text.value)
}

function checkAdult() {
  isAdult.value = !isAdult.value
}

function addText() {
  if (!text.value.length) return
  todos.push({ id: Date.now(), name: text.value })
  text.value = ''
}
</script>
<style lang="scss" scoped>
.list-wrapper {
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
