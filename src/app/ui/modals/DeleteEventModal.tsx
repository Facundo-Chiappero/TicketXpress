'use client'

import useModalAction from '@/hooks/useModalAction'
import { Spinner } from '../icons/Spinner'
import useEscapeKey from '@/hooks/useEscapeKey'
import { DELETE_EVENT_MODAL, ENDPOINTS } from '@/constants/frontend'

interface Props {
  event: number
  onClose: () => void
}

export default function DeleteEventModal({ event, onClose }: Props) {
  const { execute, loading } = useModalAction({ onSuccess: onClose })

  useEscapeKey(onClose)

  const handleConfirm = () => {
    execute(`${ENDPOINTS.EVENTS}${event}`, { method: ENDPOINTS.METHODS.DELETE })
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-event-title"
      aria-describedby="delete-event-description"
    >
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg w-[90%] max-w-sm space-y-4">
        <h2
          id="delete-event-title"
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
              id="delete-event-description"
              className="text-sm text-zinc-600 dark:text-zinc-300"
            >
              {DELETE_EVENT_MODAL.WARNING}
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={onClose}
                className="px-4 py-1 rounded bg-gray-50 dark:bg-zinc-700 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-zinc-600 transition"
                aria-label="Cancelar eliminación"
              >
                {DELETE_EVENT_MODAL.CANCEL}
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition"
                aria-label="Confirmar eliminación"
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
