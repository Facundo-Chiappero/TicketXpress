import EventCardSkeleton from './EventCardSkeleton'

export default function HomePageSkeleton() {
  return (
    <section className="flex justify-between flex-wrap bg-inherit">
      <header
        role="status"
        aria-live="polite"
        className="w-full h-20 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-md flex justify-between items-center px-4 animate-pulse sticky top-0 left-0 z-50"
      >
        <div className="bg-zinc-300 dark:bg-zinc-700 rounded h-12 w-36"></div>

        <nav className="flex gap-4 items-center">
          <div className="bg-zinc-300 dark:bg-zinc-700 rounded h-4 w-16"></div>
          <div className="bg-zinc-300 dark:bg-zinc-700 rounded-full h-10 w-10"></div>
        </nav>
      </header>
      <main className="min-h-screen w-full flex justify-center items-center gap-4 flex-col my-4">
        {[...Array(3)].map((_, i) => (
          <EventCardSkeleton key={`event-skeleton-${i}`} />
        ))}
      </main>
    </section>
  )
}
