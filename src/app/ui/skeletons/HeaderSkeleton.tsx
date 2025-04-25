export default function HeaderSkeleton() {
  return (
    <>
      <header
  role="status"
  aria-live="polite"
  className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 shadow-sm flex justify-end xs:justify-between p-4 flex-wrap flex-row-reverse gap-4 items-center animate-pulse sticky top-0 left-0 z-50"
>

  <nav className="flex gap-4 items-center flex-wrap xs:w-fit w-full">
    <div className="h-9 w-28 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>

    <div className="flex gap-4 items-center">
      <div className="h-4 w-12 bg-zinc-300 dark:bg-zinc-700 rounded"></div>

      <div className="h-10 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
    </div>
  </nav>


  <div className="h-10 w-36 bg-zinc-300 dark:bg-zinc-700 rounded"></div>


</header>

    </>
  )
}
