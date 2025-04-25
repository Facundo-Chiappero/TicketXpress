'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import LogoutButton from '@/app/ui/buttons/LogoutButton'
import { CurrentUser } from '@/types'
import UserImage from './UserImage'
import { USER_MENU_ACTIONS } from '@/constants/frontend/userMenu'
import { PAGES } from '@/constants/frontend/pages'

export default function UserMenu({ user }: { user: CurrentUser }) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  // used to close the <details />
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(event.target as Node)
      ) {
        detailsRef.current.removeAttribute('open')
      }
    }

    document.addEventListener(USER_MENU_ACTIONS.MOUSE_EVENT, handleClickOutside)
    return () =>
      document.removeEventListener(
        USER_MENU_ACTIONS.MOUSE_EVENT,
        handleClickOutside
      )
  }, [])

  return (
    <details ref={detailsRef} className="relative group flex flex-col gap-2">
      <summary className="list-none cursor-pointer rounded-md">
        <UserImage name={user?.name} image={user?.image} />
      </summary>

      <div className="relative triangle-with-border"></div>
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700 rounded-md z-50">
        <Link
          href={PAGES.USER.PROFILE}
          className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-sm"
        >
          {USER_MENU_ACTIONS.MY_PROFILE}
        </Link>
        <div className="border-t border-zinc-200 dark:border-zinc-600" />
        <div>
          <LogoutButton />
        </div>
      </div>
    </details>
  )
}
