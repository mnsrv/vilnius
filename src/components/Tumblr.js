import React from 'react'

function Tumblr({ imageUrl, width, height }) {
  if (!imageUrl) {
    return null
  }
  return (
    <a
      href={imageUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="tumblr"
      style={{ paddingBottom: `${(height / width) * 100}%` }}
    >
      <img src={imageUrl} />
    </a>
  )
}

export default Tumblr
