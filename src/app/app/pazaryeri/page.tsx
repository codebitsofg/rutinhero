import React from 'react'
import CreatorMarketplace from '@/components/app/CreatorMarketplace'

const mockCreators = [
  {
    id: '1',
    name: 'Jane Cooper',
    avatar: '/avatars/jane.jpg',
    country: 'United States',
    averagePrice: 161,
    verified: true,
    badges: ['⭐️', '🎥', '✨'],
    gallery: [
      '/content/1-1.jpg',
      '/content/1-2.jpg',
      '/content/1-3.jpg',
      '/content/1-4.jpg',
      '/content/1-5.jpg',
      '/content/1-6.jpg',
      '/content/1-7.jpg',
      '/content/1-8.jpg',
      '/content/1-9.jpg',
      // ... more images
    ],
  },
  {
    id: '2',
    name: 'Jane Cooper',
    avatar: '/avatars/jane.jpg',
    country: 'United States',
    averagePrice: 161,
    verified: true,
    badges: ['⭐️', '🎥', '✨'],
    gallery: [
      '/content/1-1.jpg',
      '/content/1-2.jpg',
      '/content/1-3.jpg',
      '/content/1-4.jpg',
      '/content/1-5.jpg',
      '/content/1-6.jpg',
      '/content/1-7.jpg',
      '/content/1-8.jpg',
      '/content/1-9.jpg',
      // ... more images
    ],
  },
  {
    id: '3',
    name: 'Jane Cooper',
    avatar: '/avatars/jane.jpg',
    country: 'United States',
    averagePrice: 161,
    verified: true,
    badges: ['⭐️', '🎥', '✨'],
    gallery: [
      '/content/1-1.jpg',
      '/content/1-2.jpg',
      '/content/1-3.jpg',
      '/content/1-4.jpg',
      '/content/1-5.jpg',
      '/content/1-6.jpg',
      '/content/1-7.jpg',
      '/content/1-8.jpg',
      '/content/1-9.jpg',
      // ... more images
    ],
  },
  {
    id: '4',
    name: 'Jane Cooper',
    avatar: '/avatars/jane.jpg',
    country: 'United States',
    averagePrice: 161,
    verified: true,
    badges: ['⭐️', '🎥', '✨'],
    gallery: [
      '/content/1-1.jpg',
      '/content/1-2.jpg',
      '/content/1-3.jpg',
      '/content/1-4.jpg',
      '/content/1-5.jpg',
      '/content/1-6.jpg',
      '/content/1-7.jpg',
      '/content/1-8.jpg',
      '/content/1-9.jpg',
      // ... more images
    ],
  },
  {
    id: '5',
    name: 'Jane Cooper',
    avatar: '/avatars/jane.jpg',
    country: 'United States',
    averagePrice: 161,
    verified: true,
    badges: ['⭐️', '🎥', '✨'],
    gallery: [
      '/content/1-1.jpg',
      '/content/1-2.jpg',
      '/content/1-3.jpg',
      '/content/1-4.jpg',
      '/content/1-5.jpg',
      '/content/1-6.jpg',
      '/content/1-7.jpg',
      '/content/1-8.jpg',
      '/content/1-9.jpg',
      // ... more images
    ],
  },
  // ... more creators
]

const MarketplacePage = () => {
  return (
    <div className='h-full'>
      <CreatorMarketplace creators={mockCreators} />
    </div>
  )
}

export default MarketplacePage
