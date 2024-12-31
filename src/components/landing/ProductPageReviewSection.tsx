import { NotebookPen, StarIcon, ThumbsUpIcon } from 'lucide-react'
import ProductScoreWithCommentText from './ProductScoreWithCommentText'
import { Button } from '../ui/button'
import SkinTypeRadarChart from './RadarChart'

interface EvaluationElement {
  title: string
  percentage: number
  average: string
  color: string
}

interface UserComment {
  name: string
  date: string
  rating: number
  comment: string
  likes: number
}

const evaluationElements: EvaluationElement[] = [
  {
    title: 'Professionalism of our service personnel',
    percentage: 92,
    average: 'Great',
    color: 'bg-blue-500',
  },
  {
    title: 'Efficiency of service call handling',
    percentage: 74,
    average: 'Good',
    color: 'bg-green-500',
  },
  {
    title: 'Response time to service calls',
    percentage: 55,
    average: 'So-so',
    color: 'bg-purple-500',
  },
  {
    title: 'Timeliness of contract administration',
    percentage: 34,
    average: 'Bad',
    color: 'bg-orange-500',
  },
  {
    title: 'Accuracy of contract administration',
    percentage: 18,
    average: 'Worst',
    color: 'bg-red-500',
  },
]

const userComments: UserComment[] = [
  {
    name: 'User Name Here',
    date: '18 APR 2023',
    rating: 4,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, ipsum at tristique consequat, turpis tellus ullamcorper turpis, at ullamcorper justo neque sed quam.',
    likes: 298,
  },
  {
    name: 'User Name Here',
    date: '15 APR 2023',
    rating: 2,
    comment:
      'Proin nibh augue, pellentesque sed lorem et, mattis facilisis lorem. Integer eu eros in justo porta luctus id in nulla. Morbi auctor magna sit amet elit tempor blandit.',
    likes: 178,
  },
]

const ProductPageReviewSection = () => {
  return (
    <div className='mx-auto my-6 max-w-[1200px] rounded-lg'>
      <ProductScoreWithCommentText />

      <div className='flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-stretch'>
        <div className='flex flex-col justify-between lg:w-1/2'>
          <div className='flex h-full flex-col justify-between'>
            <h3 className='mb-6 self-stretch font-dm text-3xl font-semibold md:mb-2'>
              Product Target
            </h3>
            <div className='h-72 md:h-full'>
              <SkinTypeRadarChart />
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:min-h-full lg:w-1/2'>
          <h3 className='mb-2 text-lg font-semibold'>Element of Evaluation</h3>
          {evaluationElements.map((element, index) => (
            <div key={index} className='mb-4'>
              <div className='mb-1 flex justify-between text-sm'>
                <span>{element.title}</span>
                <span className='text-gray-500'>{`Average: ${element.average}`}</span>
              </div>
              <div className='relative pt-1'>
                <div className='mb-2 flex items-center justify-between'>
                  <div>
                    <span className='inline-block rounded-full bg-gray-500 px-2 py-1 text-xs font-semibold uppercase text-white'>
                      {element.percentage}%
                    </span>
                  </div>
                </div>
                <div className='mb-4 flex h-2 overflow-hidden rounded bg-gray-200 text-xs'>
                  <div
                    style={{ width: `${element.percentage}%` }}
                    className={`flex flex-col justify-center whitespace-nowrap text-center text-white shadow-none ${element.color}`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='my-12 flex w-full items-center justify-center'>
        <Button className='mx-auto h-12 rounded-full bg-blue-600 px-8 py-[23px] text-lg text-white hover:bg-blue-50'>
          <NotebookPen className='mr-2 h-5 w-5' />
          Review the product
        </Button>
      </div>
    </div>
  )
}

export default ProductPageReviewSection
