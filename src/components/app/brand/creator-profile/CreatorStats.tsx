import { Info } from 'lucide-react'
import { Creator } from '@/app/app/pazaryeri/[creatorId]/page'

const StatsItem = ({
  label,
  value,
}: {
  label: string
  value: string | number
}) => (
  <div>
    <div className='flex items-center gap-1 text-neutral-500'>
      <span className='text-sm font-normal text-neutral-400'>{label}</span>
    </div>
    <p className={`mt-1 text-base font-semibold`}>{value}</p>
  </div>
)

export const CreatorStats = ({ creator }: { creator: Creator }) => (
  <div className='p-6'>
    <div className='grid grid-cols-3 gap-x-12 gap-y-6'>
      <StatsItem label='Followers' value={creator.followers} />
      <StatsItem label='Location' value={creator.location} />
      <StatsItem label='Engagement Rate' value={creator.engagementRate} />
      <StatsItem label='~ Comments' value={creator.avgComments} />
      <StatsItem label='~ Likes' value={creator.avgLikes} />
      <StatsItem label='~ Views' value={creator.avgViews} />
      <StatsItem label='CPE' value={`$${creator.cpe}`} />
      <StatsItem label='CPV / video' value={`$${creator.cpv}`} />
      <StatsItem label='~ Views' value={creator.medianViews} />
    </div>
  </div>
)
