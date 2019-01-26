import React from 'react'

export default () => {
  const date = new Date()
  const year = date.getFullYear()
  const firstDayInMS = (new Date(year, 0, 1)).getTime()
  const lastDayInMS = (new Date(year + 1, 0, 1)).getTime()
  const nowInMS = date.getTime()
  const progress = Math.floor((nowInMS - firstDayInMS) / (lastDayInMS - firstDayInMS) * 100)

  return (
    <div style={{ position: 'relative', backgroundColor: '#eee' }} title={`Year Progress – ${progress}%`}>
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: `${progress}%`, backgroundColor: '#aaa' }} />
      <h6 style={{ margin: 0, paddingLeft: '1rem', position: 'relative' }}>{progress}%</h6>
    </div>
  )
}