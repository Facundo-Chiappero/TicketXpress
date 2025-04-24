import EventCardSkeleton from './EventCardSkeleton'
import HeaderSkeleton from './HeaderSkeleton'

export default function HomePageSkeleton() {
  return (
    <section className="flex justify-between flex-wrap bg-inherit">
      <HeaderSkeleton />
      <main className="min-h-screen w-full flex justify-center items-center gap-4 flex-col my-4">
        {[...Array(3)].map((_, i) => (
          <EventCardSkeleton key={`event-skeleton-${i}`} />
        ))}
      </main>
    </section>
  )
}
