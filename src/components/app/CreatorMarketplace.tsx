'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Badge } from '../ui/badge'
import { Card } from '../ui/card'
import FilterBar from './FilterBar'
import MarketplaceSideBar from './MarketplaceSideBar'

interface Creator {
  id: string
  name: string
  avatar: string
  country: string
  averagePrice: number
  verified: boolean
  badges: string[]
  gallery: string[]
}

interface CreatorMarketplaceProps {
  creators: Creator[]
  onSelect?: (creator: Creator) => void
}

interface Filters {
  platform: string
  search: string
  location: string
  category: string
  gender: string
  age: string
  ethnicity: string
  priceRange: string
  engagementRate: string
  badges: string[]
}

const CreatorMarketplace = ({
  creators,
  onSelect,
}: CreatorMarketplaceProps) => {
  const router = useRouter()
  const [filters, setFilters] = useState<Filters>({
    platform: 'all',
    search: '',
    location: '',
    category: '',
    gender: '',
    age: '',
    ethnicity: '',
    priceRange: '',
    engagementRate: '',
    badges: [],
  })

  return (
    <div className='grid grid-cols-[1fr_0.3fr]'>
      <div className='space-y-4 px-7 py-10 h-[calc(100vh-80px)] overflow-y-scroll'>
        <div className='flex flex-col items-start gap-12'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='font-dm font-light text-4xl text-neutral-700'>
              İçerik Üreticileri
            </h2>
          </div>
          <div className='flex items-center gap-2'>
            <h2 className='font-medium text-2xl text-neutral-700'>Filtreler</h2>
          </div>
        </div>
        <FilterBar filters={filters} setFilters={setFilters} />

        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {creators.map((creator) => (
            <Card
              key={creator.id}
              className='flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer overflow-hidden'
              onClick={() => {
                router.push(`/app/pazaryeri/${creator.id}`)
                onSelect?.(creator)
              }}
            >
              <div className='gap-1 grid grid-cols-3 p-2'>
                {creator.gallery.slice(0, 9).map((image, index) => (
                  <div
                    key={index}
                    className='relative bg-slate-50 rounded-md w-full h-full overflow-hidden aspect-square'
                  ></div>
                ))}
              </div>

              <div className='p-4'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <div className='relative'>
                      <div className='bg-neutral-200 rounded-full w-16 h-16'></div>
                      {creator.verified && (
                        <div className='top-0 right-0 absolute'>
                          <Badge className='flex justify-center items-center bg-blue-500 p-0 rounded-full w-5 h-5'>
                            ✓
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className='flex flex-col-reverse justify-center items-center font-medium'>
                        <span className='text-neutral-700'>{creator.name}</span>
                      </p>
                      <p className='text-gray-500 text-sm'>{creator.country}</p>
                    </div>
                  </div>
                  <div className='text-right'>
                    <p className='font-medium'>~${creator.averagePrice}</p>
                    <p className='text-gray-500 text-sm'>Ort. Fiyat</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <MarketplaceSideBar />
    </div>
  )
}

export default CreatorMarketplace

{
  /* <div className='flex gap-1 mt-2'>
{creator.badges.map((badge, index) => (
  <Badge
    key={index}
    className='flex justify-center items-center bg-indigo-100/50 w-6 h-6 text-indigo-700'
    variant='secondary'
  >
    {badge}
  </Badge>
))}
</div> */
}
