import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout title={post.frontmatter.title} showTitle>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <small>
        <i>{post.frontmatter.date}</i>
      </small>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`
