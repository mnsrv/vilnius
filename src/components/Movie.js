import React from 'react'

function getSrc(content) {
  const regex = /<img src="(.*)"\/>/
  if (regex.test(content)) {
    const match = content.match(regex)
    return match[1].replace('0-500-0-750', '0-140-0-210')
  }
  return ''
}
function getLink(link) {
  return link.replace('/mansurov', '')
}
function getRating(ratingFloat) {
  const rating = Number(ratingFloat)
  return '★'.repeat(rating)
}

export default (movie) => {
  if (!movie.letterboxd) {
    return null
  }
  const src = getSrc(movie.content)
  const link = getLink(movie.link)
  const rating = getRating(movie.letterboxd.memberRating)
  return (
    <div style={{ display: 'block', overflow: 'hidden', padding: '10px 0' }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          width="70"
          height="105"
          alt={movie.letterboxd.filmTitle}
          style={{ float: 'left', display: 'inline-block', marginRight: 15, overflow: 'hidden', borderRadius: 4 }}
        />
      </a>
      <div>
        <h3 style={{ marginBottom: 0 }}>{movie.letterboxd.filmTitle} <span style={{ fontWeight: 'normal' }}>{movie.letterboxd.filmYear}</span></h3>
        <div>{rating}</div>
        <small>{movie.letterboxd.watchedDate}</small>
      </div>
    </div>
  )
}