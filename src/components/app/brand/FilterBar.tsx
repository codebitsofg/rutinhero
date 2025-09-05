'use client'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { Input } from '../../ui/input'

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

interface FilterBarProps {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

const FilterBar = ({ filters, setFilters }: FilterBarProps) => {
  return (
    <div className='flex flex-wrap items-stretch gap-4 pb-6'>
      <div className='flex gap-2'>
        <Select
          value={filters.platform}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, platform: value }))
          }
        >
          <SelectTrigger className='h-[3.5rem] w-[200px] rounded border-[1.5px] border-neutral-300 text-xl font-medium text-neutral-700'>
            <SelectValue placeholder='Platform' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Platforms</SelectItem>
            <SelectItem value='instagram'>Instagram</SelectItem>
            <SelectItem value='tiktok'>TikTok</SelectItem>
            <SelectItem value='youtube'>YouTube</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='flex overflow-hidden rounded border-[1.5px] border-neutral-300 bg-white'>
        {['Location', 'Category', 'Gender', 'Age', 'Price'].map((filter) => (
          <button
            key={filter}
            className='border-neutral-400 px-4 py-2 text-xl font-medium text-neutral-700 hover:bg-slate-100'
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar
