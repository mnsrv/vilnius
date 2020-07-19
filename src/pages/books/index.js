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
          {data.allBooksJson.group
            .sort(
              (a, b) =>
                Number(b.fieldValue.slice(0, 4)) -
                Number(a.fieldValue.slice(0, 4))
            )
            .map(({ fieldValue, totalCount, nodes }) => (
              <>
                <h2>{fieldValue}</h2>
                {nodes.map((node) => (
                  <Block
                    key={node.id}
                    title={`${getRating(node.rating)} ${node.title}`}
                    subtitle={node.author}
                  />
                ))}
              </>
            ))}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allBooksJson(sort: { fields: date, order: DESC }) {
      group(field: year) {
        fieldValue
        nodes {
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
