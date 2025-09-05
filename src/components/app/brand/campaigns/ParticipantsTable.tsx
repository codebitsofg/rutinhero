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
import Image from 'next/image'
import {
  BadgeCheck,
  Clock,
  Eye,
  MessageCircleMore,
  Package,
} from 'lucide-react'

// Dummy data for the table
const participantsData = [
  {
    id: 1,
    name: 'Malik Wiwoho',
    avatar: '/dashboard/avatar.svg',
    shipmentStatus: 'delivered',
    daysLeft: 5,
    taskStatus: 'in_progress',
    lastUpdate: '2 saat',
  },
  {
    id: 2,
    name: 'Nancy Aulia',
    avatar: '/dashboard/avatar.svg',
    shipmentStatus: 'pending',
    daysLeft: 3,
    taskStatus: 'completed',
    lastUpdate: '1 gün',
  },
  {
    id: 3,
    name: 'Natasha Viresta',
    avatar: '/dashboard/avatar.svg',
    shipmentStatus: 'delivered',
    daysLeft: 7,
    taskStatus: 'in_progress',
    lastUpdate: '5 saat',
  },
  {
    id: 4,
    name: 'Wilona Hamda',
    avatar: '/dashboard/avatar.svg',
    shipmentStatus: 'shipped',
    daysLeft: 2,
    taskStatus: 'pending',
    lastUpdate: '3 gün',
  },
  {
    id: 5,
    name: 'Wilona Hamda',
    avatar: '/dashboard/avatar.svg',
    shipmentStatus: 'shipped',
    daysLeft: 2,
    taskStatus: 'pending',
    lastUpdate: '3 gün',
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'delivered':
      return 'bg-green-100 text-green-800'
    case 'shipped':
      return 'bg-blue-100 text-blue-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'in_progress':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const ParticipantsTable = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(5) // Number of rows per page

  const paginatedData = participantsData.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize,
  )

  return (
    <div className='rounded-2xl bg-white'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Participant</TableHead>
            <TableHead>Shipment Status</TableHead>
            <TableHead>Days Left</TableHead>
            <TableHead>Last Status</TableHead>
            <TableHead>Last Update </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((participant) => (
            <TableRow className='h-16 border-none' key={participant.id}>
              <TableCell className='flex items-center gap-3 p-7'>
                <Image
                  src={participant.avatar}
                  alt={participant.name}
                  width={40}
                  height={40}
                  className='rounded-full bg-gray-100'
                />
                <span className='text-xl font-medium text-neutral-700'>
                  {participant.name}
                </span>
              </TableCell>
              <TableCell>
                <div className='flex items-center gap-2 text-lg'>
                  <Badge
                    className={`${getStatusColor(
                      participant.shipmentStatus,
                    )} h-8 rounded-md px-4 text-sm`}
                  >
                    {participant.shipmentStatus.charAt(0).toUpperCase() +
                      participant.shipmentStatus.slice(1)}
                  </Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center gap-2 text-lg'>
                  <span>{participant.daysLeft} days</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  className={`${getStatusColor(participant.taskStatus)} h-8 rounded-md px-4 text-sm`}
                >
                  {participant.taskStatus
                    .split('_')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </Badge>
              </TableCell>
              <TableCell className='text-lg text-gray-400'>
                {participant.lastUpdate}
              </TableCell>
              <TableCell className='gap-3 text-lg text-neutral-700'>
                <div className='flex items-center justify-center gap-2'>
                  <MessageCircleMore strokeWidth={1.7} className='h-7 w-7' />
                  <Eye strokeWidth={1.7} className='h-7 w-7' />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className='relative flex items-center justify-center bg-neutral-50 p-3 pb-3'>
        <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 text-neutral-300'>
          Page <strong>{pageIndex + 1}</strong> /{' '}
          <strong>{Math.ceil(participantsData.length / pageSize)}</strong>
        </span>
        <div>
          <button
            onClick={() => setPageIndex((old) => Math.max(0, old - 1))}
            disabled={pageIndex === 0}
            className='mr-4 rounded-xl bg-white px-6 py-3'
          >
            Previous
          </button>
          <button
            onClick={() =>
              setPageIndex((old) =>
                Math.min(
                  Math.ceil(participantsData.length / pageSize) - 1,
                  old + 1,
                ),
              )
            }
            disabled={
              pageIndex >= Math.ceil(participantsData.length / pageSize) - 1
            }
            className='rounded-xl bg-white px-6 py-3'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ParticipantsTable
