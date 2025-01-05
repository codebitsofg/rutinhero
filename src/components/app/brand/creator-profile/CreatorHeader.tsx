import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Bookmark, Star } from 'lucide-react'
import { Creator } from '@/app/app/pazaryeri/[creatorId]/page'

export const CreatorHeader = ({ creator }: { creator: Creator }) => (
  <div className='border-neutral-200 p-6 border-b'>
    <div className='flex justify-between items-center gap-4'>
      <div className='flex justify-center items-center gap-4'>
        <div className='bg-neutral-200 rounded-full w-16 h-16'></div>

        <div className='flex-1'>
          <div className='flex items-center gap-2'>
            <h2 className='font-medium text-2xl'>{creator.name}</h2>
            <div className='flex gap-1'>
              <Badge className='bg-indigo-100/50 text-indigo-700'>🔒</Badge>
              <Badge className='bg-pink-100/50 text-pink-700'>⭐</Badge>
              <Badge className='bg-blue-100/50 text-blue-700'>👑</Badge>
              <Badge className='bg-yellow-100/50 text-yellow-700'>⚡</Badge>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-1'>
          <span className='font-medium text-2xl'>5.00</span>
          <Star className='fill-yellow-400 w-5 h-5 text-yellow-400' />
        </div>
        <Bookmark className='w-5 h-5 text-neutral-400' />
      </div>
    </div>
  </div>
)
