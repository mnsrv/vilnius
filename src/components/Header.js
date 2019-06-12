import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to} className={props.className} activeClassName="active">
      {props.children}
    </Link>
  </li>
)

export default ({ index = false }) => (
  <header>
    <ul className="container">
      <ListLink to="/" className="home_link">
        mansurov.me
      </ListLink>
      <ListLink to="/books">читаю</ListLink>
      <ListLink to="/movies">смотрю</ListLink>
      <ListLink to="/blog">пишу</ListLink>
      <ListLink to="/wishlist">хочу</ListLink>
    </ul>
  </header>
)
