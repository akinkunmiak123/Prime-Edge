import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import CalendlyEmbed from '@/components/CalendlyEmbed'

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
    value: 'Cheltenham, Gloucestershire',
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
          <div className="max-w-2xl">
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
              Whether you are ready to switch accountants, just starting out,
              or simply want some advice — we would love to hear from you.
              Book a free call or drop us a message below.
            </p>
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
                        className="font-semibold text-gray-900 text-sm hover:text-primary transition-colors block mb-0.5"
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
          CALENDLY BOOKING
      ════════════════════════════════ */}
      <section className="py-16 lg:py-24" style={{ background: '#f8f7ff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">Free Discovery Call</span>
            <div className="purple-rule mx-auto" />
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-4"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Book a Free Call
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Choose a time that suits you. Our discovery calls are free,
              informal, and carry absolutely no obligation. We will listen to
              your situation and give you honest, practical advice.
            </p>
          </div>

          {/* Calendly embed */}
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-sm"
            style={{ border: '1px solid rgba(111,6,141,0.08)' }}
          >
            <CalendlyEmbed url="https://calendly.com/tetisimiak" />
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
                Fill in the form below and a member of our team will be in
                touch within one business day.
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
            No pressure. No commitment. Just an honest conversation about
            your finances and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01244565227"
              className="btn-white text-base px-8 py-4"
            >
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