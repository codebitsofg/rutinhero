'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const pathName = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const NavLink = ({
    href,
    children,
  }: {
    href: string
    children: React.ReactNode
  }) => (
    <Link
      className={`hover:text-slate-700 ${
        pathName === href ? 'text-slate-800 underline underline-offset-8' : ''
      }`}
      href={href}
    >
      <span>{children}</span>
    </Link>
  )

  return (
    <div
      className={`fixed left-0 top-0 z-20 w-screen border-b border-gray-200 bg-white px-4 py-3 font-opensans backdrop-blur-lg transition-transform duration-300 md:px-12 md:py-6 ${'translate-y-0 transform'}`}
    >
      <div className='relative flex h-full w-full items-center justify-between'>
        <div className='flex items-center gap-12'>
          <img src='/brand-logo.svg' className='w-52' alt='Brand Logo' />
          <div className='hidden gap-8 text-[0.65rem] font-medium md:flex md:text-[1.1rem]'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/urunler'>Products</NavLink>
          </div>
        </div>

        <div className='hidden items-center gap-2 text-white md:flex'>
          <Button
            variant='default'
            className='flex h-10 items-center justify-center rounded-3xl bg-purple-600 px-10 py-[23px] text-lg text-white'
          >
            <Link href='/app'>Dashboard</Link>
          </Button>
        </div>

        <div className='md:hidden'>
          <Button size='icon' onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='absolute left-0 top-full w-full bg-white px-4 py-9 shadow-lg md:hidden'>
          <nav className='flex flex-col space-y-9 text-xl'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/urunler'>Products</NavLink>

            <Link href='/app' className='text-blue-600 hover:text-blue-800'>
              Dashboard
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navigation
