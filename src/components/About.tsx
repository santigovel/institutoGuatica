import { useGsapParallax, useGsapReveal } from '../lib/animations'

const FEATURES = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Excelencia académica',
    text: 'Currículo sólido orientado a la formación integral y el ingreso a la educación superior.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    title: 'Comunidad cercana',
    text: 'Acompañamiento permanente de docentes y familias en cada etapa del crecimiento.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3Z" />
      </svg>
    ),
    title: 'Cultura y deporte',
    text: 'Talleres de música, arte y actividades deportivas para desarrollar talentos únicos.',
  },
]

export default function About() {
  const sectionRef = useGsapReveal<HTMLElement>()
  const parallaxRef = useGsapParallax<HTMLDivElement>(0.15)

  return (
    <section id="nosotros" ref={sectionRef} className="overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-40 w-40 rounded-3xl bg-emerald-100" />
          <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-3xl bg-sky-100" />
          <div ref={parallaxRef} className="relative overflow-hidden rounded-3xl shadow-xl ring-8 ring-white">
            <img
              src="/institutoGuatica/sede.webp"
              alt="Sede física del Instituto Guática"
              className="h-[420px] w-full object-cover md:h-[500px]"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <span className="text-sm font-extrabold uppercase tracking-widest text-emerald-600" data-reveal>
            Nosotros
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" data-reveal>
            Un proyecto educativo arraigado en la región cafetera
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600" data-reveal>
            Desde hace más de tres décadas, el Instituto Guática es sinónimo de
            formación de calidad en el occidente de Risaralda. Nuestros
            estudiantes crecen entre la calidez del paisaje cafetero y un modelo
            pedagógico que combina ciencia, arte, deporte y valores.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600" data-reveal>
            Creemos en una educación que reconoce el contexto, respeta la
            identidad y prepara a cada persona para aportar a su comunidad y al
            mundo.
          </p>

          <div className="mt-10 space-y-6">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="flex gap-4" data-reveal data-reveal-delay={String(i * 0.1)}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-600/10 text-emerald-700">
                  {f.icon}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
