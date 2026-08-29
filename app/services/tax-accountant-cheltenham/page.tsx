import type { Metadata } from 'next'
import Link from 'next/link'
import {
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  ShieldCheck,
  PiggyBank,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tax Accountant Cheltenham | Prime Edge Accountants',
  description:
    'Proactive tax planning and filing for individuals and businesses in Cheltenham. Corporation tax, self-assessment, capital gains and HMRC support from a local accountant.',
  alternates: {
    canonical:
      'https://primeedgeaccountants.co.uk/services/tax-accountant-cheltenham',
  },
}

/* ── JSON-LD structured data ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tax Planning and Filing',
  serviceType: 'Tax Accountant',
  provider: {
    '@type': 'AccountingService',
    name: 'Prime Edge Accountants',
    url: 'https://primeedgeaccountants.co.uk',
    telephone: '01244565227',
  },
  areaServed: [
    { '@type': 'City', name: 'Cheltenham' },
    { '@type': 'AdministrativeArea', name: 'Gloucestershire' },
  ],
  description:
    'Proactive tax planning and filing for individuals and businesses in Cheltenham, covering corporation tax, self-assessment, capital gains tax and HMRC support.',
}

const included = [
  'Corporation tax planning and filing',
  'Personal self-assessment tax returns',
  'Capital gains tax advice and planning',
  'R&D tax relief claims',
  'HMRC enquiry support and representation',
  'Tax-efficient business structuring advice',
]

const whoFor = [
  {
    title: 'Limited companies',
    text: 'Reduce your corporation tax bill legitimately with proactive planning throughout the year, not just at filing time.',
  },
  {
    title: 'Sole traders & landlords',
    text: 'Get your self-assessment filed accurately with every allowable expense and relief claimed.',
  },
  {
    title: 'Business owners selling or investing',
    text: 'Plan ahead for capital gains tax before a sale or disposal, not after.',
  },
]

const faqs = [
  {
    q: 'How much does a tax accountant cost in Cheltenham?',
    a: 'Fees depend on whether you need personal self-assessment, corporation tax, or ongoing planning support. Get in touch for a fixed quote based on your circumstances.',
  },
  {
    q: 'Can you help if HMRC has opened an enquiry into my tax return?',
    a: 'Yes, we provide support and representation throughout HMRC enquiries, from initial correspondence through to resolution.',
  },
  {
    q: 'Is tax planning only for large businesses?',
    a: 'No — sole traders, contractors and small limited companies all benefit from proactive planning, particularly around allowable expenses, timing of income, and available reliefs.',
  },
]

export default function TaxAccountantCheltenhamPage() {
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
                Cheltenham &amp; Gloucestershire
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-5"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Tax Accountant in Cheltenham
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Proactive tax planning and filing for individuals and businesses
              in Cheltenham — so you never pay more tax than you're legally
              required to.
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
            Tax Planning, Not Just Tax Filing
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            A reactive tax return filed once a year is not enough to keep your
            tax bill down. Prime Edge Accountants works with individuals and
            businesses across Cheltenham and Gloucestershire to plan ahead,
            identify legitimate reliefs, and ensure your tax position is managed
            throughout the year — not just at the deadline.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Whether you need a personal self-assessment return filed accurately
            or ongoing corporation tax planning for your business, we tailor our
            approach to your specific situation.
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
              <TrendingUp size={22} style={{ color: '#2D6198' }} />
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
            Built for Businesses Like Yours
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
            <PiggyBank
              size={28}
              style={{ color: '#2D6198' }}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                Proactive, Not Reactive
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We plan your tax position throughout the year so there are no
                surprises, and no missed reliefs, at filing time.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <ShieldCheck
              size={28}
              style={{ color: '#2D6198' }}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                HMRC Support Included
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                If HMRC ever queries your return, we handle the correspondence
                and represent you throughout.
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
              href="/services/bookkeeping-cheltenham"
              className="rounded-2xl p-6 flex items-center justify-between group transition-all"
              style={{ background: '#f5f9fa', border: '1px solid #2D619820' }}
            >
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Bookkeeping in Cheltenham
                </h3>
                <p className="text-sm text-gray-500">
                  Accurate records make tax planning far more effective.
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
                  Tax planning as part of a complete finance function.
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
            Ready to Get Ahead of Your Tax Position?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a discovery call and we'll assess your situation and identify
            the reliefs and planning opportunities available to you.
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
