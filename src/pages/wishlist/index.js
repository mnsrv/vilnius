import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Wish from '../../components/Wish'

export default ({ data }) => (
  <Layout title="Штуки">
    <div className="wishContainer">
      {data.allWishlistJson.edges.map(({ node }) => (
        <Wish
          key={node.id}
          imageUrl={node.image.publicURL}
          title={node.title}
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
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`
