'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { UploadIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { type CampaignFormValues } from '@/lib/schemas/campaignGeneration'

const ImageUpload = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const {
    register,
    formState: { errors },
  } = useFormContext<CampaignFormValues>()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  return (
    <div className='flex flex-col items-start gap-8 md:flex-row'>
      <div className='relative h-44 w-full overflow-hidden rounded-lg bg-muted md:w-44'>
        {previewUrl ? (
          <Image
            src={previewUrl}
            alt='Product preview'
            fill
            className='object-cover'
          />
        ) : (
          <div className='h-full w-full bg-neutral-100' />
        )}
      </div>

      <div className='flex-1 space-y-4'>
        <div>
          <h2 className='text-xl tracking-tight text-neutral-600'>
            Ürünü Görseli
          </h2>
          <p className='mt-1 text-base leading-relaxed text-neutral-400'>
            Upload a high quality picture of your product to attract the
            creator's attention and stand out against offers from other brands.
            The image must be 1200 x 500 pixels in PNG or JPG format.
          </p>
        </div>

        <div className='gap-2'>
          <input
            type='file'
            accept='image/png,image/jpeg'
            className='hidden'
            {...register('productImage', {
              onChange: handleFileChange,
            })}
            ref={(e) => {
              fileInputRef.current = e
              const { ref } = register('productImage')
              if (typeof ref === 'function') {
                ref(e)
              }
            }}
          />

          <button
            type='button'
            onClick={() => fileInputRef.current?.click()}
            className='inline-flex h-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-3 text-base text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
          >
            <UploadIcon className='h-5 w-5' />
            Görseli Yükle
          </button>

          {errors.productImage && (
            <p className='mt-2 text-sm text-red-600'>
              {errors.productImage.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ImageUpload
