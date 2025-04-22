import { NextResponse } from 'next/server'
import { MercadoPagoConfig, Preference } from 'mercadopago'
import { PAYMENT_MESSAGES, PAYMENT_ERRORS, PAYMENT } from '@/constants/backend'

const client = new MercadoPagoConfig({
  accessToken: process.env.NEXT_PUBLIC_MP_ACCESS_TOKEN || '',
})

export async function POST(req: Request) {
  try {
    const { id, title, unit_price, userId, eventId } = await req.json()

    if (!title || !unit_price || !userId) {
      console.warn(PAYMENT_ERRORS.MISSING)
      return NextResponse.json(
        { message: PAYMENT_MESSAGES.MISSING_DATA },
        { status: 400 }
      )
    }

    const preference = new Preference(client)
    const data = {
      event_id: eventId,
      user_id: userId,
    }

    const result = await preference.create({
      body: {
        items: [
          {
            id,
            title,
            unit_price,
            quantity: 1,
          },
        ],
        additional_info: JSON.stringify({}),
        metadata: {
          data,
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
          failure: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/failure`,
          pending: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/pending`,
        },
        notification_url: PAYMENT.NOTIFICATION_URL,
        auto_return: PAYMENT.AUTO_RETURN,
      },
    })

    return NextResponse.json({ id: result.id })
  } catch (error) {
    console.error(PAYMENT_ERRORS.CREATE, error)
    return NextResponse.json(
      { message: PAYMENT_MESSAGES.CREATE_ERROR },
      { status: 500 }
    )
  }
}
