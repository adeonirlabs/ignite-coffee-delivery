import { useEffect, useState } from 'react'

import { Card } from '~/components/card'
import type { Coffee } from '~/types'

import { Hero } from './components/hero'

export function Home() {
  const [coffeesList, setCoffeesList] = useState<Coffee[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/coffees')
      .then((response) => response.json())
      .then((data) => setCoffeesList(data))
  }, [])

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 pb-24 pt-16">
        <h2 className="font-alt text-3xl font-black text-zinc-800">Nossos cafés</h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {coffeesList.map((item) => (
            <Card key={item.id} coffee={item} />
          ))}
        </div>
      </section>
    </>
  )
}
