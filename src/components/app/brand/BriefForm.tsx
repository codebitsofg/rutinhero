'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import {
  campaignFormSchema,
  type CampaignFormValues,
} from '@/lib/schemas/campaignGeneration'
import FormProductInfo from './FormProductInfo'
import FormCreators from './FormCreators'
import FormCampaignInfo from './FormCampaignInfo'
import FormDeliverables from './FormDeliverables'

const BriefForm = () => {
  const form = useForm<CampaignFormValues>({
    resolver: zodResolver(campaignFormSchema),
    defaultValues: {
      name: '',
      goal: 'multi-channel-ugc',
      commission: 'no-commission',
      mediaType: 'video',
      format: '9:16',
      deliveryType: 'ready',
      videoLength: {
        min: 15,
        max: 60,
      },
      music: 'no',
      contentType: 'testimonial',
      creatorInstructions: {
        mainContentMessaging: '',
        mainProductFeatures: [''],
        requiredActions: '',
      },
      creatorAvoidance: '',
    },
  })

  function onSubmit(data: CampaignFormValues) {
    console.log(data)
  }
  return (
    <div className='flex flex-col px-32 py-16'>
      <h1 className='mb-14 text-[3.4rem] font-medium text-neutral-700'>
        Campaign Details
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-14'>
          <FormCampaignInfo control={form.control} />
          <FormProductInfo control={form.control} register={form.register} />
          <FormCreators control={form.control} register={form.register} />
          <FormDeliverables control={form.control} register={form.register} />
        </form>
      </Form>
    </div>
  )
}

export default BriefForm
