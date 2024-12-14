import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

interface MainHeroProps {
  children: React.ReactNode
  description: string
  buttonText: string
  imgSrc: string
}

const MainHero = ({
  children,
  description,
  buttonText,
  imgSrc,
}: MainHeroProps) => {
  return (
    <div className="container-1250 px-8 pb-12 pt-32 text-center font-['Inter'] lg:min-h-screen lg:pb-0 lg:pt-12 lg:text-left">
      <section className='flex h-full flex-col-reverse items-center justify-center py-8 lg:flex-row lg:gap-20 lg:py-12 lg:pt-36'>
        <div className='flex flex-col gap-6'>
          {children}
          <p className='my-2 max-w-[450px] text-justify text-lg text-neutral-700 lg:my-6'>
            {description}
          </p>
          <div className='flex gap-4'>
            <Button
              size='lg'
              className='mt-2 w-full rounded-full bg-blue-600 py-10 text-xl font-bold text-primary-foreground text-white lg:mt-14 lg:w-auto'
            >
              {buttonText}
            </Button>
          </div>
        </div>
        <div className='relative flex items-center justify-center pl-7 lg:items-start lg:justify-end lg:pl-0'>
          <img
            src={imgSrc}
            alt='Instagram post mockup'
            className='w-full object-contain lg:w-[80%]'
          />
        </div>
      </section>
    </div>
  )
}

export default MainHero
