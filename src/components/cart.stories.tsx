import type { Meta, StoryObj } from '@storybook/react'

import { Cart } from './cart'

const meta = {
  title: 'Components/Cart',
  component: Cart,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: false,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    amount: 3,
  },
}
