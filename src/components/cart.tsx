import { ShoppingCart } from 'lucide-react'
import type { ComponentProps, ElementType } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { cn } from '~/utils/classnames'

const cart = tv({
  slots: {
    button: [
      'inline-flex items-center justify-center rounded-md transition relative',
      'h-10 w-10 bg-amber-100 p-2 text-amber-500 enabled:hover:bg-amber-200/80',
    ],
    badge: [
      'absolute bg-amber-500 text-xs font-bold text-amber-50',
      'rounded-full h-5 w-5 flex items-center justify-center -top-2 -right-2',
    ],
  },
})

interface Props extends ComponentProps<'button'>, VariantProps<typeof cart> {
  counter?: number
  icon?: ElementType
}

export function Cart({ className, counter, icon: Icon, ...props }: Props) {
  const { button, badge } = cart()

  return (
    <button className={cn(button({ className }))} {...props}>
      {Icon ? <Icon className="h-6 w-6" /> : <ShoppingCart className="h-6 w-6" />}
      {counter && <div className={badge()}>{counter}</div>}
    </button>
  )
}
