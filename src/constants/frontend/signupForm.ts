export const SIGN_UP_FORM = {
  TITLE: 'Create Account',
  LABELS: {
    NAME: 'Name',
    EMAIL: 'Email',
    PASSWORD: 'Password',
  },
  PLACEHOLDERS: {
    NAME: 'John Doe',
    EMAIL: 'john@gamil.com',
    PASSWORD: 'S4fe_PasSw0rd',
  },
  BUTTONS: {
    SUBMIT: 'Sign Up',
    REDIRECT_TEXT: 'Already have an account?',
    REDIRECT_LINK: 'Sign in',
  },
  METHODS: {
    GOOGLE: {
      NAME: 'google',
      TEXT: 'Continue with Google',
    },
  },
  ERRORS: {
    REQUIRED_FIELDS: 'All fields are required',
    GENERAL: 'An error occurred while creating your account.',
    SUCCESS: 'Account created successfully.',
    REDIRECT_SUCCESS: 'Account created. You will be redirected shortly.',
    LOGIN_FAILED_AFTER_SIGNUP:
      'Account created, but automatic login failed. Please log in manually.',
  },
};
