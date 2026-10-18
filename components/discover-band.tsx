import { Building2, Coffee, Hotel, Store } from 'lucide-react'
import { Marquee } from '@/components/marquee'
import { Reveal } from '@/components/reveal'
import { whatsappLink } from '@/lib/products'

const segments = [
  { icon: Coffee, label: 'Cafeterías' },
  { icon: Hotel, label: 'Hoteles y restaurantes' },
  { icon: Store, label: 'Tiendas gourmet' },
  { icon: Building2, label: 'Regalos corporativos' },
]

const b2bMessage =
  '¡Hola AgroVicman! Quiero cotizar un pedido mayorista / B2B.\n\nEmpresa:\nProductos de interés:\nVolumen mensual aproximado:\nCiudad:'

export function DiscoverBand() {
  return (
    <section id="mayorista" className="scroll-mt-24 overflow-hidden border-y border-foreground bg-accent" aria-labelledby="b2b-title">
      <div className="border-b border-foreground bg-background py-4">
        <Marquee duration={35} label="Valores">
          {['Geisha', 'Bourbon', 'Típica', 'Catimor', 'Cacao 100%', 'Miel silvestre', 'Quillabamba'].map((word) => (
            <span key={word} className="flex items-center gap-8 px-8 font-heading text-4xl md:text-5xl">
              {word}
              <span aria-hidden="true" className="size-3 rounded-full bg-accent" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 text-primary md:px-10 md:py-20 lg:grid-cols-2 lg:items-center">
        <Reveal className="flex flex-col gap-5">
          <p className="text-lg uppercase tracking-[0.3em]">Pedido mayorista / B2B</p>
          <h2 id="b2b-title" className="text-balance text-5xl leading-none md:text-6xl">
            Lleva el origen ACR a tu negocio
          </h2>
          <p className="max-w-lg text-pretty text-xl leading-relaxed">
            Precios por volumen, tueste a pedido y lotes con certificado de trazabilidad para tu carta en Cusco, Lima o
            el extranjero.
          </p>
          <a href={whatsappLink(b2bMessage)} target="_blank" rel="noopener noreferrer" className="btn-pill w-fit">
            Cotizar por WhatsApp
          </a>
        </Reveal>
        <ul className="grid grid-cols-2 gap-4">
          {segments.map(({ icon: Icon, label }, i) => (
            <li key={label}>
              <Reveal delay={i * 100}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border-[1.5px] border-primary bg-background p-6 transition-transform duration-300 hover:-translate-y-1 hover:rotate-1">
                  <Icon className="size-8" strokeWidth={1.5} />
                  <p className="font-heading text-2xl leading-tight">{label}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
