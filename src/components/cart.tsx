import { ShoppingCart } from 'lucide-react'
import type { ComponentProps, ElementType } from 'react'

import { cn } from '~/utils/classnames'

interface Props extends ComponentProps<'button'> {
  amount?: number
  icon?: ElementType
}

export const Cart = ({ className, amount, icon: Icon, ...props }: Props) => {
  return (
    <button
      className={cn(
        [
          'relative flex items-center justify-center rounded-md transition',
          'h-10 w-10 bg-amber-100 text-amber-500 enabled:hover:bg-amber-200/80',
        ],
        className,
      )}
      {...props}
    >
      {Icon ? <Icon className="h-6 w-6" /> : <ShoppingCart className="h-6 w-6" />}
      {!!amount && (
        <div
          className={cn(
            'absolute bg-amber-500 text-xs font-bold text-amber-50',
            '-right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full',
          )}
        >
          {amount}
        </div>
      )}
    </button>
  )
}
