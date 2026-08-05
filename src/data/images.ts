export interface ImageCredit {
  src: string
  alt: string
  title: string
  author: string
  license: string
  licenseUrl: string
}

const wiki = (file: string, width = 1400) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=${width}`

export const IMAGES: Record<string, ImageCredit> = {
  classroom: {
    src: wiki('Reading_Wikipedia_in_the_Classroom_for_Secondary_School_Students_86.jpg'),
    alt: 'Estudiantes trabajando en el aula del Instituto Guática',
    title: 'Reading Wikipedia in the Classroom for Secondary School Students',
    author: 'Wikimedia Commons',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.es',
  },
  coffee: {
    src: '/institutoGuatica/sede.webp',
    alt: 'Sede física del Instituto Guática',
    title: 'Sede física del Instituto Guática',
    author: 'Instituto Guática',
    license: 'Uso institucional',
    licenseUrl: 'https://commons.wikimedia.org/',
  },
  science: {
    src: wiki('Southern_Arkansas_University_Biology_student_with_microscope.jpg'),
    alt: 'Estudiante usando un microscopio en el laboratorio de ciencias',
    title: 'Southern Arkansas University Biology student with microscope',
    author: 'Wikimedia Commons',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/deed.es',
  },
  music: {
    src: wiki('Music_Class_at_Ursuline_Convent_(5804652176).jpg'),
    alt: 'Clase de música con instrumentos',
    title: 'Music Class at Ursuline Convent',
    author: 'Wikimedia Commons',
    license: 'Dominio público',
    licenseUrl: 'https://commons.wikimedia.org/',
  },
  sport: {
    src: wiki('Boys_playing_football_at_Kinama_Bujumbura_2019-02-23.jpg'),
    alt: 'Niños jugando fútbol en la cancha',
    title: 'Boys playing football at Kinama Bujumbura',
    author: 'Wikimedia Commons',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.es',
  },
  library: {
    src: wiki('Children_Reading_at_Tables_in_a_School_Library(GN08849).jpg'),
    alt: 'Niños leyendo en la biblioteca de la escuela',
    title: 'Children Reading at Tables in a School Library',
    author: 'Wikimedia Commons',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.es',
  },
}
