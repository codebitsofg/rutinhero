'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {
  PlayCircle,
  FolderOpen,
  MessageCircle,
  Store,
  Users,
  Film,
  PencilRuler,
} from 'lucide-react'

const menuItems = [
  {
    title: 'Başlayalım',
    icon: PlayCircle,
    href: '/app',
  },
  {
    title: 'Kampanyalarım',
    icon: FolderOpen,
    href: '/app/campaigns',
  },
  {
    title: 'Sohbet',
    icon: MessageCircle,
    href: '/app/chat',
  },
  {
    title: 'Pazar Yeri',
    icon: Store,
    href: '/app/pazaryeri',
  },
  {
    title: 'Araç Takımı',
    icon: PencilRuler,
    href: '/app/tools',
    isComingSoon: true,
  },
  {
    title: 'İçeriklerim',
    icon: Film,
    href: '/creatives',
  },
]

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('/app')

  return (
    <nav className='border-r-[1.5px] border-neutral-200 p-4'>
      <div className='flex flex-col gap-1'>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.isComingSoon ? '#' : item.href}
            onClick={() => !item.isComingSoon && setActiveItem(item.href)}
            className={`relative flex items-center gap-3 rounded-lg px-5 py-4 text-gray-800 transition-colors ${
              activeItem === item.href
                ? 'border-2 border-black bg-slate-100'
                : 'border-2 border-transparent'
            } ${item.isComingSoon ? 'cursor-default opacity-50' : 'hover:bg-slate-100'}`}
          >
            <item.icon className='h-6 w-6' />
            <span className='text-[17px]'>{item.title}</span>
            {activeItem === item.href && (
              <span className='absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-black bg-red-500'></span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar
