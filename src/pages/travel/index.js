import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Map from '../../components/Map'

export default ({ data }) => {
  return (
    <Layout title="Travel">
      <Map token={data.site.siteMetadata.mapboxToken} />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        mapboxToken
      }
    }
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
