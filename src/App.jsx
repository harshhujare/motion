import React from 'react'
import { Hero } from './components/hero.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
export const App = () => {
  return (

<main className="relative min-h-screen overflow-x-hidden">
<Navbar />
<Hero />
<About/>

</main>

  )
}
export default App