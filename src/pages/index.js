import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Block from '../components/Block'

export default class IndexPage extends PureComponent {
  render() {
    const { data } = this.props

    return (
      <Layout title="mansurov.me">
        <Block
          fluid={data.file.childImageSharp.fluid}
          subtitle="Winter in Yakutsk"
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
