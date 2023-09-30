import { zodResolver } from '@hookform/resolvers/zod'
import { Banknote, CreditCard, DollarSign, Landmark, MapPin } from 'lucide-react'
import { useContext, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

import { Button } from '~/components/button'
import { CartItem } from '~/components/cart-item'
import { Input } from '~/components/input'
import { Select } from '~/components/select'
import { CartContext } from '~/contexts/cart'
import { cn } from '~/utils/classnames'
import { formatMoney } from '~/utils/formatMoney'

import { type CheckoutData, schema } from './schema'

export function Checkout() {
  const { cartItems, resetCart, submitCheckout } = useContext(CartContext)
  const navigate = useNavigate()

  const deliveryValue = 500
  const itemsValue = useMemo(() => cartItems.reduce((acc, item) => acc + item.amount * item.price, 0), [cartItems])
  const totalValue = useMemo(() => (itemsValue ? itemsValue + deliveryValue : 0), [itemsValue])

  const formMethods = useForm<CheckoutData>({
    resolver: zodResolver(schema),
  })

  const {
    formState: { errors, isSubmitting, isDirty },
    handleSubmit,
    register,
    reset,
    setError,
    setValue,
  } = formMethods

  function handleSubmitForm(data: CheckoutData) {
    submitCheckout(data)
    resetCart()
    reset()
    navigate('/success')
  }

  useEffect(() => {
    setValue('cartItems', cartItems)
  }, [cartItems, setValue])

  useEffect(() => {
    if (cartItems.length === 0 && isDirty) {
      setError('cartItems', { type: 'required' })
    }
  }, [cartItems.length, isDirty, setError])

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-16">
      <h1 className="font-alt text-5xl font-black text-zinc-800">Checkout</h1>
      <form
        className="mt-4 flex flex-col gap-8 lg:grid lg:grid-cols-[3fr_2fr]"
        onSubmit={handleSubmit(handleSubmitForm)}
        noValidate
      >
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
              <Input
                {...register('zip', { valueAsNumber: true })}
                error={!!errors?.zip}
                className="w-1/2 shrink-0 sm:w-1/4"
                placeholder="CEP"
                type="number"
              />
              <Input {...register('address')} error={!!errors?.address} placeholder="Endereço" />
              <div className="flex flex-wrap gap-4 sm:flex-nowrap">
                <Input
                  {...register('number', { valueAsNumber: true })}
                  error={!!errors?.number}
                  className="w-full shrink-0 sm:w-1/4"
                  placeholder="Número"
                  type="number"
                />
                <Input {...register('complement')} placeholder="Complemento" required={false} />
              </div>
              <div className="flex flex-wrap gap-4 sm:flex-nowrap">
                <Input
                  {...register('neighborhood')}
                  error={!!errors?.neighborhood}
                  className="w-full shrink-0 sm:w-1/4"
                  placeholder="Bairro"
                />
                <Input {...register('city')} error={!!errors?.city} placeholder="Cidade" />
                <Input {...register('state')} error={!!errors?.state} className="w-3/12" placeholder="Estado" />
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
            <div className="mt-10">
              <div
                className={cn('flex flex-col gap-4 sm:grid sm:grid-cols-3', {
                  'rounded-sm ring-2 ring-red-500 ring-offset-4 ring-offset-zinc-100': !!errors?.payment,
                })}
              >
                <Select {...register('payment')} value="Cartão de crédito" icon={CreditCard} />
                <Select {...register('payment')} value="Cartão de débito" icon={Landmark} />
                <Select {...register('payment')} value="Dinheiro" icon={Banknote} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-alt text-2xl font-black text-zinc-800">Cafés selecionados</h2>
          <div className="flex w-full flex-col gap-4 self-start rounded-ee-md rounded-es-4xl rounded-se-4xl rounded-ss-md bg-zinc-100 p-8">
            <div className="flex flex-col gap-6 divide-y-2 divide-zinc-200">
              {cartItems.length === 0 ? (
                <div
                  className={cn({
                    'rounded-sm ring-2 ring-red-500 ring-offset-4 ring-offset-zinc-100': !!errors?.cartItems,
                  })}
                >
                  <p className="text-zinc-600">
                    Nenhum item na lista,
                    <NavLink className="px-1 font-medium text-amber-500 transition hover:text-amber-700" to="/">
                      clique aqui
                    </NavLink>
                    para adicionar
                  </p>
                </div>
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
            <Button type="submit" label="Finalizar Pedido" disabled={isSubmitting} />
          </div>
        </div>
      </form>
    </section>
  )
}
