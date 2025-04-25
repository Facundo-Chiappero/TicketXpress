import GoHomeButton from '@/app/ui/buttons/GoHomeButton'
import LoginForm from '@/app/ui/forms/LoginForm'
import { ToastContainer } from 'react-toastify'

export default async function LoginPage() {
  return (

<>
      <header className="absolute top-4 left-4">
        <GoHomeButton />
      </header>
      <LoginForm />

      <ToastContainer position='bottom-right' closeOnClick={true} newestOnTop={true}  theme='colored' />

    </>
  )
}
