export const LOGIN_FORM = {
  TITLE: 'Sign In',
  LABELS: {
    EMAIL: 'Email',
    PASSWORD: 'Password',
  },
  PLACEHOLDERS: {
    EMAIL: 'john@gmail.com',
    PASSWORD: 'S4fe_PasSw0rd',
  },
  BUTTONS: {
    SUBMIT: 'Sign In',
    REDIRECT_TEXT: "Don't have an account?",
    REDIRECT_LINK: 'Sign up',
  },
  METHODS: {
    GOOGLE: {
      NAME: 'google',
      TEXT: 'Sign in with Google',
    },
  },
  ERRORS: {
    GENERAL: 'There was an error logging in.',
    GOOGLE_ERROR: 'There was an error with Google authentication.',
    SUCCESS: 'Login successful.',
    CREDENTIALS_ERROR: 'Incorrect credentials. Please try again.',
    REDIRECT_SUCCESS: 'Login successful. Redirecting shortly...',
  },
};
