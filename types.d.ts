export type User = {
  id: string
  name: string
  email: string
  role: string
  image?: string
}

export type CurrentUser =
  | User | undefined

export enum ROLES {
  USER = 'USER',
  ADMIN = 'ADMIN'
}
export type Event = {
  id: number;
  title: string;
  description: string;
  date: Date;
  price: number;
  images: string[];
  creatorId: number;
}

export interface ExtendedEvent extends Event{
  creator?: {
    id: number
    email: string
    password: string | null
    role: $Enums.Role
  }
  payments?: {
    id: number
    userId: number
    eventId: number | null
    amount: number
    createdAt: Date
  }[]
} 