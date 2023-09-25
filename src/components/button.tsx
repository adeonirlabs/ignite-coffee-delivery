import type { ComponentProps, ElementType } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { cn } from '~/utils/classnames'

const button = tv({
  base: 'inline-flex items-center justify-center gap-1 rounded-md uppercase transition appearance-none',
  variants: {
    variant: {
      primary: 'bg-amber-500 px-6 py-3 text-sm font-bold tracking-wide text-amber-50 enabled:hover:bg-amber-600',
      secondary: 'bg-zinc-200 p-2 text-xs text-zinc-700 enabled:hover:bg-zinc-300',
      icon: 'h-10 w-10 bg-indigo-800 p-2 text-indigo-50 enabled:hover:bg-indigo-700',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof button> {
  label?: string
  icon?: ElementType
}

export function Button({ className, icon: Icon, label, variant, ...props }: ButtonProps) {
  const renderChildren = {
    primary: <span>{label}</span>,
    secondary: (
      <>
        {Icon && <Icon className="h-4 w-4 text-indigo-500" />}
        <span className="h-3.5">{label}</span>
      </>
    ),
    icon: Icon && <Icon className="h-5 w-5 text-indigo-50" />,
  }

  return (
    <button className={cn(button({ className, variant }))} {...props}>
      {renderChildren[variant!]}
    </button>
  )
}
