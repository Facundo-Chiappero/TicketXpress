import { EVENT } from '@/constants/backend/event'
import { ERRORS } from '@/constants/backend/errors'

interface EventBody {
  title: string
  description: string
  price: number
  date: string
  images?: string[]
  creatorId?: number
}
type ValidationError = {
  status: number
  error: string
} | null

export function validateEventBody(body: Partial<EventBody>): ValidationError {
  const { title, description, price, date } = body

  const missingFields = []
  if (!title) missingFields.push(EVENT.MISSING_FIELDS.TITLE)
  if (!description) missingFields.push(EVENT.MISSING_FIELDS.DESCRIPTION)
  if (!price) missingFields.push(EVENT.MISSING_FIELDS.PRICE)
  if (!date) missingFields.push(EVENT.MISSING_FIELDS.DATE)

  if (missingFields.length > 0) {
    return {
      status: 400,
      error: `${missingFields.join(', ')} ${EVENT.MISSING_FIELDS.MESSAGE}`,
    }
  }

  // using non-null assertions (!) is safe here because the existence of these properties is already validated.
  if (title!.length > 100) {
    return {
      status: 400,
      error: ERRORS.EVENT.TITLE_TOO_LONG,
    }
  }

  if (description!.length > 300) {
    return {
      status: 400,
      error: ERRORS.EVENT.DESCRIPTION_TOO_LONG,
    }
  }

  if (price == 0) {
    return {
      status: 400,
      error: ERRORS.EVENT.TOO_CHEAP,
    }
  }

  const eventDate = new Date(date!)
  const now = new Date()
  const max = new Date()
  now.setHours(0, 0, 0, 0)
  max.setFullYear(max.getFullYear() + 2)

  if (isNaN(eventDate.getTime())) {
    return {
      status: 400,
      error: EVENT.ERRORS.INVALID_DATE,
    }
  }

  if (eventDate < now) {
    return {
      status: 400,
      error: EVENT.ERRORS.PAST_DATE,
    }
  }

  if (eventDate > max) {
    return {
      status: 400,
      error: EVENT.ERRORS.DATE_TOO_FAR,
    }
  }

  return null // no errors
}
