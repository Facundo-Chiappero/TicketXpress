import { ERRORS } from '@/constants/backend/errors'
import { prisma } from '@/lib/prisma'
import { validateEventBody } from '@/lib/validateEvent'
import { NextRequest, NextResponse } from 'next/server'

// update an event
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)
  const body = await req.json()

  if (isNaN(id)) {
    return NextResponse.json(
      { error: ERRORS.EVENT_BY_ID.INVALID_ID },
      { status: 400 }
    )
  }

  const error = validateEventBody(body)
  if (error) return NextResponse.json({ error: error.error }, { status: error.status })

  const existingEvent = await prisma.event.findUnique({ where: { id } })
  if (!existingEvent) {
    return NextResponse.json({ error: ERRORS.EVENT_BY_ID.NOT_FOUND }, { status: 404 })

  }

  try {
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        price: body.price,
        date: new Date(body.date),
        ...(body.images ? { images: { set: body.images } } : {}),
      },
    }) 

    return NextResponse.json(updatedEvent)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: ERRORS.EVENT_BY_ID.UPDATING },
      { status: 500 }
    )
  }
}

// delete an event
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)

  if (isNaN(id)) {
    return NextResponse.json(
      { error: ERRORS.EVENT_BY_ID.INVALID_ID },
      { status: 400 }
    )
  }

  const existingEvent = await prisma.event.findUnique({ where: { id } })
  if (!existingEvent) {
    return NextResponse.json({ error: ERRORS.EVENT_BY_ID.NOT_FOUND }, { status: 404 })

  }

  try {
    const deletedEvent = await prisma.event.delete({
      where: { id },
    })

    return NextResponse.json(deletedEvent)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: ERRORS.EVENT_BY_ID.UPDATING },
      { status: 500 }
    )
  }
}

// get a singular event (used for the event buying page)
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)

  if (isNaN(id)) {
    return NextResponse.json(
      { error: ERRORS.EVENT_BY_ID.INVALID_ID },
      { status: 400 }
    )
  }

  const existingEvent = await prisma.event.findUnique({ where: { id } })
  if (!existingEvent) {
    return NextResponse.json({ error: ERRORS.EVENT_BY_ID.NOT_FOUND }, { status: 404 })

  }

  try {
    const event = await prisma.event.findUnique({
      where: { id: id },
      include: {
        creator: true,
        payments: true,
      },
    })

    if (!event) {
      return NextResponse.json(
        { error: ERRORS.EVENT_BY_ID.NOT_FOUND },
        { status: 404 }
      )
    }

    return NextResponse.json(event)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: ERRORS.EVENT_BY_ID.INTERNAL },
      { status: 500 }
    )
  }
}
