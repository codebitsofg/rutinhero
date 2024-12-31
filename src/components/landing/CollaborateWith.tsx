import React from 'react'

const CollaborateWith = () => {
  return (
    <section className='relative bg-black px-4 py-32 text-gray-400'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='mb-16 text-center font-dm text-3xl font-bold text-white md:text-5xl'>
          Work with your dream brands
        </h2>

        <div className='mb-12 grid grid-cols-2 items-center gap-12 md:grid-cols-5 md:gap-8'>
          <div className='flex items-center justify-center'>
            <div className='relative flex h-12 w-32 items-center'>
              <span className='font-serif text-lg'>SUNDAY RILEY</span>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative flex h-12 w-32 items-center'>
              <span className='font-serif uppercase tracking-wider'>
                Diptyque
              </span>
              <span className='absolute bottom-0 left-1/2 -translate-x-1/2 text-xs'>
                PARIS
              </span>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative flex h-12 w-32 items-center'>
              <span className='text-2xl italic'>Swiffer</span>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative flex h-12 w-32 items-center'>
              <span className='text-2xl lowercase tracking-wider'>fresh</span>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative flex h-12 w-32 items-center'>
              <span className='font-serif'>Living proof.</span>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 items-center gap-12 md:grid-cols-5 md:gap-8'>
          <div className='flex items-center justify-center'>
            <div className='relative flex h-12 w-32 items-center'>
              <span className='font-sans'>Rare Beauty</span>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative flex h-12 w-32 items-center'>
              <span className='text-xl'>Bare</span>
              <span className='absolute bottom-0 left-1/2 -translate-x-1/2 text-xs'>
                HOME
              </span>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative flex h-12 w-32 items-center'>
              <span className='text-sm uppercase tracking-wide'>
                BARE necessities
              </span>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative flex h-12 w-32 items-center'>
              <span className='uppercase tracking-widest'>GLOW RECIPE</span>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative flex h-12 w-32 items-center'>
              <span className='text-sm uppercase tracking-wider'>
                JO MALONE LONDON
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='absolute -bottom-[40%] left-1/2 h-[60%] w-1/2 -translate-x-1/2 transform rounded-[50px] bg-blue-600'></div> */}
    </section>
  )
}

export default CollaborateWith
