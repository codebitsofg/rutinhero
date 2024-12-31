import { Trophy, NotebookPen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ShopProductWithDetails from './ShopProductWithDetails'

const ProductHero = () => {
  return (
    <div className='mx-auto mb-20 flex max-w-[1400px] flex-col items-center justify-between gap-4 py-12 md:flex-row md:px-4'>
      <div className='mb-8 md:mb-0 md:flex-[0.4]'>
        <div>
          <span className='mb-2 inline-block cursor-pointer text-lg font-light text-neutral-500 hover:underline md:text-xl'>
            La Roche Posay
          </span>
          <h1 className='pointer-events-none mb-4 font-dm text-5xl font-extrabold tracking-wider text-neutral-800 md:text-6xl'>
            Effeclar Cleansing Gel
          </h1>
        </div>
        <p className='mb-8 text-lg font-light text-neutral-700'>
          Provides cleansing and protection for oily and irregular skin types.
          Effaclar Gel gently cleanses the skin with its new formula for
          sensitive skin and helps purify it from dirt and sebum. It provides
          cleansing and freshness to the skin. pH5.5. It does not contain
          alcohol.
        </p>
        <div className='flex flex-col gap-4 sm:flex-row'>
          <Button className='rounded-full bg-blue-600 px-8 py-[23px] text-lg hover:bg-blue-500'>
            <Trophy className='mr-2 h-5 w-5' />
            Try
          </Button>
          <Button className='rounded-full bg-blue-600 px-8 py-[23px] text-lg hover:bg-blue-500'>
            <NotebookPen className='mr-2 h-5 w-5' />
            Review or rate
          </Button>
        </div>
      </div>
      <div className='relative flex flex-[0.6] justify-center'>
        <div className='flex w-full items-center justify-center rounded-sm border border-slate-200 bg-white p-8 py-12 md:h-[70vh]'>
          <img
            className='h-full'
            src='https://skknshoreimagebucket.s3.eu-central-1.amazonaws.com/la_roche_posay_productpage_acne_effaclar_cleansing_foaming_gel_m_400ml_3337872411991_zoom_front_8a55532238.webp'
            alt=''
          />
          <div className='absolute -bottom-20 z-10'>
            <ShopProductWithDetails />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductHero
