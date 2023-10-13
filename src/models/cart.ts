import type { Coffee } from '~/models/coffee'
import type { CheckoutData } from '~/pages/checkout/schema'

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
