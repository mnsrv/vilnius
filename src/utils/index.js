export function getRating(ratingFloat) {
  const rating = Number(ratingFloat)
  if (rating > 3) {
    return '★'
  }
  return ''
}
