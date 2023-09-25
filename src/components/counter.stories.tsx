import type { Meta, StoryObj } from '@storybook/react'

import { Counter } from './counter'

const meta = {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      control: false,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
