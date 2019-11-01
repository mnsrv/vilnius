export function getRating(ratingFloat) {
  const rating = Number(ratingFloat)
  if (rating > 3) {
    return '★'
  }
  return ''
}
export function getBookAuthor(authors) {
  if (authors && authors.length > 0) {
    return authors[0].name
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
    'Декабрь'
  ]
  var monthIndex = date.getMonth()
  var year = date.getFullYear()

  return `${months[monthIndex]} ${year}`
}
