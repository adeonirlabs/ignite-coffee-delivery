import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    coffee: {
      image: {
        control: false,
      },
      tags: {
        control: false,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

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
