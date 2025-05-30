'use client'

import { PAYMENT } from '@/constants/frontend/payment'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useEffect } from 'react'

interface Props {
  preferenceId: string
}

export default function WalletWrapper({ preferenceId }: Props) {
  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!, {
      locale: PAYMENT.LOCALE,
    })
  }, [])

  return <Wallet initialization={{ preferenceId }} />
}
