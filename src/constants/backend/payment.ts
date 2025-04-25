export const PAYMENT = {
  AUTO_RETURN: 'approved',
  NOTIFICATION_URL: process.env.NEXT_PUBLIC_BASE_URL + '/api/payment/webhook',
  APPROVED: 'approved',
  TYPE: {
    PAYMENT: 'payment',
  },
  MERCADO_PAGO_URL: 'https://api.mercadopago.com/v1/payments',
  ERRORS: {
    CREATE: 'Error creating preference:',
    MISSING: 'Required data is missing',
    WEBHOOK: 'Webhook error:',
    WEBHOOK_NO_METADATA: 'Metadata not found',
  },
  WEBHOOK_LISTENED: 'Webhook listened',
  WEBHOOK_IGNORED: 'Webhook ignored',
}
