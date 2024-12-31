import Navigation from '@/components/landing/Navigation'
import Footer from '@/components/landing/Footer'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
