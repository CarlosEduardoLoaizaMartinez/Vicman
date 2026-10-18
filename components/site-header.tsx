'use client'

import { useEffect, useState } from 'react'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { useCart } from '@/components/cart-context'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Sello ACR', href: '#sello-acr' },
  { label: 'Sommelier VICMAN', href: '#sommelier' },
  { label: 'Pedido mayorista', href: '#mayorista' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export function SiteHeader() {
  const { count, setOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 border-b border-foreground bg-background/95 backdrop-blur transition-all duration-300',
          scrolled ? 'py-2' : 'py-4',
        )}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 md:px-10">
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              className="-ml-2 rounded-full p-2 transition-colors hover:bg-secondary"
            >
              <Menu className="size-7" strokeWidth={1.25} />
            </button>
            <nav aria-label="Principal" className="hidden lg:block">
              <ul className="flex gap-6 text-base uppercase tracking-wide">
                <li>
                  <a href="#catalogo" className="hover:underline hover:underline-offset-4">
                    Catálogo
                  </a>
                </li>
                <li>
                  <a href="#sello-acr" className="hover:underline hover:underline-offset-4">
                    Sello ACR
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <a href="#" aria-label="AgroVicman, inicio" className="justify-self-center">
            <Logo className={cn('transition-transform duration-300', scrolled && 'scale-90')} />
          </a>

          <div className="flex items-center justify-end gap-1 md:gap-3">
            <button
              type="button"
              aria-label="Mi cuenta"
              className="hidden rounded-full p-2 transition-colors hover:bg-secondary sm:inline-flex"
            >
              <User className="size-6" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              aria-label="Buscar"
              className="rounded-full p-2 transition-colors hover:bg-secondary"
            >
              <Search className="size-6" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`Abrir pedido, ${count} productos`}
              className="relative rounded-full p-2 transition-colors hover:bg-secondary"
            >
              <ShoppingBag className="size-6" strokeWidth={1.25} />
              {count > 0 && (
                <span
                  key={count}
                  className="absolute -right-0.5 -top-0.5 flex size-5 animate-in zoom-in items-center justify-center rounded-full bg-accent text-xs font-bold text-primary"
                >
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-primary/40 transition-opacity duration-300',
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-full max-w-md flex-col bg-primary text-primary-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          menuOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-label="Menú"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="flex items-center justify-between p-6">
          <Logo />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            className="rounded-full p-2 transition-colors hover:bg-primary-foreground/10"
          >
            <X className="size-7" strokeWidth={1.25} />
          </button>
        </div>
        <nav aria-label="Menú móvil" className="flex-1 px-6 pt-6">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={cn(
                  'transition-all duration-500',
                  menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0',
                )}
                style={{ transitionDelay: menuOpen ? `${120 + i * 60}ms` : '0ms' }}
              >
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-primary-foreground/20 py-4 font-heading text-3xl transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="wave-line wave-line-light" aria-hidden="true" />
        <p className="p-6 text-sm uppercase tracking-widest text-primary-foreground/70">
          Café · Cacao · Miel · Quillabamba, Cusco
        </p>
      </aside>
    </>
  )
}
