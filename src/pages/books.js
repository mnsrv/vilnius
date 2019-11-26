import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Block from '../components/Block'
import { getRating, getBookAuthor } from '../utils'

export default class BooksPage extends PureComponent {
  render() {
    const { data } = this.props

    return (
      <Layout title="Книги">
        <div className="blocks">
          {data.goodreadsShelf.reviews.map(review => (
            <Block
              key={review.id}
              rating={getRating(review.rating)}
              title={review.book.title}
              subtitle={getBookAuthor(review.book.authors)}
            />
          ))}
        </div>
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
        }
        rating
        id
        body
      }
    }
  }
`
