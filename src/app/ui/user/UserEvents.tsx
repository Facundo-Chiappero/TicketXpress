import EventCard from '@/components/Events/EventCard'
import { Event, User } from '../../../../types.d'

interface Props {
  user: User
  futureEvents: (Event | null)[]
}

export default function UserEvents({ user, futureEvents }: Props) {
  return (
    <section className="flex flex-col mt-4 justify-center items-center">
      <h2 className="w-[80%] text-4xl font-bold mb-2">Future Events</h2>
      {futureEvents.length > 0 ? (
        futureEvents.map((e) => {
          if (!e) return
          return (
            <EventCard
              key={`event-card-${e?.id}`}
              event={e}
              currentUser={user}
            />
          )
        })
      ) : (
        <p>
          You don&apos;t have any event in the future... we recommend you buying
          some
        </p>
      )}
    </section>
  )
}
