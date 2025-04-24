import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getAllEvents } from '@/lib/events'
import EventCard from './ui/Events/EventCard'
import Header from './ui/Header'
import { HOME_PAGE_TEXTS } from '@/constants/frontend/home'

//todo mostrar toast en todos lado donde use apis o donde sea necesario

//todo ADD CAPTCHA 🤯

//todo mandar mail con el ticket cuando el pago sea aprobado
//todo mejorar modo claro
//todo mejorar ui
export default async function HomePage() {
  const session = await getServerSession(authOptions)
  const events = await getAllEvents()

  return (
    <>
      <Header user={session?.user} title="Events" />

      <main className="min-h-screen w-full flex justify-center items-center gap-4 flex-col my-4">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              currentUser={session?.user}
            />
          ))
        ) : (
          <p>{HOME_PAGE_TEXTS.NO_EVENTS}</p>
        )}
      </main>
    </>
  )
}
