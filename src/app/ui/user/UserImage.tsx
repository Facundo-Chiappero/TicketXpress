import DefaultUser from '../icons/DefaultUser'

interface Props {
  image: string | undefined
  name: string | undefined
}

export default function UserImage({ image, name }: Props) {
  return image ? (
    <img src={image} alt={name ?? 'User'} className="pfp" />
  ) : (
    <DefaultUser />
  )
}
