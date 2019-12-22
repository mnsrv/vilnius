import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Block from '../../components/Block'
import { getRating } from '../../utils'

export default class BooksPage extends PureComponent {
  render() {
    const { data } = this.props

    return (
      <Layout title="Книги">
        <div className="blocks">
          {data.allBooksJson.edges.map(({ node }) => (
            <Block
              key={node.id}
              rating={getRating(node.rating)}
              title={node.title}
              subtitle={node.author}
            />
          ))}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allBooksJson(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          rating
          date
          author
        }
      }
    }
  }
`
