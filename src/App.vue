<template>
  <div>
    <h1>Vue 3 Calendar</h1>

    <input type="date" :value="pageState.currentDay" @change="onChangeDate" />

    <Calendar v-model="pageState.currentDay" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Calendar from './components/Calendar.vue'

const pageState = reactive({
  currentDay: '2023-09-07'
})

const onChangeDate = (event: Event) => {
  pageState.currentDay = (event.target as HTMLInputElement).value
}
</script>

<style scoped></style>
