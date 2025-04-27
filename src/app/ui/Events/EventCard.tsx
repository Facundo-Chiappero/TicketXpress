'use client'

import Link from 'next/link'
import EditEventActions from './EditEventActions'
import { CurrentUser, ExtendedEvent, ROLES } from '@/types'
import { EVENT_CARD } from '@/constants/frontend/eventCard'

interface Props {
  event: ExtendedEvent
  currentUser: CurrentUser
}

export default function EventCard({ event, currentUser }: Props) {
  const isAdmin = currentUser?.role === ROLES.ADMIN
  const formattedDate = new Date(event.date).toLocaleDateString(
    EVENT_CARD.DATE.LOCALE_DATE_STRING,
    {
      year: EVENT_CARD.DATE.YEAR,
      month: EVENT_CARD.DATE.MONTH,
      day: EVENT_CARD.DATE.DAY,
    }
  )

  return (
    <article
      className="bg-white dark:bg-zinc-900 shadow-md dark:shadow-black/30 rounded-lg overflow-hidden border-zinc-200 dark:border-zinc-700 transition-colors w-[80%] min-w-60 border border-black/30
"
    >
      {event.images.length > 0 && (
        <figure>
          {event.images.map((src, i) => (
            <img
              key={`image-${i}`}
              src={src}
              alt={EVENT_CARD.IMAGE_ALT(i, event.title)}
              className="w-full h-48 object-cover"
            />
          ))}
        </figure>
      )}

      <section className="p-4">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
            {event.title}
          </h2>
          {isAdmin && <EditEventActions event={event} />}
        </header>

        <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
          {event.description}
        </p>

        <footer className="flex items-center justify-between text-sm mb-2">
          <time
            dateTime={event.date.toISOString()}
            className="text-zinc-500 dark:text-zinc-400"
          >
            {formattedDate}
          </time>
          <span className="text-lg font-semibold text-zinc-800 dark:text-white">
            {EVENT_CARD.DOLAR_SYMBOL}
            {event.price}
          </span>
        </footer>

        <Link
          href={`/events/buy/${event.id}`}
          className="w-full block text-center mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          role="button"
        >
          {EVENT_CARD.BUY}
        </Link>
      </section>
    </article>
  )
}
