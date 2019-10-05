import React, { PureComponent } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Tumblr from '../components/Tumblr'

export default class TumblrPage extends PureComponent {
  render() {
    const { data } = this.props

    return (
      <Layout title="Tumblr">
        <div className="boardz">
          <ul>
            {data.allTumblrPost.edges.map(
              ({ node }, index) =>
                index % 3 === 0 &&
                node.photos.map((photo, photoIndex) => (
                  <li key={`${node.id}_${photoIndex}`}>
                    <Tumblr imageUrl={photo.original_size.url} />
                  </li>
                ))
            )}
          </ul>
          <ul>
            {data.allTumblrPost.edges.map(
              ({ node }, index) =>
                index % 3 === 1 &&
                node.photos.map((photo, photoIndex) => (
                  <li key={`${node.id}_${photoIndex}`}>
                    <Tumblr imageUrl={photo.original_size.url} />
                  </li>
                ))
            )}
          </ul>
          <ul>
            {data.allTumblrPost.edges.map(
              ({ node }, index) =>
                index % 3 === 2 &&
                node.photos.map((photo, photoIndex) => (
                  <li key={`${node.id}_${photoIndex}`}>
                    <Tumblr imageUrl={photo.original_size.url} />
                  </li>
                ))
            )}
          </ul>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allTumblrPost(filter: { type: { eq: "photo" } }, limit: 300) {
      edges {
        node {
          id
          type
          date
          post_url
          photos {
            original_size {
              height
              url
              width
            }
          }
          blog_name
        }
      }
    }
  }
`
