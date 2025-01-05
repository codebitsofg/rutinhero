'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Badge } from '../../ui/badge'
import { Card } from '../../ui/card'
import FilterBar from './FilterBar'
import MarketplaceSideBar from './MarketplaceSideBar'

interface Creator {
  id: string
  name: string
  avatar: string
  country: string
  averagePrice: number
  isBarter: boolean
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
      <div className='h-[calc(100vh-80px)] space-y-4 overflow-y-scroll px-7 py-10'>
        <div className='flex flex-col items-start gap-12'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='font-dm text-4xl font-light text-neutral-700'>
              İçerik Üreticileri
            </h2>
          </div>
          <div className='flex items-center gap-2'>
            <h2 className='text-2xl font-medium text-neutral-700'>Filtreler</h2>
          </div>
        </div>
        <FilterBar filters={filters} setFilters={setFilters} />

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {creators.map((creator) => (
            <Card
              key={creator.id}
              className='relative flex cursor-pointer flex-col justify-between overflow-hidden transition-shadow hover:shadow-md'
              onClick={() => {
                router.push(`/app/pazaryeri/${creator.id}`)
                onSelect?.(creator)
              }}
            >
              <div className='grid grid-cols-3 gap-1 p-2'>
                {creator.gallery.slice(0, 9).map((image, index) => (
                  <div
                    key={index}
                    className='relative aspect-square h-full w-full overflow-hidden rounded-md bg-slate-50'
                  ></div>
                ))}
              </div>

              <div className='p-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='relative'>
                      <div className='h-16 w-16 rounded-full bg-neutral-200'></div>
                      {creator.verified && (
                        <div className='absolute right-0 top-0'>
                          <Badge className='flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 p-0'>
                            ✓
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className='flex flex-col-reverse items-center justify-center font-medium'>
                        <span className='text-neutral-700'>{creator.name}</span>
                      </p>
                      <p className='text-sm text-gray-500'>{creator.country}</p>
                    </div>
                  </div>
                  <div className='text-right'>
                    <p className='font-medium'>~${creator.averagePrice}</p>
                    <p className='text-sm text-gray-500'>Ort. Fiyat</p>
                  </div>
                </div>
              </div>

              {creator.isBarter && (
                <div className='absolute bottom-32 left-7 z-10'>
                  <img src='/dashboard/barter.svg' className='h-8 w-8' />
                </div>
              )}
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
