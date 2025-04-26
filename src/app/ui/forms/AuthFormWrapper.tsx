'use client'

import { Spinner } from '../icons/Spinner'

interface Props {
  title: string
  children: React.ReactNode
  loading?: boolean
  minHeight?: string // used in GeneratePasswordForm.tsx
}

export default function AuthFormWrapper({
  title,
  children,
  loading,
  minHeight,
}: Props) {
  const minHeightClass = minHeight ?? ''
  return (
    <main
      className={`w-full ${minHeightClass} flex sm:items-center justify-center mb-4`}
    >
      <div className="dark:bg-gray-50 text-black flex flex-col gap-4 mx-4 p-6 rounded-lg min-w-[300px] max-w-[400px] w-full shadow-xl dark:shadow-none bg-gray-200 h-fit">
        <h2 className="text-xl font-bold text-center">{title}</h2>
        {loading ? (
          <div className="flex justify-center py-6">
            <Spinner />
          </div>
        ) : (
          children
        )}
      </div>
    </main>
  )
}
