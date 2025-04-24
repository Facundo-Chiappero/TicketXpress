import { NextResponse } from 'next/server'
import { MercadoPagoConfig, Payment as MPPayment } from 'mercadopago'
import { prisma } from '@/lib/prisma'
import { PAYMENT } from '@/constants/backend/payment'
import { ERRORS } from '@/constants/backend/errors'

const client = new MercadoPagoConfig({
  accessToken: process.env.NEXT_PUBLIC_MP_ACCESS_TOKEN || '',
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { type, data } = body

    if (type === PAYMENT.TYPE.PAYMENT && data?.id) {
      const mpPayment = new MPPayment(client)

      const payment = await mpPayment.get({ id: data.id })

      if (payment.status === PAYMENT.APPROVED) {
        const userId = payment.metadata?.data?.user_id
        const eventId = payment.metadata?.data?.event_id
        const amount = Number(payment.transaction_amount)

        await prisma.payment.create({
          data: {
            userId,
            eventId,
            amount,
          },
        })
      }

      return NextResponse.json(
        { message: PAYMENT.WEBHOOK_LISTENED },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { message: PAYMENT.WEBHOOK_IGNORED },
      { status: 200 }
    )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: ERRORS.PAYMENT.WEBHOOK },
      { status: 500 }
    )
  }
}
