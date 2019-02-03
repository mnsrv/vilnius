import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header'
import YearProgress from './YearProgress'

export default ({ index, title, children }) => (
  <div className="container">
    <Helmet
      defaultTitle="mansurov.me"
      title={title}
      htmlAttributes={{ lang: 'ru' }}
    />
    <YearProgress />
    <Header index={index} />
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  </div>
)
