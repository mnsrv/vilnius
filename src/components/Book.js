import React from 'react'

import { getRating } from '../utils'

function getAuthor(authors) {
  if (authors && authors.length > 0) {
    return (
      <small style={{ marginTop: 5, display: 'block' }}>
        by {authors[0].name}
      </small>
    )
  }
  return null
}

export default book => {
  const rating = getRating(book.rating)
  const authors = getAuthor(book.authors)
  return (
    <div style={{ display: 'flex', padding: '10px 0' }}>
      <img
        src={book.imageUrl}
        width="100"
        height="150"
        alt={book.title}
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
          {rating} {book.title}
        </h3>
        {authors}
        <p
          dangerouslySetInnerHTML={{ __html: book.body }}
          style={{ lineHeight: 1.4 }}
        />
      </div>
    </div>
  )
}
