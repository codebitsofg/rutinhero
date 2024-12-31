'use client'
import { useRef, useState, useEffect } from 'react'
import { Creator } from '@/app/app/pazaryeri/[creatorId]/page'
import { CreatorHeader } from './CreatorHeader'
import { CreatorStats } from './CreatorStats'
import { CreatorAudience } from './CreatorAudience'
import { CreatorPortfolio } from './CreatorPortfolio'

interface CreatorProfileProps {
  creator: Creator | null
}

export const CreatorProfile = ({ creator }: CreatorProfileProps) => {
  const [activeTab, setActiveTab] = useState('Creator')

  if (!creator) return null

  return (
    <div className='grid grid-cols-[1fr_1.5fr] h-[calc(100vh-80px)] overflow-hidden'>
      <div className='flex flex-col border-neutral-200 border-r'>
        <CreatorHeader creator={creator} />

        <div
          id='sections-container'
          className='flex-1 overflow-y-auto scroll-smooth'
        >
          <div>
            <CreatorStats creator={creator} />
          </div>
          <div>
            <CreatorAudience />
          </div>
          <div>
            <div className='p-6'>{/* Reviews content */}</div>
          </div>
        </div>
      </div>

      <CreatorPortfolio creator={creator} />
    </div>
  )
}
