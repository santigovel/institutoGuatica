import { useGsapReveal } from '../lib/animations'
import { IMAGES } from '../data/images'

const PROGRAMS = [
  {
    img: IMAGES.science,
    tag: 'Ciencias',
    title: 'Laboratorio de ciencias',
    text: 'Experiencias prácticas de biología, química y física que despiertan la curiosidad científica.',
  },
  {
    img: IMAGES.music,
    tag: 'Cultura',
    title: 'Formación musical',
    text: 'Banda, coro y talleres instrumentales que cultivan la sensibilidad artística.',
  },
  {
    img: IMAGES.sport,
    tag: 'Deporte',
    title: 'Semilleros deportivos',
    text: 'Fútbol, atletismo y más disciplinas para crecer en equipo y con disciplina.',
  },
  {
    img: IMAGES.library,
    tag: 'Lectura',
    title: 'Plan lector y biblioteca',
    text: 'Espacios que fomentan el hábito de la lectura y la investigación desde temprana edad.',
  },
]

export default function Programs() {
  const ref = useGsapReveal<HTMLElement>()

  return (
    <section id="programas" ref={ref} className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-extrabold uppercase tracking-widest text-emerald-600" data-reveal>
            Programas
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" data-reveal>
            Oferta educativa integral
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600" data-reveal>
            Más allá del aula, ofrecemos experiencias que forman personas
            completas: científicas, creativas y comprometidas.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <article
              key={p.title}
              data-reveal
              data-reveal-delay={String(i * 0.12)}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-600/10"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img.src}
                  alt={p.img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-700 backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
