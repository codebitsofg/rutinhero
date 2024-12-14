'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp, MessageCircle, User2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How can I become a member?',
    answer:
      "The membership process is very simple. By clicking the 'Sign Up' button on our homepage, you can complete your registration with your email address and a few basic details.",
  },
  {
    question: 'What is Rutin Hero and how does it work?',
    answer:
      'Our platform allows you to gather and review genuine user feedback on skincare products. Additionally, you can try free product samples offered by brands and share your experiences to provide feedback to these brands.',
  },
  {
    question: 'How can I access free product samples?',
    answer:
      'To access product samples, simply sign up on our platform and complete your profile. By selecting the products you are interested in and committing to leave a review, you can receive free product samples delivered to your address.',
  },
  {
    question: 'Will I need to pay for shipping?',
    answer:
      'No, free product samples are sent to you completely free of charge. Shipping costs are also covered by our platform.',
  },
  {
    question: 'How are products selected?',
    answer:
      'Brands registered on our platform present their products for our users to try. Products are usually recommended based on skin type, needs, and user preferences, giving you the chance to try the products most suitable for you.',
  },
]

const FQA = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className='relative mx-auto my-12 max-w-7xl px-8 py-8 md:my-28 md:px-4'>
      <h1 className='mb-4 text-center font-dm text-5xl font-extrabold'>
        Things you might ask
      </h1>
      <p className='mx-auto mb-6 max-w-4xl text-center text-sm text-neutral-700'>
        Answers to questions you may have about Rutin Hero. if here If the
        question you are looking for is not answered, please contact us at
        info@rutinhero.com. You can reach us or leave the problem directly.
      </p>
      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <div key={index} className='rounded-lg border bg-white p-3'>
            <button
              className='flex w-full items-center justify-between p-4 text-left'
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className='font-semibold'>{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className='h-5 w-5' />
              ) : (
                <ChevronDown className='h-5 w-5' />
              )}
            </button>
            {openIndex === index && (
              <div className='p-4 pt-0'>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='mb-8 mt-12 flex items-center justify-center gap-4'>
        <Button className='border border-neutral-800 bg-transparent text-neutral-800'>
          <User2Icon className='mr-2 h-4 w-4' />
          Signup
        </Button>
        <Button>
          <MessageCircle className='mr-2 h-4 w-4' />
          Contact Us
        </Button>
      </div>
    </div>
  )
}

export default FQA
