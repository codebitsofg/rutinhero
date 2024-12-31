import { LayoutGrid, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Card } from '@/components/ui/card'

const ProductIngredients = () => {
  const ingredients = [
    'Ethylhexyl Palmitate',
    'Sorbeth-30 Tetraoleate',
    'Sorbitan Sesquioleate',
    'Caprylic/Capric Triglyceride',
    'Butyl Avocadate',
    'Parfum',
    'Helianthus Annuus Seed Oil',
    'Macadamia Ternifolia Seed Oil',
    'Olea Europaea Fruit Oil',
    'Simmondsia Chinensis Seed Oil',
    'Vitis Vinifera Seed Oil',
    'Caprylyl Glycol',
    'Ethylhexylglycerin',
    'Curcuma Longa Root Extract',
    'Melia Azadirachta Flower Extract',
    'Tocopherol',
    'Melia Azadirachta Leaf Extract',
    'Houttuynia Cordata Extract',
    'Corallina Officinalis Extract',
    'Melia Azadirachta Bark Extract',
    'Moringa Oleifera Seed Oil',
    'Ocimum Sanctum Leaf Extract',
  ]

  return (
    <div className='mx-auto mb-20 flex-1 space-y-8 md:mb-0'>
      <div className='flex items-center justify-between'>
        <div className='flex items-baseline gap-3'>
          <h2 className='text-2xl font-semibold'>Ingredients</h2>
          <span className='text-2xl text-gray-400'>22</span>
        </div>
      </div>

      <Card className='p-6 shadow-none'>
        <p className='text-justify leading-relaxed text-gray-700 md:text-left'>
          {ingredients.join(', ')}
        </p>
      </Card>

      <div className='space-y-4'>
        <div>
          <h3 className='mb-2 text-2xl font-semibold'>Ingredient Ratings</h3>
          <p className='text-gray-500'>
            Based on the number of likes and dislikes each ingredient has
            received.
          </p>
        </div>

        <div className='space-y-4'>
          <div className='flex h-12 overflow-hidden rounded-lg'>
            <div className='flex w-[31.8%] items-center justify-center bg-green-200 text-sm font-medium'>
              7
            </div>
            <div className='flex w-[27.3%] items-center justify-center bg-yellow-200 text-sm font-medium'>
              6
            </div>
            <div className='flex w-[36.4%] items-center justify-center bg-red-200 text-sm font-medium'>
              8
            </div>
            <div className='flex w-[4.5%] items-center justify-center bg-gray-200 text-sm font-medium'>
              1
            </div>
          </div>

          <div className='flex items-center justify-center gap-6 md:justify-start'>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded-full bg-green-200'></div>
              <span className='text-sm text-gray-600'>liked</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded-full bg-yellow-200'></div>
              <span className='text-sm text-gray-600'>mixed</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded-full bg-red-200'></div>
              <span className='text-sm text-gray-600'>disliked</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded-full bg-gray-200'></div>
              <span className='text-sm text-gray-600'>not rated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductIngredients
