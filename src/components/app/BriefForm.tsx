'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import {
  campaignFormSchema,
  type CampaignFormValues,
} from '@/lib/schemas/campaignGeneration'
import FormCampaignInfo from './FormCampaignInfo'
import FormProductInfo from './FormProductInfo'
import FormCreators from './FormCreators'

const BriefForm = () => {
  const form = useForm<CampaignFormValues>({
    resolver: zodResolver(campaignFormSchema),
    defaultValues: {
      name: '',
      goal: 'multi-channel-ugc',
      commission: 'no-commission',
    },
  })

  function onSubmit(data: CampaignFormValues) {
    console.log(data)
  }
  return (
    <div className='flex flex-col px-32 py-16'>
      <h1 className='mb-14 text-[3.4rem] font-medium text-neutral-700'>
        Kampanya Detayları
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-14'>
          <FormCampaignInfo control={form.control} />
          <FormProductInfo control={form.control} register={form.register} />
          <FormCreators control={form.control} register={form.register} />
        </form>
      </Form>
    </div>
  )
}

export default BriefForm
