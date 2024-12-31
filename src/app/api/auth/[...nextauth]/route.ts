import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials')
        }

        try {
          // Authenticate through NestJS endpoint
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            },
          )

          if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || 'Invalid credentials')
          }

          const data = await response.json()

          // Return the user object with the access token
          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.name,
            userType: data.user.userType,
            accessToken: data.accessToken,
          }
        } catch (error) {
          throw new Error('Invalid credentials')
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Add access token and user type to the JWT token
        token.accessToken = user.accessToken
        token.userType = user.userType
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        // Add access token and user type to the session
        session.accessToken = token.accessToken
        session.user.userType = token.userType
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/error',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
})

export { handler as GET, handler as POST }
