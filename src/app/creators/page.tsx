import CollaborateWith from '@/components/CollaborateWith'
import FQA from '@/components/FQA'
import Features from '@/components/Features'
import HomePageSearchWrap from '@/components/HomePageSearchWrap'
import HowItWorks from '@/components/WhatIsIt'
import LandingFeed from '@/components/LandingFeed'
import WorkWithBrands from '@/components/WorkWithBrands'
import React from 'react'
import WhatIsIt from '@/components/WhatIsIt'
import JoinNow from '@/components/JoinNow'
import MainHero from '@/components/WorkWithBrands'

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
