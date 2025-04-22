import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import AuthFormWrapper from '@/app/ui/forms/AuthFormWrapper'
import AuthInput from '@/app/ui/forms/AuthInput'
import ProfilePicture from '@/components/User/ProfilePicture'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function EditProfileForm() {

  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/auth/login?eventsManagerCallbackUrl=/user/profile')
  }
  
  const user = session?.user

  return (
    <AuthFormWrapper title="Editar Perfil" loading={false}>
      <form action="" className="flex flex-col gap-4 w-full">
      <AuthInput
          name="name"
          type="name"
          required
          autoFocus
          label="New Name"
          autoComplete="name"
          defaultValue={user.name}
        />
        <AuthInput
          name="email"
          type="email"
          required
          autoFocus
          label="New Email"
          autoComplete="email"
          defaultValue={user.email}
        />
        <AuthInput
          name="password"
          type="password"
          required
          label="New Password"
          autoComplete="current-password"
        />

        <ProfilePicture userImage={user.image}/>

        <button
          type="submit"
          disabled={false}
          className="mt-2 flex items-center justify-center rounded-full px-4 py-2 font-semibold bg-[#242424] text-white border-white/15 border-2 self-center hover:bg-[#2f2f2f]"
        >
          Actualizar
        </button>
      </form>
    </AuthFormWrapper>
  )
}
