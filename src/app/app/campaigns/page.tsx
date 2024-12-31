import { Plus } from 'lucide-react'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DataTable } from '@/components/app/CampaignTable'
import { columns } from '@/lib/utils/tables/campaignColumn'
import { Campaign } from '@/lib/types/campaigns'

const page = () => {
  return (
    <div className='mx-auto px-24 py-5'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='font-dm text-4xl font-light text-neutral-700'>
          Kampanyalar
        </h1>
        <div className='flex items-center gap-6'>
          <Button className='h-14 w-48 gap-2 bg-neutral-700 py-4 text-lg'>
            <Plus className='h-4 w-4' />
            Yeni Kampanya
          </Button>
        </div>
      </div>

      <div className='mb-12 space-y-4'>
        <div className='flex items-start justify-stretch gap-2'>
          <Tabs defaultValue='active'>
            <TabsList>
              <TabsTrigger value='active'>Aktif Kampanyalar</TabsTrigger>
              <TabsTrigger value='drafts'>Draflar</TabsTrigger>
              <TabsTrigger value='closed'>Tamamlanmışlar</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className='flex-1 gap-4 self-stretch overflow-hidden'>
            <Input
              placeholder='Kampanya Ara...'
              className='h-full rounded-[12px] border-none bg-white py-[1.05rem] outline-white ring-white'
            />
          </div>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

const data: Campaign[] = [
  {
    id: '1',
    name: 'sdgsdgg',
    subtitle: 'Test — User-Generated Content',
    avatar: '/placeholder.svg?height=40&width=40',
    date: '21 December 2024, 15:47',
    status: 'draft',
    platform: 'instagram',
  },
  {
    id: '2',
    name: 'Test',
    subtitle: 'Test — User-Generated Content',
    avatar: '/placeholder.svg?height=40&width=40',
    date: '17 December 2024, 23:46',
    status: 'draft',
    platform: 'instagram',
  },
]

export default page
