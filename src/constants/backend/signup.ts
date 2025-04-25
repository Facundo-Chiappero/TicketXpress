export const SIGNUP = {
  REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MISSING_FIELDS: {
    NAME: 'Name',
    EMAIL: 'Email',
    PASSWORD: 'Password',
    MESSAGE: 'are required',
  },
  ERRORS: {
    INVALID_EMAIL: 'Invalid email',
    ALREADY_EXISTS: 'User with this email already exists',
    INTERNAL: 'Internal error',
    CREATING_USER: 'Error creating user',
  },
  SUCCESS: 'User created successfully',
}
