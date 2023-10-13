import { Trash2 } from 'lucide-react'
import { type ComponentProps, useContext } from 'react'

import { Button } from '~/components/button'
import { Counter } from '~/components/counter'
import { CartContext } from '~/contexts/cart'
import { useCounter } from '~/hooks/counter'
import type { Coffee } from '~/models/coffee'
import { cn } from '~/utils/classnames'
import { formatMoney } from '~/utils/formatMoney'

interface Props extends ComponentProps<'div'> {
  coffee: Coffee
}

export const CartItem = ({ className, coffee, ...props }: Props) => {
  const { increaseAmount, decreaseAmount, removeFromCart } = useContext(CartContext)
  const { counter, incrementCounter, decrementCounter } = useCounter(coffee)

  function handleIncrement() {
    incrementCounter()
    increaseAmount(coffee)
  }

  function handleDecrease() {
    decrementCounter()
    decreaseAmount(coffee)
  }

  function handleRemoveFromCart() {
    removeFromCart(coffee)
  }

  return (
    <div className={cn('flex w-full items-center gap-6', className)} {...props}>
      <img className="h-16 w-16 shrink-0 @container/cart-item" src={coffee.image} alt={coffee.name} />
      <div className="flex flex-1 flex-col justify-between gap-2">
        <div className="flex flex-col justify-between @md/cart-item:flex-row">
          <p className="text-zinc-800">
            {coffee.name}
            <span className="text-xs text-zinc-500"> (R$ {formatMoney(coffee.price)})</span>
          </p>
          <p className="text-right font-medium text-zinc-800">R$ {formatMoney(coffee.price * counter)}</p>
        </div>
        <div className="flex gap-2 @md/cart-item:mt-0">
          <Counter counter={counter} onIncrement={handleIncrement} onDecrement={handleDecrease} />
          <Button type="button" variant="secondary" icon={Trash2} onClick={handleRemoveFromCart}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}
