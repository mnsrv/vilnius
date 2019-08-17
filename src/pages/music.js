import React, { PureComponent } from 'react'

import Layout from '../components/Layout'

export default class MusicPage extends PureComponent {
  render() {
    return (
      <Layout title="Autumn ‘19">
        <iframe
          title="music"
          allow="autoplay *; encrypted-media *;"
          frameborder="0"
          width="100%"
          height="450"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/ru/playlist/autumn-19/pl.u-rRRkFJvXg4Y"
        />
      </Layout>
    )
  }
}
