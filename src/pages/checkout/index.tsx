import { Banknote, CreditCard, DollarSign, Landmark, MapPin } from 'lucide-react'
import { useContext, useMemo } from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from '~/components/button'
import { CartItem } from '~/components/cart-item'
import { Input } from '~/components/input'
import { Select } from '~/components/select'
import { CartContext } from '~/contexts/cart'
import { formatMoney } from '~/utils/formatMoney'

export function Checkout() {
  const { cartItems } = useContext(CartContext)

  const deliveryValue = 500
  const itemsValue = useMemo(() => cartItems.reduce((acc, item) => acc + item.amount * item.price, 0), [cartItems])
  const totalValue = useMemo(() => (itemsValue ? itemsValue + deliveryValue : 0), [itemsValue])

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-16">
      <h1 className="font-alt text-5xl font-black text-zinc-800">Checkout</h1>
      <form className="mt-4 flex flex-col gap-8 lg:grid lg:grid-cols-[3fr_2fr]">
        <div className="flex flex-col gap-4">
          <h2 className="font-alt text-2xl font-black text-zinc-800">Complete seu pedido</h2>
          <div className="rounded-ee-md rounded-es-4xl rounded-se-4xl rounded-ss-md bg-zinc-100 p-8">
            <div className="flex items-start gap-2">
              <MapPin className="mt-1 h-6 w-6 text-amber-500" />
              <div>
                <p className="font-medium text-zinc-800">Endereço de Entrega</p>
                <p className="text-zinc-600">Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <Input label="CEP" id="cep" className="w-1/2 shrink-0 sm:w-1/4" required />
              <Input label="Endereço" id="address" required />
              <div className="flex flex-wrap gap-4 sm:flex-nowrap">
                <Input label="Número" id="number" className="w-full shrink-0 sm:w-1/4" required />
                <Input label="Complemento" id="complement" />
              </div>
              <div className="flex flex-wrap gap-4 sm:flex-nowrap">
                <Input label="Bairro" id="neighborhood" className="w-full shrink-0 sm:w-1/4" required />
                <Input label="Cidade" id="city" required />
                <Input label="Estado" id="state" className="w-3/12" required />
              </div>
            </div>
          </div>
          <div className="rounded-ee-md rounded-es-4xl rounded-se-4xl rounded-ss-md bg-zinc-100 p-8">
            <div className="flex items-start gap-2">
              <DollarSign className="mt-1 h-6 w-6 text-amber-500" />
              <div>
                <p className="font-medium text-zinc-800">Pagamento</p>
                <p className="text-zinc-600">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:grid sm:grid-cols-3">
              <Select name="payment" value="Cartão de crédito" icon={CreditCard} />
              <Select name="payment" value="Cartão de débito" icon={Landmark} />
              <Select name="payment" value="Dinheiro" icon={Banknote} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-alt text-2xl font-black text-zinc-800">Cafés selecionados</h2>
          <div className="flex w-full flex-col gap-4 self-start rounded-ee-md rounded-es-4xl rounded-se-4xl rounded-ss-md bg-zinc-100 p-8">
            <div className="flex flex-col gap-6 divide-y-2 divide-zinc-200">
              {cartItems.length === 0 ? (
                <p className="text-zinc-600">
                  Nenhum item na lista,
                  <NavLink className="px-1 font-medium text-amber-500 transition hover:text-amber-700" to="/">
                    clique aqui
                  </NavLink>
                  para adicionar
                </p>
              ) : (
                cartItems.map((item) => <CartItem key={item.name} className="pt-6 first:pt-0" coffee={item} />)
              )}
              <div className="flex flex-col gap-2 pt-6">
                <div className="flex justify-between">
                  <p className="text-sm text-zinc-800">Total de items</p>
                  <p className="text-sm text-zinc-800">R$ {formatMoney(itemsValue)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-zinc-800">Entrega</p>
                  <p className="text-sm text-zinc-800">R$ {formatMoney(deliveryValue)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-lg font-medium text-zinc-800">Total</p>
                  <p className="text-lg font-bold text-zinc-800">R$ {formatMoney(totalValue)}</p>
                </div>
              </div>
            </div>
            <Button label="Finalizar Pedido" />
          </div>
        </div>
      </form>
    </section>
  )
}
