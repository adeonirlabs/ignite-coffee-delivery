import { CoffeeList } from './components/coffee-list'
import { Hero } from './components/hero'

export function Home() {
  return (
    <main>
      <Hero />
      <CoffeeList />
    </main>
  )
}