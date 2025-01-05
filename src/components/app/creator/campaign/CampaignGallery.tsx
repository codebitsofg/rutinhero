'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

interface Campaign {
  id: string
  title: string
  brand: string
  image: string
  lastChance?: boolean
}

const campaigns: Campaign[] = [
  {
    id: '1',
    title: 'Dry January with Betty Buzz Mocktails',
    brand: 'Bright Hoodies',
    image: '/campaigns/betty-buzz.jpg',
  },
  {
    id: '2',
    title: 'Probiotic for Gut-Brain Wellness: Feel the Difference',
    brand: 'Neurobiota',
    image: '/campaigns/neurobiota.jpg',
    lastChance: true,
  },
  {
    id: '3',
    title: 'Your Smoothest, Healthiest Hairstyle with Un-Frizz',
    brand: 'Brg',
    image: '/campaigns/virtue.jpg',
  },
  {
    id: '4',
    title: 'Probiotic for Gut-Brain Wellness: Feel the Difference',
    brand: 'Neurobiota',
    image: '/campaigns/neurobiota.jpg',
    lastChance: true,
  },
  {
    id: '5',
    title: 'Your Smoothest, Healthiest Hairstyle with Un-Frizz',
    brand: 'Brg',
    image: '/campaigns/virtue.jpg',
  },
  {
    id: '6',
    title: 'Your Smoothest, Healthiest Hairstyle with Un-Frizz',
    brand: 'Brg',
    image: '/campaigns/virtue.jpg',
  },
  {
    id: '7',
    title: 'Your Smoothest, Healthiest Hairstyle with Un-Frizz',
    brand: 'Brg',
    image: '/campaigns/virtue.jpg',
  },
]

export default function CampaignGallery() {
  return (
    <div className='p-12'>
      <div className='mb-12 space-y-4'>
        <h2 className='font-dm text-4xl font-semibold text-neutral-700'>
          Güncel Kampanyalar
        </h2>
        <p className='text-lg text-muted-foreground'>
          If you have an Instagram / Youtube account with enough subscribers,
          you can apply to become a RutinHero influencer.{' '}
          <Link
            href='/requirements'
            className='text-primary underline-offset-4 hover:underline'
          >
            See the requirements here!
          </Link>
        </p>
      </div>

      <div className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
        {campaigns.map((campaign) => (
          <Link key={campaign.id} href={`/app/campaigns/${campaign.id}`}>
            <Card className='group overflow-hidden border-none shadow-none'>
              <div className='relative aspect-[4/3] rounded-sm'>
                {campaign.lastChance && (
                  <Badge className='absolute right-4 top-4 z-10 rounded-sm bg-blue-500 px-2 py-1 text-sm font-light text-white shadow-none'>
                    SON ŞANS
                  </Badge>
                )}
                <div className='h-full w-full rounded-lg bg-neutral-100' />
              </div>

              <div className='space-y-1 py-4'>
                <h3 className='text-2xl font-semibold leading-none tracking-tight text-neutral-700'>
                  {campaign.title}
                </h3>
                <p className='text-lg text-neutral-600'>{campaign.brand}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
