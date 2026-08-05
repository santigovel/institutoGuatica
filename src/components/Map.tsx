import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

const POSITION: [number, number] = [5.317, -75.8]

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null)
  const leafletRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || leafletRef.current) return

    const icon = L.icon({
      iconUrl,
      iconRetinaUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })

    const map = L.map(mapRef.current, {
      center: POSITION,
      zoom: 15,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map)

    L.marker(POSITION, { icon })
      .addTo(map)
      .bindPopup(
        '<strong>Instituto Guática</strong><br/>Vía al Jordán, Guática, Risaralda',
      )
      .openPopup()

    leafletRef.current = map
    return () => {
      map.remove()
      leafletRef.current = null
    }
  }, [])

  return (
    <div
      ref={mapRef}
      aria-label="Mapa de ubicación del Instituto Guática"
      className="z-0 h-[320px] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-100"
    />
  )
}