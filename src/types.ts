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
  addToCart: (coffee: Coffee) => void
  removeFromCart: (coffee: Coffee) => void
  increaseAmount: (coffee: Coffee) => void
  decreaseAmount: (coffee: Coffee) => void
}
