import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const pillars = [
  {
    title: 'Misión',
    text: 'Producir y transformar café, cacao y miel de altura con prácticas sostenibles, llevando a cada mesa productos puros que reflejen el esfuerzo de nuestras familias agricultoras.',
  },
  {
    title: 'Visión',
    text: 'Ser la marca referente del valle de La Convención, reconocida en el Perú y el mundo por la calidad, trazabilidad y el cuidado del Área de Conservación Regional.',
  },
]

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-secondary py-20 md:py-28" aria-labelledby="nosotros-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="blob relative aspect-square overflow-hidden border-[1.5px] border-foreground">
              <Image
                src="/Vicman/images/agv-familia.png"
                alt="Manos de un agricultor cosechando cerezas maduras de café en Quillabamba"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-2 rounded-2xl border-[1.5px] border-foreground bg-background px-5 py-3 shadow-[4px_4px_0_0_var(--accent)] md:right-8">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Familia agricultora</p>
              <p className="font-heading text-3xl">Desde 2013</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-6">
          <p className="text-lg uppercase tracking-[0.3em] text-muted-foreground">Sobre nosotros</p>
          <h2 id="nosotros-title" className="text-balance text-5xl leading-none md:text-6xl">
            Agropecuaria Víctor Manuel
          </h2>
          <p className="text-pretty text-xl leading-relaxed">
            Somos AgroVicman, una empresa familiar de Quillabamba que controla cada paso: desde la cosecha selectiva en
            nuestras fincas hasta el tueste y la molienda artesanal en nuestra planta. Comercio justo y frescura, sin
            intermediarios.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col gap-2 rounded-3xl border-[1.5px] border-foreground bg-background p-6">
                <h3 className="text-3xl">{pillar.title}</h3>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground">{pillar.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
