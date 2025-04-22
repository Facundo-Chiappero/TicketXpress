//this is a button with an icon inside
export default function IconButton({
  onClick,
  className,
  icon,
  title,
}: {
  onClick: () => void
  className?: string
  icon: React.ReactNode
  title?: string
}) {
  return (
    <button onClick={onClick} className={className} title={title}>
      {icon}
    </button>
  )
}
