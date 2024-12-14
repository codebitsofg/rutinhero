import React, { useState } from 'react'
import { Flag } from 'lucide-react'

interface Retailer {
  name: string
  logo: string
}

const retailers: Retailer[] = [
  { name: 'amazon', logo: '/placeholder.svg?height=50&width=150' },
  { name: 'DERMSTORE', logo: '/placeholder.svg?height=50&width=150' },
  { name: 'NET-A-PORTER', logo: '/placeholder.svg?height=50&width=150' },
  { name: 'SEPHORA', logo: '/placeholder.svg?height=50&width=150' },
]

const ProductModal = () => {
  return (
    <div className='mx-auto max-w-4xl rounded-sm bg-white font-sans'>
      <div className=''>
        <div className='flex items-center justify-between border-b border-slate-200'>
          <h3 className='pb-6 text-xl font-bold'>Where you can buy...</h3>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {retailers.map((retailer) => (
            <div
              key={retailer.name}
              className='flex cursor-pointer items-center justify-center rounded border border-gray-200 p-4 hover:bg-gray-100'
            >
              {retailer.name}
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8 flex items-start text-xs text-gray-500'>
        <Flag className='mr-2 mt-0.5 h-4 w-4 flex-shrink-0' />
        <p>We may get a small commission from these retailers.</p>
      </div>
    </div>
  )
}
export default ProductModal
