'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Flashlight, Star, Handshake, ChevronRight } from 'lucide-react'

const ProductKeyPoints = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const sections = [
    {
      id: 'ingredients',
      title: 'Notable Ingredients',
      icon: <Flashlight className='h-6 w-6 text-blue-500' />,
      iconBg: 'bg-blue-50',
      items: [
        {
          name: 'Vitamin E',
          description:
            'An antioxidant that protects the skin from free radicals and helps in skin repair.',
        },
        {
          name: 'Antioxidants',
          description:
            'Substances that protect the skin from damage caused by free radicals and environmental stressors.',
        },
      ],
    },
    {
      id: 'benefits',
      title: 'Benefits',
      icon: <Star className='h-6 w-6 text-green-500' />,
      iconBg: 'bg-green-50',
      items: [
        {
          name: 'Hydrating',
          count: 3,
          description:
            'Provides moisture to the skin, helping to keep it plump and supple.',
        },
        {
          name: 'Redness Reducing',
          description:
            'Helps to calm inflammation and reduce the appearance of redness in the skin.',
        },
        {
          name: 'Anti-Aging',
          description:
            'Helps to reduce the appearance of fine lines and wrinkles.',
        },
        {
          name: 'Scar Healing',
          description:
            'May help in the healing process of scars and improve their appearance.',
        },
        {
          name: 'Brightening',
          description:
            'Helps to even out skin tone and improve overall skin radiance.',
        },
      ],
    },
    {
      id: 'concerns',
      title: 'Concerns',
      icon: <Handshake className='h-6 w-6 text-red-500' />,
      iconBg: 'bg-red-50',
      items: [
        {
          name: 'May Worsen Oily Skin',
          count: 2,
          description:
            'Could potentially increase oil production in already oily skin types.',
        },
        {
          name: 'Acne Trigger',
          count: 2,
          description: 'May cause breakouts in acne-prone skin.',
        },
        {
          name: 'Irritating',
          description: 'Could cause skin irritation in sensitive individuals.',
        },
        {
          name: 'Rosacea',
          description: 'May exacerbate symptoms in individuals with rosacea.',
        },
        {
          name: 'Eczema',
          description:
            'Could potentially trigger eczema flare-ups in susceptible individuals.',
        },
      ],
    },
  ]

  const getBadgeColor = (sectionId: string) => {
    switch (sectionId) {
      case 'ingredients':
        return 'bg-blue-50 text-blue-700 hover:bg-blue-100'
      case 'benefits':
        return 'bg-green-50 text-green-700 hover:bg-green-100'
      case 'concerns':
        return 'bg-red-50 text-red-700 hover:bg-red-100'
      default:
        return ''
    }
  }

  return (
    <div className='mx-auto flex-1'>
      <div className='relative'>
        <div className='absolute bottom-8 left-[27px] top-[60px] w-[2px] bg-gradient-to-b from-blue-100 via-green-100 to-red-100' />
        {sections.map((section, index) => (
          <div key={section.id} className='relative mb-12 flex gap-6'>
            <div
              className={`h-14 w-14 rounded-full ${section.iconBg} flex shrink-0 items-center justify-center`}
            >
              {section.icon}
            </div>
            <div className='flex-grow pt-2'>
              <h3 className='mb-3 text-xl font-semibold'>{section.title}</h3>
              <div className='mb-4 flex flex-wrap gap-2'>
                {section.items.map((item, itemIndex) => (
                  <Badge
                    variant='secondary'
                    className={`${getBadgeColor(section.id)} cursor-help`}
                  >
                    {item.name}
                    {item.count && (
                      <span
                        className={`ml-1 px-1.5 py-0.5 text-xs ${section.id === 'benefits' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} rounded-full`}
                      >
                        {item.count}
                      </span>
                    )}
                  </Badge>
                ))}
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant='outline'
                    size='sm'
                    className='flex items-center'
                  >
                    Learn more
                    <ChevronRight className='ml-2 h-4 w-4' />
                  </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>{section.title}</DialogTitle>
                  </DialogHeader>
                  <div className='grid gap-4 py-4'>
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className='grid grid-cols-4 items-center gap-4'
                      >
                        <Badge
                          variant='secondary'
                          className={`${getBadgeColor(section.id)} justify-self-start`}
                        >
                          {item.name}
                        </Badge>
                        <p className='col-span-3 text-sm text-muted-foreground'>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProductKeyPoints
