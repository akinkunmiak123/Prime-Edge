import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen,
  FileText,
  Users,
  TrendingUp,
  Receipt,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore the full range of accounting and financial services offered by Prime Edge — from bookkeeping and payroll to tax planning and business advisory.',
}

/* ── Data ── */
const services = [
  {
    id: 'bookkeeping',
    icon: BookOpen,
    title: 'Bookkeeping',
    tagline: 'Clear records. Confident decisions.',
    description:
      'Accurate bookkeeping is the foundation of a healthy business. We maintain up-to-date, organised financial records that give you a real-time picture of your business performance — so you always know where you stand.',
    points: [
      'Monthly or quarterly bookkeeping packages',
      'Bank reconciliation and transaction categorisation',
      'Cloud accounting setup (Xero, QuickBooks, Sage)',
      'Management accounts and financial reporting',
      'VAT-ready records for seamless filing',
    ],
    accent: '#6f068d',
  },
  {
    id: 'accounts',
    icon: FileText,
    title: 'Account Preparation & Filing',
    tagline: 'Compliant, accurate, always on time.',
    description:
      'We prepare your annual statutory accounts in full compliance with UK accounting standards and file them with Companies House and HMRC before every deadline — so you never face a late filing penalty.',
    points: [
      'Statutory accounts for limited companies and LLPs',
      'Self-assessment tax returns for sole traders',
      'Partnership accounts and returns',
      'Companies House and HMRC filing included',
      'Director loan account reconciliation',
    ],
    accent: '#170df2',
  },
  {
    id: 'payroll',
    icon: Users,
    title: 'Payroll Services',
    tagline: 'Your team paid right, every time.',
    description:
      'Managing payroll is time-consuming and full of compliance risk. We run your entire payroll function — from calculating wages and deductions to submitting RTI reports to HMRC — so your team is always paid correctly and on time.',
    points: [
      'Weekly, fortnightly, or monthly payroll runs',
      'PAYE, National Insurance and pension calculations',
      'Real Time Information (RTI) submissions to HMRC',
      'Auto-enrolment pension administration',
      'P60s, P45s and payslip preparation',
    ],
    accent: '#748ec4',
  },
  {
    id: 'tax',
    icon: TrendingUp,
    title: 'Tax Planning & Filing',
    tagline: 'Pay less. Stay compliant. Plan ahead.',
    description:
      'Reactive tax returns are not enough. We take a proactive approach to your tax position — identifying legitimate reliefs, planning ahead, and ensuring you never pay a penny more tax than you are legally required to.',
    points: [
      'Corporation tax planning and filing',
      'Personal self-assessment tax returns',
      'Capital gains tax advice and planning',
      'R&D tax relief claims',
      'HMRC enquiry support and representation',
    ],
    accent: '#6f068d',
  },
  {
    id: 'vat',
    icon: Receipt,
    title: 'VAT Registration & Filing',
    tagline: 'Registered, compliant, penalty-free.',
    description:
      'Whether you are registering for VAT for the first time or need your ongoing returns managed, we handle everything. We also advise on the most suitable VAT scheme for your business to minimise your liability.',
    points: [
      'VAT registration with HMRC',
      'Quarterly VAT return preparation and submission',
      'Advice on VAT schemes (Flat Rate, Cash Accounting)',
      'Making Tax Digital (MTD) compliant filing',
      'VAT investigation support',
    ],
    accent: '#170df2',
  },
  {
    id: 'advisory',
    icon: Briefcase,
    title: 'Business Advisory',
    tagline: 'Strategy, clarity and direction.',
    description:
      'Beyond compliance, we act as a strategic partner to your business. Whether you are starting out, looking to scale, planning a sale, or navigating a difficult period — we provide the financial insight and commercial advice you need to move forward with confidence.',
    points: [
      'Business start-up advice and structure planning',
      'Cash flow forecasting and management',
      'Budgeting and financial modelling',
      'Business growth and scaling strategy',
      'Company formation and registered office services',
    ],
    accent: '#748ec4',
  },
]

/* ── Page ── */
export default function ServicesPage() {
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
        {/* Decorative circles */}
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
                What We Offer
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-5"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Our Services
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              A comprehensive range of accounting, tax, and advisory services
              designed to support your business at every stage of its journey.
            </p>

            {/* Jump links */}
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-xs font-medium px-4 py-2 rounded-full transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SERVICE SECTIONS
      ════════════════════════════════ */}
      <div className="bg-white">
        {services.map((service, index) => {
          const Icon = service.icon
          const isEven = index % 2 === 0

          return (
            <section
              key={service.id}
              id={service.id}
              className="py-16 lg:py-24 border-b border-gray-100 scroll-mt-24"
              style={{ background: isEven ? '#ffffff' : '#f8f7ff' }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid lg:grid-cols-2 gap-14 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Text column */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    {/* Icon + label */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: '#f0eef8' }}
                      >
                        <Icon size={22} style={{ color: service.accent }} />
                      </div>
                      <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: service.accent }}
                      >
                        {service.tagline}
                      </span>
                    </div>

                    <h2
                      className="text-3xl sm:text-4xl font-black text-gray-900 mb-4"
                      style={{ fontFamily: 'Merriweather, serif' }}
                    >
                      {service.title}
                    </h2>

                    <p className="text-gray-500 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Points */}
                    <ul className="space-y-3 mb-8">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <CheckCircle
                            size={16}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: service.accent }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="btn-primary">
                      Enquire About This Service
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Visual column */}
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div
                      className="rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-72 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${service.accent}18 0%, ${service.accent}08 100%)`,
                        border: `1px solid ${service.accent}20`,
                      }}
                    >
                      {/* Large background icon */}
                      <Icon
                        size={120}
                        className="opacity-5 absolute"
                        style={{ color: service.accent }}
                      />
                      {/* Foreground icon */}
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 relative z-10"
                        style={{ background: `${service.accent}15` }}
                      >
                        <Icon size={36} style={{ color: service.accent }} />
                      </div>
                      <h3
                        className="font-black text-xl text-gray-900 mb-2 relative z-10"
                        style={{ fontFamily: 'Merriweather, serif' }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-sm font-medium relative z-10"
                        style={{ color: service.accent }}
                      >
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* ════════════════════════════════
          BOTTOM CTA
      ════════════════════════════════ */}
      <section
        className="py-20 relative overflow-hidden"
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
            className="text-3xl sm:text-4xl font-black text-white mb-5"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free discovery call and we will assess your situation and
            recommend exactly the right support for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white text-base px-8 py-4">
              <Calendar size={18} />
              Book Free Discovery Call
            </Link>
            <a
              href="tel:01244565227"
              className="btn-outline text-base px-8 py-4"
              style={{
                borderColor: 'rgba(255,255,255,0.4)',
                color: 'white',
              }}
            >
              <Phone size={18} />
              Call 01244 565 227
            </a>
          </div>
        </div>
      </section>
    </>
  )
}