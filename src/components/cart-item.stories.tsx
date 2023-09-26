import type { Meta, StoryObj } from '@storybook/react'

import expresso from '~/assets/expresso.png'

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
    name: 'Expresso Tradicional',
    price: '9,90',
    image: expresso,
  },
}
