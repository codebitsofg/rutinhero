'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { Instagram, Lock, Pencil } from 'lucide-react'
import Image from 'next/image'
import { Campaign } from '@/lib/types/campaigns'

export const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: 'name',
    header: 'Kampanya',
    size: 2,
    cell: ({ row }) => {
      return (
        <div className='flex items-center gap-4'>
          <div className='relative h-10 w-10'>
            {/* <Image
              src={row.original.avatar}
              alt={row.original.name}
              className='rounded-full object-cover'
              fill
            /> */}
            <div className='absolute -bottom-1 -right-1 rounded-full bg-white p-0.5'>
              <Instagram className='h-4 w-4 text-pink-600' />
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='text-xl text-neutral-700'>
              {row.original.name}
            </span>
            <span className='text-base text-neutral-400'>
              {row.original.subtitle}
            </span>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'date',
    header: 'Oluşturulma Tarihi',
    size: 2,
    cell: ({ row }) => {
      return (
        <span className='text-lg text-neutral-700'> {row.original.date} </span>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Son Durum',
    size: 1,
    cell: ({ row }) => {
      return (
        <div className='flex flex-col items-start justify-start gap-2'>
          <Button
            variant='secondary'
            className='h-8 bg-orange-50 text-sm text-orange-600 hover:bg-orange-100'
          >
            <Lock className='mr-2 h-4 w-4' />
            Yayınlamak için kredi satın al
          </Button>
          <Button
            variant='ghost'
            className='h-auto bg-slate-100 py-2 text-sm text-neutral-500'
          >
            <Pencil className='mr-2 h-4 w-4' /> Devam et
          </Button>
        </div>
      )
    },
  },
]
