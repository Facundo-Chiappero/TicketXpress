export const PAGES = {
  USER: {
    PROFILE: '/user/profile',
    EDIT: '/user/profile/edit',
    GENERATE_PASSWORD: '/user/profile/createPassword',
  },
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
  },
  HOME: '/',
  EVENTS: {
    BUY: (id: string | number) => `/events/buy/${id}`,
  },
};
