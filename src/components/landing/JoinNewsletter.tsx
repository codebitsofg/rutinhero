import React from 'react'

const JoinNewsletter = () => {
  return (
    <div className='flex flex-col items-center gap-6 text-center font-thin'>
      <span className='mb-2 block w-[70%] text-base md:text-xl'>
        Her hafta ipuçları ve güncel bilgiler alman için çalışıyoruz. Yakında
        newsletter'ımıza kayıt olabilirsin!
      </span>
      <form className='relative w-full'>
        <span className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform font-normal text-white'></span>
        <input
          disabled
          type='email'
          placeholder=''
          className='w-1/2 rounded-l-3xl bg-gray-500 px-6 py-3 text-white blur-sm focus:outline-none'
          required
        />
        <button
          disabled
          type='submit'
          className='rounded-r-3xl bg-gray-500 px-4 py-3 blur-sm focus:outline-none'
        >
          {'>'}
        </button>
      </form>
      <span className='inline-block w-[60%] text-[0.65rem] font-thin md:text-[0.8rem]'>
        Ekstra içerikler ve rehberler için bizi
        <span className='underline'>Instagram</span> hesabımızdan takip et!
      </span>
    </div>
  )
}

export default JoinNewsletter
