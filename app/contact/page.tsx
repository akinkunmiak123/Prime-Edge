import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Prime Edge Chartered Certified Accountants. Drop us a WhatsApp, send an email, or book a free discovery call — we respond fast.',
}
const message = encodeURIComponent(
  "Hi, I'd like to find out more about your services and get a free quote.",
)


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
    icon: MessageSquare,
    label: 'WhatsApp',
    value: 'Message us on WhatsApp',
    href: 'https://wa.me/447570229041?text=Hi%2C%20I%27d%20like%20to%20find%20out%20more%20about%20your%20services.',
    description: 'Quickest way to reach us',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 1 Business Day',
    href: null,
    description: 'Mon – Fri, 9:00am – 5:30pm',
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
            'linear-gradient(135deg, #2D6198 0%, #1E4A73 50%, #0d0d0d 100%)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"
          style={{ background: '#59A2AF' }}
        />
        <div
          className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 -translate-x-1/2 translate-y-1/2"
          style={{ background: '#2D6198' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8" style={{ background: '#59A2AF' }} />
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
              call or drop us a message below.
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
                  '0 0 60px rgba(89,162,175,0.3), 0 0 120px rgba(45,97,152,0.2)',
              }}
            >
              {/* Overlay tint */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(45,97,152,0.15) 0%, rgba(89,162,175,0.1) 100%)',
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
                  style={{ background: '#eaf3f4' }}
                >
                  <Phone size={14} style={{ color: '#2D6198' }} />
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
                  style={{ background: '#eaf3f4' }}
                >
                  <Clock size={14} style={{ color: '#2D6198' }} />
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
    QUICK CONTACT STRIP
════════════════════════════════ */}
      <section className="py-6 border-b border-gray-100 bg-white sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm font-medium">
              In a hurry? Reach us instantly to get a free quote:
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href="https://wa.me/447570229041?text=Hi%2C%20I%27d%20like%20to%20find%20out%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: '#25D366' }}
              >
                {/* WhatsApp icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="mailto:info@primeedgeaccountants.co.uk"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: '#eaf3f4', color: '#2D6198' }}
              >
                <Mail size={15} />
                Send an Email
              </a>
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
                    style={{ background: '#eaf3f4' }}
                  >
                    <Icon size={18} style={{ color: '#2D6198' }} />
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

      {/*Location here*/}

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
                      background: '#f5f9fa',
                      border: '1px solid rgba(45,97,152,0.08)',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: '#2D6198' }}
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
            'linear-gradient(135deg, #2D6198 0%, #1E4A73 50%, #0d0d0d 100%)',
        }}
      >
        <div
          className="absolute right-0 top-0 w-80 h-80 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"
          style={{ background: '#59A2AF' }}
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
            <a
              href={`https://wa.me/447570229041?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white text-base px-8 py-4"
            >
              WhatsApp Us Now
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