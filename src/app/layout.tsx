import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { METADATA } from '@/constants/frontend'

export const metadata: Metadata = {
  title: METADATA.LAYOUT.TITLE,
  description: METADATA.LAYOUT.DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
