import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { getEmoji, getRussianCity } from '../utils/weather'

export default ({ data }) => {
  const { temperature, icon, location } = data.weather.weatherByCity
  const sign = temperature > 0 ? '+' : ''

  return (
    <Layout title="mansurov.me">
      <div style={{ backgroundColor: 'rgb(25,28,38)', color: 'white', padding: '1rem 1.5rem', borderRadius: 8, display: 'inline-block', maxWidth: '100%' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{getRussianCity(location)} {getEmoji(icon)}</div>
        <div style={{ fontSize: '3rem', fontWeight: '200', textAlign: 'center' }}>{sign}{temperature}°</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    weather {
      weatherByCity(city: "2013159") {
        temperature
        icon
        location
      }
    }
  }
`