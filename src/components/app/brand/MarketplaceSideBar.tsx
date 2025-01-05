'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../../ui/button'

const MarketplaceSideBar = () => {
  const router = useRouter()

  return (
    <div className='flex h-[calc(100vh-80px)] flex-col justify-end border-l-[1.5px] border-neutral-200'>
      <div className='bg-indigo-600 p-6 hover:bg-indigo-700'>
        <Button
          onClick={() => router.push('/app/campaigns/create')}
          className='h-14 w-full rounded-lg bg-white text-lg font-medium text-indigo-600 transition-colors'
        >
          Kampanya Oluştur
        </Button>
      </div>
    </div>
  )
}

export default MarketplaceSideBar
