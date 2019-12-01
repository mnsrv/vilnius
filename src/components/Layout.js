import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header'

export default ({ title, showTitle, children }) => [
  <Helmet
    key="helmet"
    defaultTitle="mansurov.me"
    title={title}
    htmlAttributes={{ lang: 'ru' }}
  />,
  <Header key="header" />,
  <main key="main" className="container">
    <h1 className={showTitle ? 'visible' : ''}>{title}</h1>
    {children}
  </main>
]
