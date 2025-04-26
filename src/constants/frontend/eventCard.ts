export const EVENT_CARD = {
  BUY: 'Buy Ticket',
  DOLAR_SYMBOL: '$',
  DATE_LABEL: 'Date:',
  PRICE_LABEL: 'Price:',
  IMAGE_ALT: (index: number, title: string) => `Image ${index + 1}: ${title}`,
  DATE: {
    LOCALE_DATE_STRING: 'es-ES',
    YEAR: 'numeric' as const,
    MONTH: 'long' as const,
    DAY: 'numeric' as const,
  },
  DISCLAIMER:
    '⚠️ Important: This is a fake event created for educational purposes only. However, the payment is real — we are not responsible for any unintended transactions.',
}
