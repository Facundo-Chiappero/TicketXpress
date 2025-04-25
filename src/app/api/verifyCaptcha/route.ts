import { ERRORS } from '@/constants/backend/errors'
import { API_ENDPOINTS, HTTP_METHODS } from '@/constants/frontend/endpoints'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { token } = await req.json()

  if (!token) {
    return NextResponse.json({ success: false, error: ERRORS.VERIFY_CAPTCHA.NO_SECRET }, { status: 400 })
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY

  if (!secret) {
    return NextResponse.json({ success: false, error: ERRORS.VERIFY_CAPTCHA.NO_SECRET }, { status: 500 })
  }

  const response = await fetch(API_ENDPOINTS.GOOGLE_URL, {
    method: HTTP_METHODS.POST,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  })

  const data = await response.json()

  return NextResponse.json({ success: data.success, score: data.score, ...data })
}
