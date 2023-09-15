import { convertDate } from '../utils/convertDateTime.ts'
import { TypeDate } from '../types/calendar.ts'

export function useGroupDate<T>(data: T[] = [], key: keyof T) {
  const result: Record<string, T[]> = {}

  for (const event of data) {
    const item = convertDate(event[key] as TypeDate)

    // Exist Item
    if (result[item]) {
      result[item].push({
        ...event
      })
      continue
    }

    // Not Exist Item
    result[item] = [
      {
        ...event
      }
    ]
  }

  return result
}
