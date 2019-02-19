import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'

export default ({ data }) => (
  <Layout title="Картинки">
    {data.allFile.edges.map(({ node }) => (
      <a key={node.id} href={node.publicURL} target="_blank" rel="noopener noreferrer">
        <img alt={node.name} src={node.publicURL} className="image" />
      </a>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allFile(
      filter: { extension: { eq: "jpg" }},
      sort: { fields: [birthTime], order: DESC }
    ) {
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