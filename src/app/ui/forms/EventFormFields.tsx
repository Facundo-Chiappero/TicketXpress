'use client'

import ImagePreviewGrid from './ImagePreviewGrid'
import ErrorMessage from './ErrorMessage'
import { EVENT_FORM_FIELDS } from '@/constants/frontend/eventFormFields'
import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'
import { ERRORS } from '@/constants/frontend/errors'
import { PROFILE_PICTURE } from '@/constants/frontend/profilePicture'
import { useUIStore } from '@/stores/useUIStore'
import { ToastContainer } from 'react-toastify'

interface Props {
  title: string
  setTitle: (val: string) => void
  description: string
  setDescription: (val: string) => void
  price: number
  setPrice: (val: number) => void
  date: string
  setDate: (val: string) => void
  images: string[]
  setImages: (val: string[]) => void
  onClose: () => void
  submitLabel: string
}

export default function EventFormFields({
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
  date,
  setDate,
  images,
  setImages,
  onClose,
  submitLabel = EVENT_FORM_FIELDS.BUTTONS.SAVE,
}: Props) {
  const { error, setError } = useUIStore()

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData()
        formData.append('file', file)

        const res = await fetch(API_ENDPOINTS.UPLOAD_IMAGE, {
          method: HTTP_METHODS.POST,
          body: formData,
        })

        if (!res.ok) {
          throw new Error(ERRORS.PROFILE_PICTURE.UPLOAD_FAILED)
        }

        const data = await res.json()
        return data.secure_url
      })

      const uploadedUrls = await Promise.all(uploadPromises)
      setImages([...images, ...uploadedUrls])
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError(ERRORS.PROFILE_PICTURE.GENERIC_UPLOAD_ERROR)
      }
    }
  }

  return (
    <>
      <input
        className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-800"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={EVENT_FORM_FIELDS.PLACEHOLDERS.TITLE}
        autoFocus
      />

      <textarea
        className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-800 resize-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={EVENT_FORM_FIELDS.PLACEHOLDERS.DESCRIPTION}
      />

      <input
        className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-800"
        type="number"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        placeholder={EVENT_FORM_FIELDS.PLACEHOLDERS.PRICE}
      />

      <input
        className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-800"
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        multiple
        className="w-full p-2 bg-zinc-100 dark:bg-zinc-800 rounded"
        onChange={handleImageUpload}
        aria-describedby={PROFILE_PICTURE.ARIA_DESCRIBED_BY}
      />

      <ImagePreviewGrid
        images={images}
        onRemove={(i) => setImages(images.filter((_, idx) => idx !== i))}
      />

      {error && <ErrorMessage error={error} />}

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-1 bg-gray-50 dark:bg-zinc-700 rounded"
          aria-label={EVENT_FORM_FIELDS.BUTTONS.CANCEL}
        >
          {EVENT_FORM_FIELDS.BUTTONS.CANCEL}
        </button>
        <button
          type="submit"
          className="px-4 py-1 bg-blue-500 text-white rounded"
          aria-label={submitLabel}
        >
          {submitLabel}
        </button>
      </div>

      <ToastContainer
        position="bottom-right"
        closeOnClick={true}
        newestOnTop={true}
        theme="colored"
      />
    </>
  )
}
