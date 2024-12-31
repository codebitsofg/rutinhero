'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Search,
  Building2,
  ChevronDown,
  RotateCw,
  NotebookPen,
  SprayCan,
} from 'lucide-react'

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='mx-auto mt-12 w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-800 shadow-lg'>
      <div className='space-y-4 p-4'>
        <div className='flex items-center space-x-2'>
          <Search className='text-gray-400' />
          <Input
            className='flex-1 border-none bg-transparent text-gray-800 placeholder-gray-400 focus:ring-0 focus-visible:ring-slate-200'
            placeholder='Marka, ürün, ve blog yazıları içinde bir arama yap'
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
          />
          <Button variant='ghost' size='icon'>
            <RotateCw className='h-4 w-4' />
          </Button>
          <Button variant='ghost' size='icon'>
            F
          </Button>
        </div>

        {isExpanded && (
          <>
            <div>
              <p className='mb-2 text-sm text-gray-500'>Aradığım şey...</p>
              <div className='flex space-x-2'>
                <Badge
                  variant='secondary'
                  className='bg-gray-100 text-gray-700'
                >
                  <SprayCan className='mr-1 h-3 w-3' /> Ürünler
                  <Button
                    variant='ghost'
                    size='sm'
                    className='ml-1 h-4 w-4 p-0'
                  >
                    ×
                  </Button>
                </Badge>
                <Badge
                  variant='secondary'
                  className='bg-gray-100 text-gray-700'
                >
                  <Building2 className='mr-1 h-3 w-3' /> Marka
                  <Button
                    variant='ghost'
                    size='sm'
                    className='ml-1 h-4 w-4 p-0'
                  >
                    ×
                  </Button>
                </Badge>
                <Badge
                  variant='secondary'
                  className='bg-gray-100 text-gray-700'
                >
                  <NotebookPen className='mr-1 h-3 w-3' /> Yazılar
                  <Button
                    variant='ghost'
                    size='sm'
                    className='ml-1 h-4 w-4 p-0'
                  >
                    ×
                  </Button>
                </Badge>
                <Button variant='ghost' size='sm' className='text-gray-500'>
                  Dahası <ChevronDown className='ml-1 h-3 w-3' />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SearchBar
