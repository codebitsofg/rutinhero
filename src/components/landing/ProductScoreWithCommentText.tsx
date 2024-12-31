import { StarIcon } from 'lucide-react'
import React from 'react'

const ProductScoreWithCommentText = () => {
  return (
    <div className='mb-12 flex flex-col items-center justify-between border-b border-slate-200 pb-3 md:flex-row'>
      <h2 className='mb-4 text-center font-dm text-4xl font-bold md:text-left md:text-5xl'>
        Detaylar Ve Kullanıcı Yorumları
      </h2>
      <div className='mb-6 flex items-center'>
        <span className='mr-4 font-dm text-4xl font-bold md:text-8xl'>
          3.75
        </span>
        <div>
          <div className='flex'>
            {[1, 2, 3, 4].map((star) => (
              <StarIcon
                key={star}
                className='h-6 w-6 fill-current text-yellow-400'
              />
            ))}
            <StarIcon className='h-6 w-6 text-gray-300' />
          </div>
          <span className='text-sm text-gray-500'>40 İnceleme</span>
        </div>
      </div>
    </div>
  )
}

export default ProductScoreWithCommentText
