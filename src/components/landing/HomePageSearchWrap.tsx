import React from 'react'
import SearchBar from './SearchBar'

const HomePageSearchWrap = () => {
  const bgConfig = [
    {
      src: '/home-page-elements/star.png',
      className:
        'absolute md:bottom-56 -bottom-12 left-1/2 md:block  md:left-8 transform hidden -translate-x-1/2 md:translate-x-0 w-96 opacity-70',
      alt: '',
    },
    {
      src: '/home-page-elements/star.png',
      className:
        'absolute hidden md:bottom-10 bottom-32 md:block md:left-28 left-6 w-16 opacity-87',
      alt: '',
    },
    {
      src: '/home-page-elements/star.png',
      className:
        'absolute md:right-20 hidden bottom-60 md:block right-0 md:top-32 w-32 opacity-70',
      alt: '',
    },
    {
      src: '/home-page-elements/star.png',
      className:
        'absolute hidden -bottom-24 right-28 hidden md:block w-72 opacity-70',
      alt: '',
    },
  ]
  return (
    <div className='relative flex justify-center px-4 pt-28 font-opensans md:min-h-screen md:px-0 md:pt-60'>
      <div className='relative z-10 flex w-full flex-col items-center gap-4'>
        <h1 className='text-center font-dm text-[2.5rem] font-bold leading-[3rem] text-slate-800 md:max-w-[60%] md:text-[4.5rem] md:leading-[6rem]'>
          Explore Honest Reviews From Real Users
        </h1>
        <span className='mx-auto block text-center text-base font-light text-gray-800 md:max-w-[40%] md:text-xl'>
          Or complete tasks like sharing, creating content, interacting with
          other users etc from brands to collect <b> points and freebies</b>
        </span>
        <SearchBar />
      </div>
      {bgConfig.map((image, index) => (
        <img
          key={index}
          src={image.src}
          className={image.className}
          alt={image.alt}
        />
      ))}
    </div>
  )
}

export default HomePageSearchWrap
