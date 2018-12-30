import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout title="mansurov.me">
    <p>{data.weather.weatherByCity.temperature} – {data.weather.weatherByCity.icon}</p>
  </Layout>
)

export const query = graphql`
  query {
    weather {
      weatherByCity(city: "2013159") {
        temperature
        icon
      }
    }
  }
`