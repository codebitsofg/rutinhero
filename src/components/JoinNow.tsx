import React from 'react'
import { Button } from './ui/button'

const JoinNow = () => {
  return (
    <div className='mb-12 bg-[#faf9f9] md:mb-0'>
      <div className='mx-auto flex min-h-[70vh] max-w-[1250px] flex-col items-center justify-around gap-8 px-8 pt-12 md:px-4 md:py-0 lg:flex-row'>
        <div className='space-y-6 lg:w-1/2'>
          <h1 className='text-center font-serif text-4xl font-bold tracking-tight md:text-left md:text-5xl lg:text-6xl'>
            Join Us!
          </h1>
          <p className='max-w-xl text-center text-lg leading-relaxed text-gray-700 md:text-left'>
            We think it's a great idea to try the products you want in return
            for your ideas. idea. Join us now and participate in free campaigns
            Increase your interaction with brands and direct the community!
          </p>
          <Button className='w-full rounded-full bg-[#7c3aed] px-8 py-8 text-lg font-medium text-white hover:bg-[#6d28d9] md:w-auto'>
            Join us now!
          </Button>
        </div>
        <div className='relative self-end lg:w-1/2'>
          <img
            src='/join.png'
            alt='Creator showcase'
            className='relative z-10 mx-auto h-auto w-full max-w-2xl'
          />
        </div>
      </div>
    </div>
  )
}

export default JoinNow
