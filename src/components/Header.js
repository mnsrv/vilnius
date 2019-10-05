import React from 'react'
import { Link } from 'gatsby'

const menu = [
  { title: 'mansurov.me', url: '/' },
  { title: 'blog', url: '/blog/' },
  { title: 'music', url: '/music/' },
  { title: 'books', url: '/books/' },
  { title: 'tumblr', url: '/tumblr' },
  { title: 'movies', url: '/movies/' },
  { title: 'wishlist', url: '/wishlist/' }
]

export default () => (
  <header>
    <ul className="container">
      {menu.map(({ title, url }) => (
        <li key={url} className="headerLink">
          <Link to={url} activeClassName="active">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </header>
)
