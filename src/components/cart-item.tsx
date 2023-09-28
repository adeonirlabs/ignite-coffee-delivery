import { Trash2 } from 'lucide-react'
import type { ComponentProps } from 'react'

import type { Coffee } from '~/types'
import { cn } from '~/utils/classnames'

import { Button } from './button'
import { Counter } from './counter'

interface Props extends Coffee, ComponentProps<'div'> {}

export const CartItem = ({ className, name, price, image, ...props }: Props) => {
  return (
    <div className={cn('flex w-full items-center gap-6 @container', className)} {...props}>
      <img className="h-16 w-16" src={image} alt={name} />
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col justify-between @md:flex-row">
          <p className="text-zinc-800">{name}</p>
          <p className="font-bold text-zinc-800">R$ {price}</p>
        </div>
        <div className="mt-2 flex gap-2 @md:mt-0">
          <Counter />
          <Button variant="secondary" label="Remove" icon={Trash2} />
        </div>
      </div>
    </div>
  )
}
