import Image from 'next/image'
import { Droplets, Mountain, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const seals = [
  {
    icon: Mountain,
    metric: '+1,750',
    unit: 'm.s.n.m.',
    title: 'Altitud extrema',
    text: 'Maduración lenta bajo sombra natural de los bosques de neblina de La Convención, concentrando notas dulces, frutales y acidez brillante en Geisha, Bourbon y Típica.',
  },
  {
    icon: Droplets,
    metric: '100%',
    unit: 'agua pura',
    title: 'Santuario de agua (ACR)',
    text: 'Procesado con aguas cristalinas de cabecera de cuenca del Área de Conservación Regional, garantizando inocuidad y pureza sin químicos.',
  },
  {
    icon: Users,
    metric: '2013',
    unit: 'desde',
    title: 'Tradición familiar',
    text: 'Control total de la cadena: cosecha selectiva, tueste y molienda artesanal en nuestra planta, asegurando comercio justo y frescura.',
  },
]

export function Process() {
  return (
    <section
      id="sello-acr"
      className="relative scroll-mt-24 overflow-hidden bg-primary text-primary-foreground"
      aria-labelledby="sello-title"
    >
      <div className="wave-line wave-line-light" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <Reveal className="flex flex-col gap-6">
          <p className="text-lg uppercase tracking-[0.3em] text-accent">El Sello ACR</p>
          <h2 id="sello-title" className="text-balance text-5xl leading-none md:text-6xl">
            ¿Por qué nuestro origen garantiza el 100% de calidad?
          </h2>
          <div className="blob relative aspect-[4/3] overflow-hidden border-[1.5px] border-primary-foreground">
            <Image
              src="/Vicman/images/agv-acr.png"
              alt="Bosque de neblina con cafetales bajo sombra y un riachuelo cristalino en La Convención, Cusco"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <ul className="flex flex-col gap-5">
          {seals.map(({ icon: Icon, metric, unit, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 140}>
                <article className="group flex flex-col gap-4 rounded-3xl border-[1.5px] border-primary-foreground/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-primary-foreground/5 sm:flex-row sm:items-start">
                  <div className="flex shrink-0 items-center gap-4 sm:w-44 sm:flex-col sm:items-start">
                    <span className="flex size-14 items-center justify-center rounded-full bg-accent text-primary transition-transform duration-500 group-hover:rotate-12">
                      <Icon className="size-7" strokeWidth={1.5} />
                    </span>
                    <p className="flex flex-col leading-none">
                      <span className="text-xs uppercase tracking-widest text-primary-foreground/70">{unit}</span>
                      <span className="font-heading text-4xl text-accent">{metric}</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl">{title}</h3>
                    <p className="text-pretty text-lg leading-relaxed text-primary-foreground/80">{text}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <div className="wave-line wave-line-light" aria-hidden="true" />
    </section>
  )
}
