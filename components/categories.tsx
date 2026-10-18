'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { Reveal } from '@/components/reveal'
import type { Category } from '@/lib/products'

const categories: { id: Category; title: string; text: string; image: string }[] = [
  {
    id: 'cafe',
    title: 'Café de Especialidad',
    text: 'Geisha, Bourbon y blend Típica & Catimor. En grano o molido a tu medida.',
    image: '/images/agv-cafe-especial.png',
  },
  {
    id: 'cacao',
    title: 'Cacao y Derivados',
    text: 'Pasta pura 100% cacao de La Convención. Sin azúcar, sin aditivos.',
    image: '/images/agv-cacao-400.png',
  },
  {
    id: 'miel',
    title: 'Miel de Abeja',
    text: 'Multifloral y silvestre, recolectada de forma sostenible en el bosque.',
    image: '/images/agv-miel.png',
  },
]

export function Categories() {
  const { setFilter } = useCart()

  return (
    <section id="productos" className="scroll-mt-24 py-20 md:py-28" aria-labelledby="categorias-title">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <h2 id="categorias-title" className="text-balance text-5xl md:text-7xl">
            Tres tesoros de un mismo bosque
          </h2>
          <p className="max-w-xl text-pretty text-xl leading-relaxed text-muted-foreground">
            Todo nace en Quillabamba, en el entorno protegido del ACR Chuyapi Urusayhua.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {categories.map((category, i) => (
            <li key={category.id}>
              <Reveal delay={i * 120}>
                <a
                  href="#catalogo"
                  onClick={() => setFilter(category.id)}
                  className="group flex flex-col items-center gap-5 text-center"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full border-[1.5px] border-foreground bg-secondary">
                    <Image
                      src={category.image || '/placeholder.svg'}
                      alt={category.title}
                      fill
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute bottom-4 right-4 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="size-6" />
                    </span>
                  </div>
                  <h3 className="text-3xl">{category.title}</h3>
                  <p className="max-w-xs text-pretty text-lg leading-relaxed text-muted-foreground">{category.text}</p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
