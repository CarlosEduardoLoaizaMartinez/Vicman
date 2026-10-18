'use client'

import Image from 'next/image'
import { useCart } from '@/components/cart-context'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/reveal'
import { categoryLabels, products, type Category } from '@/lib/products'
import { cn } from '@/lib/utils'

const filters = Object.keys(categoryLabels) as (Category | 'todos')[]

export function FeaturedProducts() {
  const { filter, setFilter } = useCart()
  const visible = filter === 'todos' ? products : products.filter((p) => p.category === filter)

  return (
    <section id="catalogo" className="relative scroll-mt-24 py-20 md:py-28" aria-labelledby="catalogo-title">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <Reveal className="relative flex flex-col items-center gap-4 text-center">
          <p className="text-lg uppercase tracking-[0.3em] text-muted-foreground">Precios claros, sin consultar</p>
          <h2 id="catalogo-title" className="text-balance text-5xl md:text-7xl">
            Catálogo y trazabilidad
          </h2>
          <Image
            src="/Vicman/images/bean.png"
            alt=""
            width={120}
            height={120}
            className="pointer-events-none absolute -top-8 right-0 size-20 animate-float mix-blend-multiply md:right-10 md:size-28"
          />
        </Reveal>

        <Reveal delay={120}>
          <div
            className="no-scrollbar mt-10 flex justify-start gap-3 overflow-x-auto pb-2 md:justify-center"
            role="tablist"
            aria-label="Filtrar por categoría"
          >
            {filters.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={filter === key}
                onClick={() => setFilter(key)}
                className={cn(
                  'shrink-0 rounded-full border-2 border-foreground px-5 py-2 text-lg uppercase tracking-wide transition-all duration-200',
                  filter === key ? 'bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--accent)]' : 'hover:bg-secondary',
                )}
              >
                {categoryLabels[key]}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, i) => (
            <li key={product.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: `${i * 80}ms` }}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
