import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/authOptions'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { ERRORS } from '@/constants/backend/errors'
import { UPDATE_USER_FORM } from '@/constants/frontend/updateUserForm'

interface UpdateData {
  name: string
  email: string
  image?: string
  password?: string
}

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json(
      { error: ERRORS.UPDATE_PROFILE.UNAUTHORIZED },
      { status: 401 }
    )
  }

  const body = await req.formData()

  const name = body.get(UPDATE_USER_FORM.INPUT_NAMES.NAME) as string
  const email = body.get(UPDATE_USER_FORM.INPUT_NAMES.EMAIL) as string
  const currentPassword = body.get(
    UPDATE_USER_FORM.INPUT_NAMES.CURRENT_PASSWORD
  ) as string
  const newPassword = body.get(
    UPDATE_USER_FORM.INPUT_NAMES.NEW_PASSWORD
  ) as string
  const image = body.get(UPDATE_USER_FORM.INPUT_NAMES.IMAGE) as string

  const user = await prisma.user.findUnique({
    where: {
      id: Number(session.user.id),
    },
  })

  if (!user) {
    return NextResponse.json(
      { error: ERRORS.UPDATE_PROFILE.NOT_FOUND },
      { status: 404 }
    )
  }

  if (!user.password) {
    return NextResponse.json(
      { error: ERRORS.UPDATE_PROFILE.NO_PASSWORD },
      { status: 404 }
    )
  }

  const passwordMatches = await bcrypt.compare(currentPassword, user.password)

  if (!passwordMatches) {
    return NextResponse.json(
      { error: ERRORS.UPDATE_PROFILE.INCORRECT_PASSWORD },
      { status: 401 }
    )
  }

  const updateData: UpdateData = {
    name,
    email,
    image: image || undefined,
  }

  if (newPassword) {
    updateData.password = await bcrypt.hash(newPassword, 10)
  }

  await prisma.user.update({
    where: { id: user.id },
    data: updateData,
  })

  return NextResponse.json({ success: true })
}
