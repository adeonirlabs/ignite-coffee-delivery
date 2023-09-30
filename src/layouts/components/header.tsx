import { MapPin } from 'lucide-react'
import { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import logo from '/assets/logo.svg'
import { Cart } from '~/components/cart'
import { CartContext } from '~/contexts/cart'

export function Header() {
  const { cartItems } = useContext(CartContext)
  const location = useLocation()

  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8">
      <NavLink to="/">
        <img className="h-10 w-22" src={logo} alt="Coffee Delivery" />
      </NavLink>
      <div className="flex items-center gap-2">
        <div className="flex h-10 items-center gap-2 rounded-md bg-indigo-100 px-2 text-indigo-700">
          <MapPin className="h-4 w-4" />
          Porto Alegre, RS
        </div>
        {location.pathname === '/success' ? (
          <Cart amount={cartItems.length} disabled />
        ) : (
          <NavLink to="/checkout">
            <Cart amount={cartItems.length} />
          </NavLink>
        )}
      </div>
    </header>
  )
}
