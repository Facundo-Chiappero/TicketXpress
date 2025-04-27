import AuthButtons from './AuthButtons'
import { CurrentUser } from '@/types'
import CreateEventButton from '@/app/ui/buttons/CreateEventButton'

export default function Header({
  user,
  title,
}: {
  user: CurrentUser
  title: string
}) {
  return (
    <header className="flex justify-end xs:justify-between sticky top-0 left-0 bg-inherit p-4 flex-wrap flex-row-reverse gap-4 items-center z-50 shadow-md">
      <AuthButtons user={user} />

      <CreateEventButton user={user} />

      <h1 className="text-5xl font-bold">{title}</h1>
    </header>
  )
}
