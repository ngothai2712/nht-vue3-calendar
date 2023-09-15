import { Ref } from 'vue'
import { compareDate } from '../utils/convertDateTime.ts'
import { IDataMock } from '../types/calendar.ts'
import { useCalculateDate } from './useCalculateDate.ts'
import { useGroupDate } from './useGroupDate.ts'

export function useMappingDate(currentDate: Ref, data: IDataMock[] = []) {
  const dayDisplay = useCalculateDate(currentDate)

  data.sort((a: IDataMock, b: IDataMock) => (compareDate(a.startAt, b.startAt) ? -1 : 1))

  const startAtHashMap = useGroupDate(data, 'startAt')
  const endAtHashMap = useGroupDate(data, 'endAt')

  console.log(startAtHashMap)
  console.log(endAtHashMap)

  console.log(dayDisplay)

  // const countEvents = {}

  const results = dayDisplay.map((day) => {
    return {}
    // if (dataHashMap[day.date]) {
    //   return { ...day, ...dataHashMap[day.date] }
    // }
    // return day
  })

  return []
}
