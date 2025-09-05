import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeftRight, Star, Users, UserCheck } from 'lucide-react'

const OfferedServices = () => {
  return (
    <div className='bg-stone-50 pb-12 text-justify md:pb-40 md:text-left'>
      <div className='mx-auto max-w-[1100px] px-8 py-20 xl:px-0'>
        <h3 className='mb-32 text-center font-dm text-5xl font-medium text-neutral-800 md:text-7xl'>
          Your HERO's
        </h3>
        <section className='grid items-center gap-12 md:grid-cols-[0.7fr_1fr]'>
          <div className='order-2 md:order-1'>
            <h2 className='text-center font-dm text-5xl font-medium tracking-tight text-neutral-800 md:text-left'>
              UGC at scale
            </h2>
            <p className='mt-8 text-xl text-neutral-700'>
              Collect and publish photo, text, and video reviews from verified
              customers. With AI-driven features like review summary,
              syndication, review balancing, enhance credibility and extend your
              reach. Seamless integration allows reviews to be shared across
              e-commerce, retail, and other channels, ensuring visibility and
              impact.
            </p>
            <Button
              size='lg'
              className='mt-6 w-full rounded-3xl bg-slate-600 py-8 text-xl text-primary-foreground text-white md:w-[35%]'
            >
              Keşfet
            </Button>
          </div>
          <div className='flex items-center justify-center md:order-2'>
            <img src='/script-widget.png' alt='' className='w-[80%]' />
          </div>
        </section>

        <section className='mt-28 grid items-center gap-12 md:mt-48 md:grid-cols-[1fr_0.7fr]'>
          <div className='order-2 md:order-2'>
            <h2 className='text-center font-dm text-5xl font-medium leading-[4rem] tracking-tight text-neutral-800 md:text-left'>
              Manage the output
            </h2>
            <p className='mt-8 text-xl text-neutral-700'>
              Collect and publish photo, text, and video reviews from verified
              customers. With AI-driven features like review summary,
              syndication, review balancing, enhance credibility and extend your
              reach. Seamless integration allows reviews to be shared across
              e-commerce, retail, and other channels, ensuring visibility and
              impact.
            </p>
            <Button
              size='lg'
              className='mt-6 w-full rounded-3xl bg-slate-600 py-8 text-xl text-primary-foreground text-white md:w-[35%]'
            >
              Keşfet
            </Button>
          </div>
          <div className='flex items-center justify-center'>
            <img src='/services-widget.svg' alt='' className='w-[80%]' />
          </div>
        </section>

        <section className='mt-28 grid items-center gap-12 md:mt-48 md:grid-cols-[0.7fr_1fr]'>
          <div className='order-2 md:order-1'>
            <h2 className='text-center font-dm text-5xl font-medium leading-[4rem] tracking-tight text-neutral-800 md:text-left'>
              Reach your targets
            </h2>
            <p className='mt-8 text-xl text-neutral-700'>
              Collect and publish photo, text, and video reviews from verified
              customers. With AI-driven features like review summary,
              syndication, review balancing, enhance credibility and extend your
              reach. Seamless integration allows reviews to be shared across
              e-commerce, retail, and other channels, ensuring visibility and
              impact.
            </p>
            <Button
              size='lg'
              className='mt-6 w-full rounded-3xl bg-slate-600 py-8 text-xl text-primary-foreground text-white md:w-[35%]'
            >
              Keşfet
            </Button>
          </div>
          <div className='flex items-center justify-center md:order-2'>
            <img src='/box-widget.svg' alt='' className='w-[80%]' />
          </div>
        </section>
      </div>
    </div>
  )
}

export default OfferedServices
