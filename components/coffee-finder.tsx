'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { Reveal } from '@/components/reveal'
import { formatPrice, products } from '@/lib/products'
import { cn } from '@/lib/utils'

const preparations = [
  { id: 'espresso', label: 'Espresso' },
  { id: 'v60', label: 'Gota a gota / V60' },
  { id: 'prensa', label: 'Prensa francesa' },
  { id: 'chocolate', label: 'Chocolate caliente' },
  { id: 'reposteria', label: 'Repostería' },
  { id: 'endulzar', label: 'Endulzar mi infusión' },
] as const

const profiles = [
  { id: 'frutal', label: 'Floral y frutal' },
  { id: 'clasico', label: 'Chocolate y nuez' },
] as const

type PrepId = (typeof preparations)[number]['id']
type ProfileId = (typeof profiles)[number]['id']

type Recommendation = {
  productId: string
  grind?: string
  variety?: string
  recipe: string
}

const coffeeGrind: Partial<Record<PrepId, string>> = {
  espresso: 'Molido Espresso',
  v60: 'Molido para Cafetera / Gota a Gota',
  prensa: 'Molido para Prensa Francesa',
}

const coffeeRecipe: Partial<Record<PrepId, string>> = {
  espresso: '18 g de café, 36 ml de bebida en 25–30 segundos a 93 °C.',
  v60: '15 g de café para 250 ml de agua a 92 °C. Pre-infusión de 30 s y vertido en espiral hasta los 3 minutos.',
  prensa: '30 g de café para 500 ml de agua a 94 °C. Reposa 4 minutos, rompe la costra y presiona suave.',
}

function recommend(prep: PrepId, profile: ProfileId): Recommendation {
  if (prep === 'chocolate') {
    return {
      productId: 'pasta-cacao-100',
      recipe: 'Ralla 25 g de pasta en 250 ml de leche caliente, añade canela y una cucharadita de miel VICMAN. Bate hasta espumar.',
    }
  }
  if (prep === 'reposteria') {
    return {
      productId: 'pasta-cacao-400',
      recipe: 'Funde a baño maría a 45 °C. Perfecta para brownies, ganache o chocolates artesanales sin aditivos.',
    }
  }
  if (prep === 'endulzar') {
    return {
      productId: 'miel-de-abeja',
      recipe: 'Agrega la miel cuando la infusión baje de 60 °C para conservar sus enzimas y aroma multifloral.',
    }
  }
  return profile === 'frutal'
    ? {
        productId: 'cafe-especial-altura',
        variety: prep === 'espresso' ? 'Bourbon' : 'Geisha',
        grind: coffeeGrind[prep],
        recipe: coffeeRecipe[prep]!,
      }
    : { productId: 'cafe-tueste-medio', grind: coffeeGrind[prep], recipe: coffeeRecipe[prep]! }
}

function Choice({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        'rounded-full border-2 border-primary-foreground px-4 py-2 text-lg transition-all duration-200',
        selected ? 'bg-accent text-primary shadow-[3px_3px_0_0_var(--primary-foreground)]' : 'hover:bg-primary-foreground/10',
      )}
    >
      {label}
    </button>
  )
}

export function CoffeeFinder() {
  const { add } = useCart()
  const [prep, setPrep] = useState<PrepId>('v60')
  const [profile, setProfile] = useState<ProfileId>('frutal')
  const isCoffee = prep in coffeeGrind

  const rec = recommend(prep, profile)
  const product = products.find((p) => p.id === rec.productId)!
  const details = [rec.variety, rec.grind].filter(Boolean) as string[]

  return (
    <section id="sommelier" className="scroll-mt-24 bg-primary text-primary-foreground" aria-labelledby="sommelier-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-10 md:py-28 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2 text-lg uppercase tracking-[0.3em] text-accent">
              <Sparkles className="size-5" /> Sommelier VICMAN
            </p>
            <h2 id="sommelier-title" className="text-balance text-5xl leading-none md:text-6xl">
              Te recomendamos grano, molienda y receta exacta
            </h2>
          </div>

          <fieldset className="flex flex-col gap-3">
            <legend className="mb-3 text-sm uppercase tracking-widest text-primary-foreground/70">
              1. ¿Qué quieres preparar?
            </legend>
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Preparación">
              {preparations.map((p) => (
                <Choice key={p.id} label={p.label} selected={prep === p.id} onClick={() => setPrep(p.id)} />
              ))}
            </div>
          </fieldset>

          <fieldset
            className={cn('flex flex-col gap-3 transition-opacity duration-300', !isCoffee && 'pointer-events-none opacity-40')}
            disabled={!isCoffee}
          >
            <legend className="mb-3 text-sm uppercase tracking-widest text-primary-foreground/70">
              2. ¿Qué perfil de taza buscas?
            </legend>
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Perfil">
              {profiles.map((p) => (
                <Choice key={p.id} label={p.label} selected={profile === p.id} onClick={() => setProfile(p.id)} />
              ))}
            </div>
          </fieldset>
        </Reveal>

        <Reveal delay={150}>
          <article
            key={`${product.id}-${prep}`}
            className="flex animate-in flex-col overflow-hidden rounded-3xl border-[1.5px] border-primary-foreground bg-background text-foreground fade-in zoom-in-95 duration-500"
            aria-live="polite"
          >
            <div className="flex items-center gap-5 border-b border-foreground bg-secondary p-5">
              <div className="blob relative size-28 shrink-0 overflow-hidden border border-foreground">
                <Image src={product.image || '/Vicman/placeholder.svg'} alt="" fill sizes="112px" className="object-cover" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm uppercase tracking-widest text-muted-foreground">Tu match ideal</p>
                <h3 className="text-balance text-2xl leading-tight md:text-3xl">{product.name}</h3>
                <p className="font-heading text-xl tabular-nums">{formatPrice(product.variants[0].price)}</p>
              </div>
            </div>
            <dl className="grid gap-4 p-6 sm:grid-cols-2">
              {rec.variety && (
                <div>
                  <dt className="text-sm uppercase tracking-widest text-muted-foreground">Variedad</dt>
                  <dd className="text-lg">{rec.variety}</dd>
                </div>
              )}
              <div>
                <dt className="text-sm uppercase tracking-widest text-muted-foreground">Molienda</dt>
                <dd className="text-lg">{rec.grind ?? 'No aplica'}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm uppercase tracking-widest text-muted-foreground">Receta</dt>
                <dd className="text-pretty text-lg leading-relaxed">{rec.recipe}</dd>
              </div>
            </dl>
            <div className="px-6 pb-6">
              <button type="button" className="btn-pill" onClick={() => add(product, 0, details)}>
                Añadir recomendación al pedido
              </button>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
