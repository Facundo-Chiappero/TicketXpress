import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { validateEventBody } from '@/lib/validateEvent'

// create a event
export async function POST(req: Request) {
  const body = await req.json()
  const { title, description, price, date, images = [], creatorId } = body

  const error = validateEventBody(body)
  if (error) return NextResponse.json({ error: error.error }, { status: error.status })


  const event = await prisma.event.create({
    data: {
      title,
      description,
      date: new Date(date),
      price: Number(price),
      images,
      creatorId: Number(creatorId),
    },
  })

  return NextResponse.json(event, { status: 201 })
}
