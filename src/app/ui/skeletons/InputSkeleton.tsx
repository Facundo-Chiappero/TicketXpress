export default function InputSkeleton({ amount }: { amount: number }) {
  return (
    <>
      {[...Array(amount)].map((_, i) => (
        <div key={`input-skeleton-${i}`} className="flex flex-col gap-2">
          <div className="h-4 bg-zinc-400 rounded w-1/3" />
          <div className="h-9 bg-zinc-300 dark:bg-zinc-700 rounded" />
        </div>
      ))}
    </>
  )
}
