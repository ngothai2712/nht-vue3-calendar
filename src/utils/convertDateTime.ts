import dayjs from 'dayjs'
import { TypeDate } from '../types/calendar'

export const convertDate = (value: TypeDate, format = 'YYYY-MM-DD') => {
  return dayjs(value).format(format)
}
