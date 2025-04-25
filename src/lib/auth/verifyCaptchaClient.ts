import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'

export async function verifyCaptchaClient(token: string): Promise<boolean> {
  try {
    const res = await fetch(API_ENDPOINTS.VERIFY_CAPTCHA, {
      method: HTTP_METHODS.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
    const data = await res.json()
    return data.success
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return false
  }
}
