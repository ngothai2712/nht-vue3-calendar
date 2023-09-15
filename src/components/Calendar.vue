<template>
  <div class="calendar">
    <CalendarDayOfWeek />
    <div class="calendar__content">
      <CalendarCell v-for="day in allDay" :key="`calendarCell-${day.date}`" :data="day" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import CalendarCell from './CalendarCell.vue'
import CalendarDayOfWeek from './CalendarDayOfWeek.vue'
import { results } from '../mocks'
import { ICalendarCell, IDataMock, TypeDate } from '../types/calendar'
import { useMappingDate } from '../composables/useMappingDate.ts'

interface IProps {
  modelValue: TypeDate
  minDate?: TypeDate
  maxDate?: TypeDate
}

type TypeEmits = {
  'update:modelValue': [value: TypeDate]
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: undefined
})

const emits = defineEmits<TypeEmits>()

const dataMock: IDataMock[] = results.map((r: any) => ({
  id: r.id,
  startAt: `${r.start_date} ${r.start_time}`,
  endAt: `${r.end_date} ${r.end_time}`,
  name: r.name
}))

const allDay = ref<ICalendarCell[]>([])

const currentDay = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

watch(
  currentDay,
  () => {
    allDay.value = useMappingDate(currentDay, dataMock)
  },
  {
    immediate: true
  }
)
</script>

<style scoped>
.calendar__content {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
</style>
