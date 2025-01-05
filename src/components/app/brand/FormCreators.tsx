import React from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Control } from 'react-hook-form'
import { CampaignFormValues } from '@/lib/schemas/campaignGeneration'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { Checkbox } from '../../ui/checkbox'
import { Input } from '../../ui/input'

const FormCreators = ({
  control,
  register,
}: {
  control: Control<CampaignFormValues>
  register: any
}) => {
  return (
    <>
      <h1 className='mb-14 text-[3.4rem] font-medium text-neutral-700'>
        İçerik Üreticileri
      </h1>

      {/* Brief Privacy */}
      <FormField
        control={control}
        name='briefPrivacy'
        render={({ field }) => (
          <FormItem className='space-y-3'>
            <FormLabel>
              Brief Gizliliği
              <p className='mt-1 text-base text-neutral-400'>
                Select "Public" if you want all the creators that fit your
                criteria to apply and "Private" if you want to manually add
                them.
              </p>
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className='grid grid-cols-2 gap-2 text-center'
              >
                {[
                  { value: 'public', label: 'Public' },
                  { value: 'private', label: 'Private' },
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
                          className='flex min-h-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-neutral-300 bg-popover p-4 leading-7 text-neutral-600 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-purple-600'
                        >
                          {option.label}
                        </FormLabel>
                      </div>
                    </FormControl>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />

      {/* Basic Filters Section */}
      <div className='pt-10'>
        <h3 className='mb-12 text-3xl font-medium leading-none text-neutral-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          Temel Filtreler
        </h3>

        <div className='mb-10'>
          <h3 className='text-2xl font-normal leading-none text-neutral-700'>
            İçerik Üreticileri
          </h3>
        </div>
        <div className='mb-12 grid grid-cols-2 gap-4'>
          {/* Country Select */}
          <FormField
            control={control}
            name='creatorFilters.country'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Şehir</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Any' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Any'>Any</SelectItem>
                    <SelectItem value='TR'>Turkey</SelectItem>
                    {/* Add more countries */}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Gender Select */}
          <FormField
            control={control}
            name='creatorFilters.gender'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cinsiyet</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Any' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Any'>Any</SelectItem>
                    <SelectItem value='male'>Male</SelectItem>
                    <SelectItem value='female'>Female</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <div className='grid grid-cols-[1fr_0.5fr] gap-4'>
          {/* Categories and Language */}
          <FormField
            control={control}
            name='creatorFilters.categories'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categories</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Any' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Any'>Any</SelectItem>
                    {/* Add your categories */}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Age Range */}
          <div className='flex flex-row gap-4'>
            <FormField
              control={control}
              name='creatorFilters.age.min'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Yaş</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      placeholder='Min'
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='creatorFilters.age.max'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Max Age</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      placeholder='Max'
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>

      {/* Lookalikes Section */}
      <FormField
        control={control}
        name='lookalikes'
        render={({ field }) => (
          <FormItem className='space-y-3'>
            <FormLabel>
              Örnek Stil
              <p className='mt-1 text-base text-neutral-400'>
                Ürün için oluşturulacak içeriğe benzer diğer içerikleri veya
                profilleri ekleyebilirsiniz.
              </p>
            </FormLabel>
            <FormControl>
              <Input
                placeholder='Add link to favorite creator... https://www.instagram.com/creator'
                {...register('lookalikes')}
              />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Screening Questions */}
      <FormField
        control={control}
        name='screeningQuestions'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Screening Questions (optional)</FormLabel>
            <FormControl>
              {/* Add UI for managing screening questions */}
              {/* This would need a custom component to handle the array of questions */}
            </FormControl>
          </FormItem>
        )}
      />

      {/* Exclude Past Campaigns */}
      <FormField
        control={control}
        name='excludePastCampaigns'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel>Exclude creators from past campaigns</FormLabel>
            </div>
          </FormItem>
        )}
      />

      {/* Manually Pick Creators */}
      <FormField
        control={control}
        name='manuallyPickCreators'
        render={({ field }) => (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel>
                Manually pick creators (optional)
                <p className='mt-1 text-sm text-neutral-400'>
                  Add creators to this campaign or import your own list.
                </p>
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
    </>
  )
}

export default FormCreators
