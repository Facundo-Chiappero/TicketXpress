'use client'

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useEffect } from 'react'

interface Props {
  preferenceId: string
}

export default function WalletWrapper({ preferenceId }: Props) {
  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!, {
      locale: 'es-AR',
    })
  }, [])

  return <Wallet initialization={{ preferenceId }} />
}
