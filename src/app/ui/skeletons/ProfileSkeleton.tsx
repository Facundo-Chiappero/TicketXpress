import EventCardSkeleton from './EventCardSkeleton'

export default function ProfileSkeleton() {
  return (
    <main className="px-4 flex flex-col items-center">
      {/* User Card Skeleton */}
      <section className="min-w-60 w-[80%] mx-4 p-6 bg-white dark:bg-zinc-900 shadow-md rounded-md mt-10 animate-pulse">
        <div className="h-6 bg-zinc-300 dark:bg-zinc-700 rounded w-1/3 mb-6"></div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full" />

          <div className="flex flex-col gap-2 w-full">
            <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-1/2"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-600 rounded w-1/3"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-600 rounded w-1/4"></div>
          </div>
        </div>

        <div className="h-10 w-32 bg-blue-400 dark:bg-blue-700 rounded"></div>
      </section>

      {/* Future Events Skeleton */}
      <div className="w-[80%]">
        <div className="h-8 bg-zinc-300 dark:bg-zinc-700 rounded w-1/3 mt-4 self-start"></div>
      </div>

      <EventCardSkeleton />
    </main>
  )
}
