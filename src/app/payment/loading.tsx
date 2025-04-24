import { PAYMENT_PAGE } from "@/constants/frontend/paymentPage";

export default function Loading() {
  return (
    <div className="text-center mt-20" aria-live="polite">
      <p className="text-lg">{PAYMENT_PAGE.LOADING}</p>
    </div>
  )
}
