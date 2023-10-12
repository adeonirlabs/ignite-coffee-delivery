import GithubCorner from 'react-github-corner'
import { Outlet } from 'react-router-dom'

import { Header } from './components/header'

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <GithubCorner
        href="https://github.com/adeonirlabs/ignite-coffee-delivery"
        bannerColor="#c7d2fe"
        octoColor="#6366f1"
      />
    </>
  )
}
