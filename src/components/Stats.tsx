import { useGsapCounter } from '../lib/animations'

function Stat({
  value,
  decimals = 0,
  suffix = '',
  label,
}: {
  value: number
  decimals?: number
  suffix?: string
  label: string
}) {
  const ref = useGsapCounter<HTMLSpanElement>(value, decimals, suffix)
  return (
    <div className="text-center" data-reveal>
      <p className="text-4xl font-extrabold text-white md:text-5xl">
        <span ref={ref}>0</span>
      </p>
      <p className="mt-2 text-sm font-semibold text-emerald-100/90">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-emerald-700 to-emerald-900 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 md:grid-cols-4">
        <Stat value={38} label="Años de trayectoria" />
        <Stat value={1200} suffix="+" label="Estudiantes activos" />
        <Stat value={85} suffix="%" label="Egresados que continúan estudios" />
        <Stat value={14} label="Programas y sedes" />
      </div>
    </section>
  )
}
