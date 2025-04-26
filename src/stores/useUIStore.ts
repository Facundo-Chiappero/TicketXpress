import { create } from 'zustand'
import { Event } from '@/types'

type UIState = {
  // general state
  loading: boolean
  error: string | null
  success: string | null
  updated: boolean

  // UI
  showModal: boolean
  isEditing: boolean
  isDeleting: boolean

  // password
  passwordVisible: boolean
  currentPasswordVisible: boolean
  newPasswordVisible: boolean
  currentPassword: string
  newPassword: string

  // reCaptcha
  recaptchaToken: string | null

  // events
  eventBeingEdited: Event | null

  // actions
  setLoading: (v: boolean) => void
  setError: (msg: string | null) => void
  setSuccess: (v: string | null) => void
  setUpdated: (v: boolean) => void

  setShowModal: (v: boolean) => void
  setIsEditing: (v: boolean) => void
  setIsDeleting: (v: boolean) => void

  togglePasswordVisible: () => void
  toggleCurrentPasswordVisible: () => void
  toggleNewPasswordVisible: () => void

  setCurrentPassword: (val: string) => void
  setNewPassword: (val: string) => void

  setRecaptchaToken: (val: string | null) => void

  setEventBeingEdited: (event: Event | null) => void


  resetUI: () => void
}

export const useUIStore = create<UIState>((set) => ({
  loading: false,
  error: null,
  success: null,
  updated: false,

  showModal: false,
  isEditing: false,
  isDeleting: false,

  passwordVisible: false,
  currentPasswordVisible: false,
  newPasswordVisible: false,
  currentPassword: '',
  newPassword: '',

  recaptchaToken: null,

  eventBeingEdited: null,

  setLoading: (v) => set({ loading: v }),
  setError: (msg) => set({ error: msg }),
  setSuccess: (v) => set({ success: v }),
  setUpdated: (v) => set({ updated: v }),

  setShowModal: (v) => set({ showModal: v }),
  setIsEditing: (v) => set({ isEditing: v }),
  setIsDeleting: (v) => set({ isDeleting: v }),

  togglePasswordVisible: () =>
    set((state) => ({ passwordVisible: !state.passwordVisible })),
  toggleCurrentPasswordVisible: () =>
    set((state) => ({ currentPasswordVisible: !state.currentPasswordVisible })),
  toggleNewPasswordVisible: () =>
    set((state) => ({ newPasswordVisible: !state.newPasswordVisible })),

  setCurrentPassword: (val) => set({ currentPassword: val }),
  setNewPassword: (val) => set({ newPassword: val }),

  setRecaptchaToken: (val) => set({ recaptchaToken: val }),

  setEventBeingEdited: (event) => set({ eventBeingEdited: event }),

  resetUI: () =>
    set({
      loading: false,
      error: null,
      success: null,
      updated: false,
      showModal: false,
      isEditing: false,
      isDeleting: false,
      passwordVisible: false,
      currentPasswordVisible: false,
      newPasswordVisible: false,
      currentPassword: '',
      newPassword: '',
      recaptchaToken: '',
    }),
}))
