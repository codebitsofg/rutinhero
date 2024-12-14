import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://skknshore.com'),
  title: 'Rutin Hero',
  description:
    'Cilt bakımın için ipuçları ve daha fazlası. Cilt bakımında merak edilenler, rehberler, doğru bilinen yanlışlar ve cilt bakım elemanlarının derinlemesine çözümlenmesi.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '200x200',
      url: '/apple-icon.png',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='tr'>
      <body className=' w-screen overflow-x-hidden'>
        <Navigation />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-KBKQ2EWH2H' />
    </html>
  )
}
