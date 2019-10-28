import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default ({ token }) => {
  const mapNode = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken = token

    const map = new mapboxgl.Map({
      container: mapNode.current,
      style: 'mapbox://styles/sashamjolnir/ck22day3c17n71cmsmw58w9ne',
      center: [41.366, 44.483],
      zoom: 2
    })
    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      'top-right'
    )

    return () => {
      map.remove()
    }
  }, [token])

  return <div ref={mapNode} className="map" />
}
