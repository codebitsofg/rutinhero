'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Users, Image as ImageIcon, PlusCircle, PenBoxIcon } from 'lucide-react'
import { TaskProgressChart } from '@/components/app/brand/TaskProgressChart'
import ParticipantsTable from '@/components/app/brand/campaigns/ParticipantsTable'
import CampaignDetails from '@/components/app/brand/campaigns/CampaignDetails'
import RequestsTable from '@/components/app/brand/campaigns/RequestsTable'
import { ContentGallery } from '@/components/app/brand/campaigns/ContentGallery'
import { RoleBasedRender } from '@/components/auth/RoleBasedRender'
import CampaignPage from '@/components/app/creator/campaign/CampaignPage'

const contentSubmissions = [
  {
    id: 1,
    influencer: 'Jane Cooper',
    avatar: '/dashboard/avatar.svg',
    type: 'Instagram Post',
    submittedAt: '2024-02-01',
    status: 'approved',
    preview: '/dashboard/content-preview.jpg',
    location: 'United States',
    averagePrice: '161',
  },
  {
    id: 2,
    influencer: 'Alex Brown',
    avatar: '/dashboard/avatar.svg',
    type: 'Story Share',
    submittedAt: '2024-02-02',
    status: 'approved',
    preview: '/dashboard/content-preview.jpg',
    location: 'United States',
    averagePrice: '145',
  },
  {
    id: 3,
    influencer: 'Sarah Wilson',
    avatar: '/dashboard/avatar.svg',
    type: 'Instagram Post',
    submittedAt: '2024-02-03',
    status: 'approved',
    preview: '/dashboard/content-preview.jpg',
    location: 'United States',
    averagePrice: '178',
  },
  {
    id: 4,
    influencer: 'Sarah Wilson',
    avatar: '/dashboard/avatar.svg',
    type: 'Instagram Post',
    submittedAt: '2024-02-03',
    status: 'approved',
    preview: '/dashboard/content-preview.jpg',
    location: 'United States',
    averagePrice: '178',
  },
]

const taskCompletionData = [
  {
    name: 'Instagram Post',
    total: 15,
    completed: 12,
  },
  {
    name: 'Story Share',
    total: 20,
    completed: 15,
  },
  {
    name: 'Product Review',
    total: 10,
    completed: 8,
  },
  {
    name: 'Blog Post',
    total: 5,
    completed: 3,
  },
]

const Page = () => {
  return (
    <>
      <RoleBasedRender roles={['BRAND']}>
        <div className='mx-auto h-[calc(100vh-88px)] px-24 py-5 text-neutral-700'>
          <div className='mb-4 grid grid-cols-[1fr_0.4fr] gap-6 pt-6'>
            <div className=''>
              <CampaignDetails />
            </div>
            <div className='flex flex-row items-start justify-start gap-3'>
              <div className='flex items-center justify-center gap-2 text-nowrap rounded-xl border-[1.5px] border-neutral-300 bg-neutral-50 p-3 text-base font-semibold'>
                <PlusCircle strokeWidth={1.5} className='h-6 w-6' /> Katılımcı
                Ekle
              </div>
              <div className='flex items-center justify-center gap-2 text-nowrap rounded-xl border-[1.5px] border-neutral-300 bg-neutral-50 p-3 text-base font-semibold'>
                <PenBoxIcon strokeWidth={1.5} className='h-6 w-6' /> Düzenle
              </div>
              <TaskProgressChart data={taskCompletionData} />
            </div>
          </div>

          <Tabs defaultValue='requests' className='w-full'>
            <TabsList className='mb-8'>
              <TabsTrigger value='requests'>
                <Users className='mr-2 h-4 w-4' />
                İstekler
              </TabsTrigger>
              <TabsTrigger value='participants'>
                <Users className='mr-2 h-4 w-4' />
                Katılımcılar
              </TabsTrigger>
              <TabsTrigger value='content'>
                <ImageIcon className='mr-2 h-4 w-4' />
                Çıktılar
              </TabsTrigger>
            </TabsList>

            <TabsContent value='participants'>
              <ParticipantsTable />
            </TabsContent>

            <TabsContent value='requests'>
              <RequestsTable />
            </TabsContent>

            <TabsContent value='content'>
              <ContentGallery submissions={contentSubmissions} />
            </TabsContent>
          </Tabs>
        </div>
      </RoleBasedRender>

      <RoleBasedRender roles={['CREATOR']}>
        <CampaignPage />
      </RoleBasedRender>
    </>
  )
}

export default Page
