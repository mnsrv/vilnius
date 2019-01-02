import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'

export default ({ data }) => (
  <Layout title="Блог">
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.slug}>
            {node.frontmatter.title}{" "}
            <span style={{ color: '#bbb' }}>
              {node.frontmatter.date}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM/YY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`