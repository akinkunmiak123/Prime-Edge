'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  FileText,
  Users,
  TrendingUp,
  Receipt,
  Briefcase,
  Clock,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,
  AlertCircle,
  Send,
} from 'lucide-react'

/* ── Services ── */
const services = [
  {
    id: 'bookkeeping',
    icon: BookOpen,
    title: 'Bookkeeping',
    description: 'Accurate, up-to-date financial records for your business.',
    duration: '1 hour',
    price: '£75',
    color: '#9B097A',
  },
  {
    id: 'accounts',
    icon: FileText,
    title: 'Account Preparation & Filing',
    description: 'Statutory accounts prepared and filed with HMRC.',
    duration: '1 hour',
    price: '£100',
    color: '#2D6198',
  },
  {
    id: 'payroll',
    icon: Users,
    title: 'Payroll Services',
    description: 'Full payroll management and RTI submissions.',
    duration: '1 hour',
    price: '£75',
    color: '#59A2AF',
  },
  {
    id: 'tax',
    icon: TrendingUp,
    title: 'Tax Planning & Filing',
    description: 'Proactive tax planning to minimise your liability.',
    duration: '1 hour',
    price: '£100',
    color: '#9B097A',
  },
  {
    id: 'vat',
    icon: Receipt,
    title: 'VAT Registration & Filing',
    description: 'VAT registration and quarterly returns managed for you.',
    duration: '1 hour',
    price: '£75',
    color: '#2D6198',
  },
  {
    id: 'advisory',
    icon: Briefcase,
    title: 'Business Advisory',
    description: 'Strategic financial advice tailored to your goals.',
    duration: '30 mins',
    price: 'Free',
    color: '#59A2AF',
  },
]

/* ── Time slots ── */
const timeSlots = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
]

/* ── Calendar helpers ── */
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}
function formatDateFull(year: number, month: number, day: number) {
  return `${day} ${MONTHS[month]} ${year}`
}
function isWeekend(year: number, month: number, day: number) {
  const d = new Date(year, month, day).getDay()
  return d === 0 || d === 6
}
function isPast(year: number, month: number, day: number) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return new Date(year, month, day) < today
}

/* ── Input style helper ── */
const inputBase =
  'w-full px-4 py-3 rounded-lg text-sm border border-gray-200 text-gray-700 outline-none transition-all placeholder-gray-300'

const focusStyle = {
  onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#9B097A'
    e.target.style.boxShadow = '0 0 0 3px rgba(155,9,122,0.1)'
  },
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#e5e7eb'
    e.target.style.boxShadow = 'none'
  },
}

/* ── Page ── */
export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null)
  const [calYear, setCalYear] = useState(new Date().getFullYear())
  const [calMonth, setCalMonth] = useState(new Date().getMonth())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const selectedDate = selectedDay
    ? formatDateFull(calYear, calMonth, selectedDay)
    : null

  const daysInMonth = getDaysInMonth(calYear, calMonth)
  const firstDay = getFirstDayOfMonth(calYear, calMonth)

  const prevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11)
      setCalYear((y) => y - 1)
    } else setCalMonth((m) => m - 1)
    setSelectedDay(null)
  }
  const nextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0)
      setCalYear((y) => y + 1)
    } else setCalMonth((m) => m + 1)
    setSelectedDay(null)
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) {
      setErrorMsg('Please fill in your name, email and phone number.')
      return
    }
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: selectedService?.title,
          date: selectedDate,
          time: selectedTime,
          price: selectedService?.price,
          duration: selectedService?.duration,
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  // WhatsApp message
  const waNumber = '447XXXXXXXXX' // ← replace with company WhatsApp
  const waMessage = encodeURIComponent(
    `Hello Prime Edge,\n\nI have just submitted a booking request:\n\n` +
      `📋 *Service:* ${selectedService?.title}\n` +
      `📅 *Date:* ${selectedDate}\n` +
      `🕐 *Time:* ${selectedTime}\n` +
      `💰 *Fee:* ${selectedService?.price}\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📧 *Email:* ${form.email}\n` +
      `📞 *Phone:* ${form.phone}\n\n` +
      `Please confirm my booking and advise on payment. Thank you!`,
  )
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`

  /* ── Render ── */
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #9B097A 0%, #74075B 50%, #0d0d0d 100%)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"
          style={{ background: '#59A2AF' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8" style={{ background: '#59A2AF' }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                Book a Consultation
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-4"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Book Your Session
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              Choose your service, pick a date and time, and we will get back to
              you to confirm your booking and arrange payment.
            </p>
          </div>
        </div>
      </section>

      {/* Progress steps */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4 gap-2">
            {[
              { n: 1, label: 'Choose Service' },
              { n: 2, label: 'Pick Date & Time' },
              { n: 3, label: 'Your Details' },
              { n: 4, label: 'Confirm' },
            ].map((s, i, arr) => (
              <div key={s.n} className="flex items-center gap-2 flex-1">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                    style={{
                      background: step >= s.n ? '#9B097A' : '#eaf3f4',
                      color: step >= s.n ? 'white' : '#6b7280',
                    }}
                  >
                    {step > s.n ? <CheckCircle size={14} /> : s.n}
                  </div>
                  <span
                    className="text-xs font-semibold hidden sm:block"
                    style={{ color: step >= s.n ? '#9B097A' : '#9ca3af' }}
                  >
                    {s.label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div
                    className="flex-1 h-px mx-2"
                    style={{
                      background: step > s.n ? '#9B097A' : '#e5e7eb',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-12 lg:py-16" style={{ background: '#f5f9fa' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── STEP 1: Choose Service ── */}
          {step === 1 && (
            <div>
              <h2
                className="text-2xl font-black text-gray-900 mb-2"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                What can we help you with?
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Select the service you would like to book a consultation for.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s) => {
                  const Icon = s.icon
                  const selected = selectedService?.id === s.id
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s)}
                      className="text-left rounded-xl p-6 transition-all duration-200 hover:shadow-md"
                      style={{
                        background: selected ? s.color : 'white',
                        border: `2px solid ${selected ? s.color : 'rgba(155,9,122,0.08)'}`,
                        transform: selected ? 'scale(1.02)' : 'scale(1)',
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{
                          background: selected
                            ? 'rgba(255,255,255,0.2)'
                            : '#eaf3f4',
                        }}
                      >
                        <Icon
                          size={22}
                          style={{ color: selected ? 'white' : s.color }}
                        />
                      </div>
                      <h3
                        className="font-bold text-sm mb-1"
                        style={{
                          fontFamily: 'Merriweather, serif',
                          color: selected ? 'white' : '#0d0d0d',
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="text-xs leading-relaxed mb-4"
                        style={{
                          color: selected ? 'rgba(255,255,255,0.8)' : '#6b7280',
                        }}
                      >
                        {s.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className="flex items-center gap-1 text-xs font-medium"
                          style={{
                            color: selected
                              ? 'rgba(255,255,255,0.7)'
                              : '#9ca3af',
                          }}
                        >
                          <Clock size={11} />
                          {s.duration}
                        </span>
                        <span
                          className="text-sm font-black"
                          style={{ color: selected ? 'white' : s.color }}
                        >
                          {s.price}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="flex justify-end mt-8">
                <button
                  onClick={() => selectedService && setStep(2)}
                  disabled={!selectedService}
                  className="btn-primary"
                  style={{ opacity: selectedService ? 1 : 0.4 }}
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2: Date & Time ── */}
          {step === 2 && (
            <div>
              <h2
                className="text-2xl font-black text-gray-900 mb-2"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Choose a Date & Time
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Select your preferred date and time for your{' '}
                <strong style={{ color: '#9B097A' }}>
                  {selectedService?.title}
                </strong>{' '}
                consultation.
              </p>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Calendar */}
                <div
                  className="bg-white rounded-2xl p-6"
                  style={{ border: '1px solid rgba(155,9,122,0.08)' }}
                >
                  {/* Month navigation */}
                  <div className="flex items-center justify-between mb-5">
                    <button
                      onClick={prevMonth}
                      className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <ArrowLeft size={16} className="text-gray-500" />
                    </button>
                    <h3
                      className="font-bold text-gray-900 text-sm"
                      style={{ fontFamily: 'Merriweather, serif' }}
                    >
                      {MONTHS[calMonth]} {calYear}
                    </h3>
                    <button
                      onClick={nextMonth}
                      className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <ArrowRight size={16} className="text-gray-500" />
                    </button>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 mb-2">
                    {DAYS.map((d) => (
                      <div
                        key={d}
                        className="text-center text-xs font-semibold text-gray-400 py-1"
                      >
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Day cells */}
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1
                      const weekend = isWeekend(calYear, calMonth, day)
                      const past = isPast(calYear, calMonth, day)
                      const selected = selectedDay === day
                      const disabled = weekend || past

                      return (
                        <button
                          key={day}
                          onClick={() => !disabled && setSelectedDay(day)}
                          disabled={disabled}
                          className="aspect-square rounded-lg text-xs font-medium transition-all flex items-center justify-center"
                          style={{
                            background: selected
                              ? '#9B097A'
                              : disabled
                                ? 'transparent'
                                : '#f5f9fa',
                            color: selected
                              ? 'white'
                              : disabled
                                ? '#d1d5db'
                                : '#374151',
                            cursor: disabled ? 'not-allowed' : 'pointer',
                            fontWeight: selected ? 700 : 500,
                          }}
                        >
                          {day}
                        </button>
                      )
                    })}
                  </div>

                  <p className="text-xs text-gray-400 mt-4 text-center">
                    Weekends and past dates are unavailable
                  </p>
                </div>

                {/* Time slots */}
                <div
                  className="bg-white rounded-2xl p-6"
                  style={{ border: '1px solid rgba(155,9,122,0.08)' }}
                >
                  <h3
                    className="font-bold text-gray-900 text-sm mb-4"
                    style={{ fontFamily: 'Merriweather, serif' }}
                  >
                    Available Times
                    {selectedDate && (
                      <span className="font-normal text-gray-400 ml-2">
                        — {selectedDate}
                      </span>
                    )}
                  </h3>

                  {!selectedDay ? (
                    <div className="flex flex-col items-center justify-center h-48 text-center">
                      <Calendar
                        size={32}
                        className="mb-3"
                        style={{ color: '#d1d5db' }}
                      />
                      <p className="text-gray-400 text-sm">
                        Please select a date first
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((t) => {
                        const selected = selectedTime === t
                        return (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(t)}
                            className="py-2.5 px-3 rounded-lg text-xs font-semibold transition-all"
                            style={{
                              background: selected ? '#9B097A' : '#f5f9fa',
                              color: selected ? 'white' : '#374151',
                              border: `1px solid ${selected ? '#9B097A' : 'rgba(155,9,122,0.1)'}`,
                            }}
                          >
                            {t}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Selected summary */}
              {selectedDate && selectedTime && (
                <div
                  className="mt-4 px-5 py-4 rounded-xl flex items-center gap-3"
                  style={{
                    background: '#eaf3f4',
                    border: '1px solid rgba(155,9,122,0.15)',
                  }}
                >
                  <CheckCircle size={16} style={{ color: '#9B097A' }} />
                  <p className="text-sm text-gray-700">
                    <strong style={{ color: '#9B097A' }}>{selectedDate}</strong>{' '}
                    at{' '}
                    <strong style={{ color: '#9B097A' }}>{selectedTime}</strong>{' '}
                    selected
                  </p>
                </div>
              )}

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="btn-outline flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <button
                  onClick={() => selectedDate && selectedTime && setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="btn-primary"
                  style={{ opacity: selectedDate && selectedTime ? 1 : 0.4 }}
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 3: Your Details ── */}
          {step === 3 && (
            <div>
              <h2
                className="text-2xl font-black text-gray-900 mb-2"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Your Details
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Please fill in your contact details so we can confirm your
                booking.
              </p>

              <div
                className="bg-white rounded-2xl p-7"
                style={{ border: '1px solid rgba(155,9,122,0.08)' }}
              >
                {errorMsg && (
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded-lg mb-5 text-sm"
                    style={{
                      background: '#fef2f2',
                      border: '1px solid #fecaca',
                      color: '#dc2626',
                    }}
                  >
                    <AlertCircle size={15} />
                    {errorMsg}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Full Name <span style={{ color: '#9B097A' }}>*</span>
                    </label>
                    <div className="relative">
                      <User
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300"
                      />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        placeholder="Jane Smith"
                        className={`${inputBase} pl-10`}
                        {...focusStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Email Address <span style={{ color: '#9B097A' }}>*</span>
                    </label>
                    <div className="relative">
                      <Mail
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300"
                      />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        placeholder="jane@example.com"
                        className={`${inputBase} pl-10`}
                        {...focusStyle}
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Phone Number <span style={{ color: '#9B097A' }}>*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300"
                    />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      placeholder="07700 900000"
                      className={`${inputBase} pl-10`}
                      {...focusStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Additional Notes
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={15}
                      className="absolute left-3.5 top-3.5 text-gray-300"
                    />
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      placeholder="Anything you would like us to know before the consultation..."
                      rows={4}
                      className={`${inputBase} pl-10 resize-none leading-relaxed`}
                      {...focusStyle}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="btn-outline flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <button
                  onClick={() => {
                    if (!form.name || !form.email || !form.phone) {
                      setErrorMsg(
                        'Please fill in your name, email and phone number.',
                      )
                      return
                    }
                    setErrorMsg('')
                    setStep(4)
                  }}
                  className="btn-primary"
                >
                  Review Booking
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 4: Confirm ── */}
          {step === 4 && status !== 'success' && (
            <div>
              <h2
                className="text-2xl font-black text-gray-900 mb-2"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Review & Confirm
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Please review your booking details before submitting.
              </p>

              {errorMsg && (
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-lg mb-5 text-sm"
                  style={{
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    color: '#dc2626',
                  }}
                >
                  <AlertCircle size={15} />
                  {errorMsg}
                </div>
              )}

              {/* Summary card */}
              <div
                className="bg-white rounded-2xl overflow-hidden mb-6"
                style={{ border: '1px solid rgba(155,9,122,0.08)' }}
              >
                {/* Service header */}
                <div
                  className="px-7 py-5 flex items-center gap-4"
                  style={{ background: '#eaf3f4' }}
                >
                  {selectedService && (
                    <>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: selectedService.color }}
                      >
                        <selectedService.icon
                          size={22}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <p
                          className="font-black text-gray-900 text-base"
                          style={{ fontFamily: 'Merriweather, serif' }}
                        >
                          {selectedService.title}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock size={11} />
                            {selectedService.duration}
                          </span>
                          <span
                            className="text-sm font-black"
                            style={{ color: selectedService.color }}
                          >
                            {selectedService.price}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Details */}
                <div className="px-7 py-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Date', value: selectedDate, icon: Calendar },
                      { label: 'Time', value: selectedTime, icon: Clock },
                      { label: 'Name', value: form.name, icon: User },
                      { label: 'Email', value: form.email, icon: Mail },
                      { label: 'Phone', value: form.phone, icon: Phone },
                    ].map(({ label, value, icon: Icon }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: '#eaf3f4' }}
                        >
                          <Icon size={13} style={{ color: '#9B097A' }} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-medium">
                            {label}
                          </p>
                          <p className="text-sm font-semibold text-gray-900">
                            {value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {form.message && (
                    <div
                      className="mt-4 p-4 rounded-lg"
                      style={{ background: '#f5f9fa' }}
                    >
                      <p className="text-xs text-gray-400 font-medium mb-1">
                        Notes
                      </p>
                      <p className="text-sm text-gray-600">{form.message}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment notice */}
              <div
                className="px-5 py-4 rounded-xl mb-6 flex items-start gap-3"
                style={{
                  background: '#fffbeb',
                  border: '1px solid #fde68a',
                }}
              >
                <AlertCircle
                  size={16}
                  style={{ color: '#d97706', flexShrink: 0, marginTop: 2 }}
                />
                <p className="text-sm text-amber-800 leading-relaxed">
                  <strong>Payment Note:</strong> After submitting this request,
                  a member of our team will contact you via WhatsApp and email
                  to confirm your booking and arrange payment. The{' '}
                  <strong>{selectedService?.price}</strong> consultation fee is
                  payable upon confirmation.
                </p>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => setStep(3)}
                  className="btn-outline flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="btn-primary"
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Submit Booking Request
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* ── SUCCESS ── */}
          {status === 'success' && (
            <div className="text-center py-10">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: '#eaf3f4' }}
              >
                <CheckCircle size={36} style={{ color: '#9B097A' }} />
              </div>
              <h2
                className="text-3xl font-black text-gray-900 mb-3"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Booking Request Sent!
              </h2>
              <p className="text-gray-500 leading-relaxed mb-3 max-w-md mx-auto">
                Thank you <strong>{form.name}</strong>. Your request for a{' '}
                <strong style={{ color: '#9B097A' }}>
                  {selectedService?.title}
                </strong>{' '}
                consultation on <strong>{selectedDate}</strong> at{' '}
                <strong>{selectedTime}</strong> has been received.
              </p>
              <p className="text-gray-500 text-sm mb-10 max-w-md mx-auto">
                A member of our team will contact you within one business day to
                confirm your booking and arrange payment.
              </p>

              {/* WhatsApp CTA */}
              <div
                className="max-w-md mx-auto rounded-2xl p-6 mb-8"
                style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                }}
              >
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Want a faster response?
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Send us a WhatsApp message with your booking details and we
                  will confirm even sooner.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: '#25D366' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send WhatsApp Message
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/" className="btn-outline">
                  Back to Home
                </Link>
                <Link href="/services" className="btn-primary">
                  Explore Our Services
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
