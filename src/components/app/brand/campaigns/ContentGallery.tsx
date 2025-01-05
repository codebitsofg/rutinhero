import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  CheckCircle,
  CircleSlash,
  MessageCircle,
  MessageCircleMore,
  ThumbsUp,
} from 'lucide-react'

interface ContentSubmission {
  id: number
  influencer: string
  avatar: string
  type: string
  submittedAt: string
  status: string
  preview: string
  location: string
  averagePrice: string
}

interface ContentGalleryProps {
  submissions: ContentSubmission[]
}

export function ContentGallery({ submissions }: ContentGalleryProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className='w-full'
    >
      <CarouselContent className='-ml-2 mt-16 md:-ml-4'>
        {submissions.map((submission) => (
          <CarouselItem
            key={submission.id}
            className='pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3'
          >
            <div className='group cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all hover:border-neutral-300'>
              <div className='relative aspect-square'></div>
              <div className='p-4'>
                <div className='flex items-center gap-3'>
                  <div className='relative h-10 w-10 flex-shrink-0 rounded-full bg-blue-500'>
                    <Image
                      src={'/dashboard/avatar.svg'}
                      alt={submission.influencer}
                      fill
                      className='rounded-full object-cover'
                    />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h3 className='truncate font-medium'>
                      {submission.influencer}
                    </h3>
                  </div>
                  <div className='flex flex-shrink-0 gap-4 text-right'>
                    <div className='flex items-center justify-center gap-2 rounded-lg bg-neutral-50 p-3 text-base'>
                      <ThumbsUp strokeWidth={1.5} className='h-6 w-6' />
                    </div>
                    <div className='flex items-center justify-center gap-2 rounded-lg bg-neutral-50 p-3 text-base'>
                      <MessageCircleMore
                        strokeWidth={1.5}
                        className='h-6 w-6'
                      />
                    </div>
                    <div className='flex items-center justify-center gap-2 rounded-lg bg-neutral-50 p-3 text-base'>
                      <CircleSlash strokeWidth={1.5} className='h-6 w-6' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
