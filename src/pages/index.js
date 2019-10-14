import React, { PureComponent } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Layout from '../components/Layout'
import Tweet from '../components/Tweet'

import { formatDate } from '../utils'

export default class IndexPage extends PureComponent {
  render() {
    const title = formatDate(new Date())

    return (
      <ThemeToggler>
        {({ theme }) => (
          <Layout title={title}>
            <Tweet theme={theme} />
          </Layout>
        )}
      </ThemeToggler>
    )
  }
}
