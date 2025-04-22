import { prisma } from '@/lib/prisma'

export async function getAllEvents() {
  return await prisma.event.findMany({
    orderBy: { date: 'asc' },
    include: { creator: true, payments: true },
  })
}

export async function getEventById(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${id}`,
    {
      cache: 'no-store',
    }
  )

  if (!res.ok) return null
  return res.json()
}
