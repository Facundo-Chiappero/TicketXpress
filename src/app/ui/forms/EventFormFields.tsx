'use client'

import ImagePreviewGrid from './ImagePreviewGrid'

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

// this must be used inside a form
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
  submitLabel = 'Guardar',
}: Props) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const newImages = files.map((file) => URL.createObjectURL(file))
    setImages([...images, ...newImages])
  }

  return (
    <>
      <input
        className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-800"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
        autoFocus
      />

      <textarea
        className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-800 resize-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
      />

      <input
        className="w-full p-2 rounded bg-zinc-100 dark:bg-zinc-800"
        type="number"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        placeholder="Precio"
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
        aria-describedby="image-upload-description"
      />

      <ImagePreviewGrid
        images={images}
        onRemove={(i) => setImages(images.filter((_, idx) => idx !== i))}
      />

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-1 bg-gray-50 dark:bg-zinc-700 rounded"
          aria-label="Cancelar"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-1 bg-blue-500 text-white rounded"
          aria-label={submitLabel}
        >
          {submitLabel}
        </button>
      </div>
    </>
  )
}
