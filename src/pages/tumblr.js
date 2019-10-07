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
                    <Tumblr
                      original_size={photo.original_size}
                      alt_sizes={photo.alt_sizes}
                    />
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
                    <Tumblr
                      original_size={photo.original_size}
                      alt_sizes={photo.alt_sizes}
                    />
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
                    <Tumblr
                      original_size={photo.original_size}
                      alt_sizes={photo.alt_sizes}
                    />
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
    allTumblrPost(filter: { type: { eq: "photo" } }, limit: 100) {
      edges {
        node {
          id
          photos {
            original_size {
              height
              url
              width
            }
            alt_sizes {
              height
              url
              width
            }
          }
        }
      }
    }
  }
`
