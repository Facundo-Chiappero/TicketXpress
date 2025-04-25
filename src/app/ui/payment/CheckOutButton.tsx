import { Spinner } from '@/app/ui/icons/Spinner'
import WalletWrapper from './WalletWrapper'
import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'
import { PAYMENT } from '@/constants/frontend/payment'
import { EVENT_CARD } from '@/constants/frontend/eventCard'

interface Props {
  title: string
  price: number
  userId: number | undefined
  eventId: number
}

export default async function CheckOutButton({
  title,
  price,
  userId,
  eventId,
}: Props) {
  if (!userId) return null

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${API_ENDPOINTS.PAYMENT}`,
    {
      method: HTTP_METHODS.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: Date.now() + userId,
        title,
        unit_price: price,
        userId,
        eventId,
      }),
      cache: 'no-store',
    }
  )

  if (!response.ok) {
    return <div>{PAYMENT.ERROR}</div>
  }

  const data = await response.json()
  const preferenceId = data.id

  return (
    <div className="w-fit">
      {preferenceId ? (
        <div className="max-w-72 scale-[.85] sm:scale-100 origin-top-left">
          <WalletWrapper preferenceId={preferenceId} />
          <small className="mt-2 block text-s text-red-600 font-medium">
            {EVENT_CARD.DISCLAIMER}
          </small>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  )
}
