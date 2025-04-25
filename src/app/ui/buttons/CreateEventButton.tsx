'use client'

import { Suspense } from 'react'
import { Spinner } from '../icons/Spinner'
import dynamic from 'next/dynamic'
import { CurrentUser, ROLES } from '@/types'
import { CREATE_EVENT_MODAL } from '@/constants/frontend/modals'
import { useUIStore } from '@/stores/useUIStore'

// Lazy import con suspense
const CreateEventModal = dynamic(
  () => import('@/app/ui/modals/CreateEventModal'),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
        <Spinner />
      </div>
    ),
  }
)

export default function CreateEventButton({ user }: { user: CurrentUser }) {
  const { showModal, setShowModal } = useUIStore()
  return (
    <>
      {user?.role === ROLES.ADMIN && (
        <button
          className="bg-green-600 hover:bg-green-500 h-fit rounded-full flex items-center justify-center px-3 py-1 font-semibold w-fit text-white border-white/15 border-2 self-center whitespace-nowrap"
          onClick={() => setShowModal(true)}
          aria-label={CREATE_EVENT_MODAL.TITLE}
          title={CREATE_EVENT_MODAL.TITLE}
        >
          {CREATE_EVENT_MODAL.TITLE}
        </button>
      )}

      {showModal && user?.id && (
        <Suspense fallback={<Spinner />}>
          <CreateEventModal
            userId={user.id}
            onClose={() => setShowModal(false)}
          />
        </Suspense>
      )}
    </>
  )
}
