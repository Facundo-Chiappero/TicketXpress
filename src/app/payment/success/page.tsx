import GoHomeButton from '@/app/ui/buttons/GoHomeButton'

export default function SuccessPage() {
  return (
    <main className="text-center space-y-4 w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">¡Pago exitoso! 🎉</h1>
      <p>Gracias por tu compra. Tu entrada ha sido registrada correctamente.</p>
      <div className="relative w-36">
        <GoHomeButton />
      </div>
    </main>
  )
}
