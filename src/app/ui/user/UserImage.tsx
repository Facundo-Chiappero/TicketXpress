import DefaultUser from '../icons/DefaultUser'

interface Props {
  image: string | undefined
  name: string | undefined
}

export default function UserImage({ image, name }: Props) {
  return image ? (
    <img
      src={image}
      alt={name ?? 'User'}
      className="w-10 h-10 rounded-full object-cover border-2"
    />
  ) : (
    <DefaultUser />
  )
}
