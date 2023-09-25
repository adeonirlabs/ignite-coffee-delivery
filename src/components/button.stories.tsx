import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { Settings } from 'lucide-react'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: false
    }
  }
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
    icon: Settings
  },
}

export const Icon: Story = {
  args: {
    variant: 'icon',
    icon: Settings
  },
  argTypes: {
    label: {
      control: false
    }
  }
}
