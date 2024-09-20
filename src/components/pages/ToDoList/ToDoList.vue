<template>
  <div class="list-wrapper">
    <h4>Список действий:</h4>
    <div class="control-panel">
      <input v-model="text" type="text" @keyup.enter="addText" class="editor" />
      <button class="text-button" @click="addText">Добавить пункт</button>
    </div>
    <div class="list">{{ `Количество пунктов: ${todos.length}` }}</div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { TextType, TodosType } from './types/types'
const text = ref<TextType>('')
const todos = reactive<TodosType>([])

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
}
</style>
