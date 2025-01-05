import { useSession } from 'next-auth/react'

export function useUserRole() {
  const { data: session } = useSession()
  return session?.user?.userType as 'BRAND' | 'CREATOR' | undefined
}
