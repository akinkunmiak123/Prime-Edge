import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Prime Edge Chartered Certified Accountants. Book a free discovery call, send us a message, or visit us in Cheltenham.',
}

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '01244 565 227',
    href: 'tel:01244565227',
    description: 'Mon – Fri, 9am – 5:30pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@primeedgeaccountants.co.uk',
    href: 'mailto:info@primeedgeaccountants.co.uk',
    description: 'We reply within one business day',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '62,Symphony Road,Cheltenham GL51 6GJ',
    href: null,
    description: 'Serving clients across England & Wales',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri: 9:00am – 5:30pm',
    href: null,
    description: 'Saturday by appointment only',
  },
]

const faqs = [
  {
    q: 'How quickly can you take me on as a client?',
    a: 'In most cases we can onboard new clients within a week. Book a discovery call and we will walk you through the process.',
  },
  {
    q: 'Do I need to visit your office in person?',
    a: 'No. We work with clients across the UK remotely. Everything can be handled online, by phone, or via video call.',
  },
  {
    q: 'What information do I need to bring to my first call?',
    a: 'Nothing formal — just a general idea of your business, your current challenges, and what you are hoping we can help with.',
  },
  {
    q: 'Do you charge for the initial consultation?',
    a: 'No. Your first discovery call is completely free and carries no obligation. It is simply a conversation.',
  },
  {
    q: 'Can you take over from my existing accountant?',
    a: 'Absolutely. We handle the transition process on your behalf and liaise directly with your previous accountant to ensure continuity.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ════════════════════════════════
          PAGE HERO
      ════════════════════════════════ */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #6f068d 0%, #520568 50%, #0d0d0d 100%)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"
          style={{ background: '#748ec4' }}
        />
        <div
          className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 -translate-x-1/2 translate-y-1/2"
          style={{ background: '#170df2' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8" style={{ background: '#748ec4' }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                Get In Touch
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-5"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Let&apos;s Start the Conversation
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              Whether you are ready to switch accountants, just starting out, or
              simply want some advice — we would love to hear from you. Book a
              free call or drop us a message below.
            </p>
          </div>

          {/* Hero image */}
          <div className="hidden lg:flex items-center justify-center absolute right-8 top-1/2 -translate-y-1/2 xl:right-16">
            <div
              className="relative w-72 h-72 xl:w-80 xl:h-80"
              style={{
                borderRadius: '45% 55% 50% 50% / 55% 50% 50% 45%',
                overflow: 'hidden',
                border: '3px solid rgba(255,255,255,0.15)',
                boxShadow:
                  '0 0 60px rgba(116,142,196,0.3), 0 0 120px rgba(111,6,141,0.2)',
              }}
            >
              {/* Overlay tint */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(111,6,141,0.15) 0%, rgba(23,13,242,0.1) 100%)',
                }}
              />
              <img
                src="/contact.avif"
                alt="Contact Prime Edge Accountants"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge 1 */}
            <div
              className="absolute -bottom-4 -left-6 px-4 py-3 rounded-xl shadow-lg z-20"
              style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: '#f0eef8' }}
                >
                  <Phone size={14} style={{ color: '#6f068d' }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Free Consultation
                  </p>
                  <p className="text-xs text-gray-400">No Obligation</p>
                </div>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div
              className="absolute -top-4 -right-4 px-4 py-3 rounded-xl shadow-lg z-20"
              style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: '#f0eef8' }}
                >
                  <Clock size={14} style={{ color: '#6f068d' }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Quick Response
                  </p>
                  <p className="text-xs text-gray-400">Within 1 Business Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CONTACT DETAILS ROW
      ════════════════════════════════ */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 rounded-xl service-card bg-white"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: '#f0eef8' }}
                  >
                    <Icon size={18} style={{ color: '#6f068d' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-gray-900 text-sm hover:text-primary transition-colors block mb-0.5 break-all"
                        style={{ color: '#0d0d0d' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-900 text-sm mb-0.5">
                        {item.value}
                      </p>
                    )}
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          LOCATION MAP
      ════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="section-label">Find Us</span>
              <div className="purple-rule" />
              <h2
                className="text-3xl sm:text-4xl font-black text-gray-900"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Our Location
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=62+Symphony+Road+Cheltenham+GL51+6GJ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-shrink-0"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>

          {/* Map + address card */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map embed */}
            <div
              className="lg:col-span-2 rounded-2xl overflow-hidden shadow-sm"
              style={{
                border: '1px solid rgba(111,6,141,0.08)',
                height: '420px',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.1!2d-2.0823!3d51.8994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s62%20Symphony%20Road%2C%20Cheltenham%2C%20GL51%206GJ!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'hue-rotate(240deg) saturate(0.7) brightness(0.95)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prime Edge Accountants location"
              />
            </div>

            {/* Address card */}
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div
                className="rounded-2xl p-7 flex-1"
                style={{
                  background:
                    'linear-gradient(135deg, #6f068d 0%, #520568 100%)',
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.15)' }}
                  >
                    <MapPin size={18} className="text-white" />
                  </div>
                  <h3
                    className="font-bold text-white text-base"
                    style={{ fontFamily: 'Merriweather, serif' }}
                  >
                    Office Address
                  </h3>
                </div>

                <div className="space-y-1 mb-6">
                  <p className="text-white font-semibold text-sm">
                    Prime Edge Accountants
                  </p>
                  <p className="text-white/70 text-sm">62 Symphony Road</p>
                  <p className="text-white/70 text-sm">Cheltenham</p>
                  <p className="text-white/70 text-sm">GL51 6GJ</p>
                  <p className="text-white/70 text-sm">England</p>
                </div>

                <div
                  className="h-px w-full mb-5"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                />

                {/* Contact details */}
                <div className="space-y-3">
                  <a
                    href="tel:01244565227"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <Phone
                      size={14}
                      className="flex-shrink-0"
                      style={{ color: '#748ec4' }}
                    />
                    01244 565 227
                  </a>
                  <a
                    href="mailto:info@primeedgeaccountants.co.uk"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <Mail
                      size={14}
                      className="flex-shrink-0"
                      style={{ color: '#748ec4' }}
                    />
                    info@primeedgeaccountants.co.uk
                  </a>
                </div>
              </div>

              {/* Hours card */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: '#f8f7ff',
                  border: '1px solid rgba(111,6,141,0.08)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: '#f0eef8' }}
                  >
                    <Clock size={16} style={{ color: '#6f068d' }} />
                  </div>
                  <h3
                    className="font-bold text-gray-900 text-sm"
                    style={{ fontFamily: 'Merriweather, serif' }}
                  >
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  {[
                    { day: 'Monday – Friday', hours: '9:00am – 5:30pm' },
                    { day: 'Saturday', hours: 'By appointment only' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((row) => (
                    <div
                      key={row.day}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-gray-500 font-medium">
                        {row.day}
                      </span>
                      <span
                        className="font-semibold"
                        style={{
                          color: row.hours === 'Closed' ? '#9ca3af' : '#6f068d',
                        }}
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CONTACT FORM + FAQ
      ════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              <span className="section-label">Send a Message</span>
              <div className="purple-rule" />
              <h2
                className="text-3xl font-black text-gray-900 mb-3"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Prefer to Write to Us?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Fill in the form below and a member of our team will be in touch
                within one business day.
              </p>

              <ContactForm />
            </div>

            {/* FAQ */}
            <div>
              <span className="section-label">FAQs</span>
              <div className="purple-rule" />
              <h2
                className="text-3xl font-black text-gray-900 mb-8"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Common Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-xl p-5"
                    style={{
                      background: '#f8f7ff',
                      border: '1px solid rgba(111,6,141,0.08)',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: '#6f068d' }}
                      >
                        <MessageSquare size={11} className="text-white" />
                      </div>
                      <div>
                        <p
                          className="font-bold text-gray-900 text-sm mb-1.5"
                          style={{ fontFamily: 'Merriweather, serif' }}
                        >
                          {faq.q}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          BOTTOM CTA
      ════════════════════════════════ */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #6f068d 0%, #520568 50%, #0d0d0d 100%)',
        }}
      >
        <div
          className="absolute right-0 top-0 w-80 h-80 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"
          style={{ background: '#748ec4' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className="text-3xl sm:text-4xl font-black text-white mb-4"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            We Are Ready When You Are
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            No pressure. No commitment. Just an honest conversation about your
            finances and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:01244565227" className="btn-white text-base px-8 py-4">
              <Phone size={18} />
              Call 01244 565 227
            </a>
            <a
              href="mailto:info@primeedgeaccountants.co.uk"
              className="btn-outline text-base px-8 py-4"
              style={{
                borderColor: 'rgba(255,255,255,0.4)',
                color: 'white',
              }}
            >
              <Mail size={18} />
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ════════════════════════════════
    CONTACT FORM — client component
════════════════════════════════ */
function ContactForm() {
  return <ContactFormClient />
}

import ContactFormClient from '@/components/ContactForm'
