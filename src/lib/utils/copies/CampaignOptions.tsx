import { AudioWaveform, Gift, Handshake, Medal } from 'lucide-react'
import { ReactNode } from 'react'

export interface Strategy {
  title: string
  description: string
  icon: ReactNode
  image: string
}

export interface Strategies {
  [key: string]: Strategy[]
}

export const strategies: Strategies = {
  ugc: [
    {
      title: 'Multi-Channel UGC Production',
      description:
        'Used to produce creative content for campaign goals by users.',
      icon: (
        <AudioWaveform className='mb-4 block text-xl font-light text-blue-800' />
      ),
      image: '/dashboard/options-ugc.png',
    },
    {
      title: 'Influencer Collaboration',
      description:
        "Used for collaboration with influencers to reflect the brand's voice. Approved content is published by influencers.",
      icon: (
        <Handshake className='mb-4 block text-xl font-light text-red-800' />
      ),
      image: '/dashboard/options-influencer.png',
    },
  ],
  reach: [
    {
      title: 'Barter Exchange',
      description:
        'Send your products to content creators, produce free UGC and gain engagement.',
      icon: <Gift className='mb-4 block text-xl font-light text-green-800' />,
      image: '/dashboard/win-win.png',
    },
  ],
  engagement: [
    {
      title: 'Tasks',
      description:
        'Set tasks and rewards, select participants, increase engagement and follow a flexible strategy.',
      icon: <Medal className='mb-4 block text-xl font-light text-yellow-800' />,
      image: '/dashboard/tasks.png',
    },
  ],
}
