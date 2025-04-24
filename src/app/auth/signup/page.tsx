import GoHomeButton from '@/app/ui/buttons/GoHomeButton'
import SignUpForm from '@/app/ui/forms/SignUpForm'

export default function SignUpPage() {
  return (
    <>
      <header className="absolute top-4 left-4">
        <GoHomeButton />
      </header>
      <SignUpForm />
    </>
  )
}
