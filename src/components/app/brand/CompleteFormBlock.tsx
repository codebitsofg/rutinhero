import { SmileIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../../ui/button'

const CompleteFormBlock = () => {
  return (
    <div className='mx-auto w-full max-w-4xl rounded-2xl bg-neutral-100 p-6 py-6'>
      <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
        <div className='flex items-center gap-2 text-slate-700'>
          <SmileIcon className='h-5 w-5 text-green-600' />
          <span className='text-lg'>Complete the information to continue</span>
        </div>
        <Button
          variant='ghost'
          className='bg-white px-4 py-8 text-base text-slate-700 hover:bg-slate-100 hover:text-slate-900'
          onClick={() => {
            console.log('Show missing fields clicked')
          }}
        >
          View missing fields
        </Button>
      </div>
    </div>
  )
}

export default CompleteFormBlock
