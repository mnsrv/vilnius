import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'

function Wish({ title, imageUrl }) {
  return (
    <div className="wish">
      <div className="wishImageContainer">
        <img src={imageUrl} alt={title} className="wishImage" />
      </div>
    </div>
  )
}

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
