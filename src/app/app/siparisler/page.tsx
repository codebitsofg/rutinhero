'use client'
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Eye, MessageCircle } from 'lucide-react'
import Link from 'next/link'

// Dummy data for orders
const ordersData = [
  {
    id: 1,
    campaignName: 'Summer Collection 2024',
    status: 'pending',
    date: '2024-01-15',
    price: '₺1,500',
    lastUpdate: '2 saat önce',
  },
  {
    id: 2,
    campaignName: 'Spring Fashion Line',
    status: 'applied',
    date: '2024-01-14',
    price: '₺2,000',
    lastUpdate: '1 gün önce',
  },
  {
    id: 3,
    campaignName: 'Winter Essentials',
    status: 'published',
    date: '2024-01-13',
    price: '₺1,800',
    lastUpdate: '3 gün önce',
  },
]

const tabs = [
  { name: 'Tümü', count: 0 },
  { name: 'Başvurulanlar', count: 0 },
  { name: 'Onaylananlar', count: 0 },
  { name: 'Yayınlananlar', count: 0 },
  { name: 'Arşivlenenler', count: 0 },
]

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'applied':
      return 'bg-blue-100 text-blue-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'published':
      return 'bg-green-100 text-green-800'
    case 'expired':
      return 'bg-red-100 text-red-800'
    case 'archived':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('All')

  return (
    <div className='h-full bg-neutral-50 px-4 py-8'>
      <div className='mx-auto max-w-[1200px]'>
        {/* Tabs */}
        <div className='mb-8 flex space-x-8 border-b'>
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative pb-8 text-lg ${
                activeTab === tab.name
                  ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-600'
                  : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              {tab.name}{' '}
              <span className='ml-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs'>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <h1 className='mb-8 font-dm text-3xl text-neutral-700'>Siparişlerin</h1>
        {/* Orders Table */}
        {ordersData.length > 0 ? (
          <div className='overflow-hidden rounded-2xl bg-white text-neutral-700'>
            <div className='overflow-x-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='min-w-[200px]'>Kampanya</TableHead>
                    <TableHead className='min-w-[120px]'>Durum</TableHead>
                    <TableHead className='min-w-[120px]'>Tarih</TableHead>
                    <TableHead className='min-w-[140px]'>
                      Son Güncelleme
                    </TableHead>
                    <TableHead className='min-w-[100px]'>İşlemler</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ordersData.map((order) => (
                    <TableRow
                      key={order.id}
                      className='h-16 cursor-pointer border-none bg-white transition-colors hover:bg-neutral-50'
                    >
                      <TableCell className='py-8 text-lg font-medium'>
                        {order.campaignName}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${getStatusColor(order.status)} px-3 py-1`}
                        >
                          {order.status.charAt(0).toUpperCase() +
                            order.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell className='text-neutral-400'>
                        {order.lastUpdate}
                      </TableCell>
                      <TableCell>
                        <div className='flex items-center gap-2'>
                          <Button
                            variant='ghost'
                            size='icon'
                            className='h-8 w-8 hover:bg-neutral-100'
                          >
                            <MessageCircle className='h-6 w-6' />
                          </Button>
                          <Button
                            variant='ghost'
                            size='icon'
                            className='h-8 w-8 hover:bg-neutral-100'
                          >
                            <Eye className='h-6 w-6' />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          <div className='rounded-lg text-center'>
            <div className='mx-auto flex max-w-[550px] flex-col items-center justify-center gap-6 border border-neutral-300 bg-white p-8'>
              <p className='text-2xl font-bold text-gray-600'>Burası boş</p>
              <p className='text-lg font-normal text-gray-600'>
                Henüz bir sipariş vermedin
              </p>
              <Link href='/app'>
                <Button className='bg-purple-700 px-7 py-7 text-lg font-semibold'>
                  İlk ürününü sipariş et
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrdersPage
