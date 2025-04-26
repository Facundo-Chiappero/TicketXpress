import Header from '@/app/ui/Header'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/authOptions'
import { Metadata } from 'next'
import { METADATA } from '@/constants/frontend/metadata'

export async function generateMetadata(): Promise<Metadata> {
  const session = await getServerSession(authOptions)

  return {
    title: `${session?.user.name}${METADATA.LAYOUTS.USER.TITLE}`,
    description: METADATA.LAYOUTS.USER.DESCRIPTION,
  }
}

export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)

  return (
    <>
      <Header title="User" user={session?.user} />
      {children}
    </>
  )
}
