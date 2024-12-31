import Sidebar from '@/components/app/Sidebar'
import TopBar from '@/components/app/TopBar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='fixed inset-0 grid h-screen w-screen grid-rows-[80px_1fr] overflow-hidden font-opensans'>
      <TopBar />
      <div className='grid grid-cols-[0.165fr_1fr]'>
        <Sidebar />
        <div className='overflow-y-auto bg-neutral-50'>{children}</div>
      </div>
    </main>
  )
}
