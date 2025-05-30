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
  openGraph: {
    title: METADATA.LAYOUTS.HOME.TITLE,
    description: METADATA.LAYOUTS.HOME.DESCRIPTION,
    url: METADATA.LAYOUTS.HOME.URL,
    images: [
      {
        url: METADATA.LAYOUTS.HOME.PREVIEW_URL,
        width: 1200,
        height: 630,
        alt: METADATA.LAYOUTS.HOME.TITLE,
      },
    ],
    siteName: METADATA.LAYOUTS.HOME.TITLE,
    type: METADATA.LAYOUTS.HOME.TYPE,
  },
  twitter: {
    card: 'summary_large_image',
    title: METADATA.LAYOUTS.HOME.TITLE,
    description: METADATA.LAYOUTS.HOME.DESCRIPTION,
    images: METADATA.LAYOUTS.HOME.PREVIEW_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
