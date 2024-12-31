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
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const signUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type SignUpFormValues = z.infer<typeof signUpSchema>

interface SignUpFormProps {
  userType: 'brand' | 'creator'
  onBack: () => void
}

export function SignUpForm({ userType, onBack }: SignUpFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      setIsLoading(true)
      setError(null)

      // Register the user through NestJS endpoint
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
            userType: userType.toUpperCase(),
          }),
        },
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Registration failed')
      }

      // Sign in the user after successful registration
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (result?.error) {
        throw new Error(result.error)
      }

      // Redirect to the appropriate dashboard
      router.push('/app/dashboard')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='w-full max-w-[50%] space-y-6'>
      <div>
        <Button
          variant='ghost'
          className='mb-8 h-8 w-8 p-0 hover:bg-transparent'
          onClick={onBack}
          disabled={isLoading}
        >
          <ArrowLeft className='h-10 w-10' />
        </Button>
        <div>
          <h1 className='font-dm text-4xl font-bold'>Hesap oluştur</h1>
          <p className='mt-4 text-neutral-500'>
            Hesap oluşturmak için detaylarını gir.
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>İsim</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your name'
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
                <FormLabel>Şifre</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Create a password'
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
            className='h-16 w-full rounded-xl bg-neutral-600 text-lg'
            disabled={isLoading}
          >
            {isLoading ? 'Hesap oluşturuluyor...' : 'Hesap oluştur'}
          </Button>
        </form>
      </Form>

      <div className='text-center text-sm'>
        Hesabın var mı?{' '}
        <Link href='/login' className='font-medium text-primary'>
          Giriş yap
        </Link>
      </div>
    </div>
  )
}
