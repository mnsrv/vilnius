import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Block from '../../components/Block'

export default ({ data }) => {
  return (
    <Layout title="Штуки">
      <div className="blocks">
        {data.allWishlistJson.edges.map(({ node }) => (
          <Block
            key={node.id}
            title={node.title}
            subtitle={node.brand}
            fixedPreview={node.image.childImageSharp.fixed}
            done={node.done}
            year={`$${node.price}`}
            style={node.done ? { opacity: 0.5, color: 'gray' } : {}}
          />
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allWishlistJson(sort: { fields: [done, updatedAt], order: [ASC, DESC] }) {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(height: 54, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          brand
          price
          done
          updatedAt(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`
