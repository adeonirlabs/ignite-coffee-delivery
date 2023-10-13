import { useState } from 'react'

import type { Coffee } from '~/models/coffee'

export function useCounter(coffee: Coffee) {
  const [counter, setCounter] = useState(coffee.amount || 1)

  function incrementCounter() {
    if (counter < 10) {
      setCounter(counter + 1)
    }
  }

  function decrementCounter() {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return { counter, incrementCounter, decrementCounter }
}
