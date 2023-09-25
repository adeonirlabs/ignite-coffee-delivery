import { MapPin } from 'lucide-react'

import logo from '~/assets/logo.svg'
import { Cart } from '~/components/cart'

export function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8">
      <img className="h-10 w-22" src={logo} alt="Coffee Delivery" />
      <div className="flex items-center gap-2">
        <div className="flex h-10 items-center gap-2 rounded-md bg-indigo-100 px-2 text-indigo-700">
          <MapPin className="h-4 w-4" />
          Porto Alegre, RS
        </div>
        <Cart />
      </div>
    </header>
  )
}
