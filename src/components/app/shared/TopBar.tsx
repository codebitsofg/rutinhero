'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import Logo from '@/components/shared/Logo'
import { RoleBasedRender } from '@/components/auth/RoleBasedRender'
import { usePathname } from 'next/navigation'
import { CreditsModal } from './CreditsModal'
import { CreditIcon } from './CreditIcon'

const TopBar = () => {
  const pathname = usePathname()
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false)

  return (
    <div className='grid grid-cols-[0.2fr_1fr] border-b-[1.5px] border-neutral-200 py-4 text-gray-700'>
      <div className='flex items-center px-4'>
        <Link href='/' className='text-gray-700'>
          <Logo className='w-56' />
        </Link>

        <RoleBasedRender roles={['CREATOR']}>
          <div className='ml-16 flex gap-6 text-xl font-bold'>
            <Link
              href='/app'
              className={`${pathname === '/app' ? 'text-blue-500' : 'text-gray-700'}`}
            >
              KAMPANYALAR
            </Link>

            <Link
              href='/app/siparisler'
              className={`${pathname === '/app/siparisler' ? 'text-blue-500' : 'text-gray-700'}`}
            >
              SİPARİŞLER
            </Link>
          </div>
        </RoleBasedRender>
      </div>

      <div className='flex items-center justify-end gap-2 px-6'>
        <RoleBasedRender roles={['CREATOR']}>
          <button
            onClick={() => setIsCreditsModalOpen(true)}
            className='flex items-center justify-center gap-2 rounded-full px-4 py-2 font-medium text-neutral-800 transition-colors hover:text-blue-600'
          >
            <span className='flex items-center gap-0.5 text-xl italic'>
              <span className='text-3xl font-bold'> 1 </span>
              <span className='text-base'> / 1</span>
            </span>
            <CreditIcon className='h-7 w-7' />
          </button>
        </RoleBasedRender>

        <div className='flex items-center gap-2'>
          <div className='relative mr-3 flex h-14 w-14 items-center overflow-hidden rounded-full bg-blue-500'>
            <img
              src='/dashboard/avatar.svg'
              alt='Avatar'
              className='absolute -bottom-1 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full'
            />
          </div>
          <RoleBasedRender roles={['BRAND']}>
            <span className='font-semibold'>Ayda Güler</span>
            <ChevronDown className='h-5 w-5' strokeWidth={2.75} />
          </RoleBasedRender>
        </div>
      </div>

      <CreditsModal
        isOpen={isCreditsModalOpen}
        onClose={() => setIsCreditsModalOpen(false)}
        credits={1}
        totalCredits={1}
      />
    </div>
  )
}

export default TopBar
