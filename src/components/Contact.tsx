import { useState, type FormEvent } from 'react'
import { useGsapReveal } from '../lib/animations'
import Map from './Map'

const INFO = [
  {
    label: 'Dirección',
    value: 'Vía al Jordán, Guática, Risaralda, Colombia',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    label: 'Teléfono',
    value: '+57 606 854 1234',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    label: 'Correo',
    value: 'contacto@institutoguatica.edu.co',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useGsapReveal<HTMLElement>()
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" ref={ref} className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-5">
        <div className="md:col-span-2">
          <span className="text-sm font-extrabold uppercase tracking-widest text-emerald-600" data-reveal>
            Contacto
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" data-reveal>
            Escríbenos
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600" data-reveal>
            ¿Quieres inscribir a tu hijo o conocer más sobre nosotros? Cuéntanos
            tu caso y te responderemos lo antes posible.
          </p>

          <div className="mt-10 space-y-6">
            {INFO.map((item, i) => (
              <div key={item.label} className="flex gap-4" data-reveal data-reveal-delay={String(i * 0.1)}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-600/10 text-emerald-700">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-600">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8" data-reveal>
            <Map />
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-3" data-reveal>
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-900/5 ring-1 ring-slate-100">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-sm font-bold text-slate-800">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <div>
                <label htmlFor="correo" className="mb-1.5 block text-sm font-bold text-slate-800">
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="asunto" className="mb-1.5 block text-sm font-bold text-slate-800">
                  Asunto
                </label>
                <input
                  id="asunto"
                  name="asunto"
                  required
                  placeholder="Ej. Inscripción 2026"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="mb-1.5 block text-sm font-bold text-slate-800">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="Cuéntanos cómo podemos ayudarte"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              {sent ? '¡Gracias! Hemos recibido tu mensaje' : 'Enviar mensaje'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
