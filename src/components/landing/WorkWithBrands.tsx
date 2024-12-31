import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

interface MainHeroProps {
  children: React.ReactNode
  description: string
  buttonText: string
  imgSrc: string
  isReversed?: boolean
}

const MainHero = ({
  children,
  description,
  buttonText,
  imgSrc,
  isReversed = false,
}: MainHeroProps) => {
  return (
    <div className='mx-auto max-w-[1650px] px-8 pb-12 pt-32 text-center font-opensans lg:min-h-screen lg:pb-0 lg:pt-12 lg:text-left'>
      <section
        className={`flex h-full flex-col-reverse items-center justify-center ${
          isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } lg:gap-20 lg:py-12 lg:pt-28`}
      >
        <div className='flex flex-col gap-6 self-stretch pt-12 lg:w-[50%]'>
          {children}
          <p className='my-2 w-[70%] text-justify text-xl text-neutral-700 lg:my-6'>
            {description}
          </p>
          <div className='flex gap-4'>
            <Button
              size='lg'
              className='mt-2 w-full rounded-3xl bg-purple-600 py-8 text-xl font-medium text-primary-foreground text-white lg:w-[40%]'
            >
              {buttonText}
            </Button>
          </div>
        </div>
        <div className='relative flex items-center justify-center pl-7 lg:items-start lg:justify-end lg:pl-0'>
          <img
            src={imgSrc}
            alt='Instagram post mockup'
            className='w-full object-contain lg:w-[65vw]'
          />
        </div>
      </section>

      <div className='mx-auto w-[90%] px-4'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
          <div className='text-center'>
            <div className='mb-4 font-dm text-7xl font-extrabold text-neutral-700'>
              58%
            </div>
            <p className='text-lg text-neutral-700'>
              Daha fazla <br /> görünürlük
            </p>
          </div>

          <div className='text-center'>
            <div className='mb-4 font-dm text-7xl font-extrabold text-neutral-700'>
              71%
            </div>
            <p className='text-lg text-neutral-700'>
              Satın alma <br /> olasılığı
            </p>
          </div>

          <div className='text-center'>
            <div className='mb-4 font-dm text-7xl font-extrabold text-neutral-700'>
              100,000
            </div>
            <p className='text-lg text-neutral-700'>
              üretici arasından
              <br />
              özgür seçim
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHero
