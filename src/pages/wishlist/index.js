import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Block from '../../components/Block'

export default ({ data }) => (
  <Layout title="Штуки">
    <div className="blocks">
      {data.allWishlistJson.edges.map(({ node }) => (
        <Block
          key={node.id}
          imageUrl={node.image.publicURL}
          title={`${node.title} – $${node.price}`}
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
          price
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`
