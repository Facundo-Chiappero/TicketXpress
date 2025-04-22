export default function Loading() {
  return (
    <article className="animate-pulse">
      <header className="p-4">
        <div className="h-10 bg-gray-300 rounded w-1/6"></div>
      </header>
      <main>
        <div className="py-4 px-12 animate-pulse space-y-4">
          <div className="h-10 bg-gray-300 rounded w-1/2"></div>
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-lg w-full" />
            ))}
          </div>
          <div className="w-1/4 h-10 bg-gray-300 rounded"></div>
        </div>
      </main>
    </article>
  )
}
