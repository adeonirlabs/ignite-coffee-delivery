import { Coffee, Package, ShoppingCart, Timer } from 'lucide-react'

import coffeeCup from '/assets/coffee-cup.png'
import { cn } from '~/utils/classnames'

const list = [
  {
    text: 'Compra simples e segura',
    color: 'bg-amber-500',
    icon: ShoppingCart,
  },
  {
    text: 'Entrega rápida e rastreada',
    color: 'bg-amber-700',
    icon: Timer,
  },
  {
    text: 'Embalagem mantém o café intacto',
    color: 'bg-indigo-500',
    icon: Package,
  },
  {
    text: 'O café chega fresquinho até você',
    color: 'bg-indigo-700',
    icon: Coffee,
  },
]

export function Hero() {
  return (
    <section className="bg-blur bg-cover bg-no-repeat px-4 pb-8 pt-16 lg:pb-24 ">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row">
        <div>
          <h1 className="font-alt text-5xl font-black text-zinc-800">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2 className="mt-4 text-xl text-zinc-600">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </h2>
          <img className="mx-auto mt-8 block max-h-80 lg:hidden" src={coffeeCup} alt="" />
          <ul className="mt-12 columns-1 md:columns-2 lg:mt-16">
            {list.map(({ text, color, icon: Icon }) => (
              <li key={text} className="mb-4 flex items-start gap-2 sm:items-center">
                <div className={cn('flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-full', color)}>
                  <Icon className="h-4 w-4 text-zinc-50" />
                </div>
                <span className="text-zinc-800">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <img className="mx-auto hidden max-w-md lg:block" src={coffeeCup} alt="" />
      </div>
    </section>
  )
}
