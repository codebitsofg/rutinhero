import Image from 'next/image'
import { Creator } from '@/app/app/pazaryeri/[creatorId]/page'

export const CreatorPortfolio = ({ creator }: { creator: Creator }) => (
  <div className='p-6 h-[calc(100vh-80px)] overflow-y-auto'>
    <h3 className='mb-4 font-semibold text-center text-lg'>Portfolio</h3>
    <div className='gap-4 grid grid-cols-3'>
      {creator.gallery.map((image, index) => (
        <div
          key={index}
          className='relative rounded-lg overflow-hidden aspect-square'
        >
          <div className='absolute inset-0 flex justify-center items-center bg-black/20'>
            <div className='flex justify-center items-center bg-white/80 rounded-full w-10 h-10'>
              <div className='ml-1 border-t-6 border-t-transparent border-b-6 border-b-transparent border-l-8 border-l-black w-0 h-0' />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
