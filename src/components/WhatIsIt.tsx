import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LineChart } from 'lucide-react'

const WhatIsIt = () => {
  return (
    <div className='container relative mx-auto my-20 max-w-4xl px-8 py-8 md:my-44 md:px-4'>
      <h2 className='mb-2 text-center text-base text-neutral-500'>
        What is Rutin Hero?
      </h2>
      <h1 className='mb-8 text-center font-dm text-4xl font-extrabold md:text-5xl'>
        The right meeting
        <br />
        place of people
      </h1>

      <div className='flex flex-col items-center justify-center gap-20 md:flex-row'>
        <div className='flex-1'>
          <img
            className='opacity-50'
            src='/home-page-elements/star.png'
            alt=''
          />
        </div>

        <div className='flex-1 space-y-12'>
          <div className='flex items-center'>
            <div className='mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white'>
              1
            </div>
            <div>
              <h3 className='mb-1 font-semibold'>
                Apply for free & without obligation
              </h3>
              <p className='text-sm text-gray-600'>
                You submit one application. It only takes a few minutes. Then we
                obtain offers from the banks for you.
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <div className='mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white'>
              2
            </div>
            <div>
              <h3 className='mb-1 font-semibold'>Compare your offers</h3>
              <p className='text-sm text-gray-600'>
                You will receive the first offers immediately. So you can easily
                compare your offers.
              </p>
            </div>
          </div>
          <div className='flex items-start'>
            <div className='mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white'>
              3
            </div>
            <div>
              <h3 className='mb-1 font-semibold'>Choose the best offer</h3>
              <p className='text-sm text-gray-600'>
                Now you can choose the best deal. The offer are non-binding and
                it's free to use Coral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WhatIsIt
