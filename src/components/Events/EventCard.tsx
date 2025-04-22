'use client'

import Link from 'next/link'
import EditEventActions from './EditEventActions'
import { CurrentUser, ExtendedEvent } from '../../../types.d'

interface Props {
  event: ExtendedEvent
  currentUser: CurrentUser
}

export default function EventCard({ event, currentUser }: Props) {
  const isAdmin = currentUser?.role === 'ADMIN'
  const formattedDate = new Date(event.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="bg-white dark:bg-zinc-900 shadow-md dark:shadow-black/30 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 transition-colors w-[80%]">
      {event.images.length > 0 && (
        <figure>
          {event.images.map((src, i) => (
            <img
              key={`image-${i}`}
              src={src}
              alt={`${event.title} - imagen ${i + 1}`}
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
            ${event.price}
          </span>
        </footer>

        <Link
          href={`/events/buy/${event.id}`}
          className="w-full block text-center mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          role="button"
        >
          Comprar entrada
        </Link>
      </section>
    </article>
  )
}
