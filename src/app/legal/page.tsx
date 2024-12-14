import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/legal`)
  const data = await response.json()
  return (
    <div className='mx-auto w-[80%] overflow-scroll pb-16 pt-24'>
      <div className='flex justify-center'>
        <ReactMarkdown className={'prose'} remarkPlugins={[remarkGfm]}>
          {data.data.attributes.legal}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Page
