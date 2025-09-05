import FQA from '@/components/landing/FQA'
import Features from '@/components/landing/Features'
import HomePageSearchWrap from '@/components/landing/HomePageSearchWrap'
import HowItWorks from '@/components/landing/WhatIsIt'
import LandingFeed from '@/components/landing/LandingFeed'
import React from 'react'
import MainHero from '@/components/landing/WorkWithBrands'
import WhyUGC from '@/components/landing/WhyUGC'
import OfferedServices from '@/components/landing/OfferedServices'

const page = () => {
  return (
    <div className='text-center md:text-left'>
      <div className=''>
        <MainHero
          description="In today's world, the voice of consumers is louder than ever, thanks to reviews, feedback, social shares, and other user-generated content. We help brands collect, manage, and activate UGC at scale to drive more customer engagement, conversions, and long-term loyalty."
          buttonText='Contact Us'
          imgSrc='/hero-brand.png'
          isReversed={true}
        >
          <h1 className='font-dm text-5xl font-bold text-neutral-800 lg:text-6xl xl:text-[6rem] xl:leading-[6rem]'>
            <span className='block'>Your Brand's Voice</span>
          </h1>
        </MainHero>
      </div>
      <WhyUGC />
      <OfferedServices />
      <Features />
      <FQA />
    </div>
  )
}

export default page
