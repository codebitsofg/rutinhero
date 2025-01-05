import React from 'react'
import './styles.css'
import BriefProgress from '@/components/app/brand/BriefProgress'
import BriefForm from '@/components/app/brand/BriefForm'
const page = () => {
  return (
    <div className='grid grid-cols-[0.35fr_1fr_0.35fr] bg-white'>
      <BriefProgress />
      <div className='container-scroll flex h-[90vh] flex-col overflow-y-scroll'>
        <BriefForm />
      </div>
      <div></div>
    </div>
  )
}

export default page
