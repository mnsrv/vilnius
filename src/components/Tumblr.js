import React, { PureComponent } from 'react'

function Tumblr({ title, imageUrl }) {
  if (!imageUrl) {
    return null
  }
  return (
    <a
      href={imageUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="tumblr"
    >
      <img src={imageUrl} width="100" alt={title} />
    </a>
  )
}

export default Tumblr
