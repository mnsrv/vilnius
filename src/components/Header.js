import React from 'react'
import { Link } from 'gatsby'

const menu = [
  { title: 'mansurov.me', url: '/' },
  { title: 'слушаю', url: '/music/' },
  { title: 'смотрю', url: '/movies/' },
  { title: 'читаю', url: '/books/' },
  { title: 'пишу', url: '/blog/' },
  { title: 'хочу', url: '/wishlist/' }
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
