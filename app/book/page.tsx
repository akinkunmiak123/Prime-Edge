import type { Metadata } from 'next'
import { CheckCircle, Clock, Phone, Mail, MessageSquare } from 'lucide-react'
import BookingForm from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call',
  description:
    'Request a free, no-obligation discovery call with Prime Edge Chartered Certified Accountants. Tell us about your business and we will be in touch within one business day.',
}

export default function BookingPage() {
  return (
    <>
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #2D6198 0%, #1E4A73 50%, #0d0d0d 100%)',
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"
          style={{ background: '#59A2AF' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8" style={{ background: '#59A2AF' }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                Book a Free Discovery Call
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-4"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Let's Talk About Your Business
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              Tell us a little about your business below and we will be in touch
              within one business day to arrange a free, no-obligation discovery
              call.
            </p>
          </div>

          {/* Hero image */}
          <div className="hidden lg:flex items-center justify-center absolute right-8 top-1/2 -translate-y-1/2 xl:right-16">
            <div
              className="relative w-72 h-72 xl:w-80 xl:h-80"
              style={{
                borderRadius: '50% 45% 55% 50% / 45% 55% 45% 55%',
                overflow: 'hidden',
                border: '3px solid rgba(255,255,255,0.15)',
                boxShadow:
                  '0 0 60px rgba(89,162,175,0.3), 0 0 120px rgba(45,97,152,0.2)',
              }}
            >
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(45,97,152,0.15) 0%, rgba(89,162,175,0.1) 100%)',
                }}
              />
              <img
                src="/Book-A-Session.avif"
                alt="Book a consultation with Prime Edge"
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
                  <CheckCircle size={14} style={{ color: '#2D6198' }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Free Discovery Call
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
          QUICK CONTACT CARD
      ════════════════════════════════ */}
      <div style={{ background: '#f5f9fa' }} className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl bg-white shadow-md overflow-hidden"
            style={{ border: '1px solid rgba(45,97,152,0.08)' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              <a
                href="tel:01244565227"
                className="flex items-center gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#2D6198' }}
                >
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Prefer to Call?
                  </p>
                  <p className="font-bold text-gray-900 text-sm">
                    01244 565 227
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/447570229041?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20discovery%20call."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#25D366' }}
                >
                  <MessageSquare size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Quicker Reply
                  </p>
                  <p className="font-bold text-gray-900 text-sm">
                    Message on WhatsApp
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@primeedgeaccountants.co.uk"
                className="flex items-center gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#59A2AF' }}
                >
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Or Email Us
                  </p>
                  <p className="font-bold text-gray-900 text-sm break-all">
                    info@primeedgeaccountants.co.uk
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          FORM
      ════════════════════════════════ */}
      <section className="pb-16 lg:pb-24" style={{ background: '#f5f9fa' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-label">Get Started</span>
            <div className="purple-rule mx-auto" />
            <h2
              className="text-3xl font-black text-gray-900 mb-3"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Tell Us About Your Business
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
              Fill in the form below and a member of our team will be in touch
              within one business day to arrange your free, no obligation
              discovery call.
            </p>
          </div>

          <div
            className="bg-white rounded-2xl p-7 sm:p-9"
            style={{ border: '1px solid rgba(45,97,152,0.08)' }}
          >
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  )
}
