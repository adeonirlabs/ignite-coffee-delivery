import { Trash2 } from 'lucide-react'
import type { ComponentProps } from 'react'

import { cn } from '~/utils/classnames'

import { Button } from './button'
import { Counter } from './counter'

interface Props extends ComponentProps<'div'> {
  name: string
  price: string
  image: {
    src: string
    alt: string
  }
}

export const CartItem = ({ className, name, price, image, ...props }: Props) => {
  return (
    <div className={cn('min-w-88 flex w-full gap-6', className)} {...props}>
      <img className="h-16 w-16" src={image.src} alt={image.alt} />
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <p className="text-zinc-700">{name}</p>
          <p className="font-bold text-zinc-700">R$ {price}</p>
        </div>
        <div className="flex gap-2">
          <Counter />
          <Button variant="secondary" label="Remove" icon={Trash2} />
        </div>
      </div>
    </div>
  )
}
