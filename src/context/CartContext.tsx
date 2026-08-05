import React, { createContext, useContext, useState, useCallback } from 'react'
import type { Product } from '@/lib/supabase'

type CartContextType = {
  cartItems: Product[]
  addToCart: (p: Product) => void
  clearCart: () => void
  cartOpen: boolean
  setCartOpen: (v: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = useCallback((p: Product) => {
    setCartItems(prev => [...prev, p])
    setCartOpen(true)
  }, [])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, cartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export default CartContext
