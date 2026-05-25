import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      service,
      date,
      time,
      name,
      email,
      phone,
      message,
      price,
      duration,
    } = body

    if (!service || !date || !time || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'All required fields must be filled.' },
        { status: 400 },
      )
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL as string,
      to: process.env.CONTACT_TO_EMAIL as string,
      subject: `New Booking Request — ${service} — ${name}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto;">

          <!-- Header -->
          <div style="background: linear-gradient(135deg, #6f068d, #520568); padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">
              📅 New Booking Request
            </h1>
            <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 13px;">
              Prime Edge Accountants — Booking System
            </p>
          </div>

          <!-- Service banner -->
          <div style="background: #f0eef8; padding: 20px 32px; border-left: 4px solid #6f068d;">
            <p style="margin: 0; font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Service Requested</p>
            <p style="margin: 6px 0 0; font-size: 20px; font-weight: 900; color: #6f068d;">${service}</p>
            <p style="margin: 4px 0 0; font-size: 13px; color: #6b7280;">${duration} &nbsp;|&nbsp; <strong style="color: #6f068d;">${price}</strong></p>
          </div>

          <!-- Body -->
          <div style="background: #f8f7ff; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid rgba(111,6,141,0.1);">

            <!-- Booking details -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; width: 140px;">
                  <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase;">Date</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="font-size: 14px; color: #0d0d0d; font-weight: 700;">📅 ${date}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase;">Time</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="font-size: 14px; color: #0d0d0d; font-weight: 700;">🕐 ${time}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase;">Name</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="font-size: 14px; color: #0d0d0d; font-weight: 600;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase;">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="font-size: 14px; color: #6f068d;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase;">Phone</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${phone}" style="font-size: 14px; color: #6f068d;">${phone}</a>
                </td>
              </tr>
              ${
                message
                  ? `
              <tr>
                <td style="padding: 10px 0;">
                  <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase;">Notes</span>
                </td>
                <td style="padding: 10px 0;">
                  <span style="font-size: 14px; color: #4b5563;">${message}</span>
                </td>
              </tr>`
                  : ''
              }
            </table>

            <!-- Action buttons -->
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <a href="mailto:${email}?subject=Re: Your Booking Request — ${service}"
                style="display: inline-block; background: #6f068d; color: white; padding: 12px 24px; border-radius: 4px; font-size: 13px; font-weight: 600; text-decoration: none;">
                Reply to ${name}
              </a>
              <a href="tel:${phone}"
                style="display: inline-block; background: white; color: #6f068d; border: 2px solid #6f068d; padding: 12px 24px; border-radius: 4px; font-size: 13px; font-weight: 600; text-decoration: none;">
                Call ${name}
              </a>
            </div>

            <p style="font-size: 11px; color: #9ca3af; text-align: center; margin-top: 24px;">
              This booking request was submitted via primeedgeaccountants.co.uk
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json(
        { error: 'Failed to send email.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Booking API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 },
    )
  }
}
