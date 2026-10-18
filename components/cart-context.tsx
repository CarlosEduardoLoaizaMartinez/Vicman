'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { Category, Product } from '@/lib/products'

export type CartItem = {
  key: string
  product: Product
  variantIndex: number
  details: string[]
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  isOpen: boolean
  setOpen: (open: boolean) => void
  add: (product: Product, variantIndex: number, details?: string[]) => void
  updateQuantity: (key: string, quantity: number) => void
  remove: (key: string) => void
  filter: Category | 'todos'
  setFilter: (filter: Category | 'todos') => void
}

const CartContext = createContext<CartContextValue | null>(null)

const MAX_QUANTITY = 20

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setOpen] = useState(false)
  const [filter, setFilter] = useState<Category | 'todos'>('todos')

  const add = useCallback((product: Product, variantIndex: number, details: string[] = []) => {
    const key = [product.id, variantIndex, ...details].join('|')
    setItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: Math.min(item.quantity + 1, MAX_QUANTITY) } : item,
        )
      }
      return [...current, { key, product, variantIndex, details, quantity: 1 }]
    })
    setOpen(true)
  }, [])

  const updateQuantity = useCallback((key: string, quantity: number) => {
    setItems((current) =>
      quantity <= 0
        ? current.filter((item) => item.key !== key)
        : current.map((item) =>
            item.key === key ? { ...item, quantity: Math.min(quantity, MAX_QUANTITY) } : item,
          ),
    )
  }, [])

  const remove = useCallback((key: string) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }, [])

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.variants[item.variantIndex].price * item.quantity,
      0,
    )
    return { items, count, subtotal, isOpen, setOpen, add, updateQuantity, remove, filter, setFilter }
  }, [items, isOpen, add, updateQuantity, remove, filter])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
