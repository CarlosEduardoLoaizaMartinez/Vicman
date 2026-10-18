'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Catálogo',
    links: [
      { label: 'Café de Especialidad', href: '#catalogo' },
      { label: 'Cacao y Derivados', href: '#catalogo' },
      { label: 'Miel de Abeja', href: '#catalogo' },
      { label: 'Sommelier VICMAN', href: '#sommelier' },
    ],
  },
  {
    title: 'AgroVicman',
    links: [
      { label: 'Sello ACR', href: '#sello-acr' },
      { label: 'Sobre nosotros', href: '#nosotros' },
      { label: 'Pedido mayorista / B2B', href: '#mayorista' },
      { label: 'Libro de reclamaciones', href: '#contacto' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: '+51 984 603 363', href: 'https://wa.me/51984603363' },
      { label: '+51 961 184 496', href: 'https://wa.me/51961184496' },
      { label: 'agrovicman@gmail.com', href: 'mailto:agrovicman@gmail.com' },
      { label: 'San Jerónimo, Cusco', href: '#contacto' },
    ],
  },
]

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="wave-line wave-line-light" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo className="items-start" />
            <h2 className="text-balance text-4xl">Recibe la fecha de cada nuevo lote de cosecha ACR</h2>
            {subscribed ? (
              <p className="flex items-center gap-2 text-lg text-accent" role="status">
                <Check className="size-5" /> ¡Listo! Revisa tu correo.
              </p>
            ) : (
              <form
                className="flex max-w-md items-center rounded-full border-2 border-primary-foreground p-1"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubscribed(true)
                }}
              >
                <label htmlFor="newsletter" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  className="min-w-0 flex-1 bg-transparent px-4 text-lg outline-none placeholder:text-primary-foreground/50"
                />
                <button
                  type="submit"
                  aria-label="Suscribirme"
                  className="flex size-11 items-center justify-center rounded-full bg-accent text-primary transition-transform hover:scale-105"
                >
                  <ArrowRight className="size-5" />
                </button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3 className="mb-4 font-sans text-lg uppercase tracking-widest text-accent">{column.title}</h3>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-base transition-colors hover:text-accent">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-primary-foreground/20 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-primary-foreground/70">
            © 2026 Agropecuaria Víctor Manuel E.I.R.L. (AGROVICMAN E.I.R.L.) · RUC 20564031837 · Quillabamba,
            Cusco
          </p>
          <div className="flex gap-3">
            {['Instagram', 'Facebook', 'TikTok'].map((label) => (
              <a
                key={label}
                href="#"
                className="rounded-full border border-primary-foreground/40 px-4 py-2 text-sm uppercase tracking-widest transition-colors hover:border-accent hover:bg-accent hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
