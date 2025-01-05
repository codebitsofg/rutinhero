import Sidebar from '@/components/app/shared/Sidebar'
import TopBar from '@/components/app/shared/TopBar'
import { RoleBasedRender } from '@/components/auth/RoleBasedRender'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='fixed inset-0 grid h-screen w-screen grid-rows-[80px_1fr] overflow-hidden scroll-smooth font-opensans'>
      <RoleBasedRender roles={['BRAND']}>
        <TopBar />
        <div className='grid grid-cols-[0.165fr_1fr]'>
          <Sidebar />
          <div className='overflow-y-auto bg-neutral-50'>{children}</div>
        </div>
      </RoleBasedRender>

      <RoleBasedRender roles={['CREATOR']}>
        <TopBar />
        <div className='overflow-y-auto scroll-smooth'>{children}</div>
      </RoleBasedRender>
    </main>
  )
}
