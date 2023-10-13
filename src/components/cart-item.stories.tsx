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
      id: '1b285672-ad64-4ce4-bb22-39883971d2f2',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 990,
      tags: ['Tradicional'],
      image: '/assets/american.png',
      amount: 1,
    },
  },
}
