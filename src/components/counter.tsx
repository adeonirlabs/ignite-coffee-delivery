import { Minus, Plus } from 'lucide-react'
import { type ComponentProps, useState } from 'react'

import { cn } from '~/utils/classnames'

interface Props extends ComponentProps<'input'> {}

export function Counter({ className, ...props }: Props) {
  const [counter, setCounter] = useState(1)

  if (counter < 1 || isNaN(counter)) {
    setCounter(1)
  }

  if (counter > 10) {
    setCounter(10)
  }

  return (
    <div className={cn('inline-flex items-center gap-1 rounded-md bg-zinc-200 px-2 py-1', className)}>
      <button
        type="button"
        className="text-zinc-700 enabled:hover:text-indigo-700"
        onClick={() => setCounter(counter - 1)}
      >
        <Minus className="h-4 w-4" />
      </button>
      <input
        value={counter}
        className={cn('w-6 bg-transparent text-center text-zinc-700')}
        onChange={(e) => setCounter(parseInt(e.target.value))}
        {...props}
      />
      <button
        type="button"
        className="text-zinc-700 enabled:hover:text-indigo-700"
        onClick={() => setCounter(counter + 1)}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
