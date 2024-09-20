<template>
  <button :disabled="disabled">{{ buttonName }}</button>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import type { Props } from './types/types'
const { buttonName = '', disabled = false } = defineProps<Props>()
</script>
