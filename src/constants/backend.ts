export const PAYMENT = {
  AUTO_RETURN: 'approved',
  NOTIFICATION_URL: process.env.NEXT_PUBLIC_BASE_URL + '/api/payment/webhook',
  APPROVED: 'approved',
  MERCADO_PAGO_URL: 'https://api.mercadopago.com/v1/payments',
}

export const PAYMENT_MESSAGES = {
  MISSING_DATA: 'Required data is missing',
  CREATE_ERROR: 'Error creating payment preference',
  WEBHOOK_SAVE_SUCCESS: 'Payment saved to database',
  WEBHOOK_NO_METADATA: 'Metadata not found',
  WEBHOOK_ERROR: 'Error in webhook',
}

export const PAYMENT_ERRORS = {
  CREATE: 'Error creating preference:',
  MISSING: 'Required data is missing',
  WEBHOOK: 'Webhook error:',
  WEBHOOK_NO_METADATA: 'Metadata not found',
}
