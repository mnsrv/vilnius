import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Block from '../../components/Block'

export default ({ data }) => (
  <Layout title="Штуки">
    <div className="wishContainer">
      {data.allWishlistJson.edges.map(({ node }) => (
        <Block
          key={node.id}
          imageUrl={node.image.publicURL}
          title={node.title}
          subtitle={node.brand}
        />
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allWishlistJson {
      edges {
        node {
          id
          image {
            publicURL
          }
          title
          brand
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`
