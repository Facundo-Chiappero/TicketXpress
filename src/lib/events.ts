import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'
import { prisma } from '@/lib/prisma'

export async function getAllEvents() {
  return await prisma.event.findMany({
    orderBy: { date: 'asc' },
    include: { creator: true, payments: true },
  })
}

export async function getEventById(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API_ENDPOINTS.EVENTS}/${id}`, {
    cache: 'no-store',
    method: HTTP_METHODS.GET
  })

  if (!res.ok) return null
  return res.json()
}
