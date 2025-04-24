import EventCard from '@/app/ui/Events/EventCard'
import { USER_EVENTS } from '@/constants/frontend/userEvents'
import { Event, User } from '@/types'

interface Props {
  user: User
  futureEvents: (Event | null)[]
}

export default function UserEvents({ user, futureEvents }: Props) {
  return (
    <section className="flex flex-col mt-4 justify-center items-center">
      <h2 className="w-[80%] text-4xl font-bold mb-2">{USER_EVENTS.TITLE}</h2>
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
        <p>{USER_EVENTS.NO_EVENTS}</p>
      )}
    </section>
  )
}
