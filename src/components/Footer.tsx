import { IMAGES } from '../data/images'

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-16 text-slate-300">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/institutoGuatica/escudo.webp"
                alt="Escudo del Instituto Guática"
                className="h-12 w-12 rounded-xl object-contain shadow-md ring-1 ring-white/10"
              />
              <span className="text-lg font-extrabold tracking-tight text-white">
                Instituto Guática
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Institución educativa comprometida con la formación integral de
              niños y jóvenes en el occidente de Risaralda. Educamos con
              raíces, propósito y visión de futuro.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white">
              Enlaces
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#inicio" className="transition-colors hover:text-emerald-400">Inicio</a></li>
              <li><a href="#nosotros" className="transition-colors hover:text-emerald-400">Nosotros</a></li>
              <li><a href="#programas" className="transition-colors hover:text-emerald-400">Programas</a></li>
              <li><a href="#galeria" className="transition-colors hover:text-emerald-400">Galería</a></li>
              <li><a href="#contacto" className="transition-colors hover:text-emerald-400">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white">
              Contacto
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Cra 4 #5-23, Guática</li>
              <li>Risaralda, Colombia</li>
              <li>+57 606 854 1234</li>
              <li>contacto@institutoguatica.edu.co</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
            Créditos de imágenes
          </h4>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-500">
            {Object.values(IMAGES).map((img) => (
              <li key={img.title}>
                «{img.title}» — {img.author} ·{' '}
                <a
                  href={img.licenseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  {img.license}
                </a>{' '}
                · <span className="text-slate-400">Wikimedia Commons</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} Instituto Guática. Proyecto educativo con
          fines demostrativos.
        </p>
      </div>
    </footer>
  )
}
