import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/Layout'

export default ({ data }) => (
  <Layout title="Заметки">
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id} className="blogLink">
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          <span className="blogLinkDate"> {node.frontmatter.date}</span>
        </li>
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
