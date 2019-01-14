import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <h4>
      <Link to={props.to} className={props.className} activeClassName="active">
        {props.children}
      </Link>
    </h4>
  </li>
)

export default ({ index = false, title, children }) => (
  <div className="container">
    <Helmet
      defaultTitle="mansurov.me"
      title={title}
      htmlAttributes={{ lang: 'ru' }}
    />
    <header>
      <ul style={{ listStyle: 'none', marginLeft: 0 }}>
        <ListLink to="/" className="home_link">
          {index
            ? <span key="white-dot" role="img" aria-label="white-dot">⚪️</span>
            : <span key="black-dot" role="img" aria-label="black-dot">⚫️</span>}
        </ListLink>
        <ListLink to="/blog">Блог</ListLink>
      </ul>
    </header>
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  </div>
)