import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, company, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 },
      )
    }

    const html = `<div style="max-width:600px;margin:0 auto;font-family:sans-serif"><div style="background:linear-gradient(135deg,#9B097A,#74075B);padding:32px;border-radius:12px 12px 0 0"><h1 style="color:white;margin:0;font-size:20px">New Contact Form Submission</h1><p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px">Prime Edge Accountants Website</p></div><div style="background:#f8f7ff;padding:32px;border-radius:0 0 12px 12px;border:1px solid rgba(155,9,122,0.1)"><table style="width:100%;border-collapse:collapse"><tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;width:140px"><span style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em">Name</span></td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb"><span style="font-size:14px;color:#0d0d0d;font-weight:600">${name}</span></td></tr><tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb"><span style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em">Email</span></td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb"><a href="mailto:${email}" style="font-size:14px;color:#9B097A">${email}</a></td></tr><tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb"><span style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em">Phone</span></td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb"><span style="font-size:14px;color:#0d0d0d">${phone || 'Not provided'}</span></td></tr><tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb"><span style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em">Company</span></td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb"><span style="font-size:14px;color:#0d0d0d">${company || 'Not provided'}</span></td></tr><tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb"><span style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em">Service</span></td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb"><span style="font-size:14px;color:#0d0d0d">${service || 'Not specified'}</span></td></tr></table><div style="margin-top:24px"><p style="font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 10px">Message</p><div style="background:white;border-left:4px solid #9B097A;padding:16px 20px;border-radius:0 8px 8px 0"><p style="font-size:14px;color:#374151;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p></div></div><div style="margin-top:28px;text-align:center"><a href="mailto:${email}?subject=Re: Your enquiry to Prime Edge Accountants" style="display:inline-block;background:#9B097A;color:white;padding:12px 28px;border-radius:4px;font-size:14px;font-weight:600;text-decoration:none">Reply to ${name}</a></div><p style="font-size:11px;color:#9ca3af;text-align:center;margin-top:24px;margin-bottom:0">This message was submitted via the contact form at primeedgeaccountants.co.uk</p></div></div>`

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL as string,
      to: process.env.CONTACT_TO_EMAIL as string,
      subject: `New Contact Form Submission — ${name}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 },
    )
  }
}
