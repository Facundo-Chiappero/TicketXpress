import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getAllEvents } from '@/lib/events'
import EventCard from '../components/Events/EventCard'
import MainHeader from '../components/MainHeader'
import { HOME_PAGE } from '@/constants/frontend'

//todo poner consts (DESDE MODALS)
//todo no usar el dangerouslyhtml
//todo mejorar ui
//todo agregar edit profile
//todo create headers in layout (auth, user)
//todo permitir que el usuario se logee con google aunque tenga credenciales
//todo mejorar modo claro

export default async function HomePage() {
  const session = await getServerSession(authOptions)
  const events = await getAllEvents()

  return (
    <>
      <MainHeader user={session?.user} />

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
          <p>{HOME_PAGE.NO_EVENTS}</p>
        )}
      </main>
    </>
  )
}
