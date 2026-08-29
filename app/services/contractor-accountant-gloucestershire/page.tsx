import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Briefcase,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  FileCheck,
  Wallet,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accountant for Contractors Gloucestershire | Prime Edge Accountants',
  description:
    'Specialist accountancy for contractors and freelancers across Gloucestershire — IR35 guidance, limited company set-up, dividends, expenses and tax-efficient planning.',
  alternates: {
    canonical:
      'https://primeedgeaccountants.co.uk/services/contractor-accountant-gloucestershire',
  },
}

/* ── JSON-LD structured data ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Contractor Accounting',
  serviceType: 'Contractor Accountant',
  provider: {
    '@type': 'AccountingService',
    name: 'Prime Edge Accountants',
    url: 'https://primeedgeaccountants.co.uk',
    telephone: '01244565227',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Gloucestershire' },
    { '@type': 'City', name: 'Cheltenham' },
  ],
  description:
    'Specialist accounting for contractors and freelancers across Gloucestershire, covering IR35 status, limited company set-up, dividends, expenses and VAT.',
}

const included = [
  'Limited company formation and set-up',
  'IR35 status guidance and contract review support',
  'Dividend and salary planning for tax efficiency',
  'Allowable expenses and claim maximisation',
  'VAT registration and Flat Rate Scheme advice',
  'Self-assessment and corporation tax filing',
]

const whoFor = [
  {
    title: 'New contractors',
    text: 'Get your limited company set up correctly and understand IR35 before you take on your first contract.',
  },
  {
    title: 'Established contractors',
    text: 'Keep more of what you earn with proper dividend and salary planning, and never miss a filing deadline.',
  },
  {
    title: 'Contractors working across sites',
    text: 'Based in Gloucestershire but working further afield — we handle everything remotely, so location is never a barrier.',
  },
]

const faqs = [
  {
    q: 'Do I need a limited company as a contractor?',
    a: 'Most contractors operate through a limited company for tax efficiency, though the right structure depends on your day rate, IR35 status and circumstances. We can advise on what suits you.',
  },
  {
    q: 'Can you help me understand my IR35 status?',
    a: 'Yes, we review your contract and working arrangements against IR35 criteria and advise on the implications for how you should be paid.',
  },
  {
    q: 'What expenses can contractors claim?',
    a: 'This depends on your IR35 status and how you operate, but commonly includes travel, accommodation, equipment, professional subscriptions and accountancy fees. We make sure every allowable claim is captured.',
  },
]

export default function ContractorAccountantGloucestershirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ════════════════════════════════
          HERO
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={14} style={{ color: '#59A2AF' }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                Gloucestershire &amp; Cheltenham
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-5"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Accountant for Contractors in Gloucestershire
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Specialist accounting for contractors and freelancers — IR35
              guidance, limited company set-up, and tax-efficient planning so
              you keep more of what you earn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="btn-white text-base px-8 py-4">
                <Calendar size={18} />
                Book A Discovery Call
              </Link>
              <a
                href="tel:01244565227"
                className="btn-outline text-base px-8 py-4"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
              >
                <Phone size={18} />
                Call 01244 565 227
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          INTRO
      ════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-black text-gray-900 mb-5"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Accounting That Understands Contracting
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Contracting comes with its own set of financial questions that a
            generalist accountant doesn't always deal with day to day — IR35
            status, dividend versus salary decisions, and which expenses you can
            genuinely claim. Prime Edge Accountants works with contractors and
            freelancers across Gloucestershire, including Cheltenham, Gloucester
            and the surrounding areas, whatever sector you contract in.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Whether you're taking on your first contract or you've been
            operating through a limited company for years, we make sure your
            set-up is efficient and compliant.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════
          WHAT'S INCLUDED
      ════════════════════════════════ */}
      <section className="py-16 lg:py-20" style={{ background: '#f5f9fa' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: '#eaf3f4' }}
            >
              <Briefcase size={22} style={{ color: '#2D6198' }} />
            </div>
            <h2
              className="text-2xl sm:text-3xl font-black text-gray-900"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              What's Included
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {included.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm text-gray-600 bg-white rounded-xl p-4"
                style={{ border: '1px solid #2D619820' }}
              >
                <CheckCircle
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: '#2D6198' }}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════
          WHO IT'S FOR
      ════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-black text-gray-900 mb-10 text-center"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Built for Contractors Like You
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {whoFor.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6"
                style={{ background: '#f5f9fa', border: '1px solid #2D619815' }}
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          WHY PRIME EDGE
      ════════════════════════════════ */}
      <section className="py-16 lg:py-20" style={{ background: '#f5f9fa' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <FileCheck
              size={28}
              style={{ color: '#2D6198' }}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">IR35 Confidence</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Clear guidance on your status and what it means for how you
                should be paid, before you sign a contract.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Wallet
              size={28}
              style={{ color: '#2D6198' }}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                Keep More of Your Income
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Dividend and salary planning structured to be tax-efficient
                without cutting corners on compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          FAQ
      ════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-black text-gray-900 mb-8"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Common Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          RELATED SERVICES
      ════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-black text-gray-900 mb-8"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Related Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              href="/services/tax-accountant-cheltenham"
              className="rounded-2xl p-6 flex items-center justify-between group transition-all"
              style={{ background: '#f5f9fa', border: '1px solid #2D619820' }}
            >
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Tax Accountant Cheltenham
                </h3>
                <p className="text-sm text-gray-500">
                  More on self-assessment, dividends and capital gains.
                </p>
              </div>
              <ArrowRight
                size={18}
                className="flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform"
                style={{ color: '#2D6198' }}
              />
            </Link>
            <Link
              href="/services/small-business-accountant-cheltenham"
              className="rounded-2xl p-6 flex items-center justify-between group transition-all"
              style={{ background: '#f5f9fa', border: '1px solid #2D619820' }}
            >
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Small Business Accountant Cheltenham
                </h3>
                <p className="text-sm text-gray-500">
                  If you're weighing up limited company vs. other structures.
                </p>
              </div>
              <ArrowRight
                size={18}
                className="flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform"
                style={{ color: '#2D6198' }}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          BOTTOM CTA
      ════════════════════════════════ */}
      <section
        className="py-20 relative overflow-hidden"
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
            className="text-3xl sm:text-4xl font-black text-white mb-5"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Ready to Get Your Contracting Set Up Right?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a discovery call and we'll talk through your contract, your
            IR35 position, and how to structure your income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="btn-white text-base px-8 py-4">
              <Calendar size={18} />
              Book A Discovery Call
            </Link>
            <Link
              href="/services"
              className="btn-outline text-base px-8 py-4"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
