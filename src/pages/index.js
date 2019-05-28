import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Movie from '../components/Movie'
import Book from '../components/Book'

export default ({ data }) => (
  <Layout title="FEED" index>
    {data.goodreadsShelf.reviews.map(review => (
      <Book
        key={review.id}
        title={review.book.title}
        imageUrl={review.book.image_url}
        authors={review.book.authors}
        year={review.book.publication_year}
        readAt={review.read_at}
        rating={review.rating}
        url={review.url}
        body={review.body}
      />
    ))}
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
    goodreadsShelf(name: { eq: "read" }) {
      reviews {
        book {
          title
          image_url
          authors {
            name
          }
          publication_year
        }
        read_at
        rating
        url
        id
        body
      }
    }
  }
`
