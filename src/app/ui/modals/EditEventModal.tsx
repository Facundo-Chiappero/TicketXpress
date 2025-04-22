'use client'

import { useState } from 'react'
import { Spinner } from '../icons/Spinner'
import EventFormFields from '../forms/EventFormFields'
import useEscapeKey from '@/hooks/useEscapeKey'
import useModalAction from '@/hooks/useModalAction'
import { ENDPOINTS, UPDATE_EVENT_MODAL } from '@/constants/frontend'

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
  const [title, setTitle] = useState(event.title)
  const [description, setDescription] = useState(event.description)
  const [images, setImages] = useState<string[]>(event.images || [])
  const [price, setPrice] = useState(event.price)
  const [date, setDate] = useState(event.date.toISOString().slice(0, 16))
  const { execute, loading } = useModalAction({ onSuccess: onClose })

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
      `${ENDPOINTS.EVENTS}/${event.id}`,
      { method: ENDPOINTS.METHODS.PATCH },
      payload
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      role="dialog"
      aria-labelledby="edit-event-title"
      aria-describedby="edit-event-description"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-md w-[90%] max-w-lg space-y-4"
      >
        <h2 id="edit-event-title" className="text-xl font-bold">
          {UPDATE_EVENT_MODAL.TITLE}
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
            submitLabel="Guardar"
          />
        )}
      </form>
    </div>
  )
}
