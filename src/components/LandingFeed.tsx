import * as React from 'react'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import NewlyAddedProducts from './NewlyAddedProducts'
import JoinUsProductPage from './JoinUsProductPage'

const LandingFeed = () => {
  return (
    <div className='relative pb-12 pt-28 md:py-28'>
      <h2 className='mb-4 text-center font-dm text-5xl font-extrabold leading-[4rem] md:mb-8 md:text-6xl md:leading-[1]'>
        Freshly Added Products
      </h2>
      <NewlyAddedProducts />
      <JoinUsProductPage />
    </div>
  )
}

export default LandingFeed
