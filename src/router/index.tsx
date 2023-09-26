import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '~/layouts/default'
import { Checkout } from '~/pages/checkout'
import { Home } from '~/pages/home'
import { Success } from '~/pages/success'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/success',
        element: <Success />,
      },
    ],
  },
])
