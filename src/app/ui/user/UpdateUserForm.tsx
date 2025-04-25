'use client'

import AuthFormWrapper from '@/app/ui/forms/AuthFormWrapper'
import AuthInput from '@/app/ui/forms/AuthInput'
import useUpdateUser from '@/hooks/useUpdateUser'
import { User } from '@/types'
import ProfilePicture from '@/app/ui/user/ProfilePicture'
import RefreshSession from '@/lib/session/RefreshSession'
import ErrorMessage from '@/app/ui/forms/ErrorMessage'
import PasswordInput from '../forms/PasswordInput'
import { UPDATE_USER_FORM } from '@/constants/frontend/updateUserForm'
import { useUIStore } from '@/stores/useUIStore'

export default function UpdateUserForm({ user }: { user: User }) {
  const { handleSubmit } = useUpdateUser()
  const {
    loading,
    error,
    updated,
    newPasswordVisible,
    currentPasswordVisible,
    toggleNewPasswordVisible,
    toggleCurrentPasswordVisible,
  } = useUIStore()
  return (
    <>
      <AuthFormWrapper title={UPDATE_USER_FORM.TITLE} loading={loading}>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="flex flex-col gap-4 w-full"
        >
          <AuthInput
            name={UPDATE_USER_FORM.INPUT_NAMES.NAME}
            type="text"
            required
            autoFocus
            label={UPDATE_USER_FORM.LABELS.NAME}
            autoComplete="name"
            defaultValue={user.name || ''}
            aria-label={UPDATE_USER_FORM.LABELS.NAME}
            aria-required="true"
            placeholder={UPDATE_USER_FORM.PLACEHOLDERS.NAME}
          />
          <AuthInput
            name={UPDATE_USER_FORM.INPUT_NAMES.EMAIL}
            type="email"
            required
            label={UPDATE_USER_FORM.LABELS.EMAIL}
            autoComplete="email"
            defaultValue={user.email || ''}
            aria-label={UPDATE_USER_FORM.LABELS.EMAIL}
            aria-required="true"
            placeholder={UPDATE_USER_FORM.PLACEHOLDERS.EMAIL}
          />

          <PasswordInput
            label={UPDATE_USER_FORM.LABELS.CURRENT_PASSWORD}
            placeholder={UPDATE_USER_FORM.PLACEHOLDERS.CURRENT_PASSWORD}
            passwordVisible={currentPasswordVisible}
            updateVisibility={toggleNewPasswordVisible}
            aria_label={UPDATE_USER_FORM.LABELS.CURRENT_PASSWORD}
          />

          <PasswordInput
            label={UPDATE_USER_FORM.LABELS.NEW_PASSWORD}
            placeholder={UPDATE_USER_FORM.PLACEHOLDERS.NEW_PASSWORD}
            passwordVisible={newPasswordVisible}
            updateVisibility={toggleCurrentPasswordVisible}
            aria_label={UPDATE_USER_FORM.LABELS.NEW_PASSWORD}
          />

          <ProfilePicture userImage={user.image} userName={user.name} />

          {error && <ErrorMessage error={error} />}

          <button
            type="submit"
            className="mt-2 flex items-center justify-center rounded-full px-4 py-2 font-semibold bg-[#242424] text-white border-white/15 border-2 self-center hover:bg-[#2f2f2f]"
            aria-label={UPDATE_USER_FORM.UPDATE_BUTTON}
          >
            {UPDATE_USER_FORM.UPDATE_BUTTON}
          </button>
        </form>
      </AuthFormWrapper>

      {updated && <RefreshSession updated={updated} />}
    </>
  )
}
