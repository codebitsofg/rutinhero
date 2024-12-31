import React from 'react'

const Caret = ({ width = '800px', height = '800px', rotation = 0 }) => {
  return (
    <div style={{ transform: `rotate(${rotation}deg)` }}>
      <svg
        fill='#000000'
        className='h-8 w-8 md:h-10 md:w-10'
        viewBox='0 0 256 256'
        id='Flat'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M96,212a4,4,0,0,1-2.82861-6.82837L170.34326,128,93.17139,50.82837a4.00009,4.00009,0,0,1,5.65722-5.65674l80,80a4,4,0,0,1,0,5.65674l-80,80A3.98805,3.98805,0,0,1,96,212Z' />
      </svg>
    </div>
  )
}

export default Caret
