import type { Metadata } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    default: 'Rutin Hero',
    template: '%s | RutinHero',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/apple-icon.png' />
      </head>
      <body className='w-screen overflow-x-hidden'>
        {children}
        <GoogleAnalytics gaId='G-KBKQ2EWH2H' />
      </body>
    </html>
  )
}
