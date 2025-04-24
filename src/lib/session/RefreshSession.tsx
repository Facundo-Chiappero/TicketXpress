'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'

interface Props {
  updated: boolean
}

export default function RefreshSession({ updated }: Props) {
  const { update } = useSession()

  useEffect(() => {
    ;(async () => {
      if (updated) {
        await update()
      }
      location.reload()
    })()
  }, [updated])

  return null
}
