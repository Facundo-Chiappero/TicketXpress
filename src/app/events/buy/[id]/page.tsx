import Header from '@/app/ui/Header'
import CheckOutButton from '@/app/ui/payment/CheckOutButton'
import confirmSession from '@/lib/session/confirmSession'
import { getEventById } from '@/lib/events'
import { notFound } from 'next/navigation'
import { PAGES } from '@/constants/frontend/pages'
import { METADATA } from '@/constants/frontend/metadata'
import { EVENT_CARD } from '@/constants/frontend/eventCard'

interface Props {
  params: {
    id: string
  }
}

export default async function BuyEventPage({ params }: Props) {
  const session = await confirmSession({
    callback: PAGES.EVENTS.BUY(params.id),
  })

  const event = await getEventById(params.id)
  if (!event || !event.title || !event.price) return notFound()

  const userId = Number(session?.user.id)

  return (
    <>
      <Header title={METADATA.LAYOUTS.EVENT.TITLE} user={session?.user} />
      <main className="py-8 flex flex-col mx-4 justify-self-center">
        <section className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          <p className="mb-2 text-gray-400">{event.description}</p>
          <p className="mb-2 text-gray-300">
            {EVENT_CARD.DATE_LABEL} {new Date(event.date).toLocaleDateString()}
          </p>
          <p className="mb-4 text-xl font-semibold">
            {EVENT_CARD.PRICE_LABEL} {EVENT_CARD.DOLAR_SYMBOL}
            {event.price}
          </p>
        </section>

        <div className="flex flex-wrap gap-4">
          {event.images.map((url: string, idx: number) => (
            <img
              key={idx}
              src={url}
              alt={EVENT_CARD.IMAGE_ALT(idx, event.title)}
              className="rounded-lg w-full max-w-[512px] object-cover h-48"
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
    </>
  )
}
