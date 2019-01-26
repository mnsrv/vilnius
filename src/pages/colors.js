import React, { PureComponent } from 'react'

import Layout from '../components/Layout'

const Color = ({ color, isLast }) => {
  return (
    <div
      style={{
        width: '22%',
        height: '3rem',
        backgroundColor: color,
        marginRight: isLast ? 0 : '4%',
        marginBottom: '1rem'
      }}
    />
  )
}

export default class Colors extends PureComponent {
  state = {
    mode: 'light'
  }

  colors = [
    '#FB090B', 'rgb(51,153,51)', 'rgb(255,204,51)', 'rgb(51,153,255)',
    'rgb(255,204,204)', '#50e3c2', '#feebef', '#fffbe7'
  ]

  render() {
    return (
      <Layout title="Цвета">
        <p>Собираю понравившиеся цвета</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.colors.map((color, index) => (
            <Color key={color} color={color} isLast={(index + 1) % 4 === 0} />
          ))}
        </div>
      </Layout>
    )
  }
}