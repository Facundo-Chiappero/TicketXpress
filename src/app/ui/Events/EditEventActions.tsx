'use client'

import dynamic from 'next/dynamic'
import { Clipboard } from '@/app/ui/icons/Clipboard'
import { Trash } from '@/app/ui/icons/Trash'
import IconButton from '@/app/ui/buttons/IconButton'
import { Spinner } from '@/app/ui/icons/Spinner'
import { Event } from '@/types'
import { EDIT_EVENT_ACTIONS } from '@/constants/frontend/editEventActions'
import { useUIStore } from '@/stores/useUIStore'

const MODAL_LOADING_FALLBACK = () => (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
    <Spinner />
  </div>
)
// Lazy load de modales con fallback de carga (sin Suspense)
const EditEventModal = dynamic(() => import('@/app/ui/modals/EditEventModal'), {
  ssr: false,
  loading: () => <MODAL_LOADING_FALLBACK />,
})

const DeleteEventModal = dynamic(
  () => import('@/app/ui/modals/DeleteEventModal'),
  {
    ssr: false,
    loading: () => <MODAL_LOADING_FALLBACK />,
  }
)

export default function EditEventActions({ event }: { event: Event }) {
  const { isDeleting, isEditing, setIsDeleting, setIsEditing } = useUIStore()

  return (
    <>
      <div className="flex items-center gap-2">
        <IconButton
          onClick={() => setIsEditing(true)}
          className="text-blue-500 hover:text-blue-700"
          icon={<Clipboard />}
          title={EDIT_EVENT_ACTIONS.TITLES.EDIT_EVENT}
          aria-label={EDIT_EVENT_ACTIONS.ARIA_LABELS.EDIT_EVENT}
          aria-haspopup={EDIT_EVENT_ACTIONS.ARIA_LABELS.HASPOPUP}
        />
        <IconButton
          onClick={() => setIsDeleting(true)}
          className="text-red-500 hover:text-red-700"
          icon={<Trash />}
          title={EDIT_EVENT_ACTIONS.TITLES.DELETE_EVENT}
          aria-label={EDIT_EVENT_ACTIONS.ARIA_LABELS.DELETE_EVENT}
          aria-haspopup={EDIT_EVENT_ACTIONS.ARIA_LABELS.HASPOPUP}
        />
      </div>

      {isEditing && (
        <EditEventModal
          event={event}
          onClose={() => setIsEditing(false)}
          aria-labelledby={EDIT_EVENT_ACTIONS.MODAL_LABELS.EDIT_EVENT_TITLE}
          aria-describedby={
            EDIT_EVENT_ACTIONS.MODAL_LABELS.EDIT_EVENT_DESCRIPTION
          }
        />
      )}

      {isDeleting && (
        <DeleteEventModal
          event={event.id}
          onClose={() => setIsDeleting(false)}
          aria-labelledby={EDIT_EVENT_ACTIONS.MODAL_LABELS.DELETE_EVENT_TITLE}
          aria-describedby={
            EDIT_EVENT_ACTIONS.MODAL_LABELS.DELETE_EVENT_DESCRIPTION
          }
        />
      )}
    </>
  )
}
