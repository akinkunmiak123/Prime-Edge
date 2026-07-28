import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  FileText,
  Users,
  TrendingUp,
  Receipt,
  Briefcase,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  Shield,
  Award,
  Clock,
  ChevronRight,
} from 'lucide-react'
import { getAllPosts, formatDate } from '@/lib/posts'
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget'

/* ── Data ── */
const services = [
  {
    id: 'bookkeeping',
    icon: BookOpen,
    title: 'Bookkeeping',
    description:
      'Accurate, up-to-date records that give you a clear picture of your finances so you can make confident business decisions.',
    href: '/services#bookkeeping',
  },
  {
    id: 'accounts',
    icon: FileText,
    title: 'Account Preparation & Filing',
    description:
      'We prepare and file your statutory accounts with Companies House and HMRC accurately and on time every time.',
    href: '/services#accounts',
  },
  {
    id: 'payroll',
    icon: Users,
    title: 'Payroll Services',
    description:
      'Fully managed payroll that ensures your team is paid correctly and on time, with all PAYE obligations handled for you.',
    href: '/services#payroll',
  },
  {
    id: 'tax',
    icon: TrendingUp,
    title: 'Tax Planning & Filing',
    description:
      'Proactive tax planning that legally minimises your liability while keeping you fully compliant with HMRC regulations.',
    href: '/services#tax',
  },
  {
    id: 'vat',
    icon: Receipt,
    title: 'VAT Registration & Filing',
    description:
      'From registration to quarterly returns, we manage your entire VAT position so you stay compliant and penalty-free.',
    href: '/services#vat',
  },
  {
    id: 'advisory',
    icon: Briefcase,
    title: 'Business Advisory',
    description:
      'Strategic guidance tailored to your goals whether you are starting up, scaling, or planning your next move.',
    href: '/services#advisory',
  },
]

const stats = [
  { value: '200+', label: 'Clients Served' },
  { value: '16+', label: 'Years Experience' },
  { value: '6', label: 'Core Services' },
  { value: '98%', label: 'Client Retention' },
]

const reasons = [
  {
    icon: Shield,
    title: 'Fully Qualified & Regulated',
    description:
      'We are Chartered Certified Accountants regulated by ACCA, giving you peace of mind that your finances are in expert hands.',
  },
  {
    icon: Users,
    title: 'Dedicated Personal Service',
    description:
      'You get a dedicated accountant who knows your business, not a call centre. We are always available when you need us.',
  },
  {
    icon: TrendingUp,
    title: 'Proactive, Not Reactive',
    description:
      'We do not just file numbers we look ahead, identify opportunities, and alert you to issues before they become problems.',
  },
  {
    icon: Award,
    title: 'Fixed Transparent Fees',
    description:
      'No surprise bills. Our clear monthly pricing means you always know exactly what you are paying and what you are getting.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Book a Discovery Call',
    description:
      'Tell us about your business, your challenges, and your goals. No obligation just an honest conversation.',
  },
  {
    number: '02',
    title: 'We Build Your Tailored Plan',
    description:
      'We assess your needs and put together a clear, fixed-fee proposal covering exactly the services you need.',
  },
  {
    number: '03',
    title: 'We Handle Everything',
    description:
      'Once onboarded, we take care of your accounts, tax, and compliance so you can focus on running your business.',
  },
]

/* Fallback testimonials — only shown if GOOGLE_PLACES_API_KEY /
   GOOGLE_PLACE_ID are not yet set, or the live fetch fails. */
const fallbackTestimonials = [
  {
    name: 'Sarah M.',
    role: 'Director, Retail Business',
    content:
      'Prime Edge completely transformed how I manage my business finances. Their proactive approach saved me thousands in tax last year alone.',
    rating: 5,
  },
  {
    name: 'James T.',
    role: 'Freelance Consultant',
    content:
      'Finally an accountant who speaks plain English! They explained everything clearly and made my self-assessment completely stress-free.',
    rating: 5,
  },
  {
    name: 'Priya K.',
    role: 'Owner, Healthcare Practice',
    content:
      'I have used three accountants over the years. Prime Edge are by far the most thorough and responsive. Highly recommended.',
    rating: 5,
  },
]

/* ── Page ── */
export default async function HomePage() {
  const blogPosts = (await getAllPosts()).slice(0, 3)

  return (
    <>
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-20 lg:py-32"
        style={{
          background:
            'linear-gradient(135deg, #2D6198 0%, #1E4A73 50%, #0d0d0d 100%)',
        }}
      >
        {/* Decorative background circles */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"
          style={{ background: '#59A2AF' }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 -translate-x-1/2 translate-y-1/2"
          style={{ background: '#2D6198' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8" style={{ background: '#59A2AF' }} />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                TAX • ACCOUNTING • PAYROLL • BUSINESS ADVISORY
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Accounting That Works{' '}
              <span style={{ color: '#59A2AF' }}>As Hard</span> As You Do
            </h1>

            {/* Subheadline */}
            <p className="text-white/75 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl">
              Expert tax, bookkeeping, payroll and business advisory services
              for individuals and businesses across Gloucestershire. We handle
              the numbers you focus on growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/book" className="btn-white text-base px-7 py-4">
                Book Discovery Call
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="btn-outline text-base px-7 py-4"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
              >
                Get a Quote
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: CheckCircle, text: 'ACCA Regulated' },
                { icon: Shield, text: 'Fixed Monthly Fees' },
                { icon: Clock, text: 'Free Initial Consultation' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  <Icon size={15} style={{ color: '#59A2AF' }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:flex items-center justify-center absolute right-8 top-1/2 -translate-y-1/2 xl:right-16">
            <div
              className="relative w-80 h-80 xl:w-96 xl:h-96"
              style={{
                borderRadius: '40% 60% 55% 45% / 45% 40% 60% 55%',
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
                src="/accounting.avif"
                alt="Professional accounting services"
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
                  style={{ background: '#eaf3f4' }}
                >
                  <Star size={14} fill="#2D6198" style={{ color: '#2D6198' }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    200+ Clients
                  </p>
                  <p className="text-xs text-gray-400">98% Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          STATS BAR
      ════════════════════════════════ */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-black mb-1"
                  style={{
                    fontFamily: 'Merriweather, serif',
                    color: '#2D6198',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SERVICES
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: '#f5f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">What We Do</span>
            <div className="purple-rule mx-auto" />
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-4"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Services Built Around Your Business
            </h2>
            <p className="text-gray-500 leading-relaxed">
              From day-to-day bookkeeping to strategic tax planning we offer a
              full suite of accounting services tailored to your needs.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="service-card bg-white rounded-xl p-7 flex flex-col gap-4 group"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary"
                    style={{ background: '#eaf3f4' }}
                  >
                    <Icon
                      size={22}
                      style={{ color: '#2D6198' }}
                      className="group-hover:text-white transition-colors"
                    />
                  </div>
                  {/* Text */}
                  <div>
                    <h3
                      className="font-bold text-lg text-gray-900 mb-2"
                      style={{ fontFamily: 'Merriweather, serif' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {/* Arrow */}
                  <div
                    className="flex items-center gap-1 text-sm font-semibold mt-auto"
                    style={{ color: '#2D6198' }}
                  >
                    Learn more
                    <ChevronRight size={15} />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* View all link */}
          <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-outline">
              View All Services
              <ArrowRight size={16} />
            </Link>
            <Link href="/book" className="btn-primary">
              Book Discovery Call
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <span className="section-label">Why Prime Edge</span>
              <div className="purple-rule" />
              <h2
                className="text-3xl sm:text-4xl font-black text-gray-900 mb-5"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                More Than Just an Accountant
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                We believe accounting should be proactive, personal, and
                transparent. We partner with our clients for the long term
                helping them pay less tax, stay compliant, and grow with
                confidence.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {reasons.map((reason) => {
                  const Icon = reason.icon
                  return (
                    <div key={reason.title} className="flex flex-col gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: '#eaf3f4' }}
                      >
                        <Icon size={18} style={{ color: '#2D6198' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">
                          {reason.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right — decorative card */}
            <div className="relative hidden lg:block">
              <div
                className="rounded-2xl p-10 text-white relative overflow-hidden"
                style={{
                  background:
                    'linear-gradient(135deg, #2D6198 0%, #1E4A73 100%)',
                }}
              >
                {/* Decorative circle */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"
                  style={{ background: '#59A2AF' }}
                />
                <div className="relative z-10">
                  <div
                    className="text-5xl font-black mb-2"
                    style={{ fontFamily: 'Merriweather, serif' }}
                  >
                    16+
                  </div>
                  <div className="text-white/80 text-lg mb-8">
                    Years Helping UK Businesses Thrive
                  </div>

                  <div className="space-y-4">
                    {[
                      'Regulated by ACCA',
                      'Free initial consultation',
                      'No long-term contracts',
                      'Dedicated account manager',
                      'Cloud accounting ready',
                    ].map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-white/85 text-sm"
                      >
                        <CheckCircle
                          size={16}
                          style={{ color: '#59A2AF', flexShrink: 0 }}
                        />
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className="btn-white text-sm px-6 py-3"
                    >
                      Start Your Consultation
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: '#f5f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">Getting Started</span>
            <div className="purple-rule mx-auto" />
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-4"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Simple to Switch. Easy to Stay.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Getting started with Prime Edge is straightforward. Here is how it
              works from your very first contact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line — desktop only */}
            <div
              className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px"
              style={{
                background: 'linear-gradient(90deg, #2D6198, #59A2AF, #2D6198)',
              }}
            />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative bg-white rounded-xl p-8 text-center shadow-sm"
                style={{ border: '1px solid rgba(45,97,152,0.08)' }}
              >
                {/* Step number */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-white font-black text-lg relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #2D6198, #1E4A73)',
                    fontFamily: 'Merriweather, serif',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="font-bold text-gray-900 text-lg mb-3"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/book" className="btn-primary">
              Book Your Call Today
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TESTIMONIALS / LIVE GOOGLE REVIEWS
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">Client Stories</span>
            <div className="purple-rule mx-auto" />
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-4"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Trusted by Businesses Across the UK
            </h2>
          </div>

          {/* Live Google Reviews widget — renders nothing until
              NEXT_PUBLIC_ELFSIGHT_WIDGET_ID is set, so the fallback
              cards below are what visitors see in the meantime */}
          <div className="mb-14">
            <GoogleReviewsWidget />
          </div>

 

          {/* CTA nudge after social proof */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-4">
              Ready to experience the same results?
            </p>
            <Link href="/book" className="btn-primary">
              Book Your Discovery Call
              <ArrowRight size={16} />
            </Link>
            <p className="text-gray-400 text-xs mt-3">
              Not ready to book?{' '}
              <Link
                href="/contact"
                style={{ color: '#2D6198' }}
                className="font-semibold underline underline-offset-2"
              >
                Send us a quick message instead
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          BLOG PREVIEW
      ════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: '#f5f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="section-label">Latest Insights</span>
              <div className="purple-rule" />
              <h2
                className="text-3xl sm:text-4xl font-black text-gray-900"
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                From Our Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold flex items-center gap-1 flex-shrink-0"
              style={{ color: '#2D6198' }}
            >
              View All Posts <ChevronRight size={15} />
            </Link>
          </div>

          {blogPosts.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-400 text-sm">
                No posts yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card bg-white rounded-xl overflow-hidden"
                  style={{ border: '1px solid rgba(45,97,152,0.08)' }}
                >
                  {/* Image or placeholder */}
                  {post.image ? (
                    <div className="h-44 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="h-44 flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #eaf3f4, #d9edf0)',
                      }}
                    >
                      <BookOpen
                        size={32}
                        style={{ color: '#2D6198', opacity: 0.3 }}
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Category + date */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: '#eaf3f4', color: '#2D6198' }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {formatDate(post.date)}
                      </span>
                    </div>

                    <h3
                      className="font-bold text-gray-900 text-base mb-2 leading-snug"
                      style={{ fontFamily: 'Merriweather, serif' }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div
                      className="flex items-center gap-1 text-sm font-semibold mt-4"
                      style={{ color: '#2D6198' }}
                    >
                      Read more <ChevronRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ════════════════════════════════
          FINAL CTA
      ════════════════════════════════ */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #2D6198 0%, #1E4A73 50%, #0d0d0d 100%)',
        }}
      >
        {/* Decorative circle */}
        <div
          className="absolute right-0 top-0 w-80 h-80 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"
          style={{ background: '#59A2AF' }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="section-label !text-white/60">Get In Touch</span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-5"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            Let&apos;s Talk About Your Business
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free, no-obligation discovery call, or simply drop us a
            message we will get back to you promptly. You can also call us on{' '}
            <a href="tel:01244565227" className="text-white font-semibold">
              01244 565 227
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="btn-white text-base px-8 py-4">
              <Calendar size={18} />
              Book Discovery Call
            </Link>
            <Link
              href="/contact"
              className="btn-outline text-base px-8 py-4"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
            >
              <Phone size={18} />
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}