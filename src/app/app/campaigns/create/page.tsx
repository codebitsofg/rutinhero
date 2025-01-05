'use client'

import { withRoleProtection } from '@/components/auth/withRoleProtection'

function CreateCampaignPage() {
  return (
    <div>
      <h1>Create New Campaign</h1>
      {/* Your campaign creation form and other components */}
    </div>
  )
}

export default withRoleProtection(CreateCampaignPage, 'BRAND')
