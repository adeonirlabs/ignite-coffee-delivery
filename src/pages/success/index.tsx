import { DollarSign, MapPin, Timer } from 'lucide-react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import illustration from '/assets/illustration.svg'
import { CartContext } from '~/contexts/cart'
import { cn } from  '~/utils/class-names'

export function Success() {
  const { checkoutData } = useContext(CartContext)
  const navigate = useNavigate()

  const address = `${checkoutData.address}, ${checkoutData.number} ${checkoutData.complement || ''} \n${
    checkoutData.neighborhood
  } - ${checkoutData.city}, ${checkoutData.state} ${checkoutData.zip}`

  const list = [
    {
      text: 'Entrega em \n',
      info: address,
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
      info: checkoutData.payment,
      color: 'bg-indigo-500',
      icon: DollarSign,
    },
  ]

  useEffect(() => {
    if (!checkoutData.zip) {
      navigate('/')
    }
  })

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
              <li key={text} className="flex items-start gap-2">
                <div className={cn('mt-1 flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-full', color)}>
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
