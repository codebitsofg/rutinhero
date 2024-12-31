import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    email: string
    name: string
    userType: 'BRAND' | 'CREATOR'
    accessToken: string
  }

  interface Session {
    accessToken: string
    user: User & {
      userType: 'BRAND' | 'CREATOR'
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
    userType: 'BRAND' | 'CREATOR'
  }
}
