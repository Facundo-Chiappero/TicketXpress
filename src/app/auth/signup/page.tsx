import GoHomeButton from '@/app/ui/buttons/GoHomeButton'
import SignUpForm from '@/app/ui/forms/SignUpForm'
import { ToastContainer } from 'react-toastify'

export default function SignUpPage() {
  return (
    <>
      <header className="absolute top-4 left-4">
        <GoHomeButton />
      </header>
      <SignUpForm />
      <ToastContainer position='bottom-right' closeOnClick={true} newestOnTop={true}  theme='colored' />

    </>
  )
}
