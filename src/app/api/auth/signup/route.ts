import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { SIGNUP } from '@/constants/backend/signup'
import { ERRORS } from '@/constants/backend/errors'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, password } = body

    if (!name || !email || !password) {
      const missingFields = []
      if (!name) missingFields.push(SIGNUP.MISSING_FIELDS.NAME)
      if (!email) missingFields.push(SIGNUP.MISSING_FIELDS.EMAIL)
      if (!password) missingFields.push(SIGNUP.MISSING_FIELDS.PASSWORD)

      return NextResponse.json(
        {
          error: `${missingFields.join(', ')} ${SIGNUP.MISSING_FIELDS.MESSAGE}`,
        },
        { status: 400 }
      )
    }

    const emailRegex = SIGNUP.REGEX
    console.log(emailRegex)

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: ERRORS.SIGNUP.INVALID_EMAIL },
        { status: 400 }
      )
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: ERRORS.SIGNUP.ALREADY_EXISTS },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ message: SIGNUP.SUCCESS }, { status: 201 })
  } catch (error) {
    console.error(ERRORS.SIGNUP.INTERNAL, error)

    return NextResponse.json(
      { error: ERRORS.SIGNUP.CREATING_USER },
      { status: 500 }
    )
  }
}
