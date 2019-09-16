import React, { PureComponent } from 'react'

import Layout from '../components/Layout'
import { formatDate } from '../utils'

export default class IndexPage extends PureComponent {
  render() {
    const title = formatDate(new Date())

    return (
      <Layout title={title}>
        <blockquote class="twitter-tweet" data-lang="en">
          <p lang="en" dir="ltr">
            new step?
          </p>
          &mdash; Roman Kushnarev (@ramzesdoto){' '}
          <a href="https://twitter.com/ramzesdoto/status/1173584017788157953?ref_src=twsrc%5Etfw">
            September 16, 2019
          </a>
        </blockquote>
      </Layout>
    )
  }
}
