import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import GoHomeButton from '@/app/ui/buttons/GoHomeButton'
import CheckOutButton from '@/components/payment/CheckOutButton'
import { getEventById } from '@/lib/events'
import { getServerSession } from 'next-auth'
import { notFound, redirect } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

export default async function BuyEventPage({ params }: Props) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect(`/auth/login?eventsManagerCallbackUrl=/events/buy/${params.id}`)
  }

  const event = await getEventById(params.id)
  if (!event || !event.title || !event.price) return notFound()

  const userId = Number(session?.user.id)

  return (
    <article>
      <title>{`Events Manager - ${event.title}`}</title>
      <header>
        <GoHomeButton />
      </header>
      <main className="py-20 px-12 flex flex-col">
        <section className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          <p className="mb-2 text-gray-400">{event.description}</p>
          <p className="mb-2 text-gray-300">
            Fecha: {new Date(event.date).toLocaleDateString()}
          </p>
          <p className="mb-4 text-xl font-semibold">Precio: ${event.price}</p>
        </section>

        <div className="flex flex-wrap gap-4">
          {event.images.map((url: string, idx: number) => (
            <img
              key={idx}
              src={url}
              alt={`Imagen ${idx + 1}: ${event.title}`}
              className="rounded-lg  w-full max-w-[512px] object-cover h-48"
            />
          ))}
        </div>

        <CheckOutButton
          eventId={event.id}
          price={event.price}
          title={event.title}
          userId={userId}
        />
      </main>
    </article>
  )
}
