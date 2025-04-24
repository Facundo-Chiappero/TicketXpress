export const PROVIDERS = {
  AUTH_PROVIDERS: {
    CREDENTIALS: 'credentials',
    GOOGLE: 'google',
  },

  FIELD_TYPES: {
    EMAIL: 'email',
    PASSWORD: 'password',
  },

  GOOGLE: {
    CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
    CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
  },

  PROFILE_DEFAULTS: {
    NAME: 'User without name',
  },

  FORM_LABELS: {
    EMAIL: 'Email',
    PASSWORD: 'Password',
  },
};
