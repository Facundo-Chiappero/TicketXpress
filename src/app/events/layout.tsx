import { METADATA } from '@/constants/frontend/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: METADATA.LAYOUTS.EVENT.TITLE,
  description: METADATA.LAYOUTS.EVENT.DESCRIPTION,
}

export default async function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
