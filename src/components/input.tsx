import type { ComponentProps } from 'react'

import { cn } from '~/utils/classnames'

interface Props extends ComponentProps<'input'> {}

export function Input({ className, required, ...props }: Props) {
  return (
    <div
      className={cn(
        'w-full rounded-md border-2 border-zinc-200 bg-zinc-100',
        'relative transition focus-within:border-amber-500',
        className,
      )}
    >
      <input
        className={cn('w-full overflow-hidden bg-transparent p-3 text-zinc-800 placeholder:text-zinc-500/80', {
          'pr-16': !required,
        })}
        {...props}
      />
      {!required && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs italic text-zinc-500">
          Optional
        </span>
      )}
    </div>
  )
}
