import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'

export default ({ data }) => (
  <Layout title="Картинки" full>
    {data.allFile.edges.map(({ node }) => (
      <img key={node.id} alt={node.name} src={node.publicURL} className="image" />
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          id
          name
          publicURL
        }
      }
    }
  }
`