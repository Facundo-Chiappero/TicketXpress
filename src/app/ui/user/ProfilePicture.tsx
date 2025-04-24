'use client'

import UserImage from '@/app/ui/user/UserImage'

import { useState } from 'react'
import ErrorMessage from '../forms/ErrorMessage'
import { UPDATE_USER_FORM } from '@/constants/frontend/updateUserForm'
import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'
import { ERRORS } from '@/constants/frontend/errors'
import { PROFILE_PICTURE } from '@/constants/frontend/profilePicture'

interface Props {
  userImage: string | undefined
  userName: string
}

export default function ProfilePicture({ userImage, userName }: Props) {
  const [image, setImage] = useState<string | null>(userImage ?? null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setLoading(true)

    const formData = new FormData()
    formData.append(UPDATE_USER_FORM.INPUT_NAMES.FILE, file)

    try {
      const res = await fetch(API_ENDPOINTS.UPLOAD_IMAGE, {
        method: HTTP_METHODS.POST,
        body: formData,
      })

      const data = await res.json()
      
      if (!res.ok) throw new Error(data.error)
      setImage(data.secure_url)
    } catch (err) {
      
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError(ERRORS.UPDATE_USER.UNKNOWN_ERROR)
      }

    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <label
        htmlFor={PROFILE_PICTURE.INPUTS.IMAGE_UPLOAD.ID}
        className="text-sm font-medium -mb-2.5"
      >
        {UPDATE_USER_FORM.LABELS.IMAGE}
      </label>
      <input
        name={PROFILE_PICTURE.INPUTS.IMAGE_UPLOAD.NAME}
        id={PROFILE_PICTURE.INPUTS.IMAGE_UPLOAD.ID}
        type="file"
        accept="image/*"
        className="w-full p-2 bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100 rounded"
        onChange={handleImageUpload}
        aria-describedby={PROFILE_PICTURE.ARIA_DESCRIBED_BY}
        placeholder={UPDATE_USER_FORM.PLACEHOLDERS.IMAGE}
      />

      {loading && (
        <p className="mt-2 text-sm text-zinc-500">
          {UPDATE_USER_FORM.UPLOADING}
        </p>
      )}

      {image ? (
        <div className="mt-4">
          <img
            src={image}
            alt="Preview"
            className="text-white focus:outline-none pfp"
          />
        </div>
      ) : (
        <UserImage image={userImage} name={userName} />
      )}

      {/* trick to avoid using use client in EditProfileForm, as i pass the image url using this, useless, as i 100% need update state... */}
      {image && (
        <input
          type="hidden"
          name={PROFILE_PICTURE.INPUTS.HIDDEN_IMAGE.NAME}
          value={image}
        />
      )}

    {error && <ErrorMessage error={error}/>}
    </>

  )
}
