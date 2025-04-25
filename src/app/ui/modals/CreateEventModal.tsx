'use client'

import { Spinner } from '../icons/Spinner'
import EventFormFields from '../forms/EventFormFields'
import useEscapeKey from '@/hooks/useEscapeKey'
import useModalAction from '@/hooks/useModalAction'
import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'
import { CREATE_EVENT_MODAL } from '@/constants/frontend/modals'
import { useUIStore } from '@/stores/useUIStore'
import { useEventFormStore } from '@/stores/useEventFormStore'

interface Props {
  userId: string
  onClose: () => void
}

export default function CreateEventModal({ userId, onClose }: Props) {
  const {
    title,
    description,
    images,
    price,
    date,
    setTitle,
    setDescription,
    setImages,
    setPrice,
    setDate,
  } = useEventFormStore()
  const { execute } = useModalAction({ onSuccess: onClose })
  const { loading } = useUIStore()

  useEscapeKey(onClose)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      title,
      description,
      price,
      date,
      images,
      creatorId: userId,
    }

    execute(API_ENDPOINTS.EVENTS, { method: HTTP_METHODS.POST }, payload)
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      role="dialog"
      aria-labelledby={CREATE_EVENT_MODAL.ARIA_LABELLED_BY}
      aria-describedby={CREATE_EVENT_MODAL.ARIA_DESCRIBED_BY}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md w-[90%] max-w-lg space-y-4"
      >
        <h2 id="create-event-title" className="text-xl font-bold">
          {CREATE_EVENT_MODAL.TITLE}
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Spinner />
          </div>
        ) : (
          <EventFormFields
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            date={date}
            setDate={setDate}
            images={images}
            setImages={setImages}
            onClose={onClose}
            submitLabel={CREATE_EVENT_MODAL.SUBMIT_LABEL}
          />
        )}
      </form>
    </div>
  )
}
