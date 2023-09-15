export interface ICalendarCell {
  isPast?: boolean
  day: string
  date: string
  isPresent?: boolean
  isFuture?: boolean
}

export interface IDataMock {
  id: number | string
  name: string
  startAt: string
  endAt: string
}

export interface ICalendarEvent extends ICalendarCell, Partial<IDataMock> {
  count?: number
}

export type TypeDate = string | Date | number
