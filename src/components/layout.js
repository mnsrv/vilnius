import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: '1rem auto', maxWidth: 650, padding: '0 1rem' }}>
    <header>
      <ul style={{ listStyle: 'none', marginLeft: 0 }}>
        <ListLink to="/">Главная</ListLink>
        <ListLink to="/blog">Блог</ListLink>
      </ul>
    </header>
    {children}
  </div>
)