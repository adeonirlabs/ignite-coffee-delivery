import { type ComponentPropsWithRef, forwardRef } from 'react'

import { cn } from  '~/utils/class-names'

interface Props extends ComponentPropsWithRef<'input'> {
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, error, type = 'text', required = true, ...props }, ref) => {
    return (
      <div
        className={cn(
          'w-full rounded-md border-2 border-zinc-200 bg-zinc-200/30',
          'relative transition focus-within:border-amber-500',
          { 'border-red-500 focus-within:border-red-500': error },
          className,
        )}
      >
        <input
          ref={ref}
          type={type}
          required={required}
          className={cn('w-full overflow-hidden bg-transparent p-3 text-zinc-800 placeholder:text-zinc-500/80', {
            'pr-16': !required,
          })}
          {...props}
        />
        {!required && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-zinc-400">
            Optional
          </span>
        )}
      </div>
    )
  },
)
