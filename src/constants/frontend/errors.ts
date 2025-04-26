import { GENERATE_PASSWORD_FORM } from './generatePassword'
import { LOGIN_FORM } from './loginForm'
import { PROFILE_PICTURE } from './profilePicture'
import { SIGN_UP_FORM } from './signupForm'
import { UPDATE_USER_FORM } from './updateUserForm'

export const ERRORS = {
  SERVER_ERROR: 'A server error occurred',
  SIGN_UP_FORM: SIGN_UP_FORM.ERRORS,
  LOGIN_FORM: LOGIN_FORM.ERRORS,
  UPDATE_USER: UPDATE_USER_FORM.ERRORS,
  PROFILE_PICTURE: PROFILE_PICTURE.ERRORS,
  GENERATE_PASSWORD_FORM: GENERATE_PASSWORD_FORM.ERRORS,
  INVALID_CAPTCHA: 'Complete the reCaptcha',
}
