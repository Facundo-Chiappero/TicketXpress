export default function EventCardSkeleton() {
  return (
    <section className="flex flex-col mt-5 w-[80%] animate-pulse">
      {[1, 2, 3].map((i) => (
        <div
          key={`skeleton-event-${i}`}
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-md dark:shadow-black/30 mb-6 overflow-hidden"
        >
          <div className="w-full h-48 bg-zinc-300 dark:bg-zinc-700"></div>
          <div className="p-4 space-y-3">
            <div className="h-5 bg-zinc-300 dark:bg-zinc-700 w-1/2 rounded"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-600 w-full rounded"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-600 w-2/3 rounded"></div>
            <div className="flex justify-between items-center">
              <div className="h-4 bg-zinc-200 dark:bg-zinc-600 w-1/3 rounded"></div>
              <div className="h-4 bg-zinc-300 dark:bg-zinc-700 w-12 rounded"></div>
            </div>
            <div className="h-10 bg-blue-400 dark:bg-blue-700 rounded mt-2"></div>
          </div>
        </div>
      ))}
    </section>
  )
}
