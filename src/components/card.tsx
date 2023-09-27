import { ShoppingCart } from 'lucide-react'
import type { ComponentProps } from 'react'

import { Button } from '~/components/button'
import { Counter } from '~/components/counter'
import { cn } from '~/utils/classnames'

interface Props extends ComponentProps<'div'> {
  name: string
  description: string
  price: string
  tags: string[]
  image: string
}

export const Card = ({ className, name, description, price, tags, image, ...props }: Props) => {
  return (
    <article
      className={cn(
        'relative flex h-full px-6 pb-5 pt-4',
        'before:absolute before:inset-x-0 before:bottom-0 before:top-5',
        'before:rounded-ee-md before:rounded-es-4xl before:rounded-se-4xl before:rounded-ss-md before:bg-zinc-100',
        className,
      )}
      {...props}
    >
      <div className="relative z-10 -mt-5 flex flex-1 flex-col @container">
        <header className="flex flex-col items-center">
          <img className="h-28 w-28" src={image} alt={name} />
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1">
            {tags.map((tag) => (
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
          <p className="mt-4 text-center font-alt text-xl font-black text-zinc-800">{name}</p>
          <p className="mt-2 text-center text-sm text-zinc-500">{description}</p>
        </main>

        <footer className="mt-auto flex w-full flex-col items-center justify-between gap-2 @2xs:flex-row">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-medium text-zinc-800">R$</span>
            <span className="font-alt text-2xl font-bold text-zinc-800">{price}</span>
          </div>
          <div className="flex items-center gap-2">
            <Counter className="h-10" />
            <Button variant="icon" icon={ShoppingCart} />
          </div>
        </footer>
      </div>
    </article>
  )
}
