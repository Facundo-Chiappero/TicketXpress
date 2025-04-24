import GoHomeButton from '@/app/ui/buttons/GoHomeButton'
import { PAYMENT_PAGE } from '@/constants/frontend/paymentPage'

export default function PendingPage() {
  return (
    <>
          <main className="text-center space-y-4 w-full min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">{PAYMENT_PAGE.PENDING.TITLE}</h1>
            <p>
            {PAYMENT_PAGE.PENDING.BODY}
            </p>
            <div className="relative w-36">
              <GoHomeButton />
            </div>
          </main>
        </>
  )
}
