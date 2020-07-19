import React from 'react'
import { Link } from 'gatsby'

const menu = [
  { title: 'home', url: '/' },
  { title: 'blog', url: '/blog/' },
  { title: 'books', url: '/books/' },
  { title: 'wishlist', url: '/wishlist/' },
  { title: 'travel', url: '/travel/' },
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
