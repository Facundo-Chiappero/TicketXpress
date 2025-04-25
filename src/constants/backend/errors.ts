import { CREATE_PASSWORD } from './createPassword'
import { EVENT_BY_ID } from './eventById'
import { PAYMENT } from './payment'
import { SIGNUP } from './signup'
import { UPDATE_IMAGE } from './updateImage'
import { UPDATE_PROFILE } from './updateProfile'
import { VERIFY_CAPTCHA } from './verifyCaptcha'

export const ERRORS = {
  PAYMENT: PAYMENT.ERRORS,
  SIGNUP: SIGNUP.ERRORS,
  EVENT_BY_ID: EVENT_BY_ID.ERRORS,
  UPDATE_PROFILE: UPDATE_PROFILE.ERRORS,
  MISSING_EMAIL_OR_NAME: 'Google account must have an email and a name.',
  UPDATE_IMAGE: UPDATE_IMAGE.ERRORS,
  CREATE_PASSWORD: CREATE_PASSWORD.ERRORS,
  VERIFY_CAPTCHA: VERIFY_CAPTCHA.ERRORS,
}
