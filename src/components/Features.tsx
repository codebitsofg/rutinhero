import { CreditCard, Clock, CreditCard as PaymentIcon } from 'lucide-react'

const Features = () => {
  return (
    <div className='max relative mx-auto mt-12 w-full bg-black px-4 py-24 text-white'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='mb-2 text-center text-base text-neutral-500'>
          How does it work?
        </h2>
        <h1 className='mb-8 text-center font-dm text-3xl font-bold md:text-5xl'>
          Join Campaigns, tackle tasks
          <br />
          get your reward
        </h1>
        <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
          <FeatureCard
            icon={<CreditCard strokeWidth={1} className='h-12 w-12' />}
            title='Regular cashback'
            description='Every month you can choose the categories of cashback for which you want to make a profit. Every month you can choose the categories of cashback'
            color='border border-purple-500'
          />
          <FeatureCard
            icon={<Clock strokeWidth={1} className='h-12 w-12' />}
            title='Support 24/7'
            description='Our hotline is open 24/7 so that you can instantly resolve all your concerns'
            color='border border-yellow-500'
          />
          <FeatureCard
            icon={<PaymentIcon strokeWidth={1} className='h-12 w-12' />}
            title='Easy payment'
            description='Easy to pay with Visa, Mastercard, American Express, Discover, JCB, Union Pay, and more'
            color='border border-blue-500'
          />
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ icon, title, description, color }: any) => {
  return (
    <div
      className={`${color} min-h-72 rounded-lg p-12 transition-all duration-300 hover:shadow-lg`}
    >
      <div className='mb-4 p-2'>{icon}</div>
      <h3 className='mb-4 text-2xl'>{title}</h3>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  )
}

export default Features
