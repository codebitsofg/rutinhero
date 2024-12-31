import React from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import Logo from '../shared/Logo'

const TopBar = () => {
  return (
    <div className='grid grid-cols-[0.2fr_1fr] border-b-[1.5px] border-neutral-200 py-4 text-gray-700'>
      <div className='flex items-center px-4'>
        <Link href='/' className='text-gray-700'>
          <Logo className='w-56' />
        </Link>
      </div>

      <div className='flex items-center justify-end gap-1 px-6'>
        <div className='relative mr-3 flex h-14 w-14 items-center overflow-hidden rounded-full bg-blue-500'>
          <img
            src='/dashboard/avatar.svg'
            alt='Avatar'
            className='absolute -bottom-1 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full'
          />
        </div>
        <span className='font-semibold'>Ayda Güler</span>
        <ChevronDown className='h-5 w-5' strokeWidth={2.75} />
      </div>
    </div>
  )
}

export default TopBar
