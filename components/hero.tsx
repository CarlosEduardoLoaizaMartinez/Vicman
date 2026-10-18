import Image from 'next/image'
import { ArrowRight, Leaf, Store } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-foreground" aria-labelledby="hero-title">
      <div className="relative min-h-[680px] md:min-h-[760px]">
        <Image
          src="/Vicman/images/agv-hero.png"
          alt="Café VICMAN, pasta pura de cacao y miel de abeja sobre una mesa de madera frente a los cafetales de neblina de Quillabamba"
          fill
          priority
          sizes="100vw"
          className="animate-in fade-in zoom-in-105 object-cover object-[70%_center] duration-[1600ms]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent md:bg-gradient-to-r md:from-secondary/95 md:via-secondary/50 md:to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col justify-end px-4 pb-16 md:min-h-[760px] md:justify-center md:px-10 md:pb-0">
          <div className="flex max-w-2xl flex-col gap-6">
            <p className="flex w-fit animate-in fade-in slide-in-from-bottom-4 items-center gap-2 rounded-full border border-foreground bg-background/80 px-4 py-2 text-sm uppercase tracking-[0.15em] duration-700 fill-mode-both">
              <Leaf className="size-4 shrink-0 text-accent" />
              ACR Chuyapi Urusayhua · +1,750 m.s.n.m. · La Convención, Cusco
            </p>
            <h1
              id="hero-title"
              className="animate-in fade-in slide-in-from-bottom-6 text-balance text-5xl font-semibold leading-[0.95] delay-150 duration-700 fill-mode-both md:text-7xl"
            >
              Donde la altura no limita la calidad, sino que la define.
            </h1>
            <p className="max-w-xl animate-in fade-in slide-in-from-bottom-6 text-pretty text-xl leading-relaxed delay-300 duration-700 fill-mode-both">
              Café de especialidad, pasta pura de cacao al 100% y miel silvestre. Nacidos en suelos protegidos por
              el Área de Conservación Regional en Quillabamba, directo de nuestra familia agricultora a tu taza.
            </p>
            <div className="flex animate-in flex-wrap items-center gap-4 fade-in slide-in-from-bottom-6 delay-500 duration-700 fill-mode-both">
              <a href="#catalogo" className="btn-pill">
                Explorar catálogo y trazabilidad
                <ArrowRight className="size-5" />
              </a>
              <a
                href="#mayorista"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background/70 px-5 py-2.5 text-lg uppercase transition-colors hover:bg-accent"
              >
                <Store className="size-5" />
                Pedido mayorista / B2B
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute right-6 top-6 hidden size-36 animate-spin-slow items-center justify-center md:flex lg:right-12 lg:top-10"
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 100" className="size-full">
            <defs>
              <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <circle cx="50" cy="50" r="49" className="fill-primary" />
            <text className="fill-primary-foreground text-[9.5px] uppercase tracking-[0.18em]">
              <textPath href="#badge-circle">{'Sello ACR · Quillabamba · Desde 2013 · '}</textPath>
            </text>
          </svg>
          <Leaf className="absolute size-9 text-accent" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  )
}
