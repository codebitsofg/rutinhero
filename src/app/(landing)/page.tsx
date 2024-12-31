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
          description="Günümüz dünyasında, müşteri yolculuğunun her aşamasında incelemeler, geri bildirimler, sosyal paylaşımlar ve kullanıcı tarafından oluşturulan diğer içerikler aracılığıyla tüketicilerin sesi her zamankinden daha yüksek çıkıyor. Daha fazla müşteri etkileşimi sağlamak, dönüşümleri artırmak ve kalıcı sadakat oluşturmak için markaların UGC'yi geniş ölçekte toplamasına, yönetmesine ve etkinleştirmesine yardımcı oluyoruz."
          buttonText='İletişime Geç'
          imgSrc='/hero-brand.png'
          isReversed={true}
        >
          <h1 className='font-dm text-5xl font-bold text-neutral-800 lg:text-6xl xl:text-[6rem] xl:leading-[6rem]'>
            <span className='block'>Markanın sesi </span>
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
