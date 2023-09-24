import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { cn } from '~/utils/classnames'

const button = tv({
  base: 'inline-flex items-center justify-center gap-1 rounded-md uppercase transition',
  variants: {
    variant: {
      primary: 'bg-coffee-500 px-6 py-3 text-sm font-bold tracking-wide text-coffee-50 enabled:hover:bg-coffee-600',
      secondary: 'bg-zinc-200 p-2 text-xs text-zinc-800 enabled:hover:bg-zinc-300',
      icon: 'h-10 w-10 bg-blue-800 p-2 text-blue-50 enabled:hover:bg-blue-700',
    },
  },
})

interface Props extends ComponentProps<'button'>, VariantProps<typeof button> {}

export function Button({ className, variant, ...props }: Props) {
  return <button className={cn(button({ className, variant }))} {...props} />
}
