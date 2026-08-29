import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Rocket,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  LineChart,
  Building2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Startup Accountant Cheltenham | Prime Edge Accountants',
  description:
    'Specialist accounting support for startups in Cheltenham — company formation, tax-efficient structuring, cash flow forecasting and R&D tax relief, from day one.',
  alternates: {
    canonical:
      'https://primeedgeaccountants.co.uk/services/startup-accountant-cheltenham',
  },
}

/* ── JSON-LD structured data ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Startup Accounting',
  serviceType: 'Startup Accountant',
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
    'Accounting support for startups and newly formed businesses in Cheltenham, covering company formation, tax-efficient structuring, cash flow forecasting and R&D tax relief.',
}

const included = [
  'Company formation and structure advice',
  'Tax-efficient set-up from day one',
  'Cash flow forecasting and financial modelling',
  'R&D tax relief claims',
  'VAT and PAYE registration',
  'Ongoing advisory as you raise funding or scale',
]

const whoFor = [
  {
    title: 'First-time founders',
    text: 'Get the company structure, registrations and bookkeeping set up correctly the first time, without the guesswork.',
  },
  {
    title: 'Bootstrapped startups',
    text: 'Keep a tight handle on cash flow with forecasting that shows you exactly how long your runway lasts.',
  },
  {
    title: 'Funded or scaling startups',
    text: 'Get investor-ready financials and support claiming R&D tax relief where eligible.',
  },
]

const faqs = [
  {
    q: 'When should a startup get an accountant?',
    a: 'Ideally before incorporating — getting the company structure and initial registrations right from the outset avoids costly corrections later. If you have already incorporated, it is still worth getting set up properly as early as possible.',
  },
  {
    q: 'Do startups qualify for R&D tax relief?',
    a: 'Many do, particularly those developing new products, software or processes. We can assess your eligibility and handle the claim if you qualify.',
  },
  {
    q: 'Can you help with financial forecasts for investors?',
    a: 'Yes, we build cash flow forecasts and financial models that hold up to investor scrutiny, and can support you through due diligence.',
  },
]

export default function StartupAccountantCheltenhamPage() {
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
              Startup Accountant in Cheltenham
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              From company formation to your first funding round — get the
              financial foundations right from day one, with an accountant who
              understands startups.
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
            Financial Foundations Built for Growth
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Startups face financial decisions most established businesses never
            have to think about — how to structure the company for tax
            efficiency, how long the runway lasts, and whether you qualify for
            reliefs like R&D tax credits. Prime Edge Accountants works with
            founders across Cheltenham and Gloucestershire to get these
            foundations right from the outset.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Whether you're pre-incorporation or already trading and looking to
            raise funding, we tailor our support to the stage your business is
            at.
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
              <Rocket size={22} style={{ color: '#2D6198' }} />
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
            Built for Founders Like You
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
            <Building2
              size={28}
              style={{ color: '#2D6198' }}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">
                Set Up Right, First Time
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Company structure, registrations and bookkeeping systems built
                correctly from incorporation, not fixed later.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <LineChart
              size={28}
              style={{ color: '#2D6198' }}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Know Your Runway</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Cash flow forecasts that give you a clear, honest view of how
                long your funding lasts and when to raise more.
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
              href="/services/small-business-accountant-cheltenham"
              className="rounded-2xl p-6 flex items-center justify-between group transition-all"
              style={{ background: '#f5f9fa', border: '1px solid #2D619820' }}
            >
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Small Business Accountant Cheltenham
                </h3>
                <p className="text-sm text-gray-500">
                  As your startup grows into an established business.
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
                  More on R&D relief and tax-efficient structuring.
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
            Ready to Build on Solid Financial Foundations?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a discovery call and we'll walk through where your startup is
            at and what support makes sense right now.
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
