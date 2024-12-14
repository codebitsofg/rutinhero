import React from 'react'
import {
  Star,
  ChevronDown,
  Bookmark,
  Sun,
  TrendingUp,
  Droplet,
  TowerControl,
  Feather,
  Leaf,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const NewlyAddedProducts = () => {
  const tagIcons = {
    'Holy grails': <Sun className='mr-2 h-5 w-5' />,
    Trending: <TrendingUp className='mr-2 h-5 w-5' />,
    Hydrating: <Droplet className='mr-2 h-5 w-5' />,
    'Oil-control': <TowerControl className='mr-2 h-5 w-5' />,
    Soothing: <Feather className='mr-2 h-5 w-5' />,
    Nourish: <Leaf className='mr-2 h-5 w-5' />,
  }
  const placeholderData = [
    {
      name: 'Madagascar Centella Ampoule',
      brand: 'SKIN1004',
      rating: 4.0,
      type: 'Ampoule',
      origin: 'Korean',
      price: '$11.94',
      tags: ['vegan', 'cruelty-free'],
      description: 'Ampoule that contains 7 ingredients.',
    },
    {
      name: 'Advanced Snail 96 Mucin Power Essence',
      brand: 'COSRX',
      rating: 3.8,
      type: 'Essence',
      origin: 'Korean',
      price: '$10.99',
      tags: ['cruelty-free'],
      description: 'Essence that contains hyaluronic acid.',
    },
    {
      name: 'Relief Sun : Rice + Probiotics SPF 50+',
      brand: 'Beauty of Joseon',
      rating: 3.5,
      type: 'Sunscreen',
      origin: 'Korean',
      price: '$14.40',
      tags: ['vegan', 'cruelty-free', '50 SPF'],
      description: 'Sunscreen that contains niacinamide, uv1 and vitamin e.',
    },
    {
      name: 'Relief Sun : Rice + Probiotics SPF 50+',
      brand: 'Beauty of Joseon',
      rating: 3.5,
      type: 'Sunscreen',
      origin: 'Korean',
      price: '$14.40',
      tags: ['vegan', 'cruelty-free', '50 SPF'],
      description: 'Sunscreen that contains niacinamide, uv1 and vitamin e.',
    },
  ]
  return (
    <section className='mx-auto px-4 py-6 md:w-1/2 md:py-12'>
      <div className='mb-8 grid grid-cols-2 gap-2 md:flex md:flex-wrap md:items-center md:justify-between md:gap-0'>
        {[
          'Holy grails',
          'Trending',
          'Hydrating',
          'Oil-control',
          'Soothing',
          'Nourish',
        ].map((tag) => (
          <Badge
            key={tag}
            variant='secondary'
            className='flex cursor-pointer items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-4 hover:bg-slate-50'
          >
            {/* @ts-ignore */}
            {tagIcons[tag]}
            {tag}
          </Badge>
        ))}
      </div>
      <div className='space-y-4'>
        {placeholderData.map((product) => (
          <Card key={product.name} className='px-8 py-12'>
            <div className='flex gap-4'>
              <div className='flex-1 space-y-2'>
                <div className='flex items-start justify-between'>
                  <div>
                    <p className='text-sm text-gray-500'>{product.brand}</p>
                    <h3 className='font-medium'>{product.name}</h3>
                  </div>
                  <Bookmark className='h-5 w-5 text-gray-400' />
                </div>
                <div className='flex items-center gap-2'>
                  <Star className='h-4 w-4 fill-indigo-600 text-blue-900' />
                  <span>{product.rating}</span>
                  <span className='text-gray-500'>·</span>
                  <span className='text-gray-500'>{product.type}</span>
                  <span className='text-gray-500'>·</span>
                  <span className='text-gray-500'>{product.origin}</span>
                  <span className='text-gray-500'>·</span>
                  <span className='font-medium'>{product.price}</span>
                </div>
                <div className='flex gap-2'>
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant='secondary' className='text-xs'>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <details className='mt-4'>
              <summary className='flex cursor-pointer items-center text-sm text-gray-500'>
                Details <ChevronDown className='ml-1 h-4 w-4' />
              </summary>
              <p className='mt-2 text-sm text-gray-600'>
                {product.description}
              </p>
            </details>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default NewlyAddedProducts
