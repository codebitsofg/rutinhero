import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const CampaignDetails = () => {
  return (
    <div>
      <div className='flex items-start gap-4'>
        <span>
          <div className='h-20 w-20 rounded-sm bg-neutral-200'></div>
        </span>
        <div>
          <h1 className='mb-1 font-dm text-3xl font-medium text-neutral-700'>
            Bright Hoodies Yeni Ürünler
          </h1>
          <p className='text-lg font-light text-neutral-400'>Bright Hoodies</p>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails
