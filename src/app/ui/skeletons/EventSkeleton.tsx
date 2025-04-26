import HeaderSkeleton from './HeaderSkeleton'

export default function EventSkeleton() {
  return (
    <>
      <HeaderSkeleton />
      <main className="animate-pulse py-8 flex flex-col mx-4 mt-4 justify-self-center w-[80%] gap-4">
        <section className="mb-6">
          <div className="h-10 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
        </section>
        <div className="flex flex-wrap gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-300 rounded-lg w-full" />
          ))}
        </div>
        <div className="w-1/4 h-10 bg-gray-300 rounded"></div>
      </main>
    </>
  )
}
