import React from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti';
import { useRef } from 'react'
const Navbar = () => {
  const navContainerRef =useRef(null);
  return (
    <div ref={navContainerRef} className="fixed incet-x-0 top-4 h-16 z-50 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute  w-full top-1/2 -translate-y-1/2">

<nav className="flex justify-between items-center size-full p-4">
<div className='flex gap-7 items-center'>
<img
src="/img/logo.png" alt="logo" 
className='w-10'
 />
 <Button id="product-button" tital="Products" righticon={<TiLocationArrow/>}   containerClass="!bg-blue-50 md:flex hidden items-center justify-center gap-1"    />

</div>
<div>

  
</div>
 
</nav>

      </header>
    </div>

  )
}

export default Navbar 