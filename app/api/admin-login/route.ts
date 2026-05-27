import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const { email, password } = body

  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD

  if (email === adminEmail && password === adminPassword) {
    return NextResponse.json({
      success: true,
    })
  }

  return NextResponse.json(
    {
      success: false,
      message: 'Invalid credentials',
    },
    { status: 401 },
  )
}
