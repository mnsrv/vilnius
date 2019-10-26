import React, { PureComponent } from 'react'

import Layout from '../components/Layout'

import { formatDate } from '../utils'

export default class IndexPage extends PureComponent {
  render() {
    const title = formatDate(new Date())

    return <Layout title={title} />
  }
}
