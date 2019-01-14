import React from 'react'

import Layout from '../components/layout'

const Social = () => (
  <p>
    <a href="https://twitter.com/sashamjolnir" target="_blank" rel="noopener noreferrer">Twitter</a>
    {' · '}
    <a href="https://www.instagram.com/mnsrv/" target="_blank" rel="noopener noreferrer">Instagram</a>
    {' · '}
    <a href="https://letterboxd.com/mansurov/films/diary/" target="_blank" rel="noopener noreferrer">Letterboxd</a>
  </p>
)

export default ({ data }) => {
  return (
    <Layout title="Саша Мансуров" index>
      <Social />
    </Layout>
  )
}
