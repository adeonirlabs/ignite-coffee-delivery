import { ShoppingCart } from 'phosphor-react'
import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { cn } from '~/utils/classnames'

const cart = tv({
  slots: {
    button: [
      'inline-flex items-center justify-center rounded-md transition relative',
      'h-10 w-10 bg-coffee-100 p-2 text-coffee-500 enabled:hover:bg-coffee-200/80',
    ],
    badge: [
      'absolute bg-coffee-500 text-xs font-bold text-coffee-50',
      'rounded-full h-5 w-5 flex items-center justify-center -top-2 -right-2',
    ],
  },
})

interface Props extends ComponentProps<'button'>, VariantProps<typeof cart> {
  count?: number
}

export function CartButton({ className, count, ...props }: Props) {
  const { button, badge } = cart()

  return (
    <button className={cn(button({ className }))} {...props}>
      <ShoppingCart size={24} weight="fill" />
      <div className={badge()}>{count}</div>
    </button>
  )
}
