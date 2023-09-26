import { Card } from '~/components/card'
import { coffee } from '~/data/coffee-list'

export function CoffeeList() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-16">
      <h2 className="font-alt text-3xl font-black text-zinc-800">Nossos cafés</h2>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {coffee.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}
