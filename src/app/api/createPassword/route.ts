import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { ERRORS } from '@/constants/backend/errors'
import { CREATE_PASSWORD } from '@/constants/backend/createPassword'

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return NextResponse.json(
      { error: ERRORS.UPDATE_PROFILE.UNAUTHORIZED },
      { status: 401 }
    )
  }

  const body = await req.json()
  const { newPassword } = body

  if (!newPassword) {
    return NextResponse.json(
      { error: ERRORS.CREATE_PASSWORD.NO_PASSWORD },
      { status: 400 }
    )
  }

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10)

    await prisma.user.update({
      where: { id: Number(session.user.id) },
      data: { password: hashedPassword },
    })

    return NextResponse.json({ message: CREATE_PASSWORD.SUCCESS })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json(
      { error: ERRORS.CREATE_PASSWORD.SERVER_ERROR },
      { status: 500 }
    )
  }
}
