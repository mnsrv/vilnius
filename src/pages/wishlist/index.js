import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Block from '../../components/Block'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout title="Штуки">
      <div className="blocks">
        {data.allWishlistJson.edges.map(({ node }) => (
          <Block
            key={node.id}
            title={node.title}
            subtitle={node.brand}
            preview={node.image.publicURL}
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
    allWishlistJson(sort: { fields: [done, date], order: [ASC, DESC] }) {
      edges {
        node {
          id
          image {
            publicURL
          }
          title
          brand
          price
          done
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`
