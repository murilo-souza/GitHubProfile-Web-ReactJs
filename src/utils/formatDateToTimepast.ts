import { formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'

export function formatDateToTimePast(dateSt: string) {
  const date = new Date(dateSt)

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: enUS,
    addSuffix: true,
  })

  return publishedDateRelativeToNow
}
