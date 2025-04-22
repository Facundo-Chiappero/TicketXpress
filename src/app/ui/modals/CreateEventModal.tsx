'use client'

import { useState } from 'react'
import { Spinner } from '../icons/Spinner'
import EventFormFields from '../forms/EventFormFields'
import useEscapeKey from '@/hooks/useEscapeKey'
import useModalAction from '@/hooks/useModalAction'
import { CREATE_EVENT_MODAL, ENDPOINTS } from '@/constants/frontend'

interface Props {
  userId: string
  onClose: () => void
}

export default function CreateEventModal({ userId, onClose }: Props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [date, setDate] = useState('')
  const [images, setImages] = useState<string[]>([])
  const { execute, loading } = useModalAction({ onSuccess: onClose })

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

    execute(ENDPOINTS.EVENTS, { method: ENDPOINTS.METHODS.POST }, payload)
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      role="dialog"
      aria-labelledby="create-event-title"
      aria-describedby="create-event-description"
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
            submitLabel="Crear"
          />
        )}
      </form>
    </div>
  )
}
