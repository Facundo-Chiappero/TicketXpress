import AuthButtons from './AuthButtons'
import { CurrentUser } from '../../types.d'
import CreateEventButton from '@/app/ui/buttons/CreateEventButton'

export default function MainHeader({ user }: { user: CurrentUser }) {
  return (
    <header className="flex justify-end xs:justify-between sticky top-0 left-0 bg-inherit p-4 flex-wrap flex-row-reverse gap-4 items-center z-50">
      <AuthButtons user={user} />

      <CreateEventButton user={user} />

      <h1 className="text-5xl font-bold">Events</h1>
    </header>
  )
}
