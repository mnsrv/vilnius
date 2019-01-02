import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { getEmoji, getRussianCity } from '../utils/weather'

const WeatherBlock = ({ weather }) => {
  if (!weather) {
    return null
  }
  const { temperature, icon, location } = weather
  const sign = temperature > 0 ? '+' : ''

  return (
    <div style={{ backgroundColor: 'rgb(25,28,38)', color: 'white', padding: '1rem 1.5rem', borderRadius: 8, display: 'inline-block', maxWidth: '100%' }}>
      <h4 style={{ fontSize: '1.5rem' }}>{getRussianCity(location)} {getEmoji(icon)}</h4>
      <h4 style={{ fontSize: '3rem', fontWeight: '200', textAlign: 'center' }}>{sign}{temperature}°</h4>
    </div>
  )
}

export default ({ data }) => {
  return (
    <Layout title="Саша Мансуров">
      <WeatherBlock weather={data.weather.weatherByCity} />
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