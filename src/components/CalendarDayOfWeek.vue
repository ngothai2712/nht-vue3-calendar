<template>
  <div class="dayOfWeek">
    <div v-for="day in days" :key="day">
      {{ day.slice(0, 3) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { DayOfWeek } from '../utils/constans'

const days = Object.keys(DayOfWeek).filter((v) => isNaN(+v))
</script>

<style scoped>
.dayOfWeek {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
</style>
