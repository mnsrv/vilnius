import React from 'react'

import Layout from '../components/Layout'

const Color = ({ color }) => {
  return (
    <div style={{ width: 50, height: 50, backgroundColor: color }} />
  )
}

export default () => (
  <Layout title="Цвета">
    <p>Собираю понравившиеся цвета</p>
    <Color color="rgb(50,150,50)" />
    <Color color="rgb(70,150,50)" />
    <Color color="rgb(250,200,50)" />
    <Color color="rgb(40,150,250)" />
    <Color color="rgb(50,150,250)" />
  </Layout>
)