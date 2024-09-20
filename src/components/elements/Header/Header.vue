<template>
  <div class="header" :class="{ 'header--empty': !title?.length && !subtitle?.text?.length }">
    <h1 v-if="title?.length" v-html="title.toUpperCase()"></h1>
    <h3 v-if="subtitle?.text?.length" v-html="subtitle.text"></h3>
    <p>{{ `Показано страниц: ${pages.totalCount}` }}</p>
    <p>
      Содержание:
      <span v-bind="objectOfAttributes">{{ pages.list.join(' | ') }}</span>
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { TitleType, SubtitleType, PagesType, ObjectOfAttributesType } from './types/types'

const title = ref<TitleType>('')
const subtitle = reactive<SubtitleType>({ text: '' })
const pages = ref<PagesType>({
  totalCount: 2,
  list: ['Страница 1', 'Страница 2']
})

const objectOfAttributes: ObjectOfAttributesType = {
  style: 'font-weight: bold; color: deepskyblue',
  class: 'pages'
}

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

  &--empty {
    opacity: 0.7;
  }
}
</style>
