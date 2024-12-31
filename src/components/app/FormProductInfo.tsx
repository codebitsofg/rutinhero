import React from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { CircleEllipsis, Dot, InfoIcon } from 'lucide-react'
import { Control, useWatch } from 'react-hook-form'
import { CampaignFormValues } from '@/lib/schemas/campaignGeneration'
import CompleteFormBlock from './CompleteFormBlock'
import ImageUpload from './ImageUpload'

const FormProductInfo = ({
  control,
  register,
}: {
  control: Control<CampaignFormValues>
  register: any
}) => {
  return (
    <>
      <h1 className='mb-14 text-[3.4rem] font-medium text-neutral-700'>Ürün</h1>
      <ImageUpload />
      <FormField
        control={control}
        name='delivery'
        render={({ field }) => (
          <FormItem className='space-y-3'>
            <>
              <FormLabel>
                Ürün Teslimatı
                <p className='mt-1 text-base text-neutral-400'>
                  Ürünlerin kullanıcıya nasıl teslim edileceğini seç
                </p>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='grid grid-cols-2 gap-2 text-center'
                >
                  {[
                    {
                      value: 'not-required',
                      label: 'Gerekli Değil',
                    },
                    {
                      value: 'shipment',
                      label: 'Kargo ile Teslimat',
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
        name='productName'
        render={({ field }) => (
          <FormItem>
            <>
              <FormLabel>
                Ürün Adı
                <p className='mt-1 text-base text-neutral-400'>
                  Tanıtılacak ürünlerin adını gir.
                </p>
              </FormLabel>

              <FormControl>
                <div className='relative'>
                  <Input
                    placeholder='Örn: Rutin Hero 2024'
                    {...field}
                    className='pr-16'
                  />
                </div>
              </FormControl>
              <FormMessage />
            </>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='productDescription'
        render={({ field }) => (
          <FormItem>
            <>
              <FormLabel>
                Açıklama
                <p className='mt-1 text-base text-neutral-400'>
                  Ürünlerin tanıtımını gir. Ürünlerin özelliklerini ve
                  linklerini de ekleyebilirsiniz.
                </p>
              </FormLabel>

              <FormControl>
                <div className='relative'>
                  <Input
                    placeholder='Örn: Rutin Hero 2024'
                    {...field}
                    className='pr-16'
                  />
                </div>
              </FormControl>
              <FormMessage />
            </>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name='productLink'
        render={({ field }) => (
          <FormItem>
            <>
              <FormLabel>
                Ürün Linki
                <p className='mt-1 text-base text-neutral-400'>
                  Ürünlerin linkini gir. Ürünlerin tanıtımını ve özelliklerini
                  de ekleyebilirsiniz.
                </p>
              </FormLabel>

              <FormControl>
                <div className='relative'>
                  <Input
                    placeholder='Örn: Rutin Hero 2024'
                    {...field}
                    className='pr-16'
                  />
                </div>
              </FormControl>
              <FormMessage />
            </>
          </FormItem>
        )}
      />

      {/* <FormField
        control={control}
        name='name'
        render={({ field }) => (
          <FormItem>
            <>
              <FormLabel>
                Kampanya Adı
                <p className='mt-1.5 text-sm font-light text-neutral-400'>
                  Kampanyan için kısa bir ad gir. Kullanıcılar tarafindan
                  görünür.
                </p>
              </FormLabel>

              <FormControl>
                <div className='relative'>
                  <Input
                    placeholder='Örn: Rutin Hero 2024'
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
        name='strategy'
        render={({ field }) => (
          <FormItem className='space-y-3'>
            <>
              <FormLabel>Kampanya Stratejisi</FormLabel>
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
                <p className='mt-1.5 text-sm font-light text-neutral-400'>
                  İçeriği kullanmak istedigin platformu seç.
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
                Kampanya katılımcı sayısı
                <p className='mt-1.5 text-sm font-light text-neutral-400'>
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
      /> */}
      <CompleteFormBlock />
    </>
  )
}

export default FormProductInfo
