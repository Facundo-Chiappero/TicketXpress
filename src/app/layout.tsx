import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { METADATA } from '@/constants/frontend/metadata'

export const metadata: Metadata = {
  title: {
    default: METADATA.LAYOUTS.HOME.TITLE,
    template: `${METADATA.LAYOUTS.HOME.TITLE} - %s`,
  },
  description: METADATA.LAYOUTS.HOME.DESCRIPTION,
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
