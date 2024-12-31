import React from 'react'
import { Button } from '../ui/button'
import { Star } from 'lucide-react'

const JoinUsProductPage = () => {
  return (
    <section className='container mx-auto px-4 pt-12 md:py-24'>
      <div className='relative mb-3 mt-4 flex w-full max-w-7xl flex-col items-center justify-center rounded-[3rem] bg-neutral-900 px-6 py-12 text-center lg:mx-auto lg:mt-8 lg:flex-row lg:space-x-16'>
        <div className='space-y-6'>
          <div className='flex items-center justify-center gap-1'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className='h-6 w-6 fill-blue-700 text-blue-600'
              ></Star>
            ))}
          </div>
          <p className='text-sm font-medium text-gray-300'>
            Add your own product
          </p>
          <h1 className='font-dm text-4xl font-medium tracking-tight text-white md:text-5xl'>
            Find real products in the right place
          </h1>
          <p className='text-xl text-gray-300'>
            Or help others take the first step into the world of UGC
          </p>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <Button
              size='lg'
              className='mt-4 rounded-full bg-blue-600 py-8 text-xl font-bold text-primary-foreground text-white'
            >
              Connect Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUsProductPage
