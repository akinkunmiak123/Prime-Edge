import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Shield,
  Award,
  Users,
  TrendingUp,
  Heart,
  Target,
  Lightbulb,
  Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Prime Edge Chartered Certified Accountants — our story, our values, and our commitment to helping UK businesses and individuals thrive financially.',
}

/* ── Data ── */
const values = [
  {
    icon: Heart,
    title: 'Client First',
    description:
      'Every decision we make starts with what is best for our clients. We are not just accountants — we are partners in your financial success.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We operate with complete transparency. No hidden fees, no jargon, no surprises. Just honest, professional advice you can rely on.',
  },
  {
    icon: Lightbulb,
    title: 'Proactive Thinking',
    description:
      'We do not wait for problems to arise. We look ahead, plan ahead, and keep you ahead — identifying opportunities and risks before they reach you.',
  },
  {
    icon: Target,
    title: 'Precision',
    description:
      'Accounting is detail work. We hold ourselves to the highest standards of accuracy and compliance in everything we do.',
  },
]

const credentials = [
  'Chartered Certified Accountants (ACCA)',
  'Registered with Companies House',
  'HMRC Recognised Agent',
  'Making Tax Digital (MTD) Compliant',
  'ICO Registered (Data Protection)',
  'Professional Indemnity Insured',
]

const milestones = [
  {
    year: '2013',
    title: 'Founded',
    description:
      'Prime Edge was established in Cheltenham with a mission to provide personal, high-quality accounting services to local businesses.',
  },
  {
    year: '2016',
    title: 'ACCA Accreditation',
    description:
      'Achieved full ACCA Chartered Certified Accountant status, cementing our commitment to professional excellence.',
  },
  {
    year: '2019',
    title: 'Cloud Accounting',
    description:
      'Became certified advisors for Xero and QuickBooks, helping clients move to modern cloud-based accounting systems.',
  },
  {
    year: '2022',
    title: 'MTD Ready',
    description:
      'Led our entire client base through HMRC\'s Making Tax Digital transition — ahead of the industry average.',
  },
  {
    year: '2024',
    title: '200+ Clients',
    description:
      'Reached a milestone of over 200 active clients across Gloucestershire and beyond, with a 98% retention rate.',
  },
]

const whyUs = [
  {
    icon: Users,
    title: 'A Real Relationship',
    description:
      'You will always speak to a qualified accountant who knows your file — not a junior, not a call centre.',
  },
  {
    icon: Clock,
    title: 'Always Accessible',
    description:
      'We respond quickly, communicate clearly, and are always available when you need advice or reassurance.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Minded',
    description:
      'We think commercially, not just compliantly. Our advice is always focused on helping you grow and prosper.',
  },
  {
    icon: Award,
    title: 'Highly Qualified',
    description:
      'Our team holds the highest professional qualifications in the industry — so you can trust the advice you receive.',
  },
]

/* ── Page ── */
export default function AboutPage() {
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
                Our Story
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-5"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              About Prime Edge
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              We are a Cheltenham-based firm of Chartered Certified Accountants
              dedicated to helping individuals and businesses across
              Gloucestershire and the UK manage their finances with confidence.
            </p>
          </div>

          {/* Hero image */}
          <div className="hidden lg:flex items-center justify-center absolute right-8 top-1/2 -translate-y-1/2 xl:right-16">
            <div
              className="relative w-80 h-80 xl:w-96 xl:h-96"
              style={{
                borderRadius: '50% 50% 40% 60% / 60% 40% 60% 40%',
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
                src="/About.avif"
                alt="About Prime Edge Accountants"
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
                  <CheckCircle size={14} style={{ color: '#6f068d' }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    ACCA Regulated
                  </p>
                  <p className="text-xs text-gray-400">Fully Certified</p>
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
                  <Award size={14} style={{ color: '#6f068d' }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">10+ Years</p>
                  <p className="text-xs text-gray-400">Trusted Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          OUR STORY
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="section-label">Who We Are</span>
              <div className="purple-rule" />
              <h2
                className="text-3xl sm:text-4xl font-black text-gray-900 mb-6"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                Built on Trust. Driven by Results.
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Prime Edge Chartered Certified Accountants was founded with a
                  clear purpose — to provide businesses and individuals with the
                  kind of personal, expert financial support that was previously
                  only available to large corporations.
                </p>
                <p>
                  Based in Cheltenham, we serve clients across Gloucestershire
                  and throughout the UK. From sole traders just starting out to
                  established limited companies, we tailor our services to meet
                  your specific needs and goals.
                </p>
                <p>
                  What sets us apart is our commitment to being proactive. We do
                  not just process numbers — we understand your business,
                  anticipate challenges, and deliver advice that makes a real
                  difference to your bottom line.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle
                      size={15}
                      className="flex-shrink-0"
                      style={{ color: '#6f068d' }}
                    />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="relative">
              <div
                className="rounded-2xl p-10 text-white relative overflow-hidden"
                style={{
                  background:
                    'linear-gradient(135deg, #6f068d 0%, #520568 100%)',
                }}
              >
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"
                  style={{ background: '#748ec4' }}
                />
                <div className="relative z-10">
                  <p
                    className="font-bold text-xl text-white mb-8"
                    style={{ fontFamily: 'Merriweather, serif' }}
                  >
                    Prime Edge by the Numbers
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {[
                      { value: '200+', label: 'Active Clients' },
                      { value: '10+', label: 'Years Experience' },
                      { value: '98%', label: 'Client Retention' },
                      { value: '6', label: 'Core Services' },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div
                          className="text-3xl font-black text-white mb-1"
                          style={{ fontFamily: 'Merriweather, serif' }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-white/60 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-white text-sm">
                    Work With Us
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          OUR VALUES
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: '#f8f7ff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">What Drives Us</span>
            <div className="purple-rule mx-auto" />
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-4"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Our Values
            </h2>
            <p className="text-gray-500 leading-relaxed">
              These are the principles that guide every client relationship,
              every piece of advice, and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="service-card bg-white rounded-xl p-7"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: '#f0eef8' }}
                  >
                    <Icon size={22} style={{ color: '#6f068d' }} />
                  </div>
                  <h3
                    className="font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Merriweather, serif' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TIMELINE / MILESTONES
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">Our Journey</span>
            <div className="purple-rule mx-auto" />
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-4"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              A Decade of Growth
            </h2>
            <p className="text-gray-500 leading-relaxed">
              From our founding in Cheltenham to serving clients across the UK —
              here are some of the milestones along the way.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px hidden sm:block"
              style={{
                background:
                  'linear-gradient(180deg, #6f068d, #748ec4, #6f068d)',
              }}
            />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6 items-start">
                  {/* Year bubble */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-xs flex-shrink-0 relative z-10 shadow-md"
                    style={{
                      background: index % 2 === 0 ? '#6f068d' : '#748ec4',
                      fontFamily: 'Merriweather, serif',
                    }}
                  >
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 rounded-xl p-6 mb-2"
                    style={{
                      background: '#f8f7ff',
                      border: '1px solid rgba(111,6,141,0.08)',
                    }}
                  >
                    <h3
                      className="font-bold text-gray-900 mb-1"
                      style={{ fontFamily: 'Merriweather, serif' }}
                    >
                      {milestone.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          WHY WORK WITH US
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: '#f8f7ff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">Why Choose Us</span>
            <div className="purple-rule mx-auto" />
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-4"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              The Prime Edge Difference
            </h2>
            <p className="text-gray-500 leading-relaxed">
              There are many accountants to choose from. Here is why our clients
              stay with us year after year.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-7 text-center service-card"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: '#f0eef8' }}
                  >
                    <Icon size={24} style={{ color: '#6f068d' }} />
                  </div>
                  <h3
                    className="font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Merriweather, serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
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
            Ready to Work With Us?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free, no-obligation discovery call and let us show you what
            Prime Edge can do for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="btn-white text-base px-8 py-4">
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