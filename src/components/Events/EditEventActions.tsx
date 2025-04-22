'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Clipboard } from '@/app/ui/icons/Clipboard'
import { Trash } from '@/app/ui/icons/Trash'
import IconButton from '@/app/ui/buttons/IconButton'
import { Spinner } from '@/app/ui/icons/Spinner'
import { Event } from '../../../types'

// Lazy load de modales con fallback de carga (sin Suspense)
const EditEventModal = dynamic(() => import('@/app/ui/modals/EditEventModal'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <Spinner />
    </div>
  ),
})

const DeleteEventModal = dynamic(
  () => import('@/app/ui/modals/DeleteEventModal'),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
        <Spinner />
      </div>
    ),
  }
)

export default function EditEventActions({ event }: { event: Event }) {
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  return (
    <>
      <div className="flex items-center gap-2">
        <IconButton
          onClick={() => setIsEditing(true)}
          className="text-blue-500 hover:text-blue-700"
          icon={<Clipboard />}
          title="Editar evento"
        />
        <IconButton
          onClick={() => setIsDeleting(true)}
          className="text-red-500 hover:text-red-700"
          icon={<Trash />}
          title="Eliminar evento"
        />
      </div>

      {isEditing && (
        <EditEventModal event={event} onClose={() => setIsEditing(false)} />
      )}

      {isDeleting && (
        <DeleteEventModal
          event={event.id}
          onClose={() => setIsDeleting(false)}
        />
      )}
    </>
  )
}
