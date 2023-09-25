import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './select';
import { Banknote, CreditCard } from 'lucide-react'

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      control: false
    }
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-96 grid grid-cols-2 items-center gap-4">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Select>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: '',
    value: '',
  },
  render: () => (
    <>
      <Select value='Credit card' name='select' icon={CreditCard}   />
      <Select value='Cash' name='select' icon={Banknote} />
    </>
  )
}
