import LoginButton from '@/app/ui/buttons/LoginButton'
import SignupButton from '@/app/ui/buttons/SignupButton'
import { CurrentUser } from '@/types'
import UserMenu from '@/app/ui/user/UserMenu'
import GoHomeButton from '@/app/ui/buttons/GoHomeButton'
import ThemeSwitch from '@/components/ThemeSwitch'

export default function AuthButtons({ user }: { user: CurrentUser }) {
  if (!user) {
    return (
      <nav className="flex gap-4 flex-wrap xs:w-fit w-full items-center">
        <ThemeSwitch />
        <LoginButton />
        <SignupButton />
      </nav>
    )
  }

  return (
    <nav className="flex gap-4 items-center flex-wrap xs:w-fit w-full">
      <ThemeSwitch />
      <GoHomeButton />
      <div className="flex gap-4 items-center">
        <p className="text-sm">{user.name}</p>
        <UserMenu user={user} />
      </div>
    </nav>
  )
}
