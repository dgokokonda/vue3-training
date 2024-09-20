<template>
  <div class="header">
    <h1 v-if="title?.length" v-html="title.toUpperCase()"></h1>
    <h3 v-if="subtitle?.text?.length" v-html="subtitle.text"></h3>
    <p>{{ `Показано страниц: ${pages.totalCount}` }}</p>
    <p>{{ `Содержание: ${pages.list.join(' | ')}` }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { TitleType, SubtitleType, PagesType } from './types/types'

const title = ref<TitleType>('')
const subtitle = reactive<SubtitleType>({ text: '' })
const pages = ref<PagesType>({
  totalCount: 2,
  list: ['Страница 1', 'Страница 2']
})

setTimeout(() => {
  title.value = 'Заголовок'
  subtitle.text = 'Подзаголовок'
  pages.value.totalCount++
  pages.value.list.push('Страница 3')
}, 2000)
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 16px;
  text-align: center;

  h1 {
    font-size: 18px;
    line-height: 24px;
    margin: 8px;
  }
  h3 {
    font-size: 16px;
    line-height: 20px;
    margin: 8px;
  }
}
</style>
