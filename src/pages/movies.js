import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Block from '../components/Block'
import { getRating, getMovieSrc, getMovieContent } from '../utils'

export default class MoviesPage extends PureComponent {
  render() {
    const { data } = this.props

    return (
      <Layout title="Фильмы">
        <div className="blocks">
          {data.allFeedLetterboxd.edges.map(({ node }) => (
            <Block
              key={node.id}
              rating={getRating(node.letterboxd.memberRating)}
              title={node.letterboxd.filmTitle}
              imageUrl={getMovieSrc(node.content)}
              text={getMovieContent(node.content)}
              year={node.letterboxd.filmYear}
            />
          ))}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allFeedLetterboxd(
      limit: 48
      filter: { guid: { regex: "/watch|review/" } }
      sort: { fields: [letterboxd___watchedDate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
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
