import { NextResponse } from 'next/server'
import { MercadoPagoConfig, Payment as MPPayment } from 'mercadopago'
import { prisma } from '@/lib/prisma'

const client = new MercadoPagoConfig({
  accessToken: process.env.NEXT_PUBLIC_MP_ACCESS_TOKEN || '',
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { type, data } = body

    if (type === 'payment' && data?.id) {
      const mpPayment = new MPPayment(client)

      const payment = await mpPayment.get({ id: data.id })

      if (payment.status === 'approved') {
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

      return NextResponse.json({ message: 'OK' }, { status: 200 })
    }

    return NextResponse.json({ message: 'Ignored' }, { status: 200 })
  } catch (error) {
    console.error('❌ Webhook error:', error)
    return NextResponse.json(
      { message: 'Error processing webhook' },
      { status: 500 }
    )
  }
}
