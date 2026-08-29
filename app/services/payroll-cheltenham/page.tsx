import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  Clock,
  ShieldCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payroll Services Cheltenham | Prime Edge Accountants',
  description:
    'Reliable, fully-managed payroll services for Cheltenham businesses. PAYE, pensions, RTI submissions and payslips handled accurately and on time, every time.',
  alternates: {
    canonical: 'https://primeedgeaccountants.co.uk/services/payroll-cheltenham',
  },
}

/* ── JSON-LD structured data ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Payroll Services',
  serviceType: 'Payroll Services',
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
    'Fully-managed payroll services for small and medium-sized businesses in Cheltenham, covering PAYE, pensions, RTI submissions and payslips.',
}

const included = [
  'Weekly, fortnightly, or monthly payroll runs',
  'PAYE, National Insurance and pension calculations',
  'Real Time Information (RTI) submissions to HMRC',
  'Auto-enrolment pension administration',
  'P60s, P45s and payslip preparation',
  'New starter and leaver processing',
]

const whoFor = [
  {
    title: 'Small businesses',
    text: 'Hand off payroll entirely so you never miss a submission deadline or pension deduction.',
  },
  {
    title: 'Growing teams',
    text: 'Scale from 1 employee to 50+ without adding admin headcount or software costs.',
  },
  {
    title: 'Directors',
    text: 'Get your own PAYE handled correctly alongside your company payroll.',
  },
]

const faqs = [
  {
    q: 'How much does payroll cost for a small business in Cheltenham?',
    a: 'Pricing is based on the number of employees and pay frequency. Most small businesses pay a fixed monthly fee with no surprises — get in touch for a quote specific to your headcount.',
  },
  {
    q: 'Can you take over payroll mid tax year?',
    a: 'Yes. We regularly onboard clients mid-year and handle the transition, including transferring year-to-date figures so HMRC records stay accurate.',
  },
  {
    q: 'Do you handle auto-enrolment pensions?',
    a: 'Yes, we manage the full pension administration process including assessment, enrolment, and ongoing contributions.',
  },
]

export default function PayrollCheltenhamPage() {
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
              Payroll Services in Cheltenham
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Fully-managed payroll for Cheltenham businesses — wages,
              deductions, pensions, and HMRC submissions handled accurately and
              on time, every pay run.
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
            Local Payroll Support, Without the Admin Burden
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Running payroll in-house is time-consuming and carries real
            compliance risk — miss an RTI submission or get a pension deduction
            wrong and HMRC penalties follow quickly. Prime Edge Accountants runs
            the entire payroll function for businesses across Cheltenham and the
            wider Gloucestershire area, so your team is paid correctly and on
            time, every single month.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Whether you have one employee or fifty, we tailor the payroll run to
            your business and give you a single point of contact for anything
            payroll-related.
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
              <Users size={22} style={{ color: '#2D6198' }} />
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
            <ShieldCheck
              size={28}
              style={{ color: '#2D6198' }}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Fully Compliant</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Every submission goes to HMRC on time, with auto-enrolment
                pensions handled correctly from day one.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock
              size={28}
              style={{ color: '#2D6198' }}
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Always On Time</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Payslips and payments processed to a fixed schedule you can rely
                on, whatever your pay frequency.
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
                  Keep your records accurate alongside your payroll.
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
                  Payroll as part of a complete finance function.
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
            Ready to Hand Off Payroll?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a discovery call and we'll set up payroll that runs smoothly in
            the background, month after month.
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
