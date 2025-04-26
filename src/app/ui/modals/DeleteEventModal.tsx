'use client'

import useModalAction from '@/hooks/useModalAction'
import useEscapeKey from '@/hooks/useEscapeKey'
import { Spinner } from '../icons/Spinner'
import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'
import { DELETE_EVENT_MODAL } from '@/constants/frontend/modals'
import { useUIStore } from '@/stores/useUIStore'

interface Props {
  event: number
  onClose: () => void
}

export default function DeleteEventModal({ event, onClose }: Props) {
  const { execute } = useModalAction({ onSuccess: onClose })
  useEscapeKey(onClose)

  const { loading } = useUIStore()

  const handleConfirm = () => {
    execute(`${API_ENDPOINTS.EVENTS}/${event}`, {
      method: HTTP_METHODS.DELETE,
    })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/25"
      role={DELETE_EVENT_MODAL.ARIA.ROLE}
      aria-modal="true"
      aria-labelledby={DELETE_EVENT_MODAL.ARIA.LABELLED_BY}
      aria-describedby={DELETE_EVENT_MODAL.ARIA.DESCRIBED_BY}
    >
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg w-[90%] max-w-sm space-y-4">
        <h2
          id={DELETE_EVENT_MODAL.ARIA.LABELLED_BY}
          className="text-lg font-bold text-zinc-900 dark:text-white"
        >
          {DELETE_EVENT_MODAL.TITLE}
        </h2>

        {loading ? (
          <div
            className="flex justify-center items-center h-24"
            role="status"
            aria-busy="true"
          >
            <Spinner />
          </div>
        ) : (
          <>
            <p
              id={DELETE_EVENT_MODAL.ARIA.DESCRIBED_BY}
              className="text-sm text-zinc-600 dark:text-zinc-300"
            >
              {DELETE_EVENT_MODAL.WARNING}
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={onClose}
                className="px-4 py-1 rounded bg-gray-200 dark:bg-zinc-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-600 transition"
                aria-label={DELETE_EVENT_MODAL.ARIA.CANCEL_LABEL}
              >
                {DELETE_EVENT_MODAL.CANCEL}
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition"
                aria-label={DELETE_EVENT_MODAL.ARIA.CONFIRM_LABEL}
              >
                {DELETE_EVENT_MODAL.CONFIRM}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
