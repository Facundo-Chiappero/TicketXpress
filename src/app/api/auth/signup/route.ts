import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, password } = body

    // Validación básica de los campos requeridos
    if (!name || !email || !password) {
      const missingFields = []
      if (!name) missingFields.push('Nombre')
      if (!email) missingFields.push('Email')
      if (!password) missingFields.push('Contraseña')

      return NextResponse.json(
        { error: `${missingFields.join(', ')} son requeridos` },
        { status: 400 }
      )
    }

    // Verificar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email no válido' }, { status: 400 })
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'El usuario con este email ya existe' },
        { status: 400 }
      )
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 12)

    // Crear el usuario
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json(
      { message: 'Usuario creado con éxito' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error interno:', error)

    return NextResponse.json(
      { error: 'Error al crear el usuario' },
      { status: 500 }
    )
  }
}
