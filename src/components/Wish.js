import React from 'react'

function Wish({ title, imageUrl }) {
  return (
    <div className="wish">
      <a className="wishImageContainer" href={imageUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="wishImage" />
      </a>
    </div>
  )
}

export default Wish