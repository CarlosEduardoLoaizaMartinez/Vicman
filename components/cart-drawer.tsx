'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart, type CartItem } from '@/components/cart-context'
import { formatPrice, whatsappLink } from '@/lib/products'
import { cn } from '@/lib/utils'

const FREE_SHIPPING_THRESHOLD = 120

function buildOrderMessage(items: CartItem[], subtotal: number) {
  const lines = items.map((item) => {
    const variant = item.product.variants[item.variantIndex]
    const options = [variant.label, ...item.details].join(' · ')
    return `• ${item.quantity} x ${item.product.name} (${options}) — ${formatPrice(variant.price * item.quantity)}`
  })
  return [
    '¡Hola AgroVicman! Quiero hacer este pedido:',
    '',
    ...lines,
    '',
    `Total: ${formatPrice(subtotal)}`,
    '',
    'Nombre:',
    'Ciudad / dirección de entrega:',
  ].join('\n')
}

export function CartDrawer() {
  const { items, isOpen, setOpen, subtotal, updateQuantity, remove } = useCart()
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0)
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, setOpen])

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-50 bg-primary/40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Tu pedido"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-foreground bg-background transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-foreground px-6 py-5">
          <h2 className="text-3xl">Tu pedido</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar pedido"
            className="rounded-full p-2 transition-colors hover:bg-secondary"
          >
            <X className="size-6" strokeWidth={1.25} />
          </button>
        </div>

        <div className="border-b border-foreground bg-secondary px-6 py-4">
          <p className="text-base">
            {remaining > 0 ? (
              <>
                {'Te faltan '}
                <strong>{formatPrice(remaining)}</strong>
                {' para el envío gratis en Cusco'}
              </>
            ) : (
              <strong>{'¡Tienes envío gratis en Cusco!'}</strong>
            )}
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-background">
            <div
              className="h-full rounded-full bg-accent transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="size-12" strokeWidth={1} />
            <p className="text-xl">Tu pedido está vacío</p>
            <button type="button" className="btn-pill" onClick={() => setOpen(false)}>
              Seguir comprando
            </button>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto px-6">
            {items.map((item) => {
              const variant = item.product.variants[item.variantIndex]
              return (
                <li key={item.key} className="flex gap-4 border-b border-foreground/20 py-5">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-full border border-foreground bg-background">
                    <Image
                      src={item.product.image || '/placeholder.svg'}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <p className="text-base font-bold leading-snug">{item.product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {[variant.label, ...item.details].join(' · ')}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-foreground">
                        <button
                          type="button"
                          aria-label="Disminuir cantidad"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-2"
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="w-6 text-center tabular-nums" aria-live="polite">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Aumentar cantidad"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-2"
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                      <span className="font-bold tabular-nums">
                        {formatPrice(variant.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Eliminar ${item.product.name}`}
                    onClick={() => remove(item.key)}
                    className="self-start p-1 text-muted-foreground transition-colors hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        {items.length > 0 && (
          <div className="flex flex-col gap-4 border-t border-foreground px-6 py-6">
            <div className="flex items-center justify-between text-xl">
              <span>Subtotal</span>
              <span className="font-bold tabular-nums">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Tu pedido se envía armado por WhatsApp. Coordinamos pago y entrega contigo.
            </p>
            <a
              href={whatsappLink(buildOrderMessage(items, subtotal))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill w-full"
            >
              <MessageCircle className="size-5" />
              Enviar pedido por WhatsApp
            </a>
          </div>
        )}
      </aside>
    </>
  )
}
