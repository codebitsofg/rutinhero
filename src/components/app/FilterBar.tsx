'use client'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Input } from '../ui/input'

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
          <SelectTrigger className='border-[1.5px] border-neutral-300 rounded w-[200px] h-[3.5rem] font-medium text-neutral-700 text-xl'>
            <SelectValue placeholder='Platform' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>Tüm Platformlar</SelectItem>
            <SelectItem value='instagram'>Instagram</SelectItem>
            <SelectItem value='tiktok'>TikTok</SelectItem>
            <SelectItem value='youtube'>YouTube</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='flex border-[1.5px] border-neutral-300 bg-white rounded overflow-hidden'>
        {['Konum', 'Kategori', 'Cinsiyet', 'Yaş', 'Fiyat'].map((filter) => (
          <button
            key={filter}
            className='border-neutral-400 hover:bg-slate-100 px-4 py-2 font-medium text-neutral-700 text-xl'
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar
