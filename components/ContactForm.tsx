'use client'

import { useState } from 'react'
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
} from 'lucide-react'

type FormData = {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

const services = [
  'Get A Free Quote',
  'Bookkeeping',
  'Account Preparation & Filing',
  'Payroll Services',
  'Tax Planning & Filing',
  'VAT Registration & Filing',
  'Making Tax Digital Registration & Filing',
  'Business Advisory',
  'Not sure — need advice',
]
const inputBase =
  'w-full px-4 py-3 rounded-lg text-sm border border-gray-200 text-gray-700 outline-none transition-all placeholder-gray-300'

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
type Status = 'idle' | 'sending' | 'success' | 'error'

const [status, setStatus] = useState<Status>('idle')

 const handleChange = (
   e: React.ChangeEvent<
     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
   >,
 ) => {
   setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
 }

 const handleFocus = (
   e: React.FocusEvent<
     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
   >,
 ) => {
   e.target.style.borderColor = '#6f068d'
   e.target.style.boxShadow = '0 0 0 3px rgba(111,6,141,0.1)'
 }

 const handleBlur = (
   e: React.FocusEvent<
     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
   >,
 ) => {
   e.target.style.borderColor = '#e5e7eb'
   e.target.style.boxShadow = 'none'
 }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        })
      } else {
        console.error('Form error:', data.error)
        setStatus('error')
      }
    } catch (err) {
      console.error('Submit error:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: '#dcfce7' }}
        >
          <CheckCircle size={28} style={{ color: '#16a34a' }} />
        </div>
        <h3
          className="font-bold text-gray-900 text-xl mb-2"
          style={{ fontFamily: 'Merriweather, serif' }}
        >
          Message Sent!
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Thank you for getting in touch. A member of our team will respond
          within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-outline text-sm"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Error message */}
      {status === 'error' && (
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm"
          style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#dc2626',
          }}
        >
          <AlertCircle size={15} className="flex-shrink-0" />
          Please fill in your name, email and message.
        </div>
      )}

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
            Full Name <span style={{ color: '#6f068d' }}>*</span>
          </label>
          <div className="relative">
            <User
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300"
            />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Jane Smith"
              className={`${inputBase} pl-10`}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
            Email Address <span style={{ color: '#6f068d' }}>*</span>
          </label>
          <div className="relative">
            <Mail
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="jane@example.com"
              className={`${inputBase} pl-10`}
              required
            />
          </div>
        </div>
      </div>

      {/* Phone + Company */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
            Phone Number
          </label>
          <div className="relative">
            <Phone
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="07700 900000"
              className={`${inputBase} pl-10`}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
            Company Name
          </label>
          <div className="relative">
            <Building2
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300"
            />
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Your Business Ltd"
              className={`${inputBase} pl-10`}
            />
          </div>
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
          Service You Are Interested In
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={inputBase}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
          Your Message <span style={{ color: '#6f068d' }}>*</span>
        </label>
        <div className="relative">
          <MessageSquare
            size={15}
            className="absolute left-3.5 top-3.5 text-gray-300"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Tell us a bit about your situation and how we can help..."
            rows={5}
            className={`${inputBase} pl-10 resize-none leading-relaxed`}
            required
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full justify-center py-3.5"
        style={{ opacity: status === 'sending' ? 0.7 : 1 }}
      >
        {status === 'sending' ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We typically respond within one business day. Fields marked{' '}
        <span style={{ color: '#6f068d' }}>*</span> are required.
      </p>
    </form>
  )
}