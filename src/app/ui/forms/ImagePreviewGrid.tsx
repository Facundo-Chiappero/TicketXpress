'use client'

import { IMAGE_PREVIEW_GRID } from '@/constants/frontend/imagePreviewGrid'

interface Props {
  images: string[]
  onRemove: (index: number) => void
}

export default function ImagePreviewGrid({ images, onRemove }: Props) {
  if (!images.length) {
    return (
      <p className="text-sm text-gray-500">{IMAGE_PREVIEW_GRID.EMPTY_TEXT}</p>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-2 mt-2">
      {images.map((img, i) => (
        <div key={i} className="relative group">
          <img
            src={img}
            alt={IMAGE_PREVIEW_GRID.IMAGE_ALT(i)}
            className="h-24 w-full object-cover rounded"
          />
          <button
            type="button"
            onClick={() => onRemove(i)}
            className="absolute top-1 right-1 bg-black/70 text-white text-xs rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300 hover:rotate-180"
            title={IMAGE_PREVIEW_GRID.REMOVE_BUTTON.TITLE}
            aria-label={IMAGE_PREVIEW_GRID.REMOVE_BUTTON.ARIA_LABEL(i)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}
