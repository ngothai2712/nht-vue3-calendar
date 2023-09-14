<template>
  <div>
    <div v-if="data.isPresent">{{ data.day }}</div>
  </div>
</template>

<script setup lang="ts">
import { ICalendarCell } from '../types/calendar'

interface IProps {
  data: ICalendarCell
}

const props = withDefaults(defineProps<IProps>(), {
  data: () => ({
    day: '',
    date: ''
  })
})

const emits = defineEmits(['update:modelValue'])
</script>

<style scoped></style>
