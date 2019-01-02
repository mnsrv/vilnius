import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <h4>
      <Link to={props.to} className={props.className}>
        {props.children}
      </Link>
    </h4>
  </li>
)

export default ({ title, children }) => (
  <div style={{ margin: '1rem auto', maxWidth: 650, padding: '0 1rem' }}>
    <Helmet defaultTitle="mansurov.me" title={title} />
    <header>
      <ul style={{ listStyle: 'none', marginLeft: 0 }}>
        <ListLink to="/" className="home_link"><span role="img" aria-label="black-dot">⚫️</span></ListLink>
        <ListLink to="/blog">Блог</ListLink>
      </ul>
    </header>
    <h1>{title}</h1>
    {children}
  </div>
)