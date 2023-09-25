import type { ComponentProps, ElementType } from 'react'

import { cn } from '~/utils/classnames'

interface Props extends ComponentProps<'input'> {
  value: string
  name: string
  icon: ElementType
}

export function Select({ value, name, icon: Icon, ...props }: Props) {
  return (
    <div>
      <input className="peer sr-only" id={value} name={name} type="radio" {...props} />
      <label
        htmlFor={value}
        className={cn(
          'inline-flex cursor-pointer items-center justify-center gap-4 rounded-md p-4 uppercase transition',
          'border-2 border-transparent bg-zinc-200 text-xs text-zinc-800 hover:bg-zinc-300',
          'peer-checked:cursor-default peer-checked:border-indigo-500 peer-checked:bg-indigo-100',
        )}
      >
        <Icon className="h-4 w-4 text-indigo-500" />
        <span>{value}</span>
      </label>
    </div>
  )
}
