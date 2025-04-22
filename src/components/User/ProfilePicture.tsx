'use client'

import { useState } from "react"

export default function ProfilePicture({userImage}:{userImage: string | undefined}) {
  const [image, setImage] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImage(imageUrl)
    }
  }

  return (
    <>
      <input
        type="file"
        accept="image/*"
        className="w-full p-2 bg-zinc-100 dark:bg-zinc-800 rounded"
        onChange={handleImageUpload}
        aria-describedby="image-upload-description"
      />

      {/* {image && (
        <div className="mt-4">
          <img src={image} alt="Preview" className="max-w-xs rounded" />
        </div>
      )} */}

        {userImage && !image && (
          <div className="mt-4">
            <img src={userImage} alt="Preview" className="max-w-xs rounded" />
          </div>
        )
        }

        {image && (
          <div className="mt-4">
            <img src={image} alt="Preview" className="max-w-xs rounded" />
          </div>
        )
        }

    </>
  )
}
