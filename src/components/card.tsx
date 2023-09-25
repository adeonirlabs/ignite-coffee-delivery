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
  image: {
    src: string
    alt: string
  }
}

export const Card = ({ className, name, description, price, tags, image, ...props }: Props) => {
  return (
    <article
      className={cn(
        'relative h-full w-64 px-6 pb-5 pt-4',
        'before:absolute before:inset-x-0 before:bottom-0 before:top-5',
        'before:rounded-ee-md before:rounded-es-4xl before:rounded-se-4xl before:rounded-ss-md before:bg-zinc-100',
        className,
      )}
      {...props}
    >
      <div className="relative z-10 -mt-5">
        <header className="flex flex-col items-center">
          <img className="h-28 w-28" src={image.src} alt={image.alt} />
          <div className="mt-3 flex flex-wrap items-center gap-1">
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

        <main>
          <p className="mt-4 text-center font-coursive text-xl font-black text-zinc-800">{name}</p>
          <p className="mt-2 text-center text-sm text-zinc-500">{description}</p>
        </main>

        <footer className="mt-8 flex w-full items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-medium text-zinc-800">R$</span>
            <span className="font-coursive text-2xl font-bold text-zinc-800">{price}</span>
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
