'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { scrollTrack } from '@/components/carousel-controls'

const reviews = [
  {
    quote: 'El Geisha en V60 tiene una acidez brillante y notas a jazmín. Se nota la altura en cada taza.',
    author: 'Lucía Huamán',
    product: 'Café Especial de Altura · Geisha',
    image: '/images/agv-cafe-especial.png',
  },
  {
    quote: 'Por fin un café de Quillabamba con trazabilidad real. Lo servimos en nuestra cafetería de San Blas.',
    author: 'Café Qosqo E.I.R.L.',
    product: 'Café con Tueste Medio · 1 kg',
    image: '/images/agv-cafe-tueste.png',
  },
  {
    quote: 'La pasta de cacao es pura de verdad. Mis chocolates artesanales cambiaron por completo.',
    author: 'Rosa Quispe',
    product: 'Pasta Pura de Cacao 400 g',
    image: '/images/agv-cacao-400.png',
  },
  {
    quote: 'Miel con aroma a flores del monte. Mis hijos ya no quieren otra.',
    author: 'Jorge Álvarez',
    product: 'Miel de Abeja Pura · 1 kg',
    image: '/images/agv-miel.png',
  },
  {
    quote: 'Hice el pedido por WhatsApp en un minuto, con precio y molienda claros. Llegó al día siguiente.',
    author: 'Andrea Gamarra',
    product: 'Café Especial de Altura · Bourbon',
    image: '/images/agv-cafe-especial.png',
  },
]

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null)

  return (
    <section className="bg-secondary py-20 md:py-24" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <div className="flex gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 id="reviews-title" className="text-4xl md:text-6xl">
            Lo que dicen de VICMAN
          </h2>
          <p className="text-lg text-muted-foreground">Familias, cafeterías y reposteros de Cusco y todo el Perú</p>
        </Reveal>

        <div className="relative mt-12">
          <button
            type="button"
            onClick={() => scrollTrack(trackRef.current, -1)}
            aria-label="Reseñas anteriores"
            className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 p-2 md:block lg:-left-10"
          >
            <ChevronLeft className="size-8" strokeWidth={1.25} />
          </button>
          <ul ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2">
            {reviews.map((review) => (
              <li key={review.author} className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[calc(25%-0.95rem)]">
                <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-foreground bg-background transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] border-b border-foreground">
                    <Image src={review.image || '/placeholder.svg'} alt="" fill sizes="300px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-3 p-5 text-center">
                    <blockquote className="text-pretty text-lg leading-snug">
                      {'“'}
                      {review.quote}
                      {'”'}
                    </blockquote>
                    <div className="mt-auto flex gap-0.5" aria-label="5 de 5 estrellas">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-5 fill-foreground" aria-hidden="true" />
                      ))}
                    </div>
                    <figcaption className="flex flex-col items-center gap-1">
                      <span className="font-bold">{review.author}</span>
                      <span className="text-sm text-muted-foreground">{review.product}</span>
                    </figcaption>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => scrollTrack(trackRef.current, 1)}
            aria-label="Reseñas siguientes"
            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 p-2 md:block lg:-right-10"
          >
            <ChevronRight className="size-8" strokeWidth={1.25} />
          </button>
        </div>
      </div>
    </section>
  )
}
