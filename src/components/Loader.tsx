import React from 'react'

const Loader = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
      <svg
        className='h-12 w-12 animate-spin text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'
        />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8v3.6a5.4 5.4 0 00-5.4 5.4H4z'
        />
      </svg>
    </div>
  )
}

export default Loader
