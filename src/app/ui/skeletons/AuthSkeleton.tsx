export default function AuthSkeleton() {
  return (
    <>
      <header
        className="flex absolute p-4 top-0 left-0 w-full"
        role="status"
        aria-live="polite"
      >
        <div className="h-8 w-1/12 bg-zinc-300 dark:bg-zinc-700 rounded" />
      </header>
      <main className="w-full min-h-screen flex items-center justify-center">
        <div
          className="bg-gray-100 dark:bg-zinc-800 animate-pulse flex flex-col gap-4 p-6 rounded-lg w-[320px]"
          aria-busy="true"
        >
          <div className="h-6 bg-gray-300 dark:bg-zinc-700 rounded w-3/4" />
          <div className="h-10 bg-gray-300 dark:bg-zinc-700 rounded w-full" />

          <div className="h-6 bg-gray-300 dark:bg-zinc-700 rounded w-3/4" />
          <div className="h-10 bg-gray-300 dark:bg-zinc-700 rounded w-full" />

          <div className="h-4 bg-gray-200 dark:bg-zinc-600 rounded w-1/2 self-center mt-2" />
          <div className="h-10 bg-gray-400 dark:bg-zinc-600 rounded w-1/2 self-center mt-2" />
        </div>
      </main>
    </>
  )
}
