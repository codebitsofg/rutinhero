'use client'
import { RoleBasedRender } from '@/components/auth/RoleBasedRender'

import CampaignCreationSelection from '@/components/app/brand/campaigns/CampaignCreationSelection'
import CampaignGallery from '@/components/app/creator/campaign/CampaignGallery'

export default function CampaignSetup() {
  return (
    <>
      <RoleBasedRender roles={['BRAND']}>
        <CampaignCreationSelection />
      </RoleBasedRender>
      <RoleBasedRender roles={['CREATOR']}>
        <CampaignGallery />
      </RoleBasedRender>
    </>
  )
}
