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
        {index
          ? <span key="white-dot" role="img" aria-label="white-dot">⚪️</span>
          : <span key="black-dot" role="img" aria-label="black-dot">⚫️</span>}
      </ListLink>
      <ListLink to="/blog">Блог</ListLink>
    </ul>
  </header>
)