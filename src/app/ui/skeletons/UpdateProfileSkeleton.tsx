import InputSkeleton from "./InputSkeleton";

export default function UpdateProfileSkeleton() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="dark:bg-gray-50 text-black flex flex-col gap-4 mx-4 p-6 rounded-lg min-w-[300px] max-w-[400px] w-full shadow-md bg-gray-200 animate-pulse">
        {/* Título */}
        <div className="h-6 bg-zinc-300 rounded w-1/2 mx-auto mb-2" />

        {/* Inputs */}
        <InputSkeleton amount={4}/>

        {/* Imagen */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="h-4 bg-zinc-400 rounded w-1/2" />
          <div className="h-9 bg-zinc-300 dark:bg-zinc-700 rounded" />

          {/* Imagen preview o avatar */}
          <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full mt-4 self-start justify-self-start" />
        </div>

        {/* Botón */}
        <div className="h-10 w-32 bg-zinc-400 dark:bg-zinc-600 rounded-full mx-auto mt-4" />
      </div>
    </main>
  )
}
