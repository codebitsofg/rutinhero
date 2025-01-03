import React from 'react'
import { Button } from './ui/button'

const WhyUGC = () => {
  const metrics = [
    { value: '4X', label: 'Return on Investment' },
    { value: '<6', label: 'months Pay-back period' },
    {
      value: '2X',
      label: 'increase in sales on product pages displaying UGC',
    },
    { value: '+40%', label: 'Increase in Average Order Value (AOV)' },
  ]
  return (
    <div className='min-h-screen bg-[#0a1233] px-8 py-16 text-white md:px-8 md:py-28'>
      <div className='mx-auto max-w-[1200px]'>
        <div className='mb-24 flex flex-col-reverse items-center gap-12 md:flex-row'>
          <div className='flex-[0.4] space-y-6'>
            <h2 className='font-dm text-5xl font-bold leading-tight md:text-6xl'>
              Why should you
              <br className='hidden md:inline' /> use UGC?
            </h2>
            <p className='py-6 text-justify text-lg text-gray-300 md:text-left'>
              User-generated content is the voice of consumers in its purest
              form. UGC is essential for brands aiming to stand out across all
              channels. It drives more engagement and conversions by showcasing
              authentic customer experiences. UGC also provides valuable
              insights into market shifts and consumer behavior, helping brands
              stay ahead of trends. By leveraging UGC, brands can build trust
              and loyalty, enhancing the overall customer experience and
              fostering a strong, loyal community. In essence, UGC is a powerful
              tool for connecting with consumers and driving business success.
            </p>
            <Button
              size='lg'
              className='mt-6 w-full rounded-full bg-blue-600 py-10 text-xl font-bold text-primary-foreground text-white md:w-auto'
            >
              Ask for a demo
            </Button>
          </div>

          <div className='relative w-full flex-1 md:flex-[0.6]'>
            <div className='h-[40vh] w-full rounded-2xl bg-white p-6 shadow-xl'>
              <div className='mb-6 font-medium text-black'></div>
              <div className='grid grid-cols-2 gap-4 md:grid-cols-3'></div>
            </div>
          </div>
        </div>

        <div>
          <h3 className='mb-12 text-center font-dm text-5xl italic text-gray-100 md:text-5xl'>
            Real Results
          </h3>
          <div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
            {metrics.map((metric, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center space-y-4 rounded-[50px] bg-blue-950 p-8 py-12 text-center md:py-24'
              >
                <div className='text-4xl font-bold text-[#4477FF] md:text-5xl'>
                  {metric.value}
                </div>
                <div className='text-xs text-gray-300 md:text-sm'>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-[1200px] pt-32 text-center md:pt-48'>
        <h2 className='mb-8 text-center font-dm text-4xl font-bold leading-tight md:text-5xl'>
          Tasks and Results Together
        </h2>
        <p className='text-justify text-gray-300 md:text-left'>
          Consumers trust the opinions of other shoppers more than traditional
          ads. Our SaaS-based, full UGC solution suite is a powerful capture
          consumer voices. We’re the only company in the market that lets brands
          harness every single type of UGC (text, video and photo reviews,
          customer feedbacks, social posts) from creation, collection,
          management and activation. Our innovative, AI-based solutions provide
          brands and consumers with trusted, authentic experiences. Learn how
          you can get real with your UGC today!
        </p>
      </div>
    </div>
  )
}

export default WhyUGC
