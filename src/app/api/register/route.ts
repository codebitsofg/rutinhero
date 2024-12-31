import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, password, userType } = body

    if (!email || !name || !password || !userType) {
      return new NextResponse('Missing required fields', { status: 400 })
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (existingUser) {
      return new NextResponse('Email already exists', { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        userType: userType.toUpperCase(),
      },
    })

    // Create corresponding profile based on user type
    if (userType === 'creator') {
      await prisma.creator.create({
        data: {
          userId: user.id,
        },
      })
    } else if (userType === 'brand') {
      await prisma.brand.create({
        data: {
          userId: user.id,
        },
      })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('REGISTRATION_ERROR', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
