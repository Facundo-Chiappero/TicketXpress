import GoHomeButton from '@/app/ui/buttons/GoHomeButton'

export default function FailurePage() {
  return (
    <main className="text-center space-y-4 w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Pago fallido ❌</h1>
      <p>
        Ocurrió un error al procesar tu pago. Por favor, intenta nuevamente.
      </p>
      <div className="relative w-36">
        <GoHomeButton />
      </div>
    </main>
  )
}
