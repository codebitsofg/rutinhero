import React from 'react'
import JoinNewsletter from './JoinNewsletter'
import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='relative z-50 w-full'>
      <div className='mx-auto max-w-[1250px] px-4 pb-16 pt-8'>
        <div className='grid gap-8 lg:grid-cols-2'>
          <div className='space-y-8'>
            <div className='flex items-center gap-6'>
              <Link href='/'>
                <img src='/brand-logo.svg' alt='' className='w-80' />
              </Link>
              <div className='flex gap-4'>
                <Link
                  href='#'
                  className='rounded-full bg-blue-500 p-2 text-white hover:bg-blue-400'
                >
                  <Instagram className='h-4 w-4' />
                </Link>
                <Link
                  href='#'
                  className='rounded-full bg-blue-500 p-2 text-white hover:bg-blue-400'
                >
                  <Linkedin className='h-4 w-4' />
                </Link>
                <Link
                  href='#'
                  className='rounded-full bg-blue-500 p-2 text-white hover:bg-blue-400'
                >
                  <Twitter className='h-4 w-4' />
                </Link>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-4'>
            <div className='space-y-4'>
              <h4 className='text-base font-medium text-gray-500'>Company</h4>
              <nav className='flex flex-col space-y-4'>
                <Link className='text-base hover:underline' href='#'>
                  About us
                </Link>
                <Link className='text-base hover:underline' href='#'>
                  Contact
                </Link>
                <Link className='text-base hover:underline' href='#'>
                  Careers
                </Link>
              </nav>
            </div>
            <div className='space-y-4'>
              <h4 className='text-base font-medium text-gray-500'>
                Why Rutin Hero
              </h4>
              <nav className='flex flex-col space-y-4'>
                <Link className='text-base hover:underline' href='#'>
                  Why Rutin Hero
                </Link>
              </nav>
            </div>
            <div className='space-y-4'>
              <h4 className='text-base font-medium text-gray-500'>
                How it Works
              </h4>
              <nav className='flex flex-col space-y-4'>
                <Link className='text-base hover:underline' href='#'>
                  Text Review
                </Link>
                <Link className='text-base hover:underline' href='#'>
                  Connect Instagram
                </Link>
                <Link className='text-base hover:underline' href='#'>
                  TikTok Videos
                </Link>
                <Link className='text-base hover:underline' href='#'>
                  YouTube Videos
                </Link>
              </nav>
            </div>
            <div className='space-y-4'>
              <h4 className='text-base font-medium text-gray-500'>Resources</h4>
              <nav className='flex flex-col space-y-4'>
                <Link className='text-base hover:underline' href='#'>
                  Articles
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[1250px] border-t'>
        <div className='container flex flex-col items-center justify-center gap-4 px-4 py-6 sm:flex-row'>
          <p className='text-base text-gray-500'>
            © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
