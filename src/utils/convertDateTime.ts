import dayjs from 'dayjs'
import { TypeDate } from '../types/calendar'

export const convertDate = (value: TypeDate, format = 'YYYY-MM-DD') => {
  return dayjs(value).format(format)
}

export const getMonth = (value: TypeDate, format = 'M') => {
  return dayjs(value).format(format)
}

export const compareDate = (startDate: TypeDate, endDate: TypeDate): Boolean => {
  return dayjs(startDate).isBefore(dayjs(endDate))
}
