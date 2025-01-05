import { useUserRole } from '@/hooks/useUserRole'

interface RoleBasedRenderProps {
  roles: ('BRAND' | 'CREATOR')[]
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function RoleBasedRender({
  roles,
  children,
  fallback = null,
}: RoleBasedRenderProps) {
  //   const userRole = useUserRole()
  const userRole = 'BRAND'
  if (!userRole || !roles.includes(userRole)) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
