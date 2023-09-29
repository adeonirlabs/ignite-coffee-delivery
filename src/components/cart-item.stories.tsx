import type { Meta, StoryObj } from '@storybook/react'

import { CartItem } from './cart-item'

const meta = {
  title: 'Components/Cart Item',
  component: CartItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    coffee: {
      id: 1,
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 990,
      tags: ['Tradicional'],
      image: 'src/assets/american.png',
      amount: 1,
    },
  },
}
