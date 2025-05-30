export const METADATA = {
  LAYOUTS: {
    HOME: {
      TITLE: 'TicketXPress',
      DESCRIPTION:
        'TicketXPress is a page built with Next.js, React, TailwindCSS, Node.js, and Prisma. Designed for users to buy tickets for events',
      URL: 'https://ticketxpress.facundochiappero.online/',
      PREVIEW_URL: 'https://ticketxpress.facundochiappero.online/preview.webp',
      TYPE: 'website' as const,
    },
    USER: {
      TITLE: "'s Profile",
      DESCRIPTION:
        'User account detail page, including purchases and profile editing',
    },
    EVENT: {
      TITLE: 'Buy Event',
      DESCRIPTION:
        'Event detail page with a button to purchase using Mercado Pago',
    },
    PAYMENT: {
      TITLE: 'Payment',
      DESCRIPTION: 'Page displaying the status of user payments',
    },
    AUTH: {
      TITLE: 'Auth',
      DESCRIPTION: 'Authentication page with credentials or Google login',
    },
  },
}
