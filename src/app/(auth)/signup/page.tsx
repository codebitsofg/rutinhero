'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SignUpForm } from '@/components/auth/SignUpForm'
import Link from 'next/link'
import { ImagePlay, Target } from 'lucide-react'

export default function SignUpPage() {
  const [step, setStep] = useState<'type' | 'form'>('type')
  const [userType, setUserType] = useState<'brand' | 'creator' | null>(null)

  const linkStyle = 'font-dm font-medium text-white   text-lg '
  return (
    <div className='grid min-h-screen grid-cols-[0.6fr_1fr] text-neutral-700'>
      <div className='relative flex flex-col bg-neutral-100 py-6'>
        <div className='absolute left-0 top-0 h-full w-full'>
          <div className='relative h-full w-full'>
            <img
              src='dashboard/auth/background.jpg'
              className='h-full w-full object-cover'
            />
            <div className='absolute left-0 top-0 h-full w-full bg-purple-600 opacity-50'></div>
          </div>
        </div>
        <div className='relative z-30 flex items-center justify-start px-4 text-white'>
          <img
            src='/dashboard/auth/brand-logo.svg'
            alt='logo'
            className='w-56 text-white'
          />
        </div>
        <div className='relative z-30 flex flex-1 items-center justify-center'>
          <img
            src='/dashboard/auth/auth.svg'
            alt='symbol'
            className='w-[70%]'
          />
        </div>
        <div className='absolute bottom-0 left-0 flex w-full items-center justify-start gap-6 px-6 pb-3'>
          <Link href='#' className={linkStyle}>
            About
          </Link>
          <Link href='#' className={linkStyle}>
            Privacy
          </Link>
          <Link href='#' className={linkStyle}>
            Terms
          </Link>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center bg-neutral-50'>
        {step === 'type' ? (
          <div className='w-full max-w-[50%] space-y-6 text-left'>
            <div className=''>
              <h1 className='font-dm text-4xl font-bold text-neutral-700'>
                Choose your account type
              </h1>
              <p className='mt-4 text-neutral-500'>
                If you want to use the platform as a creator, you can choose the
                creator option, if you want to use the platform for campaign
                management, you can choose the campaign option.
              </p>
            </div>

            <div className='grid gap-4'>
              <Button
                variant='outline'
                className='h-28 items-center justify-start gap-4 rounded-xl border-neutral-300 hover:bg-purple-600 hover:text-white hover:shadow'
                onClick={() => {
                  setUserType('brand')
                  setStep('form')
                }}
              >
                <Target className='h-10 w-10' strokeWidth={1} />
                <div className='text-left'>
                  <div className='font-dm text-lg font-semibold'>Brand</div>
                  <div className='text-sm font-light'>
                    I want to collaborate with content creators
                  </div>
                </div>
              </Button>

              <Button
                variant='outline'
                className='h-28 w-full items-center justify-start gap-4 rounded-xl border-neutral-300 hover:bg-purple-600 hover:text-white hover:shadow'
                onClick={() => {
                  setUserType('creator')
                  setStep('form')
                }}
              >
                <ImagePlay className='h-10 w-10' strokeWidth={1} />
                <div className='text-left'>
                  <div className='font-dm text-lg font-semibold'>Creator</div>
                  <div className='text-sm font-light'>
                    I want to collaborate with brands
                  </div>
                </div>
              </Button>
            </div>
          </div>
        ) : (
          <SignUpForm userType={userType!} onBack={() => setStep('type')} />
        )}
      </div>
    </div>
  )
}
