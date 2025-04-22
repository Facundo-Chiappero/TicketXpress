import { Spinner } from '@/app/ui/icons/Spinner'
import WalletWrapper from './WalletWrapper'

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
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment`,
    {
      method: 'POST',
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
    console.error('❌ Error al generar preferencia')
    return <div>Error</div>
  }

  const data = await response.json()
  const preferenceId = data.id

  return (
    <div className="w-fit">
      {preferenceId ? (
        <div>
          <WalletWrapper preferenceId={preferenceId} />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  )
}
