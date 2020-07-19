export function getRating(ratingFloat) {
  const rating = Number(ratingFloat)
  if (rating > 4) {
    return '⭐️'
  }
  return ''
}
export function getBookImageUrl(url) {
  return url.replace('._SX98_', '')
}
export function formatDate(date) {
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ]
  var monthIndex = date.getMonth()
  var year = date.getFullYear()

  return `${months[monthIndex]} ${year}`
}
