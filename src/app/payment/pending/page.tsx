import GoHomeButton from '@/app/ui/buttons/GoHomeButton'

export default function PendingPage() {
  return (
    <main className="text-center space-y-4 w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Pago pendiente ⌛</h1>
      <p>
        Tu pago esta siendo procesado, te llegara una notificación cuando se
        haya efectuado
      </p>
      <div className="relative w-36">
        <GoHomeButton />
      </div>
    </main>
  )
}
