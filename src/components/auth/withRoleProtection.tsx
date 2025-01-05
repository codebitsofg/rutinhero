import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

type AllowedRoles = 'BRAND' | 'CREATOR' | ('BRAND' | 'CREATOR')[]

export function withRoleProtection(
  WrappedComponent: React.ComponentType,
  allowedRoles: AllowedRoles,
) {
  return function ProtectedComponent(props: any) {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
      if (status === 'loading') return

      if (!session) {
        router.push('/login')
        return
      }

      const userRole = session.user.userType
      const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles]

      if (!roles.includes(userRole)) {
        router.push('/app') // Redirect to dashboard or appropriate page
      }
    }, [session, status, router])

    if (status === 'loading') {
      return <div>Loading...</div> // You can replace this with a proper loading component
    }

    if (!session) {
      return null
    }

    const userRole = session.user.userType
    const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles]

    if (!roles.includes(userRole)) {
      return null
    }

    return <WrappedComponent {...props} />
  }
}
