import { Heart, MessageCircle, Star } from 'lucide-react'

interface ReviewProps {
  username?: string
  timeAgo?: string
  skinType?: string
  reviewText?: string
  productName?: string
  productBrand?: string
  rating?: number
  features?: string[]
  likesCount?: number
}

const ReviewCardVariation = ({
  username = 'Lapaki',
  timeAgo = '8 months ago',
  skinType = 'Dry Skin',
  reviewText = 'Very good at targeting redness and irritations. Whenever my skin feels irritated, either from treatments or using products with Tretinoin and Hydroquinone, or is experiencing Rosacea flare-ups, applying one or more layers of this toner noticeably reduces redness - sometimes it even disappears completely, depending on the severity...',
  productName = 'Heartleaf 77% Soothing Toner',
  productBrand = 'Anua',
  rating = 5,
  features = ['Light', 'Absorbs Well', 'No Scent', 'Works Well'],
  likesCount = 20,
}: ReviewProps) => {
  return (
    <div className='mx-auto mt-4 overflow-hidden rounded-lg border border-slate-200'>
      <div className='p-6'>
        <div className='mb-4 flex flex-col items-center gap-6 md:flex-row md:gap-0'>
          <div className='flex items-center justify-center md:justify-start'>
            <div className='mr-4 h-12 w-12 rounded-full bg-gray-300'></div>
            <div>
              <h2 className='text-lg font-semibold'>{username}</h2>
              <p className='text-sm font-light text-gray-500'>
                {timeAgo} · {skinType}
              </p>
            </div>
          </div>
          <div className='ml-auto flex flex-col-reverse items-center gap-6 rounded-sm p-1 px-2 text-neutral-500 hover:underline md:flex-row md:gap-2'>
            <div className='flex w-max gap-3 rounded-sm border border-blue-200 bg-blue-100 p-1'>
              {features.map((feature, index) => (
                <span
                  key={index}
                  className='rounded-sm bg-gray-50 p-1 px-1 text-xs font-medium text-gray-600'
                >
                  {feature}
                </span>
              ))}
            </div>
            <div className='hidden md:inline-flex'>
              {[...Array(rating)].map((_, i) => (
                <Star
                  key={i}
                  className='h-4 w-4 fill-current text-yellow-400'
                />
              ))}
            </div>
          </div>
        </div>

        <p className='mb-4 text-gray-700'>{reviewText}</p>

        <div className='flex items-end text-sm text-gray-400'>
          <span>{likesCount} people liked this</span>
          <button className='ml-auto mr-4 rounded-sm p-2'>
            <MessageCircle strokeWidth={1.25} />
          </button>
          <button className='rounded-sm p-2'>
            <Heart strokeWidth={1.25} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewCardVariation
