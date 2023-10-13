import { useEffect, useState } from 'react'

import { Card } from '~/components/card'
import type { Coffee } from '~/models/coffee'
import { coffeeSchema } from '~/models/coffee'
import { supabase } from '~/utils/supabase'

import { Hero } from './components/hero'

export function Home() {
  const [coffeesList, setCoffeesList] = useState<Coffee[]>([])

  async function getData() {
    const { data } = await supabase.from('coffees').select('*')
    const coffees = coffeeSchema.array().parse(data)
    setCoffeesList(coffees)
  }

  useEffect(() => {
    getData()
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
