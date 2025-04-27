import Image from 'next/image'
import DefaultUser from '../icons/DefaultUser'

interface Props {
  image: string | undefined
  name: string | undefined
}

export default function UserImage({ image, name }: Props) {
  return image ? (
    <Image src={image} alt={name ?? 'User'} className="pfp" />
  ) : (
    <DefaultUser />
  )
}
