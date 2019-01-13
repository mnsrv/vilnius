import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { getEmoji, getRussianCity } from '../utils/weather'

const Weather = ({ weather }) => {
  if (!weather) {
    return null
  }
  const { timestamp, temperature, icon, location } = weather
  const sign = temperature > 0 ? '+' : ''
  const date = new Date(timestamp * 1000)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return (
    <div style={{ backgroundColor: 'rgb(25,28,38)', color: 'white', padding: '1rem 1.5rem', borderRadius: 8, display: 'inline-block', maxWidth: '100%', marginBottom: '1.45rem' }}>
      <h4 style={{ fontSize: '1.5rem' }}>{getRussianCity(location)} {getEmoji(icon)}</h4>
      <h4 style={{ fontSize: '3rem', fontWeight: '200', textAlign: 'center' }}>{sign}{temperature}°</h4>
      <small>{day}/{month}/{year} {hours}:{minutes}</small>
    </div>
  )
}
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
    <Layout title="Саша Мансуров">
      <Weather weather={data.weather.weatherByCity} />
      <Social />
    </Layout>
  )
}

export const query = graphql`
  query {
    weather {
      weatherByCity(city: "2013159") {
        timestamp
        temperature
        icon
        location
      }
    }
  }
`