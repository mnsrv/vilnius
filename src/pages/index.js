import React, { PureComponent } from 'react'

import Layout from '../components/Layout'
import { formatDate } from '../utils'

export default class IndexPage extends PureComponent {
  render() {
    const title = formatDate(new Date())

    return (
      <Layout title={title}>
        <blockquote className="twitter-tweet" data-lang="ru">
          <p lang="en" dir="ltr">
            BORING!
          </p>
          &mdash; Donald J. Trump (@realDonaldTrump){' '}
          <a href="https://twitter.com/realDonaldTrump/status/1144056731653169152?ref_src=twsrc%5Etfw">
            27 июня 2019 г.
          </a>
        </blockquote>
      </Layout>
    )
  }
}
