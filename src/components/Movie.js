import React from 'react'

import { getRating } from '../utils'

function getSrc(content) {
  const regex = /<img src="(.*)"\/>/
  if (regex.test(content)) {
    const match = content.match(regex)
    return match[1].replace('0-500-0-750', '0-200-0-300')
  }
  return ''
}
function getLink(link) {
  return link.replace('/mansurov', '')
}
function getContent(content) {
  const regex = /<p><img src=".*"\/><\/p>(.*)/
  if (regex.test(content)) {
    const match = content.match(regex)
    return match[1].replace(/<p>Watched on.*<\/p>/, '')
  }
  return ''
}

export default movie => {
  if (!movie.letterboxd) {
    return null
  }
  const src = getSrc(movie.content)
  const link = getLink(movie.link)
  const rating = getRating(movie.letterboxd.memberRating)
  const content = getContent(movie.content)
  return (
    <div style={{ display: 'flex', padding: '10px 0' }}>
      <img
        src={src}
        width="100"
        height="150"
        alt={movie.letterboxd.filmTitle}
        style={{
          display: 'block',
          flexShrink: 0,
          marginRight: 15,
          overflow: 'hidden',
          borderRadius: 4
        }}
      />
      <div>
        <h3 style={{ marginBottom: 0 }}>
          {rating} {movie.letterboxd.filmTitle}{' '}
          <span style={{ fontWeight: 'normal' }}>
            {movie.letterboxd.filmYear}
          </span>
        </h3>
        <small style={{ marginTop: 5, display: 'block' }}>
          {movie.letterboxd.watchedDate}
        </small>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ lineHeight: 1.4 }}
        />
      </div>
    </div>
  )
}
