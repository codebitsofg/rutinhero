import { ArrowRight, AudioWaveform } from 'lucide-react'
import React, { ReactNode } from 'react'
import { Button } from '../../ui/button'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  icon: ReactNode
  image: string
}

const StrategyCard = ({ title, description, icon, image }: CardProps) => {
  return (
    <div className='h-full cursor-pointer rounded-3xl border-[1.3px] border-neutral-300 px-5 py-6 leading-5 transition-all duration-100 ease-in-out hover:border-black'>
      {icon}
      <span className='mb-2 inline-block font-dm text-xl font-light'>
        {title}
      </span>
      <p className='left-6 text-base font-light text-neutral-500'>
        {description}
      </p>
      <img src={image} alt='' className='my-6' />
      <Button className='group mt-12 flex items-center gap-2 px-5 py-8 hover:bg-purple-700'>
        <span className='hidden text-lg font-light group-hover:inline'>
          <Link href='/app/campaigns/1/brief'>Brief Oluştur</Link>
        </span>
        <ArrowRight className='h-6 w-6' />
      </Button>
    </div>
  )
}

export default StrategyCard
