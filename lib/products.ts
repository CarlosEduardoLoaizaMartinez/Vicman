export type Category = 'cafe' | 'cacao' | 'miel'

export type Variant = {
  label: string
  price: number
}

export type SensoryProfile = {
  aroma: number
  acidez: number
  cuerpo: number
  dulzor: number
  final: number
  balance: number
}

export type Traceability = {
  lote: string
  finca: string
  altitud: string
  proceso: string
  fecha: string
  fechaLabel: string
  perfil: SensoryProfile
}

export type Product = {
  id: string
  category: Category
  name: string
  slogan: string
  description: string
  image: string
  badge?: string
  attributes: string[]
  variants: Variant[]
  varieties?: string[]
  grindable?: boolean
  trace: Traceability
}

export const categoryLabels: Record<Category | 'todos', string> = {
  todos: 'Todos',
  cafe: 'Café de Especialidad',
  cacao: 'Cacao y Derivados',
  miel: 'Miel de Abeja',
}

export const grindOptions = [
  'Grano Entero',
  'Molido para Prensa Francesa',
  'Molido para Cafetera / Gota a Gota',
  'Molido Espresso',
] as const

export const products: Product[] = [
  {
    id: 'cafe-especial-altura',
    category: 'cafe',
    name: 'Café Especial de Altura',
    slogan: 'Agrovicman, donde el café se convierte en arte.',
    description:
      'Cada sorbo conecta con la esencia del campo y el esfuerzo de nuestros agricultores comprometidos con la excelencia.',
    image: '/images/agv-cafe-especial.png',
    badge: 'Línea Reserva ACR',
    attributes: ['+1,750 m.s.n.m.', 'Puntaje SCA 85+', 'Geisha y Bourbon'],
    variants: [
      { label: '250 g', price: 28 },
      { label: '500 g', price: 52 },
      { label: '1 kg', price: 98 },
    ],
    varieties: ['Geisha', 'Bourbon'],
    grindable: true,
    trace: {
      lote: 'ACR-GB-2026-07',
      finca: 'Finca Víctor Manuel · Sector Chuyapi',
      altitud: '1,780 m.s.n.m.',
      proceso: 'Lavado · Secado en camas africanas',
      fecha: '2026-10-02',
      fechaLabel: '02 de octubre, 2026',
      perfil: { aroma: 9, acidez: 8.5, cuerpo: 7, dulzor: 8.5, final: 8, balance: 8.5 },
    },
  },
  {
    id: 'cafe-tueste-medio',
    category: 'cafe',
    name: 'Café con Tueste Medio',
    slogan: 'Agrovicman, donde la altura no limita la calidad, sino que la define.',
    description:
      'Con notas a nuez, cacao y sutiles toques frutales, se distingue por su aroma envolvente, acidez moderada y un cuerpo medio que permanece en el paladar con elegancia.',
    image: '/images/agv-cafe-tueste.png',
    badge: 'Blend Típica & Catimor',
    attributes: ['Nuez · Cacao · Frutal', 'Acidez moderada', 'Cuerpo medio'],
    variants: [
      { label: '250 g', price: 20 },
      { label: '500 g', price: 38 },
      { label: '1 kg', price: 70 },
    ],
    grindable: true,
    trace: {
      lote: 'ACR-TC-2026-11',
      finca: 'Finca Víctor Manuel · Sector Urusayhua',
      altitud: '1,650 m.s.n.m.',
      proceso: 'Lavado · Tueste medio artesanal',
      fecha: '2026-10-09',
      fechaLabel: '09 de octubre, 2026',
      perfil: { aroma: 7.5, acidez: 6, cuerpo: 7.5, dulzor: 7.5, final: 7, balance: 8 },
    },
  },
  {
    id: 'pasta-cacao-400',
    category: 'cacao',
    name: 'Pasta Pura de Cacao 400 g',
    slogan: 'Agrovicman, el poder del cacao en su estado más natural.',
    description:
      'Ideal para chocolates artesanales, repostería fina, bebidas energéticas o la taza tradicional de chocolate.',
    image: '/images/agv-cacao-400.png',
    badge: '100% Cacao',
    attributes: ['Granos de La Convención', 'Sin aditivos', 'Sin azúcar añadida'],
    variants: [{ label: '400 g', price: 35 }],
    trace: {
      lote: 'CAC-LC-2026-04',
      finca: 'Parcelas asociadas · Valle de La Convención',
      altitud: '1,050 m.s.n.m.',
      proceso: 'Fermentado en cajones · Molienda en piedra',
      fecha: '2026-09-28',
      fechaLabel: '28 de septiembre, 2026',
      perfil: { aroma: 8.5, acidez: 5, cuerpo: 9, dulzor: 5.5, final: 8.5, balance: 7.5 },
    },
  },
  {
    id: 'pasta-cacao-100',
    category: 'cacao',
    name: 'Pasta Pura de Cacao 100 g',
    slogan: 'Formato personal, la esencia del verdadero cacao.',
    description:
      'Descubre la esencia del verdadero cacao en presentación práctica, cuidando cada paso desde la cosecha hasta la molienda.',
    image: '/images/agv-cacao-100.png',
    badge: 'Formato personal',
    attributes: ['100% Cacao', 'Ideal para taza', 'Práctico de llevar'],
    variants: [{ label: '100 g', price: 12 }],
    trace: {
      lote: 'CAC-LC-2026-05',
      finca: 'Parcelas asociadas · Valle de La Convención',
      altitud: '1,050 m.s.n.m.',
      proceso: 'Fermentado en cajones · Molienda en piedra',
      fecha: '2026-10-05',
      fechaLabel: '05 de octubre, 2026',
      perfil: { aroma: 8, acidez: 5, cuerpo: 8.5, dulzor: 5.5, final: 8, balance: 7.5 },
    },
  },
  {
    id: 'miel-de-abeja',
    category: 'miel',
    name: 'Miel de Abeja Pura de La Convención',
    slogan: 'Dulzura silvestre de nuestros bosques.',
    description:
      'Miel 100% pura multifloral, recolectada de forma sostenible en los bosques biodiversos de nuestra región.',
    image: '/images/agv-miel.png',
    badge: 'Multifloral',
    attributes: ['100% pura', 'Recolección sostenible', 'Bosque de neblina'],
    variants: [
      { label: '500 g', price: 25 },
      { label: '1 kg', price: 45 },
    ],
    trace: {
      lote: 'MIE-ACR-2026-02',
      finca: 'Apiarios Víctor Manuel · Borde del ACR',
      altitud: '1,400 m.s.n.m.',
      proceso: 'Extracción en frío · Sin pasteurizar',
      fecha: '2026-09-15',
      fechaLabel: '15 de septiembre, 2026',
      perfil: { aroma: 8.5, acidez: 4, cuerpo: 8, dulzor: 9.5, final: 7.5, balance: 8 },
    },
  },
]

export const formatPrice = (value: number) =>
  `S/ ${value.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

export const WHATSAPP_NUMBER = '51984603363'

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
