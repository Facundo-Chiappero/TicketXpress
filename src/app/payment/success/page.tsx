import GoHomeButton from '@/app/ui/buttons/GoHomeButton'
import { PAYMENT_PAGE } from '@/constants/frontend/paymentPage'

export default function SuccessPage() {
  return (
    <>
      <main className="text-center space-y-4 w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">{PAYMENT_PAGE.SUCCESS.TITLE}</h1>
        <p>{PAYMENT_PAGE.SUCCESS.BODY}</p>
        <div className="relative w-36 flex items-center">
          <GoHomeButton />
        </div>
      </main>
    </>
  )
}
