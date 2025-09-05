import React from 'react'
import { Control } from 'react-hook-form'
import { CampaignFormValues } from '@/lib/schemas/campaignGeneration'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Input } from '@/components/ui/input'
import { Info } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

const FormDeliverables = ({
  control,
  register,
}: {
  control: Control<CampaignFormValues>
  register: any
}) => {
  return (
    <>
      <h1 className='mb-14 text-[3.4rem] font-medium text-neutral-700'>
        Order Details
      </h1>
      <div className='rounded-2xl border-[1.5px] border-neutral-300 px-12 py-10 shadow-lg'>
        {/* Media Type */}
        <FormField
          control={control}
          name='mediaType'
          render={({ field }) => (
            <FormItem className='mb-8 space-y-4'>
              <FormLabel className='text-lg font-medium text-neutral-700'>
                Media Type
                <p className='mt-1 text-sm font-normal text-neutral-400'>
                  What media type do you want to use for this campaign?
                </p>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='grid grid-cols-2 gap-4'
                >
                  {[
                    { value: 'video', label: 'Video' },
                    { value: 'photo', label: 'Photo' },
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
                            className='flex min-h-16 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-neutral-200 bg-white p-4 text-sm leading-7 text-neutral-600 hover:bg-neutral-50 peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-purple-600'
                          >
                            {option.label}
                          </FormLabel>
                        </div>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Format */}
        <FormField
          control={control}
          name='format'
          render={({ field }) => (
            <FormItem className='mb-8 space-y-4'>
              <FormLabel className='text-lg font-medium text-neutral-700'>
                Format
                <p className='mt-1 text-sm font-normal text-neutral-400'>
                  What format do you want to use for this campaign?
                </p>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='grid grid-cols-4 gap-4'
                >
                  {[
                    { value: '9:16', label: '9:16', subLabel: 'Vertical' },
                    { value: '4:5', label: '4:5', subLabel: 'Vertical' },
                    { value: '1:1', label: '1:1', subLabel: 'Square' },
                    { value: '16:9', label: '16:9', subLabel: 'Horizontal' },
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
                            className='flex min-h-32 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 bg-white p-4 text-center leading-7 text-neutral-600 hover:bg-neutral-50 peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-purple-600'
                          >
                            <div className='text-sm'>{option.label}</div>
                            <div className='text-sm text-neutral-400'>
                              {option.subLabel}
                            </div>
                          </FormLabel>
                        </div>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Video Length */}
        <FormField
          control={control}
          name='videoLength'
          render={({ field }) => (
            <FormItem className='mb-8 space-y-4'>
              <FormLabel className='text-lg font-medium text-neutral-700'>
                Video Length
                <p className='mt-1 text-sm font-normal text-neutral-400'>
                  Select the length of the creative asset.
                </p>
              </FormLabel>
              <FormControl>
                <div className='flex gap-4'>
                  <Input
                    type='number'
                    placeholder='Min'
                    className='w-full'
                    {...register('videoLength.min', { valueAsNumber: true })}
                  />
                  <span className='flex items-center text-neutral-400'>—</span>
                  <Input
                    type='number'
                    placeholder='Max'
                    className='w-full'
                    {...register('videoLength.max', { valueAsNumber: true })}
                  />
                  <span className='flex items-center text-neutral-400'>
                    sec
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Raw / Ready to use */}
        <FormField
          control={control}
          name='deliveryType'
          render={({ field }) => (
            <FormItem className='mb-8 space-y-4'>
              <FormLabel className='text-lg font-medium text-neutral-700'>
                Ready to Use / Raw
                <p className='mt-2 text-sm font-normal text-neutral-400'>
                  If you want to use the ready-to-use version of the creative
                  asset, or only the raw image, please notify the creators.
                </p>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='grid grid-cols-3 justify-items-stretch gap-4'
                >
                  {[
                    { value: 'raw', label: 'Raw Image' },
                    { value: 'ready', label: 'Ready to Use' },
                    {
                      value: 'both',
                      label: 'Ready to Use + Raw Image',
                    },
                  ].map((option) => (
                    <FormItem className='h-full' key={option.value}>
                      <FormControl>
                        <div className='relative h-full'>
                          <RadioGroupItem
                            value={option.value}
                            id={option.value}
                            className='peer sr-only'
                          />
                          <FormLabel
                            htmlFor={option.value}
                            className='group flex h-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-neutral-200 bg-white p-4 text-center text-sm leading-7 text-neutral-600 hover:bg-neutral-50 peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-purple-600'
                          >
                            {option.label}
                          </FormLabel>
                        </div>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Music */}
        <FormField
          control={control}
          name='music'
          render={({ field }) => (
            <FormItem className='mb-8 space-y-4'>
              <FormLabel className='text-lg font-medium text-neutral-700'>
                Music
                <p className='mt-1 text-sm font-normal text-neutral-400'>
                  Do you want to add music to the creative asset?
                </p>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='grid grid-cols-2 gap-4'
                >
                  {[
                    { value: 'no', label: 'No music' },
                    { value: 'yes', label: 'Music required' },
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
                            className='flex min-h-16 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-neutral-200 bg-white p-4 text-sm leading-7 text-neutral-600 hover:bg-neutral-50 peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-purple-600'
                          >
                            {option.label}
                          </FormLabel>
                        </div>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Content Type */}
        <FormField
          control={control}
          name='contentType'
          render={({ field }) => (
            <FormItem className='mb-8 space-y-4'>
              <FormLabel className='text-lg font-medium text-neutral-700'>
                Content Type
                <p className='mt-1 text-sm font-normal text-neutral-400'>
                  What type of content do you want to create for the creative
                  asset?
                </p>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='grid grid-cols-3 gap-4'
                >
                  {[
                    { value: 'testimonial', label: 'Testimonial', info: true },
                    { value: 'unboxing', label: 'Unboxing', info: true },
                    {
                      value: 'product-demo',
                      label: 'Product Demo',
                      info: true,
                    },
                    {
                      value: 'product-review',
                      label: 'Product Review',
                      info: true,
                    },
                    { value: 'how-to', label: 'How-to', info: true },
                    { value: 'custom', label: 'Custom', info: true },
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
                            className='group flex min-h-16 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-neutral-200 bg-white p-4 text-center text-lg text-sm leading-7 text-neutral-600 hover:bg-neutral-50 peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-purple-600'
                          >
                            {option.label}
                          </FormLabel>
                        </div>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Creator Instructions */}
        <div className='mt-14 space-y-8'>
          {/* Main Content Messaging */}
          <FormField
            control={control}
            name='creatorInstructions.mainContentMessaging'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg font-medium text-neutral-700'>
                  Main content messaging:
                  <p className='mt-1 text-sm font-normal text-neutral-400'>
                    What type of content do you want to create for the creative
                    asset?
                  </p>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=''
                    {...field}
                    className='mt-2 rounded-xl border-[1.5px] border-neutral-200'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Required Actions */}
          <FormField
            control={control}
            name='creatorInstructions.requiredActions'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg font-medium text-neutral-700'>
                  Required Actions:
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter any specific actions you want creators to take'
                    {...field}
                    className='mt-2'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Creator Avoidance */}
        <div className='mt-14 space-y-4'>
          <FormField
            control={control}
            name='creatorAvoidance'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg font-medium text-neutral-700'>
                  What should the creators avoid? (optional)
                  <p className='mt-1 text-sm font-normal text-neutral-400'>
                    What should the creators avoid?
                  </p>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter things to avoid (optional)'
                    {...field}
                    className='mt-4'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </>
  )
}

export default FormDeliverables
