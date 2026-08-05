import { useGsapReveal } from '../lib/animations'
import { IMAGES } from '../data/images'

const GALLERY = [
  { img: IMAGES.classroom, span: 'md:col-span-2 md:row-span-2' },
  { img: IMAGES.science },
  { img: IMAGES.library },
  { img: IMAGES.sport },
  { img: IMAGES.music },
]

export default function Gallery() {
  const ref = useGsapReveal<HTMLElement>()

  return (
    <section id="galeria" ref={ref} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-extrabold uppercase tracking-widest text-emerald-600" data-reveal>
            Galería
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" data-reveal>
            Nuestro día a día
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600" data-reveal>
            Una mirada a los espacios, personas y momentos que hacen única a
            nuestra institución.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3">
          {GALLERY.map((item, i) => (
            <figure
              key={item.img.title}
              data-reveal
              data-reveal-delay={String(i * 0.08)}
              className={`group relative overflow-hidden rounded-3xl ${item.span ?? ''}`}
            >
              <img
                src={item.img.src}
                alt={item.img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
