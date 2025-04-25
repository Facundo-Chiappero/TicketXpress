import { METADATA } from '@/constants/frontend/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: METADATA.LAYOUTS.PAYMENT.TITLE,
  description: METADATA.LAYOUTS.PAYMENT.DESCRIPTION,
}

export default async function PaymentLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
