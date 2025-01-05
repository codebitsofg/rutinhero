import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

import { strategies } from '@/lib/utils/copies/CampaignOptions'
import StrategyCard from '../StrategyCard'

type Goal = 'ugc' | 'reach' | 'engagement'
const CampaignCreationSelection = () => {
  const [selectedGoal, setSelectedGoal] = useState<Goal>('ugc')
  return (
    <div className='space-y-16 px-12 pt-10'>
      <section className='space-y-6'>
        <h1 className='font-dm text-4xl font-light text-gray-700'>
          1. Kampanya Hedefini Seç
        </h1>
        <div className='grid grid-cols-1 gap-4 text-gray-600 md:grid-cols-3'>
          {[
            { title: 'Çok Kanallı UGC Üretimi', id: 'ugc' },
            { title: 'Hedef Kitle Erişimi', id: 'reach' },
            { title: 'Etkileşim', id: 'engagement' },
          ].map(({ title, id }) => (
            <Button
              key={id}
              variant={'outline'}
              className={`h-auto w-full justify-center rounded-2xl border-[1.3px] border-neutral-300 px-6 py-4 text-lg hover:bg-slate-100 ${selectedGoal === id ? 'border-neutral-700' : ''} font-light`}
              onClick={() => setSelectedGoal(id as Goal)}
            >
              {title}
            </Button>
          ))}
        </div>
      </section>

      <section className='space-y-6'>
        <h1 className='font-dm text-4xl font-light text-gray-700'>
          2. Kampanya Stratejisini Seç
        </h1>
        <div className='grid grid-cols-1 gap-12 text-gray-600 md:grid-cols-4'>
          {strategies[selectedGoal].map((strategy) => (
            <StrategyCard
              key={strategy.title}
              title={strategy.title}
              description={strategy.description}
              icon={strategy.icon}
              image={strategy.image}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default CampaignCreationSelection
