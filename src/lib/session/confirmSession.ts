import { authOptions } from '@/lib/auth/authOptions'
import { PAGES } from '@/constants/frontend/pages'
import { PARAMS } from '@/constants/frontend/params'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

interface Props {
  callback: string
}
export default async function confirmSession(
  { callback }: Props = { callback: PAGES.HOME }
) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect(`${PAGES.AUTH.LOGIN}?${PARAMS.AUTH_CALLBACK}=${callback}`)
  }
  return session
}
