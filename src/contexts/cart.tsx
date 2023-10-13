import type { ReactNode } from 'react'
import { createContext, useState } from 'react'

import type { CartContextProps, CartItems } from '~/models/cart'
import type { Coffee } from '~/models/coffee'
import type { CheckoutData } from '~/pages/checkout/schema'

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItems[]>([])
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({} as CheckoutData)

  function addToCart(coffee: Coffee) {
    const alreadyInCart = cartItems.find((item) => item.id === coffee.id)

    if (alreadyInCart) {
      setCartItems(
        cartItems.map((item) => (item.id === coffee.id ? { ...item, amount: item.amount + coffee.amount } : item)),
      )
    } else {
      setCartItems([...cartItems, coffee])
    }
  }

  function removeFromCart(coffee: Coffee) {
    setCartItems(cartItems.filter((item) => item.id !== coffee.id))
  }

  function resetCart() {
    setCartItems([])
  }

  function increaseAmount(coffee: Coffee) {
    if (coffee.amount < 10) {
      setCartItems(cartItems.map((item) => (item.id === coffee.id ? { ...item, amount: item.amount + 1 } : item)))
    }
  }

  function decreaseAmount(coffee: Coffee) {
    if (coffee.amount > 1) {
      setCartItems(cartItems.map((item) => (item.id === coffee.id ? { ...item, amount: item.amount - 1 } : item)))
    }
  }

  function submitCheckout(data: CheckoutData) {
    setCheckoutData(data)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        checkoutData,
        addToCart,
        removeFromCart,
        resetCart,
        increaseAmount,
        decreaseAmount,
        submitCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
