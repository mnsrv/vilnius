export function getRating(ratingFloat) {
  const rating = Number(ratingFloat)
  if (rating > 3) {
    return '★'
  }
  return ''
}
export function getMovieSrc(content) {
  const regex = /<img src="(.*)"\/>/
  if (regex.test(content)) {
    const match = content.match(regex)
    return match[1].replace('0-500-0-750', '0-500-0-750')
  }
  return ''
}
export function getMovieContent(content) {
  const regex = /<p><img src=".*"\/><\/p>(.*)/
  if (regex.test(content)) {
    const match = content.match(regex)
    return match[1].replace(/<p>Watched on.*<\/p>/, '')
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
