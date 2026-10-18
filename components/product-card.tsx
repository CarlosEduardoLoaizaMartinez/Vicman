'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, QrCode } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { TraceModal } from '@/components/trace-modal'
import { formatPrice, grindOptions, type Product } from '@/lib/products'
import { cn } from '@/lib/utils'

function OptionGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: readonly string[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="flex flex-wrap justify-center gap-2" role="radiogroup" aria-label={label}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={option === value}
            onClick={() => onChange(option)}
            className={cn(
              'rounded-full border-2 border-foreground px-3 py-1 text-base transition-colors',
              option === value ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary',
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const [variantIndex, setVariantIndex] = useState(0)
  const [variety, setVariety] = useState(product.varieties?.[0] ?? '')
  const [grind, setGrind] = useState<string>(grindOptions[0])
  const [added, setAdded] = useState(false)
  const [traceOpen, setTraceOpen] = useState(false)
  const variant = product.variants[variantIndex]

  const handleAdd = () => {
    const details = [variety, product.grindable ? grind : ''].filter(Boolean)
    add(product, variantIndex, details)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  return (
    <article className="group flex h-full flex-col items-center text-center">
      <div className="relative w-full">
        <div className="blob relative aspect-square w-full overflow-hidden border-[1.5px] border-foreground bg-background">
          <Image
            src={product.image || '/Vicman/placeholder.svg'}
            alt={`${product.name} AgroVicman`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:-rotate-2 group-hover:scale-110"
          />
        </div>
        {product.badge && (
          <span className="absolute left-0 top-4 rounded-r-full bg-primary py-2 pl-4 pr-6 text-sm font-bold text-primary-foreground md:-left-2">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => setTraceOpen(true)}
          className="absolute bottom-3 right-2 flex items-center gap-1.5 rounded-full border border-foreground bg-background px-3 py-1.5 text-sm uppercase tracking-wider transition-colors hover:bg-accent"
        >
          <QrCode className="size-4" />
          Ver trazabilidad ACR
        </button>
      </div>

      <h3 className="mt-6 text-pretty text-2xl leading-tight">{product.name}</h3>
      <p className="mt-1 text-pretty text-base italic text-muted-foreground">{product.slogan}</p>

      <ul className="mt-3 flex flex-wrap justify-center gap-1.5">
        {product.attributes.map((attribute) => (
          <li key={attribute} className="rounded-md bg-secondary px-2 py-0.5 text-sm">
            {attribute}
          </li>
        ))}
      </ul>

      <p key={variant.price} className="mt-4 animate-in fade-in font-heading text-3xl tabular-nums">
        {formatPrice(variant.price)}
      </p>

      <div className="mt-4 flex w-full flex-col gap-4">
        {product.variants.length > 1 && (
          <OptionGroup
            label="Presentación"
            options={product.variants.map((v) => v.label)}
            value={variant.label}
            onChange={(label) => setVariantIndex(product.variants.findIndex((v) => v.label === label))}
          />
        )}
        {product.varieties && (
          <OptionGroup label="Variedad" options={product.varieties} value={variety} onChange={setVariety} />
        )}
        {product.grindable && (
          <div className="flex flex-col items-center gap-2">
            <label
              htmlFor={`grind-${product.id}`}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              Molienda
            </label>
            <select
              id={`grind-${product.id}`}
              value={grind}
              onChange={(e) => setGrind(e.target.value)}
              className="w-full max-w-72 cursor-pointer rounded-full border-2 border-foreground bg-background px-4 py-2 text-base"
            >
              {grindOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="mt-auto pt-6">
        <button type="button" onClick={handleAdd} className="btn-pill" aria-live="polite">
          {added ? (
            <>
              <Check className="size-5" /> Añadido
            </>
          ) : (
            'Añadir al pedido'
          )}
        </button>
      </div>

      {traceOpen && <TraceModal product={product} onClose={() => setTraceOpen(false)} />}
    </article>
  )
}
