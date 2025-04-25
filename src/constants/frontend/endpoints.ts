export const enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const enum API_ENDPOINTS {
  EVENTS = '/api/events',
  UPLOAD_PROFILE = '/api/updateProfile',
  UPLOAD_IMAGE = '/api/uploadImage',
  SIGNUP = '/api/auth/signup',
  PAYMENT = '/api/payment',
  CREATE_PASSWORD = '/api/createPassword',
  GOOGLE_URL = 'https://www.google.com/recaptcha/api/siteverify',
  VERIFY_CAPTCHA = '/api/verifyCaptcha'
}
