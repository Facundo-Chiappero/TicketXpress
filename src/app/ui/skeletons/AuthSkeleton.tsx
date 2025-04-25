import InputSkeleton from './InputSkeleton'

export default function AuthSkeleton({ amount }: { amount: number }) {
  return (
    <>
      <header
        className="flex m-4 w-full"
        role="status"
        aria-live="polite"
      >
        <div className="h-8 w-1/12 min-w-24 bg-zinc-300 dark:bg-zinc-700 rounded" />
      </header>
      <main className="w-full flex sm:items-center justify-center">
        <div className="dark:bg-gray-50 text-black flex flex-col gap-4 mx-4 p-6 rounded-lg min-w-[300px] max-w-[400px] w-full shadow-md bg-gray-200 animate-pulse">
          {/* Título */}
          <div className="h-6 bg-zinc-300 rounded w-1/2 mx-auto mb-2" />

          {/* Inputs */}
          <InputSkeleton amount={amount} />

          <div className="h-4 bg-zinc-400 rounded w-1/3 self-center" />

          {/* Botón */}
          <div className="h-10 w-32 bg-zinc-300 rounded mx-auto mt-2 mb-0" />
          <div className="h-10 w-20 bg-zinc-400 dark:bg-zinc-600 rounded-full mx-auto " />
        </div>
      </main>
    </>
  )
}
