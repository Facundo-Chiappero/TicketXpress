export const EVENT_BY_ID = {
  ERRORS: {
    UPDATING: 'Error updating event',
    DELETING: 'Error deleting event',
    INVALID_ID: 'Invalid ID',
    NOT_FOUND: 'Event not found',
    INTERNAL: 'Internal error',
  },
}

export const EVENT = {
  MISSING_FIELDS: {
    TITLE: 'title',
    DESCRIPTION: 'description',
    DATE: 'date',
    PRICE: 'price',
    MESSAGE: 'are required fields'
  },
  ERRORS: {
    TITLE_TOO_LONG: 'Title must be 100 characters or less',
    DESCRIPTION_TOO_LONG: 'Description must be 300 characters or less',
    TOO_CHEAP: 'Event can\'t be worth 0 dollars',
    INVALID_DATE: 'Invalid date format',
    PAST_DATE: 'Event can\t be in the past',
    DATE_TOO_FAR: 'Event can\t be in more than 2 years'

  }
}