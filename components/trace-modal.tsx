'use client'

import { useEffect } from 'react'
import { CalendarDays, Droplets, MapPin, Mountain, QrCode, X } from 'lucide-react'
import type { Product, SensoryProfile } from '@/lib/products'

const axes: { key: keyof SensoryProfile; label: string }[] = [
  { key: 'aroma', label: 'Aroma' },
  { key: 'acidez', label: 'Acidez' },
  { key: 'cuerpo', label: 'Cuerpo' },
  { key: 'dulzor', label: 'Dulzor' },
  { key: 'final', label: 'Final' },
  { key: 'balance', label: 'Balance' },
]

const SIZE = 260
const CENTER = SIZE / 2
const RADIUS = 92

function point(index: number, value: number) {
  const angle = (Math.PI * 2 * index) / axes.length - Math.PI / 2
  const r = (value / 10) * RADIUS
  return [CENTER + r * Math.cos(angle), CENTER + r * Math.sin(angle)] as const
}

function RadarChart({ profile }: { profile: SensoryProfile }) {
  const polygon = axes.map((axis, i) => point(i, profile[axis.key]).join(',')).join(' ')

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="w-full max-w-72"
      role="img"
      aria-label={`Perfil sensorial: ${axes.map((a) => `${a.label} ${profile[a.key]}`).join(', ')}`}
    >
      {[2.5, 5, 7.5, 10].map((ring) => (
        <polygon
          key={ring}
          points={axes.map((_, i) => point(i, ring).join(',')).join(' ')}
          className="fill-none stroke-foreground/20"
          strokeWidth={1}
        />
      ))}
      {axes.map((axis, i) => {
        const [x, y] = point(i, 10)
        const [lx, ly] = point(i, 12.4)
        return (
          <g key={axis.key}>
            <line x1={CENTER} y1={CENTER} x2={x} y2={y} className="stroke-foreground/20" />
            <text
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-[11px] uppercase tracking-wider"
            >
              {axis.label}
            </text>
          </g>
        )
      })}
      <polygon
        points={polygon}
        className="origin-center animate-in zoom-in-50 fill-accent/40 stroke-accent duration-700"
        strokeWidth={2}
      />
      {axes.map((axis, i) => {
        const [x, y] = point(i, profile[axis.key])
        return <circle key={axis.key} cx={x} cy={y} r={3.5} className="fill-primary" />
      })}
    </svg>
  )
}

export function TraceModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const { trace } = product

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const facts = [
    { icon: Mountain, label: 'Altitud de la finca', value: trace.altitud },
    { icon: MapPin, label: 'Finca de origen', value: trace.finca },
    { icon: Droplets, label: 'Proceso', value: trace.proceso },
    { icon: CalendarDays, label: 'Fecha de tueste / envasado', value: trace.fechaLabel },
  ]

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center md:items-center md:p-6">
      <div className="absolute inset-0 animate-in fade-in bg-primary/60" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="trace-title"
        className="relative flex max-h-[92vh] w-full max-w-4xl animate-in slide-in-from-bottom-8 flex-col overflow-hidden rounded-t-3xl border-[1.5px] border-foreground bg-background text-left duration-500 md:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-foreground bg-primary px-6 py-5 text-primary-foreground">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground text-primary">
              <QrCode className="size-7" strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-accent">Certificado digital de trazabilidad ACR</p>
              <h2 id="trace-title" className="text-balance text-2xl md:text-3xl">
                {product.name}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar trazabilidad"
            className="rounded-full p-2 transition-colors hover:bg-primary-foreground/10"
          >
            <X className="size-6" strokeWidth={1.25} />
          </button>
        </div>

        <div className="grid flex-1 gap-0 overflow-y-auto md:grid-cols-2">
          <div className="flex flex-col gap-5 border-foreground p-6 md:border-r">
            <div className="flex items-center justify-between rounded-2xl border border-foreground bg-secondary px-4 py-3">
              <span className="text-sm uppercase tracking-widest">Lote</span>
              <span className="font-heading text-xl tabular-nums">{trace.lote}</span>
            </div>
            <dl className="flex flex-col gap-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} />
                  <div>
                    <dt className="text-sm uppercase tracking-widest text-muted-foreground">{label}</dt>
                    <dd className="text-lg leading-snug">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <div className="overflow-hidden rounded-2xl border border-foreground">
              <iframe
                title="Mapa de Quillabamba y el ACR Chuyapi Urusayhua"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-72.82%2C-12.96%2C-72.56%2C-12.76&layer=mapnik&marker=-12.8636%2C-72.6918"
                className="h-48 w-full"
                loading="lazy"
              />
              <p className="border-t border-foreground bg-secondary px-4 py-2 text-sm">
                Quillabamba · La Convención · Cusco — entorno del ACR Chuyapi Urusayhua
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-6">
            <h3 className="self-start text-2xl">Perfil sensorial</h3>
            <RadarChart profile={trace.perfil} />
            <ul className="grid w-full grid-cols-3 gap-2">
              {axes.map((axis) => (
                <li
                  key={axis.key}
                  className="flex flex-col items-center rounded-xl border border-foreground/30 py-2"
                >
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{axis.label}</span>
                  <span className="font-heading text-xl tabular-nums">{trace.perfil[axis.key].toFixed(1)}</span>
                </li>
              ))}
            </ul>
            <p className="text-pretty text-center text-base italic leading-relaxed text-muted-foreground">
              {'“'}
              {product.slogan}
              {'”'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
