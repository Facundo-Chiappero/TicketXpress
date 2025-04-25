'use client'

import { Spinner } from '../icons/Spinner'
import EventFormFields from '../forms/EventFormFields'
import useEscapeKey from '@/hooks/useEscapeKey'
import useModalAction from '@/hooks/useModalAction'
import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'
import { UPDATE_EVENT_MODAL } from '@/constants/frontend/modals'
import { useUIStore } from '@/stores/useUIStore'
import { useEventFormStore } from '@/stores/useEventFormStore'

interface Props {
  event: {
    id: number
    title: string
    description: string
    price: number
    date: Date
    images?: string[]
  }
  onClose: () => void
}

export default function EditEventModal({ event, onClose }: Props) {
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
  } = useEventFormStore();
  const { execute } = useModalAction({ onSuccess: onClose })
  const {loading} = useUIStore()

  useEscapeKey(onClose)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      title,
      description,
      price,
      date,
      images: images.filter((url) => url.trim() !== '') || undefined,
    }

    execute(
      `${API_ENDPOINTS.EVENTS}/${event.id}`,
      { method: HTTP_METHODS.PATCH },
      payload
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      role={UPDATE_EVENT_MODAL.ARIA.ROLE}
      aria-modal="true"
      aria-labelledby={UPDATE_EVENT_MODAL.ARIA.LABELLED_BY}
      aria-describedby={UPDATE_EVENT_MODAL.ARIA.DESCRIBED_BY}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md w-[90%] max-w-lg space-y-4"
      >
        <h2
          id={UPDATE_EVENT_MODAL.ARIA.LABELLED_BY}
          className="text-xl font-bold"
        >
          {UPDATE_EVENT_MODAL.TITLE}
        </h2>

        {/* Description (visually hidden or visible as needed) */}
        <p id={UPDATE_EVENT_MODAL.ARIA.DESCRIBED_BY} className="sr-only">
          {/* You can update this in constants if needed */}
          Edit the information of your event using the form below.
        </p>

        {loading ? (
          <div
            className="flex justify-center items-center h-40"
            role="status"
            aria-busy="true"
          >
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
            submitLabel={UPDATE_EVENT_MODAL.SUBMIT_LABEL}
          />
        )}
      </form>
    </div>
  )
}
