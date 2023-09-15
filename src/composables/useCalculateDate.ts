import { computed, Ref } from 'vue'
import dayjs from 'dayjs'
import { ICalendarCell } from '../types/calendar.ts'

export function useCalculateDate(currentDay: Ref): ICalendarCell[] {
  const daysEmptyStart = computed(() => +dayjs(currentDay.value).startOf('month').format('d'))
  const daysInMonth = computed(() => dayjs(currentDay.value).daysInMonth())
  const daysEmptyEnd = computed(() => 6 - +dayjs(currentDay.value).endOf('month').format('d'))

  console.log(daysEmptyEnd.value)

  const dayOfPast = []
  for (let i = daysEmptyStart.value; i > 0; i--) {
    dayOfPast.push({
      isPast: true,
      day: dayjs(currentDay.value).startOf('month').subtract(i, 'days').format('D'),
      date: dayjs(currentDay.value).startOf('month').subtract(i, 'days').format('YYYY-MM-D')
    })
  }

  const dayOfPresent = []

  for (let i = 0; i < daysInMonth.value; i++) {
    dayOfPresent.push({
      isPresent: true,
      day: dayjs(currentDay.value).startOf('month').add(i, 'days').format('D'),
      date: dayjs(currentDay.value).startOf('month').add(i, 'days').format('YYYY-MM-D')
    })
  }

  const dayOfFuture = []
  for (let i = 1; i <= daysEmptyEnd.value; i++) {
    dayOfFuture.push({
      isFuture: true,
      day: dayjs(currentDay.value).endOf('month').add(i, 'days').format('D'),
      date: dayjs(currentDay.value).endOf('month').add(i, 'days').format('YYYY-MM-D')
    })
  }

  return [...dayOfPast, ...dayOfPresent, ...dayOfFuture]
}
