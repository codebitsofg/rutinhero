'use client'
import { KeyRound, Lock, LockKeyhole } from 'lucide-react'
import React, { useState } from 'react'

const BriefProgress = () => {
  const [step, setStep] = useState(false)
  const steps = [
    {
      name: 'Kampanya Bilgileri',
      href: '#',
      status: 'current',
    },
    {
      name: 'Ürün',
      href: '#',
      status: 'upcoming',
    },
    {
      name: 'Üreticiler',
      href: '#',
      status: 'upcoming',
    },
    {
      name: 'Sipariş',
      href: '#',
      status: 'upcoming',
    },
    {
      name: 'Eklemeler',
      href: '#',
      status: 'upcoming',
    },
  ]
  return (
    <div className='flex flex-col gap-1.5 pl-14 pr-6 pt-10'>
      {steps.map((step) => (
        <div
          key={step.name}
          className='mx-auto flex w-full flex-col items-start'
        >
          <div
            className={`flex flex-shrink-0 items-center justify-between self-stretch rounded-r-xl border-l-[2.5px] border-black px-5 py-2 pr-6 ${
              step.status === 'current'
                ? 'border-green-800 bg-green-100 text-green-900'
                : step.status === 'upcoming'
                  ? 'border-neutral-400 text-neutral-400'
                  : ''
            }`}
          >
            <span className='text-lg font-medium'>{step.name}</span>
            {step.status === 'upcoming' && (
              <KeyRound strokeWidth={2} className='h-6 w-4' />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BriefProgress
