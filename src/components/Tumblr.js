import React from 'react'
import Img from 'gatsby-image'

function Tumblr({ original_size, alt_sizes }) {
  const { width, height, url } = original_size
  const altSize = alt_sizes[alt_sizes.length - 2]
  const smallUrl = altSize.url

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="tumblr">
      <Img
        fluid={{ aspectRatio: width / height, base64: smallUrl, src: url }}
      />
    </a>
  )
}

export default Tumblr
