interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function AuthInput({ label, name, ...props }: Props) {
  return (
    <>
    {/* row and col classes are useful for password type inputs, to display the eye button */}
    {/* //todo check this */}
      <label htmlFor={name} className="text-sm font-medium -mb-2.5 row-start-1 row-end-2 col-start-1 col-end-3">
        {label}
      </label>
      <input
        {...props}
        id={name}
        name={name}
        className="text-white px-2 py-1 bg-zinc-800 rounded focus:outline-none"
      />
    </>
  )
}
