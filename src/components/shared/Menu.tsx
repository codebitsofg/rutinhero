import Link from 'next/link'
import { useEffect, useState } from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {}, [])

  return (
    <div className='relative'>
      <button onClick={toggleMenu} className='focus:outline-none'>
        <div className='space-y-1'>
          <span className='ml-auto block h-0.5 w-3 bg-gray-600'></span>
          <span className='block h-0.5 w-6 bg-gray-600'></span>
          <span className='block h-0.5 w-6 bg-gray-600'></span>
        </div>
      </button>
      {isOpen && (
        <div className='absolute right-0 mt-2 flex w-48 items-center justify-center rounded-md bg-white py-1 shadow-lg'>
          <Link href={'/'}>Anasayfa</Link>
        </div>
      )}
    </div>
  )
}

export default Menu
