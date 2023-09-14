export interface ICalendarCell {
  isPast?: boolean
  day: string
  date: string
  isPresent?: boolean
  isFuture?: boolean
}

export type TypeDate = string | Date | number
