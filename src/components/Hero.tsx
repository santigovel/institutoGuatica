import { useEffect, useRef } from 'react'
import { gsap } from '../lib/animations'
import { IMAGES } from '../data/images'

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('#hero-badge', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, delay: 0.4 })
        .fromTo('#hero-title', { y: 60, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, '-=0.3')
        .fromTo('#hero-sub', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 }, '-=0.6')
        .fromTo('#hero-cta', { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12 }, '-=0.5')
        .fromTo(
          '#hero-img',
          { scale: 1.15, autoAlpha: 0, rotate: -3 },
          { scale: 1, autoAlpha: 1, rotate: 0, duration: 1.2, ease: 'power2.out' },
          '-=0.9',
        )
        .fromTo(
          '#hero-float',
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15 },
          '-=0.6',
        )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="inicio"
      ref={rootRef}
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50 pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-8">
        <div>
          <span
            id="hero-badge"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-4 py-1.5 text-sm font-bold text-emerald-700 ring-1 ring-emerald-600/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            Apertura de matrículas 2026
          </span>

          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Formamos líderes con{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              raíces en nuestra tierra
            </span>{' '}
            y visión de futuro
          </h1>

          <p
            id="hero-sub"
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            En el Instituto Guática acompañamos a cada estudiante en su camino
            académico, cultural y deportivo, en pleno corazón de la región
            cafetera colombiana.
          </p>

          <div id="hero-cta" className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Solicita información
            </a>
            <a
              href="#programas"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-800 shadow-md ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:ring-emerald-400"
            >
              Conoce nuestros programas
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            id="hero-img"
            className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/20 ring-8 ring-white"
          >
            <img
              src={IMAGES.classroom.src}
              alt={IMAGES.classroom.alt}
              className="h-[340px] w-full object-cover md:h-[460px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
          </div>

          <div
            id="hero-float"
            className="absolute -left-4 top-8 rounded-2xl bg-white/95 px-5 py-4 shadow-xl ring-1 ring-slate-100 backdrop-blur"
          >
            <p className="text-2xl font-extrabold text-emerald-700">+38</p>
            <p className="text-xs font-semibold text-slate-500">
              años de trayectoria
            </p>
          </div>

          <div
            id="hero-float"
            className="absolute -bottom-6 right-2 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-xl ring-1 ring-slate-100 backdrop-blur"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-600/10 text-emerald-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </span>
            <div>
              <p className="text-sm font-extrabold text-slate-900">
                Comunidad educativa
              </p>
              <p className="text-xs font-semibold text-slate-500">
                Estudiantes, docentes y familias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
