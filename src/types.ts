import type { CheckoutData } from './pages/checkout/schema'

export interface Coffee {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  image: string
  amount: number
}

export interface CartItems extends Coffee {}

export interface CartContextProps {
  cartItems: CartItems[]
  checkoutData: CheckoutData
  addToCart: (coffee: Coffee) => void
  removeFromCart: (coffee: Coffee) => void
  resetCart: () => void
  increaseAmount: (coffee: Coffee) => void
  decreaseAmount: (coffee: Coffee) => void
  submitCheckout: (data: CheckoutData) => void
}
