'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const MarketplaceSideBar = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col justify-end border-neutral-200 border-l-[1.5px] h-[calc(100vh-80px)]'>
      <div className='bg-indigo-600 hover:bg-indigo-700 p-6'>
        <Button
          onClick={() => router.push('/app/campaigns/create')}
          className='bg-white rounded-lg w-full h-14 font-medium text-indigo-600 text-lg transition-colors'
        >
          Kampanya Oluştur
        </Button>
      </div>
    </div>
  )
}

export default MarketplaceSideBar
