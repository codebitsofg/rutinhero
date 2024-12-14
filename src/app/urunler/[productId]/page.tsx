'use client'

import ProductHero from '@/components/ProductHero'
import ProductIngredients from '@/components/ProductIngredients'
import ProductKeyPoints from '@/components/ProductKeyPoints'
import ProductPageReviewSection from '@/components/ProductPageReviewSection'
import ProductPageTips from '@/components/ProductPageTips'
import ReviewCard from '@/components/ReviewCard'
import ReviewCardVariation from '@/components/ReviewCardVariation'
import { useSearchParams } from 'next/navigation'

const page = () => {
  //  const searchParams = useSearchParams()
  //const productId = searchParams.get('productId')

  return (
    <div className="w-full px-8 pt-16 font-['Inter'] md:px-20 md:pt-32">
      <ProductHero />
      <div className='mx-auto my-20 mt-40 flex max-w-[1200px] flex-col-reverse items-start justify-between md:my-40 md:flex-row'>
        <ProductKeyPoints />
        <ProductIngredients />
      </div>
      <ProductPageReviewSection />
      <div className='mx-auto max-w-[1200px]'>
        <ReviewCardVariation />
        <ReviewCardVariation />
        <ReviewCardVariation />
        <ProductPageTips />
      </div>
    </div>
  )
}

export default page
