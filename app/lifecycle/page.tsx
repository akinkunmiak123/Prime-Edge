import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Lightbulb,
  Rocket,
  TrendingUp,
  Building2,
  RefreshCw,
  LogOut,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Lifecycle',
  description:
    'Prime Edge supports your business at every stage from start-up and growth through to exit and succession. Discover how we can help at each phase.',
}

/* ── Data ── */
const stages = [
  {
    id: 'startup',
    phase: 'Stage 01',
    icon: Lightbulb,
    title: 'Start-Up',
    image: '/lifestyle/Start-Up.avif',
    subtitle: 'Laying the right foundations',
    description:
      'Starting a business is exciting but getting the financial and legal foundations right from day one is critical. We help new businesses launch with confidence, structure, and a clear financial plan.',
    services: [
      'Business structure advice (sole trader vs limited company)',
      'Company formation and registration',
      'Initial bookkeeping and accounting system setup',
      'HMRC registration (Self Assessment, PAYE, VAT)',
      'Business plan and financial projections',
      'Opening balance sheet preparation',
    ],
    outcome:
      'You launch with the right structure, the right registrations, and a clear picture of your finances from day one.',
    color: '#000000',
    bg: '#dff2f7',
  },
  {
    id: 'growth',
    phase: 'Stage 02',
    icon: Rocket,
    title: 'Growth',
    image: '/lifestyle/Growth.avif',
    subtitle: 'Scaling with control',
    description:
      'As your business grows, so does its complexity. Managing cash flow, hiring staff, and staying on top of tax obligations becomes increasingly demanding. We keep your finances in order as you scale.',
    services: [
      'Management accounts and cash flow forecasting',
      'Payroll setup and ongoing management',
      'VAT registration and quarterly returns',
      'Director salary and dividend planning',
      'R&D tax relief claims',
      'Growth finance and funding support',
    ],
    outcome:
      'You scale with financial clarity knowing your numbers, controlling your cash, and optimising your tax position.',
    color: '#000000',
    bg: '#f5f9fa',
  },
  {
    id: 'established',
    phase: 'Stage 03',
    icon: TrendingUp,
    title: 'Established',
    image: '/lifestyle/Established.avif',
    subtitle: 'Maximising performance',
    description:
      'Once established, the focus shifts to maximising profitability, retaining top talent, and building long-term value. We provide the financial intelligence you need to make smart strategic decisions.',
    services: [
      'Annual accounts and corporation tax',
      'Strategic tax planning and mitigation',
      'Profit extraction strategies',
      'Employee benefits and share schemes',
      'Budget setting and variance analysis',
      'KPI reporting and benchmarking',
    ],
    outcome:
      'Your business operates at peak efficiency with a tax strategy that protects profit and a financial framework that drives decisions.',
    color: '#000000',
    bg: '#dff2f7',
  },
  {
    id: 'restructure',
    phase: 'Stage 04',
    icon: RefreshCw,
    title: 'Restructure',
    image: '/lifestyle/Restructure.avif',
    subtitle: 'Adapting for the future',
    description:
      'Businesses evolve. Whether you are bringing in new partners, reorganising your group structure, or pivoting your model, we provide the financial and structural advice to make transitions smooth and tax-efficient.',
    services: [
      'Group restructuring and holding company setup',
      'Share restructuring and shareholder agreements',
      'Business acquisition support and due diligence',
      'TUPE and employment transfer advice',
      'Tax-efficient restructuring strategies',
      'Joint venture and partnership structuring',
    ],
    outcome:
      'Your restructure is handled efficiently, with minimal tax leakage and a structure built to support your next chapter.',
    color: '#000000',
    bg: '#f5f9fa',
  },
  {
    id: 'expansion',
    phase: 'Stage 05',
    icon: Building2,
    title: 'Expansion',
    image: '/lifestyle/Expansion.avif',
    subtitle: 'Growing beyond borders',
    description:
      'Whether you are opening new locations, entering new markets, or expanding internationally, we provide the financial planning and compliance support to ensure your expansion is strategic and sustainable.',
    services: [
      'Multi-entity group accounting',
      'International tax and VAT advice',
      'Transfer pricing guidance',
      'New entity formation in UK and overseas',
      'Consolidated group accounts',
      'Cross-border employee tax planning',
    ],
    outcome:
      'Your expansion is financially sound with the right structures, the right compliance, and a clear view of group-wide performance.',
    color: '#000000',
    bg: '#dff2f7',
  },
  {
    id: 'exit',
    phase: 'Stage 06',
    icon: LogOut,
    title: 'Exit & Succession',
    image: '/lifestyle/Succession.avif',
    subtitle: 'Realising your value',
    description:
      'When the time comes to exit your business whether through a sale, management buyout, or succession we help you maximise the value you receive and minimise the tax you pay on exit.',
    services: [
      'Business valuation and exit planning',
      'Capital gains tax planning and Business Asset Disposal Relief',
      'Management buyout (MBO) support',
      'Business sale preparation and due diligence',
      'Succession and estate planning',
      'Post-exit personal tax planning',
    ],
    outcome:
      'You exit on your terms with maximum value realised, tax minimised, and a smooth transition for all stakeholders.',
    color: '#000000',
    bg: '#f5f9fa',
  },
]

/* ── Page ── */
export default function LifecyclePage() {
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
                Supporting You at Every Stage
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black text-white mb-5"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              Business Lifecycle
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Whether you are just starting out or planning your exit, Prime
              Edge provides the right financial support at every stage of your
              business journey. We grow with you.
            </p>
          </div>

          {/* Hero image */}
          <div className="hidden lg:flex items-center justify-center absolute right-8 top-1/2 -translate-y-1/2 xl:right-16">
            <div
              className="relative w-80 h-80 xl:w-96 xl:h-96"
              style={{
                borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%',
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
                src="/lifestyle/Business-Lifecycle.avif"
                alt="Business lifecycle support"
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
                    6 Business Stages
                  </p>
                  <p className="text-xs text-gray-400">Full Journey Support</p>
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
                  <Rocket size={14} style={{ color: '#2D6198' }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Start to Exit
                  </p>
                  <p className="text-xs text-gray-400">We Grow With You</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          LIFECYCLE OVERVIEW STRIP
      ════════════════════════════════ */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-0">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <a
                  key={stage.id}
                  href={`#${stage.id}`}
                  className="flex flex-col items-center gap-2 px-6 py-4 group transition-all hover:bg-gray-50 rounded-xl flex-1 min-w-[100px]"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ background: '#eaf3f4' }}
                  >
                    <Icon size={18} style={{ color: stage.color }} />
                  </div>
                  <span className="text-xs font-semibold text-gray-600 text-center group-hover:text-primary transition-colors">
                    {stage.title}
                  </span>
                  <span className="text-xs text-gray-400 text-center hidden sm:block">
                    {stage.phase}
                  </span>
                  {/* Arrow connector — not on last item */}
                  {index < stages.length - 1 && (
                    <ChevronRight
                      size={14}
                      className="absolute right-0 text-gray-300 hidden lg:block"
                    />
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          STAGE SECTIONS
      ════════════════════════════════ */}
      <div>
        {stages.map((stage, index) => {
          const Icon = stage.icon
          const isEven = index % 2 === 0

          return (
            <section
              key={stage.id}
              id={stage.id}
              className="py-16 lg:py-24 border-b border-gray-100 scroll-mt-24"
              style={{ background: stage.bg }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid lg:grid-cols-2 gap-14 items-start ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Text column */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    {/* Phase label */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                        style={{
                          background: `${stage.color}15`,
                          color: stage.color,
                        }}
                      >
                        {stage.phase}
                      </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${stage.color}15` }}
                      >
                        <Icon size={22} style={{ color: stage.color }} />
                      </div>
                      <div>
                        <h2
                          className="text-3xl sm:text-4xl font-black text-gray-900"
                          style={{ fontFamily: 'Merriweather, serif' }}
                        >
                          {stage.title}
                        </h2>
                      </div>
                    </div>

                    <p
                      className="text-sm font-semibold mb-4"
                      style={{ color: stage.color }}
                    >
                      {stage.subtitle}
                    </p>

                    <p className="text-gray-500 leading-relaxed mb-7">
                      {stage.description}
                    </p>

                    {/* Services list */}
                    <h4 className="font-bold text-gray-900 text-sm mb-4">
                      What we do at this stage:
                    </h4>
                    <ul className="space-y-2.5 mb-7">
                      {stage.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <CheckCircle
                            size={15}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: stage.color }}
                          />
                          {service}
                        </li>
                      ))}
                    </ul>

                    {/* Outcome box */}
                    <div
                      className="rounded-lg p-4 mb-7"
                      style={{
                        background: `${stage.color}08`,
                        border: `1px solid ${stage.color}20`,
                      }}
                    >
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <span
                          className="font-bold"
                          style={{ color: stage.color }}
                        >
                          The outcome:{' '}
                        </span>
                        {stage.outcome}
                      </p>
                    </div>

                    <Link href="/contact" className="btn-primary">
                      Get Support at This Stage
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Visual column */}
                  <div
                    className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
                  >
                    <div
                      className="rounded-2xl flex flex-col items-center justify-center text-center min-h-80 relative overflow-hidden sticky top-28"
                      style={{
                        border: `1px solid ${stage.color}20`,
                        minHeight: '360px',
                      }}
                    >
                      {stage.image ? (
                        <>
                          {/* Background image */}
                          <img
                            src={stage.image}
                            alt={stage.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{
                              /* Increase brightness to make the image clearer.
       Change 1.15 to:
       1.0  = original
       1.1  = slightly brighter
       1.2  = brighter
       1.3+ = very bright
    */
                              filter: 'brightness(1.15)',
                            }}
                          />
                          {/* 
  IMAGE OVERLAY
  Increase/decrease these opacity values to control how visible
  the background image is.

  Current:
  20 = very light overlay (image is much clearer)
  10 = even lighter at the bottom

  If you want the image darker later:
  33, 44, 55, 66...
*/}
                          <div
                            className="absolute inset-0"
                            style={{
                              background: `linear-gradient(
      135deg,
      ${stage.color}99 0%,
      ${stage.color}99 100%
    )`,
                            }}
                          />
                          {/* Content over image */}
                          <div className="relative z-10 p-10 flex flex-col items-center w-full">
                            {/* Phase pill */}
                            <span
                              className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
                              style={{
                                background: 'rgba(255,255,255,0.2)',
                                color: 'white',
                              }}
                            >
                              {stage.phase}
                            </span>

                            {/* Icon */}
                            <div
                              className="w-24 h-24 rounded-2xl flex items-center justify-center mb-5"
                              style={{ background: 'rgba(255,255,255,0.2)' }}
                            >
                              <Icon size={42} className="text-white" />
                            </div>

                            <h3
                              className="font-black text-2xl text-white mb-2"
                              style={{ fontFamily: 'Merriweather, serif' }}
                            >
                              {stage.title}
                            </h3>
                            <p className="text-sm font-medium text-white/80 mb-6">
                              {stage.subtitle}
                            </p>

                            {/* Service count badge */}
                            <div
                              className="px-4 py-2 rounded-full text-xs font-bold"
                              style={{
                                background: 'rgba(255,255,255,0.25)',
                                color: 'white',
                              }}
                            >
                              {stage.services.length} services at this stage
                            </div>
                          </div>
                        </>
                      ) : (
                        /* No image — gradient fallback */
                        <div
                          className="w-full h-full p-10 flex flex-col items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${stage.color}18 0%, ${stage.color}08 100%)`,
                          }}
                        >
                          {/* Large bg icon */}
                          <Icon
                            size={140}
                            className="opacity-5 absolute"
                            style={{ color: stage.color }}
                          />

                          {/* Phase pill */}
                          <span
                            className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 relative z-10"
                            style={{
                              background: `${stage.color}20`,
                              color: stage.color,
                            }}
                          >
                            {stage.phase}
                          </span>

                          {/* Foreground icon */}
                          <div
                            className="w-24 h-24 rounded-2xl flex items-center justify-center mb-5 relative z-10"
                            style={{ background: `${stage.color}15` }}
                          >
                            <Icon size={42} style={{ color: stage.color }} />
                          </div>

                          <h3
                            className="font-black text-2xl text-gray-900 mb-2 relative z-10"
                            style={{ fontFamily: 'Merriweather, serif' }}
                          >
                            {stage.title}
                          </h3>
                          <p
                            className="text-sm font-medium relative z-10 mb-6"
                            style={{ color: stage.color }}
                          >
                            {stage.subtitle}
                          </p>

                          {/* Service count badge */}
                          <div
                            className="px-4 py-2 rounded-full text-xs font-bold relative z-10"
                            style={{
                              background: stage.color,
                              color: 'white',
                            }}
                          >
                            {stage.services.length} services at this stage
                          </div>
                        </div>
                      )}
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
            Where Are You in Your Journey?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            No matter what stage your business is at, Prime Edge has the
            expertise and experience to support you. Let us start the
            conversation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="btn-white text-base px-8 py-4">
              <Calendar size={18} />
              Book A Discovery Call
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