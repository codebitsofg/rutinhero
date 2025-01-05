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
      <span className='font-normal text-neutral-400 text-sm'>{label}</span>
    </div>
    <p className={`mt-1 text-base font-semibold`}>{value}</p>
  </div>
)

export const CreatorStats = ({ creator }: { creator: Creator }) => (
  <div className='p-6'>
    <div className='gap-x-12 gap-y-6 grid grid-cols-3'>
      <StatsItem label='Takipçiler' value={creator.followers} />
      <StatsItem label='Konum' value={creator.location} />
      <StatsItem label='Etkileşim Oranı' value={creator.engagementRate} />
      <StatsItem label='~ Yorum' value={creator.avgComments} />
      <StatsItem label='~ Beğeni' value={creator.avgLikes} />
      <StatsItem label='~ Görüntülenme' value={creator.avgViews} />
      <StatsItem label='CPE' value={`$${creator.cpe}`} />
      <StatsItem label='CPV / video' value={`$${creator.cpv}`} />
      <StatsItem label='~ Görüntülenme' value={creator.medianViews} />
    </div>
  </div>
)
