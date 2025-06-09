import React from 'react'
import { Hero } from './components/hero.jsx'
import About from './components/About.jsx'
import AnimatedTital from './components/AnimatedTitle.jsx'
export const App = () => {
  return (

<main className="relative min-h-screen overflow-x-hidden">
<Hero />
<About/>

</main>

  )
}
export default App