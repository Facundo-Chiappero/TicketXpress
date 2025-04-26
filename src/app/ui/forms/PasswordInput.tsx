import { ChangeEvent, MouseEventHandler } from 'react'
import Eye from '../icons/Eye'
import EyeOff from '../icons/EyeOff'
import AuthInput from './AuthInput'

type Props = {
  label: string
  updateVisibility: MouseEventHandler<HTMLButtonElement>
  passwordVisible: boolean
  placeholder: string
  name?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  aria_label?: string
  required?: boolean
}
export default function PasswordInput({
  label,
  updateVisibility,
  passwordVisible,
  placeholder,
  onChange,
  name,
  aria_label,
  required = true
}: Props) {
  return (
    <div className="relative flex-col flex gap-y-4">
      <AuthInput
        name={name ? name : 'password'}
        type={passwordVisible ? 'text' : 'password'}
        required={required}
        label={label}
        autoComplete="current-password"
        placeholder={placeholder}
        onChange={onChange}
        aria-label={aria_label}
      />
      <button
        type="button"
        onClick={updateVisibility}
        className="w-fit bottom-1 right-1 absolute text-white"
      >
        {passwordVisible ? <Eye /> : <EyeOff />}
      </button>
    </div>
  )
}
