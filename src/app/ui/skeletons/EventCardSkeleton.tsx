export default function EventCardSkeleton() {
  return (
    <article
      className="animate-pulse bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-md w-[80%] overflow-hidden z-0"
      role="status"
      aria-live="polite"
    >
      <figure>
        <div className="w-full h-48 bg-zinc-200 dark:bg-zinc-800" />
      </figure>

      <section className="p-4 space-y-3">
        <header>
          <div className="h-6 bg-zinc-300 dark:bg-zinc-700 rounded w-3/4" />
        </header>

        <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-full" />

        <footer className="flex justify-between items-center mt-4">
          <div className="h-4 w-1/6 bg-zinc-300 dark:bg-zinc-700 rounded" />
          <div className="h-6 w-1/6 bg-zinc-300 dark:bg-zinc-700 rounded" />
        </footer>

        <div className="h-10 bg-zinc-400 dark:bg-zinc-600 rounded mt-4" />
      </section>
    </article>
  )
}
