import React from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { Input } from '../../ui/input'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { CircleEllipsis, Dot, InfoIcon } from 'lucide-react'
import { Control, useWatch } from 'react-hook-form'
import { CampaignFormValues } from '@/lib/schemas/campaignGeneration'
import CompleteFormBlock from './CompleteFormBlock'

const FormCampaignInfo = ({
  control,
}: {
  control: Control<CampaignFormValues>
}) => {
  const goal = useWatch({
    control,
    name: 'goal',
  })
  const name = useWatch({ control, name: 'name' })
  const strategy = useWatch({ control, name: 'strategy' })
  const platform = useWatch({ control, name: 'platform' })
  const participant = useWatch({ control, name: 'participant' })
  const shouldShowComplete =
    !name || !goal || !strategy || !platform || !participant

  console.log(shouldShowComplete)

  console.log(name, goal, strategy, platform, participant)
  const strategyOptions = {
    'multi-channel-ugc': [
      {
        value: 'scaled-ugc',
        label: 'Multi-Channel UGC Production',
        description:
          'Used to produce creative content for campaign goals by users.',
      },

      {
        value: 'influencer-collaboration',
        label: 'Influencer Collaboration',
        description:
          'Content produced under the brief is published by influencers on social media platforms.',
      },
    ],
    reach: [
      {
        value: 'barter',
        label: 'Barter',
        description:
          'Send products to content creators, produce free UGC and gain engagement.',
      },
    ],
    engagement: [
      {
        value: 'tasks',
        label: 'Tasks',
        description:
          'Set tasks and rewards, select participants, increase engagement and follow a flexible strategy.',
      },
    ],
  }

  return (
    <>
      <FormField
        control={control}
        name='name'
        render={({ field }) => (
          <FormItem>
            <>
              <FormLabel>
                Campaign Name
                <p className='mt-1 text-base text-neutral-400'>
                  Enter a short name for the campaign. Will be visible to users.
                </p>
              </FormLabel>

              <FormControl>
                <div className='relative'>
                  <Input
                    placeholder='Eg: Rutin Hero 2024'
                    {...field}
                    className='pr-16'
                  />
                  <span className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground'>
                    {field.value.length}/50
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='goal'
        render={({ field }) => (
          <FormItem className='space-y-3'>
            <>
              <FormLabel>Campaign Goal</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='grid grid-cols-3 gap-2 text-center'
                >
                  {[
                    {
                      value: 'multi-channel-ugc',
                      label: 'Multi-Channel <br/> UGC Production',
                    },
                    {
                      value: 'reach',
                      label: 'Target Audience <br/> Reach',
                    },
                    {
                      value: 'engagement',
                      label: 'Engagement',
                    },
                  ].map((option) => (
                    <FormItem key={option.value}>
                      <FormControl>
                        <div className='relative'>
                          <RadioGroupItem
                            value={option.value}
                            id={option.value}
                            className='peer sr-only'
                          />
                          <FormLabel
                            htmlFor={option.value}
                            className='flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-neutral-300 bg-popover p-4 leading-7 text-neutral-600 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-purple-600 [&:has([data-state=checked])]:border-purple-600'
                          >
                            <span
                              dangerouslySetInnerHTML={{
                                __html: option.label,
                              }}
                            />
                          </FormLabel>
                        </div>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='strategy'
        render={({ field }) => (
          <FormItem className='space-y-3'>
            <>
              <FormLabel>Campaign Strategy</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className={`box-border grid justify-items-stretch gap-2 text-center ${
                    goal === 'multi-channel-ugc' ? 'grid-cols-2' : 'grid-cols-1'
                  }`}
                >
                  {strategyOptions[goal]?.map((option) => (
                    <FormItem key={option.value}>
                      <FormControl>
                        <div className='relative box-border h-full'>
                          <RadioGroupItem
                            value={option.value}
                            id={option.value}
                            className='peer sr-only'
                          />
                          <FormLabel
                            htmlFor={option.value}
                            className='box-border flex h-full cursor-pointer flex-col items-start rounded-xl border-2 border-neutral-200 bg-popover p-5 px-6 text-left text-lg leading-6 text-neutral-600 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-purple-600 [&:has([data-state=checked])]:border-purple-600'
                          >
                            {option.label}
                            <InfoIcon className='absolute right-2 top-2 h-4 w-4' />
                            <span className='mt-3 text-lg font-light leading-7 text-neutral-400'>
                              {option.description}{' '}
                            </span>
                          </FormLabel>
                        </div>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='platform'
        render={({ field }) => (
          <FormItem className='space-y-3'>
            <>
              <FormLabel>
                Platform
                <p className='mt-1 text-base text-neutral-400'>
                  Select the platform you want to use the content on.
                </p>
              </FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='grid grid-cols-4 gap-2 text-center'
                >
                  {[
                    {
                      value: 'facebook',
                      label: 'Facebook',
                    },
                    {
                      value: 'instagram',
                      label: 'Instagram',
                    },
                    {
                      value: 'tiktok',
                      label: 'Tiktok',
                    },
                    {
                      value: 'other',
                      label: 'Other',
                    },
                  ].map((option) => (
                    <FormItem key={option.value}>
                      <FormControl>
                        <div className='relative'>
                          <RadioGroupItem
                            value={option.value}
                            id={option.value}
                            className='peer sr-only'
                          />
                          <FormLabel
                            htmlFor={option.value}
                            className='flex min-h-32 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-neutral-300 bg-popover p-4 leading-7 text-neutral-600 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-purple-600 [&:has([data-state=checked])]:border-purple-600'
                          >
                            {option.label === 'Other' ? (
                              <CircleEllipsis className='h-6 w-6' />
                            ) : (
                              <img
                                src={`/dashboard/socials/${option.value.toLocaleLowerCase()}.svg`}
                                alt={option.label}
                              />
                            )}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: option.label,
                              }}
                            />
                          </FormLabel>
                        </div>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='participant'
        render={({ field }) => (
          <FormItem className='space-y-3'>
            <>
              <FormLabel>
                Campaign participant count
                <p className='mt-1 text-base leading-relaxed text-neutral-400'>
                  Select the ideal number of Creators that you're aiming to hire
                  for this campaign. Note - this doesn't restrict the number you
                  can hire in the next stages.
                </p>
              </FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='grid grid-cols-4 gap-2 text-center'
                >
                  {['<5', '5-10', '10-20', '>20'].map((option) => (
                    <FormItem key={option}>
                      <FormControl>
                        <div className='relative'>
                          <RadioGroupItem
                            value={option}
                            id={option}
                            className='peer sr-only'
                          />
                          <FormLabel
                            htmlFor={option}
                            className='flex min-h-20 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-neutral-300 bg-popover p-4 leading-7 text-neutral-600 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-purple-600 [&:has([data-state=checked])]:border-purple-600'
                          >
                            <span
                              dangerouslySetInnerHTML={{
                                __html: option,
                              }}
                            />
                          </FormLabel>
                        </div>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </>
          </FormItem>
        )}
      />

      {shouldShowComplete && <CompleteFormBlock />}
    </>
  )
}

export default FormCampaignInfo
