'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import {
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  Users,
  TrendingUp,
  Calendar,
  DollarSign,
  FileText,
  Settings,
  Image as ImageIcon,
  PlusCircle,
  PenBoxIcon,
} from 'lucide-react'
import { TaskProgressChart } from '@/components/app/TaskProgressChart'
import ParticipantsTable from '@/components/app/campaigns/ParticipantsTable'
import CampaignDetails from '@/components/app/campaigns/CampaignDetails'
import RequestsTable from '@/components/app/campaigns/RequestsTable'

// Dummy data for participant requests
const participantRequests = [
  {
    id: 1,
    name: 'John Doe',
    avatar: '/dashboard/avatar.svg',
    email: 'john@example.com',
    followers: '10.5K',
    status: 'pending',
    appliedAt: '2 hours ago',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: '/dashboard/avatar.svg',
    email: 'jane@example.com',
    followers: '25K',
    status: 'approved',
    appliedAt: '1 day ago',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    avatar: '/dashboard/avatar.svg',
    email: 'mike@example.com',
    followers: '5K',
    status: 'rejected',
    appliedAt: '3 days ago',
  },
]

// Dummy data for approved participants' tasks
const participantTasks = [
  {
    id: 1,
    name: 'Jane Smith',
    avatar: '/dashboard/avatar.svg',
    tasks: [
      {
        id: 1,
        name: 'Instagram Post',
        status: 'completed',
        dueDate: '2024-02-01',
      },
      { id: 2, name: 'Story Share', status: 'pending', dueDate: '2024-02-03' },
      {
        id: 3,
        name: 'Review Write',
        status: 'in_progress',
        dueDate: '2024-02-05',
      },
    ],
  },
  {
    id: 2,
    name: 'Alex Brown',
    avatar: '/dashboard/avatar.svg',
    tasks: [
      {
        id: 4,
        name: 'Instagram Post',
        status: 'completed',
        dueDate: '2024-02-01',
      },
      {
        id: 5,
        name: 'Story Share',
        status: 'completed',
        dueDate: '2024-02-03',
      },
      {
        id: 6,
        name: 'Review Write',
        status: 'completed',
        dueDate: '2024-02-05',
      },
    ],
  },
]

// Dummy data for campaign details
const campaignDetails = {
  name: 'Summer Collection Launch',
  brand: 'Fashion Brand X',
  budget: '$5,000',
  startDate: '2024-02-01',
  endDate: '2024-03-01',
  status: 'active',
  description:
    'Launch campaign for the summer collection featuring new designs and styles.',
  requirements: [
    'Minimum 10K followers',
    'Fashion/Lifestyle niche',
    '2+ years of experience',
    'High engagement rate',
  ],
  deliverables: ['Instagram Post', 'Instagram Story', 'Product Review'],
}

// Dummy data for analytics
const analyticsData = {
  totalReach: '150K',
  engagementRate: '4.8%',
  totalApplications: 45,
  approvedInfluencers: 12,
  completedTasks: 28,
  pendingTasks: 8,
  averageRating: 4.5,
}

// Dummy data for content submissions
const contentSubmissions = [
  {
    id: 1,
    influencer: 'Jane Smith',
    avatar: '/dashboard/avatar.svg',
    type: 'Instagram Post',
    submittedAt: '2024-02-01',
    status: 'pending_review',
    preview: '/dashboard/content-preview.jpg',
  },
  {
    id: 2,
    influencer: 'Alex Brown',
    avatar: '/dashboard/avatar.svg',
    type: 'Story Share',
    submittedAt: '2024-02-02',
    status: 'approved',
    preview: '/dashboard/content-preview.jpg',
  },
]

// Dummy data for payments
const payments = [
  {
    id: 1,
    influencer: 'Jane Smith',
    amount: '$500',
    status: 'pending',
    tasks: ['Instagram Post', 'Story Share'],
    date: '2024-02-05',
  },
  {
    id: 2,
    influencer: 'Alex Brown',
    amount: '$750',
    status: 'paid',
    tasks: ['Instagram Post', 'Story Share', 'Review'],
    date: '2024-02-03',
  },
]

// Task completion data
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

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'approved':
      return 'bg-green-100 text-green-800'
    case 'rejected':
      return 'bg-red-100 text-red-800'
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'in_progress':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className='h-5 w-5 text-green-600' />
    case 'pending':
      return <Clock className='h-5 w-5 text-yellow-600' />
    case 'in_progress':
      return <AlertCircle className='h-5 w-5 text-blue-600' />
    default:
      return null
  }
}

const CampaignManagementPage = () => {
  return (
    <div className='mx-auto h-[calc(100vh-88px)] px-24 py-5 text-neutral-700'>
      <div className='mb-4 grid grid-cols-[1fr_0.4fr] gap-6 pt-6'>
        <div className=''>
          <CampaignDetails />
        </div>
        <div className='flex flex-row items-start justify-start gap-3'>
          <div className='flex items-center justify-center gap-2 text-nowrap rounded-xl border-[1.5px] border-neutral-300 bg-neutral-50 p-3 text-base font-semibold'>
            <PlusCircle strokeWidth={1.5} className='h-6 w-6' /> Katılımcı Ekle
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
            İçerikler
          </TabsTrigger>
        </TabsList>

        <TabsContent value='participants'>
          <ParticipantsTable />
        </TabsContent>

        <TabsContent value='requests'>
          <RequestsTable />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CampaignManagementPage
