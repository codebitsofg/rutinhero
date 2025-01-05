import React from 'react'
import {
  Instagram,
  DollarSign,
  Truck,
  Package,
  CheckCheck,
  Plus,
  CirclePlus,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const CampaignPage = () => {
  return (
    <div className='space-y-6 rounded-lg border border-neutral-300 text-neutral-700 shadow-lg'>
      <div className='h-40 w-full bg-neutral-200'></div>
      <div className='mx-auto max-w-[1300px] p-6'>
        <div className='mb-10 flex items-end justify-between'>
          <div>
            <p className='mb-8 w-min text-nowrap rounded-sm bg-purple-600 p-2 text-base font-medium text-white'>
              Bright Hoodies
            </p>
            <h2 className='font-dm text-5xl font-bold'>
              Yeni Şapkonlu Hoodie
              <span className='ml-6 inline-block text-2xl font-normal text-purple-600'>
                Kampanya Detayı
              </span>
            </h2>
          </div>
          <Button className='h-14 rounded-lg bg-neutral-500 px-4 text-xl text-white shadow-none'>
            <CirclePlus className='mr-2 h-6 w-6 text-white' />
            <span>Kampanyaya Katıl</span>
          </Button>
        </div>

        <div className='flex items-center gap-4'>
          <h4 className='text-xl font-medium'>Video Ürün İncelemesi </h4>
          <span>|</span>
          <p className='text-sm text-neutral-500'>
            9-15 Saniye (Paylaşmaya gerek yok)
          </p>
        </div>

        <div className='mt-10 grid grid-cols-2 gap-x-14 gap-y-8 rounded-sm bg-neutral-100 p-8'>
          <div className='flex items-start gap-3'>
            <Instagram className='mt-1 h-6 w-6 text-purple-600' />
            <div>
              <h3 className='text-lg font-medium'>Instagram için İçerik</h3>
              <p className='text-sm text-neutral-500'>
                Instagram için İçerik oluşturmanız gerekiyor
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <DollarSign className='mt-1 h-6 w-6 text-purple-600' />
            <div>
              <h3 className='text-lg font-medium'>
                Fiyat Aralığı - $100 - $300
              </h3>
              <p className='text-sm text-neutral-500'>
                Ürünün fiyatının $100 - $300 arasında olması gerekiyor
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <Truck className='mt-1 h-6 w-6 text-purple-600' />
            <div>
              <h3 className='text-lg font-medium'>Ürün Teslimatı</h3>
              <p className='text-sm text-neutral-500'>
                Ürününüzün teslimatınızın adresine teslim edilmesi gerekiyor
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <Package className='mt-1 h-6 w-6 text-purple-600' />
            <div>
              <h3 className='text-lg font-medium'>Ürün Fiyatı</h3>
              <p className='text-sm text-neutral-500'>
                Ürününüzün fiyatının $400 olması gerekiyor
              </p>
            </div>
          </div>
        </div>

        <div className='space-y-6 pt-12'>
          <div>
            <h4 className='mb-4 font-dm text-4xl font-medium'>
              Ana İçerik Mesajı
            </h4>
            <ul className='list-inside list-disc space-y-3 text-lg text-neutral-600'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              aut, itaque aliquam est sint, omnis reprehenderit dolore
              perferendis ullam suscipit voluptate alias dicta pariatur et
              placeat nostrum deserunt dolores officiis? Amet est commodi
              facilis rem tenetur ad eos dolore soluta veritatis dicta? Officia
              quod consequatur dolor neque quo, ullam natus corporis autem
              laboriosam optio modi quibusdam dicta repellendus ratione fuga!
            </ul>
          </div>

          <div>
            <h4 className='mb-4 mt-12 font-dm text-4xl font-medium'>
              Gerekli Eylemler
            </h4>
            <ul className='list-inside list-decimal space-y-3 text-lg text-neutral-600'>
              <li>
                Scroll durdur: ilk 10 saniye içinde ürünü adınızı ve ürününüzü
                adınızı söyleyin
              </li>
              <li>Ürününüzün neye benzediği</li>
              <li>
                İlk 10 saniye içinde ürünü adınızı ve ürününüzü adınızı söyleyin
              </li>
              <li>Ürününüzün neye benzediği</li>
              <li>Ürününüzün neye benzediği</li>
            </ul>
          </div>

          <div>
            <ul className='grid grid-cols-2 gap-5 rounded-sm bg-neutral-100 p-8 text-lg text-neutral-700'>
              <li className='flex items-center gap-2'>
                <CheckCheck className='h-6 w-6 text-green-500' /> 9:16 dikey
                oran
              </li>
              <li className='flex items-center gap-2'>
                <CheckCheck className='h-6 w-6 text-green-500' /> Paylaşma
                gerekli değil
              </li>
              <li className='flex items-center gap-2'>
                <CheckCheck className='h-6 w-6 text-green-500' /> Marka
                tarafından belirtilmediği sürece müzik yok
              </li>
              <li className='flex items-center gap-2'>
                <CheckCheck className='h-6 w-6 text-green-500' /> Kullanılabilir
                Ad + Raw footage
              </li>
              <li className='flex items-center gap-2'>
                <CheckCheck className='h-6 w-6 text-green-500' /> Marka handle
                ve hashtagler: @brighthoodies #brighthoodie #nighthoodies
              </li>
              <li className='flex items-center gap-2'>
                <CheckCheck className='h-6 w-6 text-green-500' /> Yüksek
                çözünürlüklü videolar yükle
              </li>
              <li className='flex items-center gap-2'>
                <CheckCheck className='h-6 w-6 text-green-500' /> Doğal ışıkta
                kayıt
              </li>
              <li className='flex items-center gap-2'>
                <CheckCheck className='h-6 w-6 text-green-500' /> Uygun arka
                plan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignPage
