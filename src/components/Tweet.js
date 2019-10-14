import React, { useEffect } from 'react'

function Tweet({ theme }) {
  useEffect(() => {
    if (!theme) {
      return
    }
    const tweetNode = document.getElementById('tweet')
    tweetNode.innerHTML = ''

    window.twttr.ready(function(twttr) {
      twttr.widgets.createTweet('1173584017788157953', tweetNode, {
        theme
      })
    })
  }, [theme])

  return <div id="tweet" />
}

export default Tweet
