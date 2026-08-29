import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  RefreshCcw,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bookkeeper in Cheltenham | Prime Edge Accountants',
  description:
    'Professional bookkeeping services for Cheltenham businesses. Accurate, up-to-date records with cloud accounting on Xero, Sage and FreeAgent — so you always know where you stand.',
  alternates: {
    canonical:
      'https://primeedgeaccountants.co.uk/services/bookkeeping-cheltenham',
  },
}

/* ── JSON-LD structured data ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bookkeeping Services',
  serviceType: 'Bookkeeping',
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
    'Accurate, up-to-date bookkeeping for small and medium-sized businesses in Cheltenham, using cloud accounting software including Xero, Sage and FreeAgent.',
}

const included = [
  'Monthly or quarterly bookkeeping packages',
  'Bank reconciliation and transaction categorisation',
  'Cloud accounting setup (Xero, Sage and FreeAgent)',
  'Management accounts and financial reporting',
  'VAT-ready records for seamless filing',
  'Ongoing support and query handling',
]

const whoFor = [
  {
    title: 'Sole traders',
    text: 'Keep clean records without spending your evenings on spreadsheets.',
  },
  {
    title: 'Small businesses',
    text: 'Get monthly management accounts so you can make decisions with real numbers, not guesswork.',
  },
  {
    title: 'Growing companies',
    text: 'Move off spreadsheets and onto cloud accounting as your transaction volume grows.',
  },
]

const faqs = [
  {
    q: 'How much does bookkeeping cost for a small business in Cheltenham?',
    a: 'Cost depends on transaction volume and how often you need records updated. Most clients pay a fixed monthly fee — get in touch for a quote based on your business.',
  },
  {
    q: 'Which accounting software do you use?',
    a: 'We work with Xero, Sage and FreeAgent, and can recommend the best fit if you are not yet using cloud accounting software.',
  },
  {
    q: 'Can you take over bookkeeping mid-year from another provider?',
    a: 'Yes, we regularly take over bookkeeping partway through a financial year and handle the migration of your existing records.',
  },
]

export default function BookkeepingCheltenhamPage() {
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
              Bookkeeping Services in Cheltenham
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Clear, accurate, up-to-date books for Cheltenham businesses — so
              you always know exactly where your business stands financially.
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
            The Foundation of a Healthy Business
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Accurate bookkeeping is the foundation everything else in your
            business relies on — from VAT filing to tax planning to knowing
            whether you can afford to hire. Prime Edge Accountants provides
            bookkeeping services to businesses across Cheltenham and
            Gloucestershire, keeping your records organised and current using
            cloud accounting software.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Whether you are a sole trader keeping things simple or a growing
            company that needs monthly management accounts, we tailor the
            service to how your business actually operates.
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
              <BookOpen size={22} style={{ color: '#2D6198' }} />
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
            <RefreshCcw
              size={28}
              style={{ color: '#2D6198' }}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                Always Up To Date
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Bank reconciliation and categorisation done on a fixed schedule,
                so your records never fall behind.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <BarChart3
              size={28}
              style={{ color: '#2D6198' }}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                Real Numbers, Real Decisions
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Management accounts give you a clear picture of performance, not
                just a shoebox of receipts at year end.
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
              href="/services/payroll-cheltenham"
              className="rounded-2xl p-6 flex items-center justify-between group transition-all"
              style={{ background: '#f5f9fa', border: '1px solid #2D619820' }}
            >
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Payroll Services Cheltenham
                </h3>
                <p className="text-sm text-gray-500">
                  Pair clean books with fully-managed payroll.
                </p>
              </div>
              <ArrowRight
                size={18}
                className="flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform"
                style={{ color: '#2D6198' }}
              />
            </Link>
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
                  Turn accurate books into proactive tax planning.
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
            Ready for Books That Are Always Up to Date?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a discovery call and we'll set up bookkeeping that gives you
            clarity every month, not just at year end.
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
