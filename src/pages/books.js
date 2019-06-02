import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Block from '../components/Block'
import { getRating, getBookAuthor } from '../utils'

export default class BooksPage extends PureComponent {
  render() {
    const { data } = this.props

    return (
      <Layout title="Книги" index>
        {data.goodreadsShelf.reviews.map(review => (
          <Block
            key={review.id}
            rating={getRating(review.rating)}
            title={review.book.title}
            year={review.book.publication_year}
            subtitle={getBookAuthor(review.book.authors)}
            imageUrl={review.book.image_url}
            text={review.body}
          />
        ))}
      </Layout>
    )
  }
}

export const query = graphql`
  query {
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
        rating
        id
        body
      }
    }
  }
`
