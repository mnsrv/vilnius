import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Block from '../../components/Block'

export default ({ data }) => (
  <Layout title="Заметки">
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Block
          key={node.id}
          url={node.fields.slug}
          title={node.frontmatter.title}
          subtitle={node.frontmatter.date}
        />
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/blog/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM.YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
