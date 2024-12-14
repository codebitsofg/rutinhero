import React from 'react'

type ReviewProps = {
  name: string
  totalSpend: number
  totalReviews: number
  date: string
  rating: number
  reviewText: string
  profileImage: string
}

const ReviewCard: React.FC<ReviewProps> = ({
  name,
  totalSpend,
  totalReviews,
  date,
  rating,
  reviewText,
  profileImage,
}) => {
  return (
    <div className='w-full max-w-lg rounded-lg bg-white p-6 shadow-md'>
      <div className='flex items-center space-x-4'>
        <img
          className='h-16 w-16 rounded-full object-cover'
          src={profileImage}
          alt={`${name}'s profile`}
        />
        <div>
          <h2 className='text-lg font-bold'>{name}</h2>
          <p className='text-sm text-gray-500'>
            Total Spend: <span className='font-semibold'>${totalSpend}</span>
          </p>
          <p className='text-sm text-gray-500'>
            Total Review: <span className='font-semibold'>{totalReviews}</span>
          </p>
        </div>
      </div>

      <div className='mt-4 flex items-center'>
        <div className='flex items-center'>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns='http://www.w3.org/2000/svg'
              fill={i < rating ? '#facc15' : 'none'}
              viewBox='0 0 24 24'
              stroke='#facc15'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 4.419l1.791 4.558 5.124.432-3.929 3.316 1.294 5.08-4.28-2.384-4.28 2.384 1.293-5.08-3.929-3.316 5.124-.432L12 4.419z'
              />
            </svg>
          ))}
        </div>
        <span className='ml-2 text-sm text-gray-500'>{date}</span>
      </div>

      <p className='mt-4 text-gray-700'>{reviewText}</p>

      <div className='mt-4 flex space-x-4'>
        <button className='rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-100'>
          Public Comment
        </button>
        <button className='rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-100'>
          Direct Message
        </button>
        <button className='ml-auto'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6 text-blue-500 hover:text-blue-700'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ReviewCard
