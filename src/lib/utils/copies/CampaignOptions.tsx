import { AudioWaveform, Gift, Handshake, Medal } from 'lucide-react'
import { ReactNode } from 'react'

export interface Strategy {
  title: string
  description: string
  icon: ReactNode
  image: string
}

export interface Strategies {
  [key: string]: Strategy[]
}

export const strategies: Strategies = {
  ugc: [
    {
      title: 'Çoklu UGC Üretimi',
      description:
        'Kullanıcı tarafından oluşturulmuş, kampanya hedeflerine uygun kreatifler üretmek için kullanılır.',
      icon: (
        <AudioWaveform className='mb-4 block text-xl font-light text-blue-800' />
      ),
      image: '/dashboard/options-ugc.png',
    },
    {
      title: 'Influencer İşbirligi',
      description:
        'Markanının sesini yansıtacak influencerlarla işbirliği için kullanılır. Onaylanan içerikler influencerlar tarafından yayınlanır.',
      icon: (
        <Handshake className='mb-4 block text-xl font-light text-red-800' />
      ),
      image: '/dashboard/options-influencer.png',
    },
  ],
  reach: [
    {
      title: 'Barter ',
      description:
        'Ürünlerini seçtiğin içerik üreticilerine gönder, istediğin sayıda ücretsiz UGC üret ve etkileşim kazan.',
      icon: <Gift className='mb-4 block text-xl font-light text-green-800' />,
      image: '/dashboard/win-win.png',
    },
  ],
  engagement: [
    {
      title: 'Görevler',
      description:
        'Hedeflerin doğultusunda görevler ve ödüller belirle, katılımcıları seç, etkileşimini arttır ve esnek bir strateji izle.',
      icon: <Medal className='mb-4 block text-xl font-light text-yellow-800' />,
      image: '/dashboard/tasks.png',
    },
  ],
}
