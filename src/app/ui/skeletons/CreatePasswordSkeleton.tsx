import InputSkeleton from "./InputSkeleton";

export default function CreatePasswordSkeleton() {
  return (
    <main className="w-full min-h-[70%] flex items-center justify-center">
      <div className="dark:bg-gray-50 text-black flex flex-col gap-4 mx-4 p-6 rounded-lg min-w-[300px] max-w-[400px] w-full shadow-md bg-gray-200 animate-pulse">
        {/* Título */}
        <div className="h-6 bg-zinc-300 rounded w-1/2 mx-auto mb-2" />

        {/* Inputs */}
        <InputSkeleton amount={2} />

        {/* Botón */}
        <div className="h-10 w-32 bg-zinc-400 dark:bg-zinc-600 rounded-full mx-auto mt-4" />
      </div>
    </main>
  )
}
