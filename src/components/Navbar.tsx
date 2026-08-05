import { useEffect, useState } from 'react'
import { gsap } from '../lib/animations'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#programas', label: 'Programas' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(
      '#navbar',
      { y: -80, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out', delay: 0.2 },
    )
  }, [])

  return (
    <header
      id="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/institutoGuatica/escudo.webp"
            alt="Escudo del Instituto Guática"
            className="h-11 w-11 rounded-xl object-contain shadow-md ring-1 ring-slate-200"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold tracking-tight text-slate-900">
              Instituto Guática
            </span>
            <span className="text-xs font-medium text-emerald-700">
              Educamos el futuro
            </span>
          </span>
        </a>

        <ul
          className={`absolute left-0 top-full w-full bg-white/95 px-6 pb-6 pt-2 shadow-lg backdrop-blur-md transition-all duration-300 md:static md:flex md:w-auto md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none ${
            open ? 'flex flex-col gap-3' : 'hidden'
          }`}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-emerald-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-700 md:inline-block"
          >
            Admisiones
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
