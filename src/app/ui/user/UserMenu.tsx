'use client'

import { useRef } from 'react'
import Link from 'next/link'
import LogoutButton from '@/app/ui/buttons/LogoutButton'
import { CurrentUser } from '@/types'
import UserImage from './UserImage'
import { USER_MENU_ACTIONS } from '@/constants/frontend/userMenu'
import { PAGES } from '@/constants/frontend/pages'
import { useClickOutside } from '@/hooks/useClickOutside'

export default function UserMenu({ user }: { user: CurrentUser }) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  useClickOutside(
    detailsRef,
    () => {
      detailsRef.current?.removeAttribute('open')
    },
    USER_MENU_ACTIONS.MOUSE_EVENT
  )

  return (
    <details ref={detailsRef} className="relative group flex flex-col gap-2">
      <summary className="list-none cursor-pointer rounded-md">
        <UserImage name={user?.name} image={user?.image} />
      </summary>

      <div className="relative triangle-with-border"></div>
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 shadow-lg border border-zinc-300 dark:border-zinc-700 rounded-md z-50">
        <Link
          href={PAGES.USER.PROFILE}
          className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-sm"
        >
          {USER_MENU_ACTIONS.MY_PROFILE}
        </Link>
        <div className="border-t border-zinc-300 dark:border-zinc-600" />
        <div>
          <LogoutButton />
        </div>
      </div>
    </details>
  )
}
