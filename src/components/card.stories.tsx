import type { Meta, StoryObj } from '@storybook/react'

import expresso from '~/assets/expresso.png'

import { Card } from './card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    image: {
      control: false,
    },
    tags: {
      control: false,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    image: expresso,
    tags: ['gelado', 'tradicional'],
  },
}
