import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import Image from 'next/image'
import { TrendingUp } from 'lucide-react'

const ProductPageTips = () => {
  return (
    <Card className='mb-28 mt-16 shadow-none'>
      <CardHeader>
        <CardTitle>Tips & Education</CardTitle>
        <CardDescription>
          Learn how to get the most from your product
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {[1, 2, 3].map((tip) => (
            <Card key={tip} className='shadow-none hover:shadow'>
              <CardContent className='pt-6'>
                <div className='relative mb-4 aspect-video overflow-hidden rounded-lg'>
                  <div className='bg-slate-50'></div>
                  <div className='absolute inset-0 bg-slate-50' />
                  <TrendingUp className='absolute right-2 top-2 h-5 w-5 text-white' />
                </div>
                <h3 className='mb-2 font-semibold'>
                  How to Layer Your Skincare Products
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Learn the correct order to apply your skincare products for
                  maximum effectiveness.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductPageTips
