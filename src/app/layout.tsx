'use client'
import type { Metadata } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect, useState } from 'react'

// export const metadata: Metadata = {
//   title: {
//     default: 'Rutin Hero',
//     template: '%s | RutinHero',
//   },
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768)
    })
  }, [])
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/apple-icon.png' />
        <title>Rutin Hero</title>
      </head>
      {!isMobile ? (
        <body className='w-screen overflow-x-hidden'>
          {children}
          <GoogleAnalytics gaId='G-KBKQ2EWH2H' />
        </body>
      ) : (
        <body className='w-screen overflow-x-hidden'></body>
      )}
    </html>
  )
}
