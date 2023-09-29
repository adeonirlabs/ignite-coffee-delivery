import { Minus, Plus } from 'lucide-react'

import { cn } from '~/utils/classnames'

interface Props {
  className?: string
  counter: number
  onIncrement: () => void
  onDecrement: () => void
}

export function Counter({ className, counter, onIncrement, onDecrement }: Props) {
  return (
    <div className={cn('inline-flex items-center gap-1 rounded-md bg-zinc-200 px-2 py-1', className)}>
      <button type="button" className="text-zinc-800 enabled:hover:text-indigo-700" onClick={onDecrement}>
        <Minus className="h-4 w-4" />
      </button>
      <input value={counter} className={cn('w-6 bg-transparent text-center text-zinc-800')} readOnly />
      <button type="button" className="text-zinc-800 enabled:hover:text-indigo-700" onClick={onIncrement}>
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}
