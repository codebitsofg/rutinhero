'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true)
      setError(null)

      // Authenticate through NestJS endpoint
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Invalid credentials')
      }

      const { accessToken } = await response.json()

      // Sign in with NextAuth using the token
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (result?.error) {
        throw new Error(result.error)
      }

      // Redirect to the intended page or dashboard
      const callbackUrl = searchParams.get('from') || '/app'
      router.push(callbackUrl)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Invalid credentials')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='container relative flex h-screen items-center justify-center overflow-hidden bg-neutral-50 py-12 text-neutral-700'>
      <img
        src='/dashboard/auth/auth.svg'
        alt='logo'
        className='absolute left-0 top-0 w-[50vw] text-white'
      />
      <Card className='relative z-10 w-full max-w-xl rounded-3xl border-[1.5px] border-neutral-300 p-8'>
        <div className='space-y-6'>
          <div className='text-center'>
            <h1 className='font-dm text-4xl font-bold text-neutral-700'>
              Hoşgeldin
            </h1>
            <p className='mt-4 text-neutral-500'>
              Hesabınıza giriş yapmak için bilgilerini gir.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='space-y-3'>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your email'
                        type='email'
                        {...field}
                        className='h-[53px]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className='space-y-3'>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your password'
                        type='password'
                        {...field}
                        className='h-[53px]'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {error && <div className='text-sm text-red-500'>{error}</div>}

              <Button
                type='submit'
                className='h-16 w-full bg-neutral-600 text-xl'
                disabled={isLoading}
              >
                {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
              </Button>
            </form>
          </Form>

          <div className='text-md text-center'>
            Hesabın yok mu?{' '}
            <Link href='/signup' className='font-medium text-primary'>
              Hesap oluştur
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}
