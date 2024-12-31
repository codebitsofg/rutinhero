'use client'
import React, { useState, useEffect } from 'react'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { CreatorProfile } from '@/components/app/creator-profile/CreatorProfile'

export interface Creator {
  id: string
  name: string
  avatar: string
  country: string
  averagePrice: number
  verified: boolean
  badges: string[]
  gallery: string[]
  followers: number
  location: string
  engagementRate: string
  avgComments: number
  avgLikes: number
  avgViews: number
  cpe: number
  cpv: number
  medianViews: number
  rating?: number
  reviewCount?: number
}

export default function CreatorPage({
  params,
}: {
  params: { creatorId: string }
}) {
  const router = useRouter()
  const [creator, setCreator] = useState<Creator | null>(null)

  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      setCreator({
        id: params.creatorId,
        name: 'Eylül Gül',
        avatar: '',
        country: 'Turkey',
        location: 'Istanbul, Turkey',
        averagePrice: 500,
        verified: true,
        badges: ['Fitness', 'Lifestyle'],
        gallery: Array(12).fill(''),
        followers: 125000,
        engagementRate: '3.2%',
        avgComments: 230,
        avgLikes: 5600,
        avgViews: 15000,
        cpe: 11.53,
        cpv: 11.53,
        medianViews: 586,
        rating: 5.0,
        reviewCount: 6,
      })
    }, 1000)
  }, [params.creatorId])

  if (!creator) {
    return <div className='p-8'>Loading...</div>
  }

  return (
    <div className='mx-auto h-[calc(100vh-80px)]'>
      <CreatorProfile creator={creator} />
    </div>
  )
}

// ;<Button onClick={() => router.back()} variant='ghost' className='mb-4'>
//   ← Geri Dön
// </Button>
