import CollaborateWith from '@/components/landing/CollaborateWith'
import FQA from '@/components/landing/FQA'
import Features from '@/components/landing/Features'
import HomePageSearchWrap from '@/components/landing/HomePageSearchWrap'
import HowItWorks from '@/components/landing/WhatIsIt'
import LandingFeed from '@/components/landing/LandingFeed'
import WorkWithBrands from '@/components/landing/WorkWithBrands'
import React from 'react'
import WhatIsIt from '@/components/landing/WhatIsIt'
import JoinNow from '@/components/landing/JoinNow'
import MainHero from '@/components/landing/WorkWithBrands'

const page = () => {
  const heroDescription =
    'We connect content creators with top brands! Test new products, discover best practices, and join our community onSkeepers. Work with prestigious and indie brands in diverse categories, including beauty, food, fashion, technology,travel, and more. Get access to exclusive products, services, and launches in exchange for creative, authenticcontent reviews on your social media platforms.'
  return (
    <div className='font-opensans'>
      <MainHero
        buttonText='Join now to create your profile'
        description={heroDescription}
        imgSrc='/hero-cards.png'
      >
        <h1 className='g:text-6xl font-dm text-5xl font-extrabold xl:text-8xl xl:leading-[7rem]'>
          <span className='block'>
            <span className='text-blue-500'>Your Dream</span>
          </span>
          Collaboration
        </h1>
      </MainHero>
      <CollaborateWith />
      <WhatIsIt />
      <FQA />
      <Features />
      <JoinNow />
    </div>
  )
}

export default page
