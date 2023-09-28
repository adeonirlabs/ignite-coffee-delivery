import { DollarSign, MapPin, Timer } from 'lucide-react'

import illustration from '~/assets/illustration.svg'
import { cn } from '~/utils/classnames'

const list = [
  {
    text: 'Entrega em ',
    info: 'Rua João Daniel Martinelli, 102\nFarrapos - Porto Alegre, RS',
    color: 'bg-amber-500',
    icon: MapPin,
  },
  {
    text: 'Previsão de entrega \n',
    info: '20min ~ 30min',
    color: 'bg-amber-700',
    icon: Timer,
  },
  {
    text: 'Pagamento na entrega \n',
    info: 'Cartão de crédito',
    color: 'bg-indigo-500',
    icon: DollarSign,
  },
]

export function Success() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-16">
      <h2 className="font-alt text-3xl font-black text-amber-500">Uhuh! Pedido confirmado</h2>
      <p className="mt-2 text-lg text-zinc-700">Agora é só aguardar que logo o café chegará até você</p>
      <div className=" grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div
          className={cn(
            'mt-8 flex flex-col gap-4 justify-self-start rounded-ee-md rounded-es-4xl rounded-se-4xl rounded-ss-md lg:justify-self-auto',
            'bg-gradient-to-r from-amber-500 to-indigo-500 p-px',
          )}
        >
          <ul className="flex h-full flex-col gap-4 rounded-ee-md rounded-es-4xl rounded-se-4xl rounded-ss-md bg-white p-8">
            {list.map(({ text, info, color, icon: Icon }) => (
              <li key={text} className="flex items-center gap-2">
                <div className={cn('flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-full', color)}>
                  <Icon className="h-4 w-4 text-zinc-50" />
                </div>
                <span className="whitespace-pre-wrap text-zinc-800">
                  {text}
                  <b className="font-semibold">{info}</b>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <img className="w-full max-w-lg translate-y-3" src={illustration} alt="" />
      </div>
    </section>
  )
}
