import React from 'react'

import Layout from '../components/Layout'
import Movie from '../components/Movie'

export default ({ data }) => (
  <Layout title="FEED" index>
    {data.allFeedLetterboxd.edges.map(({ node }) => (
      <Movie
        key={node.id}
        link={node.link}
        content={node.content}
        letterboxd={node.letterboxd}
      />
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allFeedLetterboxd(
      limit: 10
      filter: { guid: { regex: "/watch|review/" } }
      sort: { fields: [letterboxd___watchedDate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          link
          content
          letterboxd {
            watchedDate(formatString: "DD.MM.YYYY")
            filmTitle
            filmYear
            memberRating
          }
        }
      }
    }
  }
`
