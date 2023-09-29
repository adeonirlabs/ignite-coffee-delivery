import { ShoppingCart } from 'lucide-react'
import { useContext } from 'react'

import { Button } from '~/components/button'
import { Counter } from '~/components/counter'
import { CartContext } from '~/contexts/cart'
import { useCounter } from '~/hooks/counter'
import type { Coffee } from '~/types'
import { cn } from '~/utils/classnames'
import { formatMoney } from '~/utils/formatMoney'

interface Props {
  className?: string
  coffee: Coffee
}

export const Card = ({ className, coffee }: Props) => {
  const { addToCart } = useContext(CartContext)
  const { counter, incrementCounter, decrementCounter } = useCounter(coffee)

  function handleIncrement() {
    incrementCounter()
  }

  function handleDecrement() {
    decrementCounter()
  }

  function handleAddToCart() {
    addToCart({ ...coffee, amount: counter })
  }

  return (
    <article
      className={cn(
        'relative flex h-full px-6 pb-5 pt-4',
        'before:absolute before:inset-x-0 before:bottom-0 before:top-5',
        'before:rounded-ee-md before:rounded-es-4xl before:rounded-se-4xl before:rounded-ss-md before:bg-zinc-100',
        className,
      )}
    >
      <div className="relative z-10 -mt-5 flex flex-1 flex-col">
        <header className="flex flex-col items-center">
          <img className="h-28 w-28" src={coffee.image} alt={coffee.name} />
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1">
            {coffee.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-amber-100 px-2 py-1 text-center text-xs font-medium uppercase text-amber-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <main className="mb-8">
          <p className="mt-4 text-center font-alt text-xl font-black text-zinc-800">{coffee.name}</p>
          <p className="mt-2 text-center text-sm text-zinc-500">{coffee.description}</p>
        </main>

        <div className="mt-auto @container/card">
          <footer className="flex w-full flex-col items-center justify-between gap-2 @2xs/card:flex-row">
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-medium text-zinc-800">R$</span>
              <span className="font-alt text-2xl font-bold text-zinc-800">{formatMoney(coffee.price)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Counter className="h-10" counter={counter} onIncrement={handleIncrement} onDecrement={handleDecrement} />
              <Button type="button" variant="icon" icon={ShoppingCart} onClick={handleAddToCart} />
            </div>
          </footer>
        </div>
      </div>
    </article>
  )
}
