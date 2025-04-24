import { METADATA } from '@/constants/frontend/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: METADATA.LAYOUTS.AUTH.TITLE,
  description: METADATA.LAYOUTS.AUTH.DESCRIPTION,
}

export default async function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
