'use client'
import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Star,
  TrendingUp,
  Users,
  MessageSquare,
  UsersRound,
  ThumbsUp,
  CircleSlash,
} from 'lucide-react'

// Dummy data for requests
const requestsData = [
  {
    id: 1,
    username: 'leyla.gul',
    location: 'İstanbul',
    avatar: '/dashboard/avatar.svg',
    rating: '5.00',
    ratingCount: '(5)',
    followers: '41,281',
    er: '7.56',
    badges: ['En İyi', 'UGC Uzmanı'],
    portfolio: '/dashboard/avatar.svg',
    hasChat: true,
  },
  {
    id: 2,
    username: 'ayçatopaz',
    location: 'Ankara',
    avatar: '/dashboard/avatar.svg',
    rating: '4.95',
    ratingCount: '(12)',
    followers: '38,492',
    er: '6.89',
    badges: ['Yükselen', 'Güzellik Uzmanı'],
    portfolio: '/dashboard/avatar.svg',
    hasChat: false,
  },
  {
    id: 3,
    username: 'görkemcıgla',
    location: 'İzmir',
    avatar: '/dashboard/avatar.svg',
    rating: '4.85',
    ratingCount: '(8)',
    followers: '52,103',
    er: '8.12',
    badges: ['En İyi', 'Yaşam Tarzı'],
    portfolio: '/dashboard/avatar.svg',
    hasChat: true,
  },
]

const RequestsTable = () => {
  return (
    <div className='container-scroll flex h-[55vh] flex-col gap-4 overflow-y-auto'>
      <span className='text-base font-semibold'>11 İstek</span>
      <div className='grid gap-4'>
        {requestsData.map((request) => (
          <div
            key={request.id}
            className='flex items-center justify-between overflow-hidden rounded-2xl border-[1.5px] border-neutral-300 bg-white'
          >
            {/* Left section - Profile info */}
            <div className='flex flex-1 flex-col gap-6 px-6 pb-4 pt-5'>
              <div className='relative flex gap-4'>
                <div className='flex items-start'>
                  <Image
                    src={request.avatar}
                    alt={request.username}
                    width={40}
                    height={40}
                    className='aspect-square rounded-full bg-blue-100'
                  />
                </div>
                <div className='flex flex-col'>
                  <h3 className='font-dm text-lg font-medium'>
                    {request.username}
                  </h3>
                  <span className='text-sm text-neutral-400'>
                    {request.location}
                  </span>
                </div>
              </div>
              <div className=''>
                <div className='flex items-center gap-6 text-sm'>
                  <div className='flex items-center gap-1 rounded-xl bg-neutral-50 px-2 py-1.5 text-neutral-400'>
                    <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                    <span className='font-medium'>{request.rating}</span>
                    <span className=''>{request.ratingCount}</span>
                  </div>
                  <div className='flex items-center gap-1 rounded-xl bg-neutral-50 px-2 py-1.5 text-neutral-400'>
                    <span>{request.followers}</span>
                    <span className=''>takipçi</span>
                  </div>
                  <div className='flex items-center gap-1 rounded-xl bg-neutral-50 px-2 py-1.5 text-neutral-400'>
                    <span>{request.er}%</span>
                    <span className=''>ER</span>
                  </div>

                  {request.badges.map((badge, index) => (
                    <Badge
                      key={index}
                      variant='secondary'
                      className='rounded-xl bg-neutral-50 px-2 py-1.5 text-sm text-neutral-400'
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className='flex items-end justify-end gap-4 font-semibold'>
                <div className='flex items-center justify-center gap-2 rounded-lg bg-neutral-50 p-3 text-base'>
                  <UsersRound strokeWidth={1.5} className='h-6 w-6' /> Profili
                  Gör
                </div>
                <div className='flex items-center justify-center gap-2 rounded-lg bg-neutral-50 p-3 text-base'>
                  <ThumbsUp strokeWidth={1.5} className='h-6 w-6' />
                </div>
                <div className='flex items-center justify-center gap-2 rounded-lg bg-neutral-50 p-3 text-base'>
                  <CircleSlash strokeWidth={1.5} className='h-6 w-6' />
                </div>
              </div>
            </div>

            {/* Right section - Actions */}
            <div className='flex h-full gap-4'>
              <div className='h-full w-40 flex-1 self-stretch bg-neutral-50'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RequestsTable
