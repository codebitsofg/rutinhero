import FQA from '@/components/FQA'
import Features from '@/components/Features'
import HomePageSearchWrap from '@/components/HomePageSearchWrap'
import HowItWorks from '@/components/WhatIsIt'
import LandingFeed from '@/components/LandingFeed'
import React from 'react'
import MainHero from '@/components/WorkWithBrands'
import WhyUGC from '@/components/WhyUGC'
import OfferedServices from '@/components/OfferedServices'

const page = () => {
  return (
    <div className='text-center md:text-left'>
      <div className='bg-blue-50'>
        <MainHero
          description='In today’s world, consumer voices are louder than ever, expressed through reviews, feedback, social posts and other user-generated content at every stage of the customer journey. We help brands collect, manage, and activate UGC at scale to drive more customer engagement, increase conversions, and build lasting loyalty.'
          buttonText='Contact Us'
          imgSrc='/hero-cards.png'
        >
          <h1 className='g:text-6xl font-dm text-5xl font-extrabold xl:text-8xl xl:leading-[7rem]'>
            <span className='block'>
              <span className='text-blue-500'>Your Dream</span>
            </span>
            Achievements
          </h1>
        </MainHero>
      </div>
      <WhyUGC />
      <OfferedServices />
    </div>
  )
}

export default page
