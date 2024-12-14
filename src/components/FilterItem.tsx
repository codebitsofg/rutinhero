import { motion } from 'framer-motion'
import React from 'react'

interface FilterItemProps {
  onClick: () => void
  shouldShowUnderline: boolean
  text: string
}
const FilterItem = ({
  onClick,
  shouldShowUnderline,
  text,
}: FilterItemProps) => {
  return (
    <span
      onClick={onClick}
      className={`flex cursor-pointer ${shouldShowUnderline ? 'text-blue-800' : 'text-neutral-600'} flex-col items-center justify-center text-[0.6rem] font-extralight md:text-[1rem]`}
    >
      {text}
      {shouldShowUnderline && (
        <motion.div
          layout
          transition={{ duration: 0.3 }}
          key={'thekey'}
          layoutId='underline'
          className='absolute bottom-[-1.5px] h-[3px] w-[10%] bg-blue-800'
        />
      )}
    </span>
  )
}

export default FilterItem
