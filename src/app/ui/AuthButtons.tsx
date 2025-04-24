import LoginButton from '@/app/ui/buttons/LoginButton'
import SignupButton from '@/app/ui/buttons/SignupButton'
import { CurrentUser } from '@/types'
import UserMenu from '@/app/ui/user/UserMenu'
import GoHomeButton from '@/app/ui/buttons/GoHomeButton'

export default function AuthButtons({ user }: { user: CurrentUser }) {
  if (!user) {
    return (
      <nav className="flex gap-4 flex-wrap">
        <LoginButton />
        <SignupButton />
      </nav>
    )
  }

  return (
    <nav className="flex gap-4 items-center flex-wrap">
      <GoHomeButton />
      <p className="text-sm">{user.name}</p>
      <UserMenu user={user} />
    </nav>
  )
}
