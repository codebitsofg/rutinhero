import * as z from 'zod'
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png']

export const campaignFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Campaign name is required')
    .max(50, 'Campaign name cannot exceed 50 characters'),
  goal: z.enum(['multi-channel-ugc', 'reach', 'engagement'], {
    required_error: 'Please select a campaign goal',
  }),
  delivery: z.enum(['not-required', 'shipment'], {
    required_error: 'Please select a campaign goal',
  }),
  platform: z.enum(['facebook', 'instagram', 'tiktok', 'other'], {
    required_error: 'Please select a campaign goal',
  }),
  participant: z.enum(['<5', '5-10', '10-20', '>20'], {
    required_error: 'Please select a campaign goal',
  }),
  strategy: z.enum(
    ['scaled-ugc', 'influencer-collaboration', 'barter', 'tasks'],
    {
      required_error: 'Please select a campaign goal',
    },
  ),
  commission: z.enum(['no-commission', 'include-commission'], {
    required_error: 'Please select a commission option',
  }),
  productImage: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, and .png formats are supported.',
    )
    .refine((file) => {
      if (file instanceof File) {
        return new Promise((resolve) => {
          const img = new Image()
          img.onload = () => {
            resolve(img.width === 1200 && img.height === 500)
          }
          img.onerror = () => {
            resolve(false)
          }
          img.src = URL.createObjectURL(file)
        })
      }
      return false
    }, 'Image dimensions must be exactly 1200x500 pixels.'),
  productName: z.string().min(1, 'Product name is required'),
  productLink: z.string().min(1, 'Product link is required'),
  productDescription: z.string().min(1, 'Product price is required'),
  briefPrivacy: z.enum(['public', 'private'], {
    required_error: 'Please select brief privacy',
  }),
  autoInvite: z.object({
    enabled: z.boolean().default(false),
    fromList: z.string().optional(),
  }),
  creatorFilters: z.object({
    country: z.string().default('Any'),
    gender: z.string().default('Any'),
    age: z
      .object({
        min: z.number().optional(),
        max: z.number().optional(),
      })
      .optional(),
    categories: z.string().default('Any'),
    language: z.string().default('Any'),
  }),
  lookalikes: z.array(z.string()).optional(),
  screeningQuestions: z
    .array(
      z.object({
        question: z.string(),
        answerType: z.string(),
      }),
    )
    .optional()
    .default([]),
  excludePastCampaigns: z.boolean().default(false),
  manuallyPickCreators: z.boolean().default(false),
})

export type CampaignFormValues = z.infer<typeof campaignFormSchema>
