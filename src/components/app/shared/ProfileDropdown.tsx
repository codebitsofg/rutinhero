'use client'

import { useSession, signOut } from 'next-auth/react'
import {
  LogOut,
  User,
  Settings,
  HelpCircle,
  Bell,
  ChevronDown,
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useUserRole } from '@/hooks/useUserRole'

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()
  const userRole = useUserRole()

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className='relative'>
      <button
        onClick={toggleDropdown}
        className='flex items-center gap-2 rounded-full focus:outline-none'
      >
        <div className='relative mr-3 flex h-14 w-14 items-center overflow-hidden rounded-full bg-blue-500'>
          <img
            src='/dashboard/avatar.svg'
            alt='Avatar'
            className='absolute -bottom-1 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full'
          />
        </div>
        <span className='font-semibold'>{session?.user?.name || 'User'}</span>
        <ChevronDown className='h-5 w-5' strokeWidth={2.75} />
      </button>

      {isOpen && (
        <>
          <div
            className='fixed inset-0 z-30'
            onClick={() => setIsOpen(false)}
          ></div>
          <div className='absolute right-0 z-40 mt-2 w-72 rounded-xl border bg-white py-2 shadow-lg'>
            <div className='border-b px-4 pb-2'>
              <p className='font-medium'>{session?.user?.name}</p>
              <p className='text-sm text-gray-500'>{session?.user?.email}</p>
            </div>

            <div className='border-b py-2'>
              <Link
                href='/app/profile'
                className='flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100'
              >
                <User className='h-4 w-4' />
                Profile
              </Link>
              <Link
                href='/app/notifications'
                className='flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100'
              >
                <Bell className='h-4 w-4' />
                Notifications
              </Link>
              <Link
                href='/app/settings'
                className='flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100'
              >
                <Settings className='h-4 w-4' />
                Settings
              </Link>
            </div>

            <div className='border-b py-2'>
              <Link
                href='/help'
                className='flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100'
              >
                <HelpCircle className='h-4 w-4' />
                Help Center
              </Link>
            </div>

            <div className='py-2'>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className='flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
              >
                <LogOut className='h-4 w-4' />
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
